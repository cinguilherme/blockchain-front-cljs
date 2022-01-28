(ns app.parser
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [taoensso.timbre :as log]))

(def people-table
  {1 {:person/id 1 :person/name "Sally" :person/age 32
      :person/document 1 :person/files [1 2 3]}

   2 {:person/id 2 :person/name "Joe" :person/age 22}
   5 {:person/id 2 :person/name "Jah" :person/age 22}
   6 {:person/id 2 :person/name "Tonny" :person/age 22}
   3 {:person/id 3 :person/name "Fred" :person/age 11}
   4 {:person/id 4 :person/name "Bobby" :person/age 55}})

(def files-table
  {1 {:file/id 1 :file/name "file-x" :file/content "abc"}
   2 {:file/id 2 :file/name "file-y" :file/content "zxc"}
   3 {:file/id 3 :file/name "file-t" :file/content "cvb"}})

(def document-table
  {1 {:document/id 1 :document/title "LOD"}
   2 {:document/id 2 :document/title "BIB"}})

(def list-table
  {:friends {:list/id     :friends
             :list/label  "Friends"
             :list/people [1 2 5 6]}
   :enemies {:list/id     :enemies
             :list/label  "Enemies"
             :list/people [4 3]}})

(pc/defresolver person-resolver [env {:person/keys [id]}]
  {::pc/input  #{:person/id}
   ::pc/output [:person/name :person/age {:person/files [:file/id]}]}
  (do (log/info "DEBUG person resolver" (get people-table id))
      (get people-table id)))

(pc/defresolver document-resolver [env {:person/keys [id]}]
  {::pc/input #{:person/id}
   ::pc/output [:document/id :document/title]}
  (get document-table id))

(pc/defresolver files-resolver [env {:file/keys [id]}]
  {::pc/input #{:file/id}
   ::pc/output [:file/id :file/name :file/content]}
  (do (log/info "DEBUG files resolver" (get files-table id))
      (when-let [list (get files-table id)]
        (assoc list
               :person/files (mapv (fn [id] {:file/id id}) (:person/files list))))))

(pc/defresolver list-resolver [env {:list/keys [id]}]
  {::pc/input  #{:list/id}
   ::pc/output [:list/label {:list/people [:person/id]}]}
  (when-let [list (get list-table id)]
    (assoc list
           :list/people (mapv (fn [id] {:person/id id}) (:list/people list)))))

(pc/defresolver friends-resolver [env input]
  {::pc/output [{:friends [:list/id]}]}
  {:friends {:list/id :friends}})

(pc/defresolver enemies-resolver [env input]
  {::pc/output [{:enemies [:list/id]}]}
  {:enemies {:list/id :enemies}})

(def resolvers [person-resolver document-resolver files-resolver list-resolver friends-resolver enemies-resolver])

(def pathom-parser
  (p/parser {::p/env     {::p/reader                 [p/map-reader
                                                      pc/reader2
                                                      pc/ident-reader
                                                      pc/index-reader]
                          ::pc/mutation-join-globals [:tempids]}
             ::p/mutate  pc/mutate
             ::p/plugins [(pc/connect-plugin {::pc/register resolvers})
                          p/error-handler-plugin
                          ;; or p/elide-special-outputs-plugin
                          (p/post-process-parser-plugin p/elide-not-found)]}))

(defn api-parser [query]
  (log/info "Process" query)
  (pathom-parser {} query))
