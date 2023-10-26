import './Card.css';
import { Link } from 'react-router-dom';

function hexToRgba(hex) {
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 24) & 255;
  let g = (bigint >> 16) & 255;
  let b = (bigint >> 8) & 255;
  let a = (bigint & 255) / 255;
  return `rgba(${r},${g},${b},${a})`;
}

const Card = ({ role, backgroundGradientColors, backgroundUrl, image, title, description, id, deleteIdea }) => {
  
  const gradientColors = backgroundGradientColors.map(color => hexToRgba(color));

  //onst gradient = `linear-gradient(45deg, ${gradientColors.join(",")})`;
  //const gradient = `linear-gradient(45deg, ${gradientColors.join(",")})`;
  
  return (
    <Link to={`/details/${id}`} className="card-button"> {/* Corrected this line */}
      <div className='card' id={id}>
        <img class='agent-image' src={image} alt={title} />
        <h3>{title}</h3>
        <p class='card-role'>{role}</p>
        <p class='card-description'>{description}</p>
      </div>
    </Link>
  )
  }
  export default Card;