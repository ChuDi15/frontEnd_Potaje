import React from "react";
import Activities from "../Components/Activities/Activities";
import TeamsList from "../Components/Teams/TeamsList";

const activityNameExits = (activities, name) => {
  for (let activity of activities) {
    if (name === activity.name) {
      return true;
    }
  }
  return false;
};

const calculateActivityPoints = (points) => {
  return 5 + points * 5;
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
    sum += calculateActivityPoints(a.points);
  }

  return sum;
};

const getTeamSelectedObjectActivities = (team, activityData) => {
  team.activities.forEach((activityTeam, index) => {
    let newActivity = activityData.data.filter((activity) => {
      return activity.arrivePosition === index;
    })[0];
    activityTeam.name = newActivity.name;
  });
  return team.activities;
};

const getTeamSelectedObject = (teamId, teamData) => {
  return teamData.data.filter((team) => {
    return team._id === teamId;
  })[0];
};

const setTeamSelected = (teamSelected, teamData, activityData) => {
  const teamObject = getTeamSelectedObject(teamSelected, teamData);

  teamObject.activities = getTeamSelectedObjectActivities(
    teamObject,

    activityData
  );
  teamObject.totalPoints = calculateTotalPoints(teamObject);
  return teamObject;
};

const childrenReturnValue = (
  teamSelected,
  teamData,
  activityData,
  teamSelectedHandler,
  setAddActivity
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
  return (
    <TeamsList
      onChangeTeam={teamSelectedHandler}
      teams={teamData.data}
      setAddActivity={setAddActivity}
    />
  );
};

export { calculateTotalPoints, childrenReturnValue, calculateActivityPoints, activityNameExits };
