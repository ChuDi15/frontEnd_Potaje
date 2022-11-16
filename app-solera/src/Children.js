import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { useFetch } from "./Servicios/use-teams.js";
import childrenReturnValue from "./Servicios/Helper.js";





const Children = () => {
  var teamData = useFetch("http://localhost:5005/api/teams/");
  var activityData = useFetch("http://localhost:5005/api/activities/");
  let show;
  const [teamSelected, setTeamSelected] = useState(null);

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

  show = childrenReturnValue(
    teamSelected,
    teamData,
    activityData,
    teamSelectedHandler
  );
  return (
    <div className="d-flex justify-content-center align-items-center p-5">
      {show}
    </div>
  );
};

export default Children;
