import React from "react";
import "./Team.css";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Devuelve la carta individual del Team correspondiente, 
 * mostrando el nombre del equipo, los puntos totales, 
 * y permite además, al pulsar en el propio elemento de la carta,
 * nos llevará a la lista de actividades del equipo 
 * @param {id,key,name,totalPints,activities } props normal-props
 * @param {onChangeTeam} props go-to-up
 * @returns visual-component
 */
const Team = (props) => {
  const changeTeamHandler = () => {
    props.onChangeTeam(props.id);
  };
  return (
    <div className="teamCard rounded " onClick={changeTeamHandler}>
      <p className="teamName">{props.name}</p>
      <p className="teamPoints">{props.totalPoints}</p>
    </div>
  );
};

export default Team;
