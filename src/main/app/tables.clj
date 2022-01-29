(ns app.tables)

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