(ns app.ui
  (:require [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
            [com.fulcrologic.fulcro.dom :as dom :refer [div p li h4 h5 ul]]
            [app.mutations :as api]))

(defsc Person
  [this {:person/keys [id name age] :as props} {:keys [onDelete]}]

  {:query         [:person/id :person/name :person/age]

   :ident         (fn [] [:person/id (:person/id props)])

   :initial-state (fn [{:keys [id name age] :as params}]
                    {:person/id id :person/name name :person/age age})}

  (li
    (h5 (str "name: " name "(age: " age ")"))
    (dom/button {:onClick #(onDelete id)} "X")))


(def ui-person (comp/factory Person {:keyfn :person/id}))


(defsc PersonList [this {:list/keys [id label people] :as props}]
  {:query         [:list/id :list/label {:list/people (comp/get-query Person)}]

   :ident         (fn [] [:list/id (:list/id props)])

   :initial-state (fn [{:keys [id label]}]
                    {:list/id     id
                     :list/label  label
                     :list/people (if (= label "Friends")
                                    [(comp/get-initial-state Person {:id 1 :name "Sally" :age 21})
                                     (comp/get-initial-state Person {:id 3 :name "Ford" :age 61})]
                                    [(comp/get-initial-state Person {:id 2 :name "Fred" :age 33})
                                     (comp/get-initial-state Person {:id 4 :name "Ferdinand" :age 37})])})}
  (let [delete-fn (fn [person-id]
                    (comp/transact!
                      this
                      [(api/delete-person {:list/id id :person/id person-id})]))]
    (div
      (h4 label)
      (ul
        (map (fn [p] (ui-person (comp/computed p {:onDelete delete-fn}))) people)))))


(def ui-person-list (comp/factory PersonList))


(defsc Root [this {:keys [friends enemies]}]
  {:query         [{:friends (comp/get-query PersonList)}
                   {:enemies (comp/get-query PersonList)}]

   :initial-state (fn [params]
                    {:friends (comp/get-initial-state PersonList {:id :friends :label "Friends"})
                     :enemies (comp/get-initial-state PersonList {:id :enemies :label "Enemies"})})}

  (dom/div
    (ui-person-list friends)
    (ui-person-list enemies)))