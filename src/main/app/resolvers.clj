(ns app.resolvers
  (:require [com.wsscode.pathom.connect :as pc :refer [defresolver]]
            [taoensso.timbre :as log]
            [app.tables :refer :all]))

(defresolver person-resolver [env {:person/keys [id]}]
  {::pc/input  #{:person/id}
   ::pc/output [:person/name :person/age {:person/files [:file/id]}]}
  (let [person (get people-table id)]
    (assoc person :person/files (mapv (fn [id] {:file/id id}) (:person/files person)))))

(defresolver document-resolver [env {:person/keys [id]}]
  {::pc/input #{:person/id}
   ::pc/output [:document/id :document/title]}
  (get document-table id))

(defresolver files-resolver [env {:file/keys [id]}]
  {::pc/input #{:file/id}
   ::pc/output [:file/id :file/name :file/content]}
  (do (log/info "DEBUG files resolver" (get files-table id))
      (when-let [list (get files-table id)]
        (assoc list
               :person/files (mapv (fn [id] {:file/id id}) (:person/files list))))))

(defresolver list-resolver [env {:list/keys [id]}]
  {::pc/input  #{:list/id}
   ::pc/output [:list/label {:list/people [:person/id]}]}
  (when-let [list (get list-table id)]
    (assoc list
           :list/people (mapv (fn [id] {:person/id id}) (:list/people list)))))

(defresolver friends-resolver [env input]
  {::pc/output [{:friends [:list/id]}]}
  {:friends {:list/id :friends}})

(defresolver enemies-resolver [env input]
  {::pc/output [{:enemies [:list/id]}]}
  {:enemies {:list/id :enemies}})

(def resolvers
  [person-resolver
   document-resolver
   files-resolver
   list-resolver
   friends-resolver
   enemies-resolver])