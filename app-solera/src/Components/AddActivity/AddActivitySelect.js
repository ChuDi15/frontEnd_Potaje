import React from 'react';

const AddActivitySelect = (props) => {
    return (
      <div>
        <label>{props.name}:</label>
        <br />
        <select onChange={props.setSelect} defaultValue={props.defaultValue}>
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
