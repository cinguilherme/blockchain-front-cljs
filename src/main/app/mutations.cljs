(ns app.mutations
  (:require
    [com.fulcrologic.fulcro.mutations :as m :refer [defmutation]]
    [com.fulcrologic.fulcro.algorithms.merge :as merge]))

(defmutation delete-person
  "Mutation: delete person with `name` from with `list-name`"

  [{list-id :list/id person-id :person/id}]
  (action [{:keys [state]}]
          (swap! state merge/remove-ident* [:person/id person-id] [:list/id list-id :list/people])))


