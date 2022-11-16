import React from "react";
import ActivitiesList from "./ActivitiesList.js";
import "./Activities.css";
/**
 * Cuadrado grande en el que se vuelcan las diferentes tarjetas de actividades
 * @param {team,totalPoints} props normal-props
 * @param {onChangeTeam} props go-to-up
 * @returns visual content
 */
const Activities = (props) => {
  return (
    <div className="Activities d-flex bg-white rounded flex-column w-75 ">
      <div className="Activities-Header  row p-3">
        <h3 className="d-flex col-6">{props.team.name}</h3>
        <h3 className="col-6 text-center">{"Puntos: " + props.totalPoints}</h3>
        <hr />
      </div>
      <ActivitiesList activities={props.team.activities} />
      <button className="btn btn-dark" onClick={props.onChangeTeam}>
        Back
      </button>
    </div>
  );
};

export default Activities;
