import React from 'react';

const AddActivityImput = (props) => {
    return (
      <div>{props.name}
        <input type="text" name="name" onChange={props.setNameHandler} />
      </div>
    );
}

export default AddActivityImput;
