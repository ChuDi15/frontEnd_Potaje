import React from 'react';

const AddActivitySubmit = (props) => {
  const setAddActivityHandler = () => {
    props.setAddActivity(props.newActivity);
  }
  return (
    <div className='d-flex jusify-content-center align-content-center m-4'>
      <button className='p-3' type="submit" onClick={setAddActivityHandler}>
        Submit
      </button>
    </div>
  );
}

export default AddActivitySubmit;
