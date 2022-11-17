import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { useFetch } from "./Servicios/use-teams.js";
import { childrenReturnValue } from "./Servicios/Helper.js";
import AddActivityButton from "./Components/AddActivity/AddActivityButton.js";
import AddActivity from "./Components/AddActivity/AddActivity.js";

const Children = () => {
  var teamData = useFetch("http://localhost:5005/api/teams/");
  var activityData = useFetch("http://localhost:5005/api/activities/");
  let show;
  const [teamSelected, setTeamSelected] = useState(null);
  const [addActivity, setAddActivity] = useState(false);

  /**
   *
   * @param {*} team
   * si teamSelected es true, se le dará un valor null
   * si TeamSelected es false, se le dará el valor que reciba el método.
   */
  const teamSelectedHandler = (team) => {
    if (teamSelected) {
      setTeamSelected(null);
    } else {
      setTeamSelected(team);
    }
  };
  if(addActivity){
    show = (
      <AddActivity
        teams={teamData.data}
        activities={activityData.data}
        setAddActivity={setAddActivity}
      />
    );
  }else{
    show = childrenReturnValue(
      teamSelected,
      teamData,
      activityData,
      teamSelectedHandler,
      setAddActivity
    );
  }
  return (
    <div className="d-flex justify-content-center align-items-center p-5">
      {show}
    </div>
  );
};

export default Children;
