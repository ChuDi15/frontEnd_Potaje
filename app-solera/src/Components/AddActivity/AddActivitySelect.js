import React from 'react';

const AddActivitySelect = (props) => {
  return (
    <div className='d-flex jusify-content-center align-content-center flex-column'>
      <br />
      <label>{props.name}:</label>

      <select className='me-4' onChange={props.setSelect} defaultValue={props.defaultValue}>

        {props.teams.map((team) => {
          return (
            <option value={team._id} key={team._id}>
              {team.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default AddActivitySelect;
