(ns app.client
  (:require
    [app.application :refer [app]]
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp]
    [com.fulcrologic.fulcro.data-fetch :as df]
    [app.front-end.ui :as ui :refer [Root PersonList]]))

(defn ^:export init
  "Shadow-cljs sets this up to be our entry-point function. See shadow-cljs.edn `:init-fn` in the modules of the main build."
  []
  (app/mount! app Root "app")
  (df/load! app :friends PersonList)
  (df/load! app :enemies PersonList)
  (js/console.log "Loaded"))

(defn ^:export refresh
  "During development, shadow-cljs will call this on every hot reload of source. See shadow-cljs.edn"
  []

  (app/mount! app Root "app")
  (df/load! app :friends PersonList)
  (df/load! app :enemies PersonList)
  (js/console.log "LOADED!!")

  (comp/refresh-dynamic-queries! app)
  (js/console.log "Hot reload"))
