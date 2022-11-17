import React from 'react';

const AddActivityButton = (props) => {
  const addActivityHandler = () => {
    props.setAddActivity(true);
  };
  return (
    <div className="d-flex  justify-content-center ">
      <button className="p-3 m-2 " onClick={addActivityHandler}>Add Activity</button>;
    </div>
  )
};




export default AddActivityButton;
