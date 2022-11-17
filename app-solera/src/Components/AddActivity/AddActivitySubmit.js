import React from 'react';

const AddActivitySubmit = (props) => {
    const setAddActivityHandler = () => {
        props.setAddActivity(props.newActivity);
    }
    return (
      <div>
        <button type="submit" onClick={setAddActivityHandler}>
          Submit
        </button>
      </div>
    );
}

export default AddActivitySubmit;
