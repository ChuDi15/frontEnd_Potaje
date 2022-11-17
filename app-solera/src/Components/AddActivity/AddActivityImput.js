import React from 'react';

const AddActivityImput = (props) => {
  return (
    <div className='m-4'>
      <label>{props.name}</label> <br />
      <input type="text" name="name" onChange={props.setNameHandler} />
    </div>
  );
}

export default AddActivityImput;
