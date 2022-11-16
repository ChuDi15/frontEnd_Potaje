import React from "react";
import "./Activity.css"

const Activity = (props) => {
  return (
    <div className="d-flex row">
      <div className="col-6">
         {props.name} 
      </div>
      <div className="col-6 text-center">
        Puntos: {props.points}
      </div>
    </div>
  );
};

export default Activity;


// <div className="Activities d-flex bg-white flex-column w-75 ">
// <div className="Activities-Header  row p-3">
//   <h3 className="d-flex col-6">
//     {props.team.name}
//     </h3>
//     <h3 class="col-6 text-center">
//     {"Puntos: "+props.team.totalPoints}
//   </h3>
//   <hr/>
// </div>
// <ActivitiesList activities={props.team.activities}/>
// <button onClick={props.onChangeTeam}>back</button>
// </div>

