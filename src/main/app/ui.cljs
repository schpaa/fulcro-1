(ns app.ui
  (:require [com.fulcrologic.fulcro.dom :as dom :refer [div ul h4 p]]
            [com.fulcrologic.fulcro.components :as comp :refer [defsc]]))

(defsc Person [this {:person/keys [name age]}]
  (div
   (p "Name: " name)
   (p "Age: " age)))

(def ui-person (comp/factory Person {:keyfn :person/name}))

(defsc PersonList [this {:list/keys [label people]}]
  (div
    (h4 label)
    (ul
      (map ui-person people))))

(def ui-person-list (comp/factory PersonList))

(defsc Root [this {:keys [ui/react-key] :as props}]
  (div
    (h4 "TODO " (str (:fulcro.inspect.core/app-uuid props)))
    (ui-person {:person/name "Peter" :person/age 123})
    (ui-person-list {:list/label  "Friendly"
                     :list/people [{:person/name "Sally" :person/age 321}
                                   {:person/name "Joey" :person/age 321}]})))
