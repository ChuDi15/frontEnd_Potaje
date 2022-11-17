import React, { useState } from "react";
import AddActivityForm from "./AddActivityForm";

const AddActivity = (props) => {
  
  return (
    <AddActivityForm
      teams={props.teams}
      activities={props.activities}
      setAddActivity={props.setAddActivity}
    />
  );
};

export default AddActivity;
