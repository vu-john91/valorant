import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import './AgentDetails.css';

function AgentDetails({ addToSavedList }) {
  let { agentId } = useParams();

  const [agentDetails, setAgentDetails] = useState(null);
  const [error, setError] = useState(null);
  //const [savedAgents, setSavedAgents] = useState([]);

  useEffect(() => {
    const handleErrors = (response) => {
      if (!response.ok) {
        throw new Error("Sorry, an error occurred.");
      }
      return response.json();
    }

    const fetchAgentDetails = async () => {
      try {
        const response = await fetch(`https://valorant-api.com/v1/agents/${agentId}`); // assuming agentName is the ID or use appropriate endpoint
        const data = await handleErrors(response);
        setAgentDetails(data.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAgentDetails();
  }, [agentId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!agentDetails) {
    return <div>Loading...</div>;
  }


  return (
    <div id={agentDetails.uuid}>
      <h1 class='agentName'>{agentDetails.displayName}</h1>
        <div className='agent-card'>
          <img class='agent-portait' src={agentDetails.fullPortrait} alt={agentDetails.displayName} />
          <div class='agent-details'>
            <button onClick={() => addToSavedList(agentDetails)}>Save to Favorites</button>
            <h2>Role: </h2>
              <div class='role-card'>
                <p class='agent-role'>{agentDetails.role.displayName}</p>
              </div>
            <h2>Role Description: </h2>
            <div class='description-card'>
              <p class='role-description'>{agentDetails.role.description}</p>
            </div>
            <h2>Abilities: </h2>
              <div class='abilities-card'>
                <ul className='ability-details'>
                  {agentDetails.abilities.map((ability) => (
                    <div key={ability.slot}>
                      <img class='ability-icon' src={ability.displayIcon} alt={ability.displayName} />
                      <h3 class='ability-name'>{ability.displayName}</h3>
                      <p class='ability-description'>{ability.description}</p>
                    </div>
                  ))}
                </ul>
              </div>
              {/* ... add other details as needed ... */}
          </div>
        </div>
    </div>
  )
}

export default AgentDetails;
