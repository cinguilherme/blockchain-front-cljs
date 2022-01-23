(ns app.ui
  (:require [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
            [com.fulcrologic.fulcro.dom :as dom :refer [div p li h4 h5 ul]]))

(defsc Person [this {:person/keys [name age]}]
  {:query         [:person/name :person/age]
   :initial-state (fn [{:keys [name age] :as params}]
                    {:person/name name :person/age age})}
  (li
    (h5 (str "name: " name "(age: " age ")"))))

(def ui-person (comp/factory Person {:keyfn :person/name}))

(defsc PersonList [this {:keys [list/label list/people]}]
  {:query         [:list/label {:list/people (comp/get-query Person)}]
   :initial-state (fn [{:keys [label]}]
                    {:list/label  label
                     :list/people (if (= label "Friends")
                                    [(comp/get-initial-state Person {:name "Sally" :age 21})]
                                    [(comp/get-initial-state Person {:name "Fred" :age 33})])})}
  (div
    (h4 label)
    (ul
      (map ui-person people))))

(def ui-person-list (comp/factory PersonList))

(defsc Root [this {:keys [friends enemies]}]
  {:query         [{:friends (comp/get-query PersonList)}
                   {:enemies (comp/get-query PersonList)}]
   :initial-state (fn [params]
                    {:friends (comp/get-initial-state PersonList {:label "Friends"})
                     :enemies (comp/get-initial-state PersonList {:label "Enemies"})})}

  (dom/div
    (ui-person-list friends)
    (ui-person-list enemies)))