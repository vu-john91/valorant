import './Ideas.css';
import Card from "../Card/Card"


function Ideas({ ideas, savedAgents}){
  const agentsToDisplay = savedAgents || ideas;
  const ideaCards = agentsToDisplay.map(idea => {
    return (
      <Card
        backgroundGradientColors={idea.backgroundGradientColors}
        backgroundUrl={idea.background}
        image={idea.displayIcon}
        title={idea.displayName}
        role={idea.role?.displayName || 'Default Role'}
        description={idea.description}
        id={idea.uuid}
        key={idea.uuid}
        //saveAgent={saveAgent}
      />
    )
  })

  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}
export default Ideas;