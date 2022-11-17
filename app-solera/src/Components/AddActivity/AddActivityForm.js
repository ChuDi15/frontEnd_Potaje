import React, { useState } from "react";
import AddActivityImput from "./AddActivityImput";
import AddActivitySelect from "./AddActivitySelect";
import AddActivitySubmit from "./AddActivitySubmit";
import { activityNameExits } from "../../Servicios/Helper";

const AddActivityForm = (props) => {
  const [showError, setShowError] = useState("");
  const [newActivity, setNewActivity] = useState({
    name: "",
    winner: props.teams[0]._id,
    second: props.teams[1]._id,
  });

  const setWinnerHandler = (event) => {
    console.log(event.target.value);
    setNewActivity({ ...newActivity, winner: event.target.value });
  };

  const setSecondHandler = (event) => {
    console.log(event.target.value);
    setNewActivity({ ...newActivity, second: event.target.value });
  };

  const setNameHandler = (event) => {
    console.log(event)
    if(event.keyCode === 13 ){
      injectActivity(newActivity);
    }else{
      setNewActivity({ ...newActivity, name: event.target.value });
    }
  };

  const injectActivity = (newActivity) => {
    if (newActivity.name === "") {
      setShowError("Error. There must be a name.");
    } else if (activityNameExits(props.activities, newActivity.name)) {
      setShowError("Error. There's an acitvity with that name. ");
    } else if (newActivity.second === newActivity.winner) {
      setShowError("Error. Winner can't be also the second one. ");
    } else {
      setShowError("");
      console.log("name: " + newActivity.name);
      console.log("winner: " + newActivity.winner);
      console.log("second: " + newActivity.second);
      props.setAddActivity(false);
    }
  };
  return (
    <div>
      <AddActivityImput name="Name:" setNameHandler={setNameHandler} />
      <AddActivitySelect
        name="Winner"
        teams={props.teams}
        setSelect={setWinnerHandler}
      />
      <AddActivitySelect
        name="Second"
        teams={props.teams}
        defaultValue = {props.teams[1]._id}
        setSelect={setSecondHandler}
      />
      <AddActivitySubmit
        newActivity={newActivity}
        setAddActivity={injectActivity}
      />
      <p>{showError}</p>
    </div>
  );
};

export default AddActivityForm;
