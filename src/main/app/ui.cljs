(ns app.ui
  (:require [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
            [com.fulcrologic.fulcro.dom :as dom :refer [div p li h4 h5 ul]]))

(defsc Person [this {:person/keys [name age]}]
  (li
   (h5 (str "name: " name "(age: " age ")"))))

(def ui-person (comp/factory Person {:keyfn :person/name}))

(defsc PersonList [this {:list/keys [label people]}]
  (div
   (h4 label) 
   (ul
    (map ui-person people))))

(def ui-person-list (comp/factory PersonList))

(defsc Root [this props]
  (let [ui-data {:friends {:list/label "Friends"
                           :list/people [{:person/name "Fred" :person/age 22}
                                         {:person/name "Dina" :person/age 31}]}
                 :enemies {:list/label "Enemies"
                           :list/people [{:person/name "Troy" :person/age 44}
                                         {:person/name "Tinna" :person/age 33}]}}]
    (dom/div
     (ui-person {:person/name "Gui" :person/age 35})
     (ui-person-list (:friends ui-data))
     (ui-person-list (:enemies ui-data)))))