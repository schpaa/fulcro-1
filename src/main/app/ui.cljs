(ns app.ui
  (:require [com.fulcrologic.fulcro.dom :as dom :refer [div ul h4 p]]
            [com.fulcrologic.fulcro.components :as comp :refer [defsc]]))

(defsc Person [this {:person/keys [name age]}]
  {:initial-state (fn [{:keys [name age]}]
                    {:person/name name :person/age age})}
  (div
   (p "Name: " name)
   (p "Age: " age)))

(def ui-person (comp/factory Person {:keyfn :person/name}))

(defsc PersonList [this {:list/keys [label people]}]
  {:initial-state
   (fn [{:keys [label]}]
     {:list/label  label
      :list/people (if (= label "Friends")
                     [(comp/get-initial-state Person {:name "Sally" :age 321})
                      (comp/get-initial-state Person {:name "Joey" :age 321})]
                     [(comp/get-initial-state Person {:name "Are" :age 321})
                      (comp/get-initial-state Person {:name "Bo" :age 321})])})}
  (div
    (h4 label)
    (ul
      (map ui-person people))))

(def ui-person-list (comp/factory PersonList))

(defsc Root [this {:keys [friends enemies] :as props}]
  {:initial-state (fn [params]
                    {:friends (comp/get-initial-state PersonList {:label "Enemies"})
                     :enemies (comp/get-initial-state PersonList {:label "Friends"})})}
  (div
    (h4 "TODO " (str (:fulcro.inspect.core/app-uuid props)))
    (ui-person {:person/name "Peter" :person/age 123})
    (ui-person-list friends)
    (ui-person-list enemies)))
