import "./App.css";
import Form from '../Form/Form';
import Ideas from '../Ideas/Ideas';
import AgentDetails from "../AgentDetails/AgentDetails";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App(){
  const [agents, setAllAgents] = useState([]);
  const [error, setError] = useState(null);
  const [filteredAgents, setFilteredAgents] = useState([]);
  const [savedAgents, setSavedAgents] = useState([]);

  useEffect(() => {
    const handleErrors = (response) => {
      if (!response.ok) {
        switch(response.status) {
          case 400:
            throw new Error("Sorry, the server is down, please try again later.");
          case 500:
            throw new Error("This is a bad request, please try again later.");
          default:
            throw new Error("Sorry, an error occurred, please refresh page or try again later.");
        }
      }
      return response.json();
    }

    const getAllAgents = async () => {
      try {
        const response = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true");
        const data = await handleErrors(response);
        setAllAgents(data.data);
        setFilteredAgents(data.data); // <-- Move this line here
      } catch (error) {
        setError(error.message);
      }
    };
    getAllAgents();
  }, []);

  function filterAgentsByRole(role) {
    if (role === "") {
      setFilteredAgents([]); // temporarily set to an empty array
      setTimeout(() => {
        setFilteredAgents(agents); // reset to original list after a slight delay
      }, 10); 
    } else {
      const agentsToFilter = agents.filter(agent => agent.role?.displayName === role);
      setFilteredAgents([]); // temporarily set to an empty array
      setTimeout(() => {
        setFilteredAgents(agentsToFilter); // set filtered agents after a slight delay
      }, 10);
    }
  }  

  function addToSavedList(agent) {
    if (!savedAgents.some(savedAgent => savedAgent.uuid === agent.uuid)) { // Avoid duplicates
        setSavedAgents([...savedAgents, agent]);
    }
}

return (
  <Router>
    <main className='App'>
    <div class='heading'>
      <div>
        <h1>Valorant Agents</h1>
      </div>
    </div>
    <div class='home'>
    <Link to="/" className="home-button">Home</Link>
    <Link to="/saved" className="favorites-button">Favorites</Link>
    </div>
    


      {/* Render the Form only if we're on the home route */}
      
      <Routes>
      <Route path="/" element={
        <>
          <h2 class='choose'>Choose an Agent</h2>
          <Form addIdea={filterAgentsByRole} />
          <Ideas ideas={filteredAgents} />
        </>
      }/>
        <Route path="/details/:agentId" element={<AgentDetails addToSavedList={addToSavedList} />} />
        <Route path="/saved" element={
        <>
        <h2 class='choose'>Choose an Agent</h2> 
        <Ideas savedAgents={savedAgents} />
        </>
      } />

      </Routes>
    </main>
  </Router>
);
}

export default App;
