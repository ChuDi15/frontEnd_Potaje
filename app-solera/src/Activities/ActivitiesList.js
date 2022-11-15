import React from "react";

import "./ActivitiesList.css";
import Activity from "./Activity.js";

const ActivitiesList = (props) => {
  if (props.activities.length === 0) {
    return <h2 className="activities-list__fallback">Found no activities</h2>;
  }
  return (
    <ul className="activities-list row">
      {props.activities.map((activity) => (
        <Activity
          key={activity.id}
          name={activity.name}
          points={activity.points}
        />
      ))}
    </ul>
  );
};

export default ActivitiesList;
