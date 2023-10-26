// Form.js

import { useState } from 'react';
import './Form.css';
import PropTypes from 'prop-types';

function Form({ addIdea }){
  const [selectedRole, setSelectedRole] = useState("");



  function filterByRole(event) {
    event.preventDefault();
    addIdea(selectedRole); // inform parent about the role filter
    
  }

return (
  <div class='form-bar'>
    <form>
      <h2>Filter by Role</h2>
      <select value={selectedRole} onChange={event => setSelectedRole(event.target.value)}>
        <option value="">All Roles</option>
        <option value="Duelist">Duelist</option>
        <option value="Initiator">Initiator</option>
        <option value="Controller">Controller</option>
        <option value="Sentinel">Sentinel</option>
      </select>

      <button onClick = { event => filterByRole(event)}>Filter</button>
    </form>
    </div>
  )
}

export default Form;

Form.propTypes = {
  addIdea: PropTypes.func.isRequired
};
