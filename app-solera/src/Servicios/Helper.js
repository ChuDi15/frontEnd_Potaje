import React from "react";
import Activities from "../Activities/Activities";
import TeamsList from "../Teams/TeamsList";

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
    sum += 5*a;
  }

  return sum;
};

const getTeamSelectedObjectActivities = (team, activityData) => {
  var activities = [];

  for (let activityTeam in team.activities) {
    for (let activity in activityData.data) {
      if (activityTeam === activity._id) {
        activities.push(activity);
      }
    }
  }
  return activities;
};

const getTeamSelectedObject = (teamId, teamData) => {
     return teamData.data.filter((team) => {
       return team._id === teamId;
     });
};

const setTeamSelected = (teamSelected, teamData, activityData) => {
  const teamObject = getTeamSelectedObject(teamSelected, teamData);

  teamObject.activities = getTeamSelectedObjectActivities(
    teamObject,
    activityData
  );
  
  return teamObject
};

const childrenReturnValue = (
  teamSelected,
  teamData,
  activityData,
  teamSelectedHandler
) => {
  if (teamSelected) {
    const teamObject = setTeamSelected(teamSelected, teamData, activityData);
    return (
      <Activities
        onChangeTeam={teamSelectedHandler}
        team={teamObject}
        totalPoints={calculateTotalPoints(teamObject)}
      />
    );
  }
  return <TeamsList onChangeTeam={teamSelectedHandler} teams={teamData.data} />;
};

export default  childrenReturnValue;
