import React from 'react';

const AddActivityButton = (props) => {
  const addActivityHandler = () => {
    props.setAddActivity(true);
  };
  return <button onClick={addActivityHandler}>Add Activity</button>;
};




export default AddActivityButton;
