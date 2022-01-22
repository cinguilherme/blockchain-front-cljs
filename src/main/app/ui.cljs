(ns app.ui
  (:require [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
            [com.fulcrologic.fulcro.dom :as dom :refer [div p]]))

(defsc Person [this {:person/keys [name age]}]
  (div
   (p "name: " name)
   (p "age:" age)))

(def ui-person (comp/factory Person))

(defsc Root [this props]
  (dom/div 
   (p "hello you")
   (ui-person {:person/name "Gui" :person/age 35})))