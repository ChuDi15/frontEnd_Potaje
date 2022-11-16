import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import TeamsList from "./Teams/TeamsList.js";
import Activities from "./Activities/Activities.js";
import { useFetch } from "./Servicios/use-teams.js";



const Children = () => {
  var teamData = useFetch("http://localhost:5005/api/teams/");
  var activityData = useFetch("http://localhost:5005/api/activities/");
  let show;
  const [teamSelected, setTeamSelected] = useState(null);

  /**
   * 
   * @param {*} team 
   * si teamSelected es true, se le dará un valor null
   * si TeamSelected es false, se le dará el valor que reciba el método
   */
  const teamSelectedHandler = (team) => {
    if (teamSelected) {
      setTeamSelected(null);
    } else {
      console.log(team);
      setTeamSelected(team);
    }
  };
/**
 * 
 * @param {activities} team 
 * esta función calculará el total de los puntos de las actividades,
 * del equipo seleccionado
 * @returns @param {int} sum
 */
  const calculateTotalPoints = (team) => {
    let sum = 0;
    for (let a of team.activities) {
      sum += parseInt(a.points);
    }

    return sum;
  };

  if (teamSelected) {
    /**
     * 
     */
    const teamObject = teamData.data.filter((team) => {
      return team._id === teamSelected;
    });

    var activities = [];

    for (let activityTeam in teamObject.activities) {
      for (let activity in activityData.data) {
        if (activityTeam === activity._id) {
          activities.push(activity);
        }
      }
    }
    teamObject.activities = activities;
  
    show = (
      <Activities
        onChangeTeam={teamSelectedHandler}
        team={teamObject}
        totalPoints={calculateTotalPoints(teamObject)}
      />
    );
  } else {
    show = (
      <TeamsList onChangeTeam={teamSelectedHandler} teams={teamData.data} />
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center p-5">
      {show}
    </div>
  );
};

export default Children;
