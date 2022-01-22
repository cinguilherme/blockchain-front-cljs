["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/timer/timer.js"],"~:js","goog.provide(\"goog.Timer\");\ngoog.require(\"goog.Promise\");\ngoog.require(\"goog.events.EventTarget\");\ngoog.requireType(\"goog.Thenable\");\ngoog.Timer = function(opt_interval, opt_timerObject) {\n  goog.events.EventTarget.call(this);\n  this.interval_ = opt_interval || 1;\n  this.timerObject_ = opt_timerObject || goog.Timer.defaultTimerObject;\n  this.boundTick_ = goog.bind(this.tick_, this);\n  this.last_ = goog.now();\n};\ngoog.inherits(goog.Timer, goog.events.EventTarget);\ngoog.Timer.MAX_TIMEOUT_ = 2147483647;\ngoog.Timer.INVALID_TIMEOUT_ID_ = -1;\ngoog.Timer.prototype.enabled = false;\ngoog.Timer.defaultTimerObject = goog.global;\ngoog.Timer.intervalScale = 0.8;\ngoog.Timer.prototype.timer_ = null;\ngoog.Timer.prototype.getInterval = function() {\n  return this.interval_;\n};\ngoog.Timer.prototype.setInterval = function(interval) {\n  this.interval_ = interval;\n  if (this.timer_ && this.enabled) {\n    this.stop();\n    this.start();\n  } else {\n    if (this.timer_) {\n      this.stop();\n    }\n  }\n};\ngoog.Timer.prototype.tick_ = function() {\n  if (this.enabled) {\n    var elapsed = goog.now() - this.last_;\n    if (elapsed > 0 && elapsed < this.interval_ * goog.Timer.intervalScale) {\n      this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - elapsed);\n      return;\n    }\n    if (this.timer_) {\n      this.timerObject_.clearTimeout(this.timer_);\n      this.timer_ = null;\n    }\n    this.dispatchTick();\n    if (this.enabled) {\n      this.stop();\n      this.start();\n    }\n  }\n};\ngoog.Timer.prototype.dispatchTick = function() {\n  this.dispatchEvent(goog.Timer.TICK);\n};\ngoog.Timer.prototype.start = function() {\n  this.enabled = true;\n  if (!this.timer_) {\n    this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_);\n    this.last_ = goog.now();\n  }\n};\ngoog.Timer.prototype.stop = function() {\n  this.enabled = false;\n  if (this.timer_) {\n    this.timerObject_.clearTimeout(this.timer_);\n    this.timer_ = null;\n  }\n};\ngoog.Timer.prototype.disposeInternal = function() {\n  goog.Timer.superClass_.disposeInternal.call(this);\n  this.stop();\n  delete this.timerObject_;\n};\ngoog.Timer.TICK = \"tick\";\ngoog.Timer.callOnce = function(listener, opt_delay, opt_handler) {\n  if (typeof listener === \"function\") {\n    if (opt_handler) {\n      listener = goog.bind(listener, opt_handler);\n    }\n  } else {\n    if (listener && typeof listener.handleEvent == \"function\") {\n      listener = goog.bind(listener.handleEvent, listener);\n    } else {\n      throw new Error(\"Invalid listener argument\");\n    }\n  }\n  if (Number(opt_delay) > goog.Timer.MAX_TIMEOUT_) {\n    return goog.Timer.INVALID_TIMEOUT_ID_;\n  } else {\n    return goog.Timer.defaultTimerObject.setTimeout(listener, opt_delay || 0);\n  }\n};\ngoog.Timer.clear = function(timerId) {\n  goog.Timer.defaultTimerObject.clearTimeout(timerId);\n};\ngoog.Timer.promise = function(delay, opt_result) {\n  var timerKey = null;\n  return (new goog.Promise(function(resolve, reject) {\n    timerKey = goog.Timer.callOnce(function() {\n      resolve(opt_result);\n    }, delay);\n    if (timerKey == goog.Timer.INVALID_TIMEOUT_ID_) {\n      reject(new Error(\"Failed to schedule timer.\"));\n    }\n  })).thenCatch(function(error) {\n    goog.Timer.clear(timerKey);\n    throw error;\n  });\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview A timer class to which other classes and objects can listen on.\n * This is only an abstraction above `setInterval`.\n *\n * @see ../demos/timers.html\n */\n\ngoog.provide('goog.Timer');\n\ngoog.require('goog.Promise');\ngoog.require('goog.events.EventTarget');\ngoog.requireType('goog.Thenable');\n\n\n\n/**\n * Class for handling timing events.\n *\n * @param {number=} opt_interval Number of ms between ticks (default: 1ms).\n * @param {Object=} opt_timerObject  An object that has `setTimeout`,\n *     `setInterval`, `clearTimeout` and `clearInterval`\n *     (e.g., `window`).\n * @constructor\n * @extends {goog.events.EventTarget}\n */\ngoog.Timer = function(opt_interval, opt_timerObject) {\n  'use strict';\n  goog.events.EventTarget.call(this);\n\n  /**\n   * Number of ms between ticks\n   * @private {number}\n   */\n  this.interval_ = opt_interval || 1;\n\n  /**\n   * An object that implements `setTimeout`, `setInterval`,\n   * `clearTimeout` and `clearInterval`. We default to the window\n   * object. Changing this on {@link goog.Timer.prototype} changes the object\n   * for all timer instances which can be useful if your environment has some\n   * other implementation of timers than the `window` object.\n   * @private {{setTimeout:!Function, clearTimeout:!Function}}\n   */\n  this.timerObject_ = /** @type {{setTimeout, clearTimeout}} */ (\n      opt_timerObject || goog.Timer.defaultTimerObject);\n\n  /**\n   * Cached `tick_` bound to the object for later use in the timer.\n   * @private {Function}\n   * @const\n   */\n  this.boundTick_ = goog.bind(this.tick_, this);\n\n  /**\n   * Firefox browser often fires the timer event sooner (sometimes MUCH sooner)\n   * than the requested timeout. So we compare the time to when the event was\n   * last fired, and reschedule if appropriate. See also\n   * {@link goog.Timer.intervalScale}.\n   * @private {number}\n   */\n  this.last_ = goog.now();\n};\ngoog.inherits(goog.Timer, goog.events.EventTarget);\n\n\n/**\n * Maximum timeout value.\n *\n * Timeout values too big to fit into a signed 32-bit integer may cause overflow\n * in FF, Safari, and Chrome, resulting in the timeout being scheduled\n * immediately. It makes more sense simply not to schedule these timeouts, since\n * 24.8 days is beyond a reasonable expectation for the browser to stay open.\n *\n * @private {number}\n * @const\n */\ngoog.Timer.MAX_TIMEOUT_ = 2147483647;\n\n\n/**\n * A timer ID that cannot be returned by any known implementation of\n * `window.setTimeout`. Passing this value to `window.clearTimeout`\n * should therefore be a no-op.\n *\n * @private {number}\n * @const\n */\ngoog.Timer.INVALID_TIMEOUT_ID_ = -1;\n\n\n/**\n * Whether this timer is enabled\n * @type {boolean}\n */\ngoog.Timer.prototype.enabled = false;\n\n\n/**\n * An object that implements `setTimeout`, `setInterval`,\n * `clearTimeout` and `clearInterval`. We default to the global\n * object. Changing `goog.Timer.defaultTimerObject` changes the object for\n * all timer instances which can be useful if your environment has some other\n * implementation of timers you'd like to use.\n * @type {{setTimeout, clearTimeout}}\n */\ngoog.Timer.defaultTimerObject = goog.global;\n\n\n/**\n * Variable that controls the timer error correction. If the timer is called\n * before the requested interval times `intervalScale`, which often\n * happens on Mozilla, the timer is rescheduled.\n * @see {@link #last_}\n * @type {number}\n */\ngoog.Timer.intervalScale = 0.8;\n\n\n/**\n * Variable for storing the result of `setInterval`.\n * @private {?number}\n */\ngoog.Timer.prototype.timer_ = null;\n\n\n/**\n * Gets the interval of the timer.\n * @return {number} interval Number of ms between ticks.\n */\ngoog.Timer.prototype.getInterval = function() {\n  'use strict';\n  return this.interval_;\n};\n\n\n/**\n * Sets the interval of the timer.\n * @param {number} interval Number of ms between ticks.\n */\ngoog.Timer.prototype.setInterval = function(interval) {\n  'use strict';\n  this.interval_ = interval;\n  if (this.timer_ && this.enabled) {\n    // Stop and then start the timer to reset the interval.\n    this.stop();\n    this.start();\n  } else if (this.timer_) {\n    this.stop();\n  }\n};\n\n\n/**\n * Callback for the `setTimeout` used by the timer.\n * @private\n */\ngoog.Timer.prototype.tick_ = function() {\n  'use strict';\n  if (this.enabled) {\n    var elapsed = goog.now() - this.last_;\n    if (elapsed > 0 && elapsed < this.interval_ * goog.Timer.intervalScale) {\n      this.timer_ = this.timerObject_.setTimeout(\n          this.boundTick_, this.interval_ - elapsed);\n      return;\n    }\n\n    // Prevents setInterval from registering a duplicate timeout when called\n    // in the timer event handler.\n    if (this.timer_) {\n      this.timerObject_.clearTimeout(this.timer_);\n      this.timer_ = null;\n    }\n\n    this.dispatchTick();\n    // The timer could be stopped in the timer event handler.\n    if (this.enabled) {\n      // Stop and start to ensure there is always only one timeout even if\n      // start is called in the timer event handler.\n      this.stop();\n      this.start();\n    }\n  }\n};\n\n\n/**\n * Dispatches the TICK event. This is its own method so subclasses can override.\n */\ngoog.Timer.prototype.dispatchTick = function() {\n  'use strict';\n  this.dispatchEvent(goog.Timer.TICK);\n};\n\n\n/**\n * Starts the timer.\n */\ngoog.Timer.prototype.start = function() {\n  'use strict';\n  this.enabled = true;\n\n  // If there is no interval already registered, start it now\n  if (!this.timer_) {\n    // IMPORTANT!\n    // window.setInterval in FireFox has a bug - it fires based on\n    // absolute time, rather than on relative time. What this means\n    // is that if a computer is sleeping/hibernating for 24 hours\n    // and the timer interval was configured to fire every 1000ms,\n    // then after the PC wakes up the timer will fire, in rapid\n    // succession, 3600*24 times.\n    // This bug is described here and is already fixed, but it will\n    // take time to propagate, so for now I am switching this over\n    // to setTimeout logic.\n    //     https://bugzilla.mozilla.org/show_bug.cgi?id=376643\n    //\n    this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_);\n    this.last_ = goog.now();\n  }\n};\n\n\n/**\n * Stops the timer.\n */\ngoog.Timer.prototype.stop = function() {\n  'use strict';\n  this.enabled = false;\n  if (this.timer_) {\n    this.timerObject_.clearTimeout(this.timer_);\n    this.timer_ = null;\n  }\n};\n\n\n/** @override */\ngoog.Timer.prototype.disposeInternal = function() {\n  'use strict';\n  goog.Timer.superClass_.disposeInternal.call(this);\n  this.stop();\n  delete this.timerObject_;\n};\n\n\n/**\n * Constant for the timer's event type.\n * @const\n */\ngoog.Timer.TICK = 'tick';\n\n\n/**\n * Calls the given function once, after the optional pause.\n * <p>\n * The function is always called asynchronously, even if the delay is 0. This\n * is a common trick to schedule a function to run after a batch of browser\n * event processing.\n *\n * @param {function(this:SCOPE)|{handleEvent:function()}|null} listener Function\n *     or object that has a handleEvent method.\n * @param {number=} opt_delay Milliseconds to wait; default is 0.\n * @param {SCOPE=} opt_handler Object in whose scope to call the listener.\n * @return {number} A handle to the timer ID.\n * @template SCOPE\n */\ngoog.Timer.callOnce = function(listener, opt_delay, opt_handler) {\n  'use strict';\n  if (typeof listener === 'function') {\n    if (opt_handler) {\n      listener = goog.bind(listener, opt_handler);\n    }\n  } else if (listener && typeof listener.handleEvent == 'function') {\n    // using typeof to prevent strict js warning\n    listener = goog.bind(listener.handleEvent, listener);\n  } else {\n    throw new Error('Invalid listener argument');\n  }\n\n  if (Number(opt_delay) > goog.Timer.MAX_TIMEOUT_) {\n    // Timeouts greater than MAX_INT return immediately due to integer\n    // overflow in many browsers.  Since MAX_INT is 24.8 days, just don't\n    // schedule anything at all.\n    return goog.Timer.INVALID_TIMEOUT_ID_;\n  } else {\n    return goog.Timer.defaultTimerObject.setTimeout(listener, opt_delay || 0);\n  }\n};\n\n\n/**\n * Clears a timeout initiated by {@link #callOnce}.\n * @param {?number} timerId A timer ID.\n */\ngoog.Timer.clear = function(timerId) {\n  'use strict';\n  goog.Timer.defaultTimerObject.clearTimeout(timerId);\n};\n\n\n/**\n * @param {number} delay Milliseconds to wait.\n * @param {(RESULT|goog.Thenable<RESULT>|Thenable)=} opt_result The value\n *     with which the promise will be resolved.\n * @return {!goog.Promise<RESULT>} A promise that will be resolved after\n *     the specified delay, unless it is canceled first.\n * @template RESULT\n */\ngoog.Timer.promise = function(delay, opt_result) {\n  'use strict';\n  var timerKey = null;\n  return new goog\n      .Promise(function(resolve, reject) {\n        'use strict';\n        timerKey = goog.Timer.callOnce(function() {\n          'use strict';\n          resolve(opt_result);\n        }, delay);\n        if (timerKey == goog.Timer.INVALID_TIMEOUT_ID_) {\n          reject(new Error('Failed to schedule timer.'));\n        }\n      })\n      .thenCatch(function(error) {\n        'use strict';\n        // Clear the timer. The most likely reason is \"cancel\" signal.\n        goog.Timer.clear(timerKey);\n        throw error;\n      });\n};\n","~:compiled-at",1642814523891,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.timer.timer.js\",\n\"lineCount\":109,\n\"mappings\":\"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\",\n\"sources\":[\"goog/timer/timer.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview A timer class to which other classes and objects can listen on.\\n * This is only an abstraction above `setInterval`.\\n *\\n * @see ../demos/timers.html\\n */\\n\\ngoog.provide('goog.Timer');\\n\\ngoog.require('goog.Promise');\\ngoog.require('goog.events.EventTarget');\\ngoog.requireType('goog.Thenable');\\n\\n\\n\\n/**\\n * Class for handling timing events.\\n *\\n * @param {number=} opt_interval Number of ms between ticks (default: 1ms).\\n * @param {Object=} opt_timerObject  An object that has `setTimeout`,\\n *     `setInterval`, `clearTimeout` and `clearInterval`\\n *     (e.g., `window`).\\n * @constructor\\n * @extends {goog.events.EventTarget}\\n */\\ngoog.Timer = function(opt_interval, opt_timerObject) {\\n  'use strict';\\n  goog.events.EventTarget.call(this);\\n\\n  /**\\n   * Number of ms between ticks\\n   * @private {number}\\n   */\\n  this.interval_ = opt_interval || 1;\\n\\n  /**\\n   * An object that implements `setTimeout`, `setInterval`,\\n   * `clearTimeout` and `clearInterval`. We default to the window\\n   * object. Changing this on {@link goog.Timer.prototype} changes the object\\n   * for all timer instances which can be useful if your environment has some\\n   * other implementation of timers than the `window` object.\\n   * @private {{setTimeout:!Function, clearTimeout:!Function}}\\n   */\\n  this.timerObject_ = /** @type {{setTimeout, clearTimeout}} */ (\\n      opt_timerObject || goog.Timer.defaultTimerObject);\\n\\n  /**\\n   * Cached `tick_` bound to the object for later use in the timer.\\n   * @private {Function}\\n   * @const\\n   */\\n  this.boundTick_ = goog.bind(this.tick_, this);\\n\\n  /**\\n   * Firefox browser often fires the timer event sooner (sometimes MUCH sooner)\\n   * than the requested timeout. So we compare the time to when the event was\\n   * last fired, and reschedule if appropriate. See also\\n   * {@link goog.Timer.intervalScale}.\\n   * @private {number}\\n   */\\n  this.last_ = goog.now();\\n};\\ngoog.inherits(goog.Timer, goog.events.EventTarget);\\n\\n\\n/**\\n * Maximum timeout value.\\n *\\n * Timeout values too big to fit into a signed 32-bit integer may cause overflow\\n * in FF, Safari, and Chrome, resulting in the timeout being scheduled\\n * immediately. It makes more sense simply not to schedule these timeouts, since\\n * 24.8 days is beyond a reasonable expectation for the browser to stay open.\\n *\\n * @private {number}\\n * @const\\n */\\ngoog.Timer.MAX_TIMEOUT_ = 2147483647;\\n\\n\\n/**\\n * A timer ID that cannot be returned by any known implementation of\\n * `window.setTimeout`. Passing this value to `window.clearTimeout`\\n * should therefore be a no-op.\\n *\\n * @private {number}\\n * @const\\n */\\ngoog.Timer.INVALID_TIMEOUT_ID_ = -1;\\n\\n\\n/**\\n * Whether this timer is enabled\\n * @type {boolean}\\n */\\ngoog.Timer.prototype.enabled = false;\\n\\n\\n/**\\n * An object that implements `setTimeout`, `setInterval`,\\n * `clearTimeout` and `clearInterval`. We default to the global\\n * object. Changing `goog.Timer.defaultTimerObject` changes the object for\\n * all timer instances which can be useful if your environment has some other\\n * implementation of timers you'd like to use.\\n * @type {{setTimeout, clearTimeout}}\\n */\\ngoog.Timer.defaultTimerObject = goog.global;\\n\\n\\n/**\\n * Variable that controls the timer error correction. If the timer is called\\n * before the requested interval times `intervalScale`, which often\\n * happens on Mozilla, the timer is rescheduled.\\n * @see {@link #last_}\\n * @type {number}\\n */\\ngoog.Timer.intervalScale = 0.8;\\n\\n\\n/**\\n * Variable for storing the result of `setInterval`.\\n * @private {?number}\\n */\\ngoog.Timer.prototype.timer_ = null;\\n\\n\\n/**\\n * Gets the interval of the timer.\\n * @return {number} interval Number of ms between ticks.\\n */\\ngoog.Timer.prototype.getInterval = function() {\\n  'use strict';\\n  return this.interval_;\\n};\\n\\n\\n/**\\n * Sets the interval of the timer.\\n * @param {number} interval Number of ms between ticks.\\n */\\ngoog.Timer.prototype.setInterval = function(interval) {\\n  'use strict';\\n  this.interval_ = interval;\\n  if (this.timer_ && this.enabled) {\\n    // Stop and then start the timer to reset the interval.\\n    this.stop();\\n    this.start();\\n  } else if (this.timer_) {\\n    this.stop();\\n  }\\n};\\n\\n\\n/**\\n * Callback for the `setTimeout` used by the timer.\\n * @private\\n */\\ngoog.Timer.prototype.tick_ = function() {\\n  'use strict';\\n  if (this.enabled) {\\n    var elapsed = goog.now() - this.last_;\\n    if (elapsed > 0 && elapsed < this.interval_ * goog.Timer.intervalScale) {\\n      this.timer_ = this.timerObject_.setTimeout(\\n          this.boundTick_, this.interval_ - elapsed);\\n      return;\\n    }\\n\\n    // Prevents setInterval from registering a duplicate timeout when called\\n    // in the timer event handler.\\n    if (this.timer_) {\\n      this.timerObject_.clearTimeout(this.timer_);\\n      this.timer_ = null;\\n    }\\n\\n    this.dispatchTick();\\n    // The timer could be stopped in the timer event handler.\\n    if (this.enabled) {\\n      // Stop and start to ensure there is always only one timeout even if\\n      // start is called in the timer event handler.\\n      this.stop();\\n      this.start();\\n    }\\n  }\\n};\\n\\n\\n/**\\n * Dispatches the TICK event. This is its own method so subclasses can override.\\n */\\ngoog.Timer.prototype.dispatchTick = function() {\\n  'use strict';\\n  this.dispatchEvent(goog.Timer.TICK);\\n};\\n\\n\\n/**\\n * Starts the timer.\\n */\\ngoog.Timer.prototype.start = function() {\\n  'use strict';\\n  this.enabled = true;\\n\\n  // If there is no interval already registered, start it now\\n  if (!this.timer_) {\\n    // IMPORTANT!\\n    // window.setInterval in FireFox has a bug - it fires based on\\n    // absolute time, rather than on relative time. What this means\\n    // is that if a computer is sleeping/hibernating for 24 hours\\n    // and the timer interval was configured to fire every 1000ms,\\n    // then after the PC wakes up the timer will fire, in rapid\\n    // succession, 3600*24 times.\\n    // This bug is described here and is already fixed, but it will\\n    // take time to propagate, so for now I am switching this over\\n    // to setTimeout logic.\\n    //     https://bugzilla.mozilla.org/show_bug.cgi?id=376643\\n    //\\n    this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_);\\n    this.last_ = goog.now();\\n  }\\n};\\n\\n\\n/**\\n * Stops the timer.\\n */\\ngoog.Timer.prototype.stop = function() {\\n  'use strict';\\n  this.enabled = false;\\n  if (this.timer_) {\\n    this.timerObject_.clearTimeout(this.timer_);\\n    this.timer_ = null;\\n  }\\n};\\n\\n\\n/** @override */\\ngoog.Timer.prototype.disposeInternal = function() {\\n  'use strict';\\n  goog.Timer.superClass_.disposeInternal.call(this);\\n  this.stop();\\n  delete this.timerObject_;\\n};\\n\\n\\n/**\\n * Constant for the timer's event type.\\n * @const\\n */\\ngoog.Timer.TICK = 'tick';\\n\\n\\n/**\\n * Calls the given function once, after the optional pause.\\n * <p>\\n * The function is always called asynchronously, even if the delay is 0. This\\n * is a common trick to schedule a function to run after a batch of browser\\n * event processing.\\n *\\n * @param {function(this:SCOPE)|{handleEvent:function()}|null} listener Function\\n *     or object that has a handleEvent method.\\n * @param {number=} opt_delay Milliseconds to wait; default is 0.\\n * @param {SCOPE=} opt_handler Object in whose scope to call the listener.\\n * @return {number} A handle to the timer ID.\\n * @template SCOPE\\n */\\ngoog.Timer.callOnce = function(listener, opt_delay, opt_handler) {\\n  'use strict';\\n  if (typeof listener === 'function') {\\n    if (opt_handler) {\\n      listener = goog.bind(listener, opt_handler);\\n    }\\n  } else if (listener && typeof listener.handleEvent == 'function') {\\n    // using typeof to prevent strict js warning\\n    listener = goog.bind(listener.handleEvent, listener);\\n  } else {\\n    throw new Error('Invalid listener argument');\\n  }\\n\\n  if (Number(opt_delay) > goog.Timer.MAX_TIMEOUT_) {\\n    // Timeouts greater than MAX_INT return immediately due to integer\\n    // overflow in many browsers.  Since MAX_INT is 24.8 days, just don't\\n    // schedule anything at all.\\n    return goog.Timer.INVALID_TIMEOUT_ID_;\\n  } else {\\n    return goog.Timer.defaultTimerObject.setTimeout(listener, opt_delay || 0);\\n  }\\n};\\n\\n\\n/**\\n * Clears a timeout initiated by {@link #callOnce}.\\n * @param {?number} timerId A timer ID.\\n */\\ngoog.Timer.clear = function(timerId) {\\n  'use strict';\\n  goog.Timer.defaultTimerObject.clearTimeout(timerId);\\n};\\n\\n\\n/**\\n * @param {number} delay Milliseconds to wait.\\n * @param {(RESULT|goog.Thenable<RESULT>|Thenable)=} opt_result The value\\n *     with which the promise will be resolved.\\n * @return {!goog.Promise<RESULT>} A promise that will be resolved after\\n *     the specified delay, unless it is canceled first.\\n * @template RESULT\\n */\\ngoog.Timer.promise = function(delay, opt_result) {\\n  'use strict';\\n  var timerKey = null;\\n  return new goog\\n      .Promise(function(resolve, reject) {\\n        'use strict';\\n        timerKey = goog.Timer.callOnce(function() {\\n          'use strict';\\n          resolve(opt_result);\\n        }, delay);\\n        if (timerKey == goog.Timer.INVALID_TIMEOUT_ID_) {\\n          reject(new Error('Failed to schedule timer.'));\\n        }\\n      })\\n      .thenCatch(function(error) {\\n        'use strict';\\n        // Clear the timer. The most likely reason is \\\"cancel\\\" signal.\\n        goog.Timer.clear(timerKey);\\n        throw error;\\n      });\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"requireType\",\"Timer\",\"goog.Timer\",\"opt_interval\",\"opt_timerObject\",\"events\",\"EventTarget\",\"call\",\"interval_\",\"timerObject_\",\"defaultTimerObject\",\"boundTick_\",\"bind\",\"tick_\",\"last_\",\"now\",\"inherits\",\"MAX_TIMEOUT_\",\"INVALID_TIMEOUT_ID_\",\"prototype\",\"enabled\",\"global\",\"intervalScale\",\"timer_\",\"getInterval\",\"goog.Timer.prototype.getInterval\",\"setInterval\",\"goog.Timer.prototype.setInterval\",\"interval\",\"stop\",\"start\",\"goog.Timer.prototype.tick_\",\"elapsed\",\"setTimeout\",\"clearTimeout\",\"dispatchTick\",\"goog.Timer.prototype.dispatchTick\",\"dispatchEvent\",\"TICK\",\"goog.Timer.prototype.start\",\"goog.Timer.prototype.stop\",\"disposeInternal\",\"goog.Timer.prototype.disposeInternal\",\"superClass_\",\"callOnce\",\"goog.Timer.callOnce\",\"listener\",\"opt_delay\",\"opt_handler\",\"handleEvent\",\"Error\",\"Number\",\"clear\",\"goog.Timer.clear\",\"timerId\",\"promise\",\"goog.Timer.promise\",\"delay\",\"opt_result\",\"timerKey\",\"thenCatch\",\"Promise\",\"resolve\",\"reject\",\"error\"]\n}\n"]