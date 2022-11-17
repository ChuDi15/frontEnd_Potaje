import React from "react";

import "./ActivitiesList.css";
import Activity from "./Activity.js";
/**
 * Mapea las diferentes actividades
 * @param {activities} props normal-props
 * @returns visual component
 */
const ActivitiesList = (props) => {
  if (props.activities.length === 0) {
    return <h2 className="activities-list__fallback">Found no activities</h2>;
  }

  
  return (
    <ul className="activities-list row">
      {props.activities.map((activity) => (
        <Activity
          key={activity._id}
          name={activity.name}
          points={activity.points}
        />
      ))}
    </ul>
  );
};

export default ActivitiesList;
