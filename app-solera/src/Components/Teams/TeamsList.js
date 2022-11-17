import React from "react";

import "./TeamsList.css";
import Team from "./Team.js";
import AddActivityButton from "../AddActivity/AddActivityButton";
import { calculateTotalPoints } from "../../Servicios/Helper.js"
/**
 * crea un cuadro con tantas cartas como equipos haya en la bbdd,
 * en caso de no haber ninguno, mostrará un mensaje concreto
 * @param {Teams} props normal-props
 * @param {onChangeTeam} props go-to-up
 * @returns visual-component
 */

const TeamsList = (props) => {
  if (props.teams?.length === 0) {
    return <h2 className="teams-list__fallback">Found no teams</h2>;
  }

  return (
    <div className="teams-list">
      <AddActivityButton setAddActivity={props.setAddActivity} />
      {props.teams?.map((team) => (
        <Team
          onChangeTeam={props.onChangeTeam}
          id={team._id}
          key={team._id}
          name={team.name}
          totalPoints={calculateTotalPoints(team)}
          activities={team.activities}
        />
      ))}
    </div>
  );
};

export default TeamsList;
