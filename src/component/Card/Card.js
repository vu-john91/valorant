import './Card.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// function hexToRgba(hex) {
//   let bigint = parseInt(hex, 16);
//   let r = (bigint >> 24) & 255;
//   let g = (bigint >> 16) & 255;
//   let b = (bigint >> 8) & 255;
//   let a = (bigint & 255) / 255;
//   return `rgba(${r},${g},${b},${a})`;
// }

const Card = ({ index, role, backgroundGradientColors, image, title, description, id }) => {
  
  //const gradientColors = backgroundGradientColors.map(color => hexToRgba(color));

  //onst gradient = `linear-gradient(45deg, ${gradientColors.join(",")})`;
  //const gradient = `linear-gradient(45deg, ${gradientColors.join(",")})`;
  
  return (
    <Link to={`/details/${id}`} className="card-button"> {/* Corrected this line */}
      <div className='card' style={{ animationDelay: `${index * 0.1}s` }} id={id}>
        <img class='agent-image' src={image} alt={title} />
        <h3>{title}</h3>
        <p class='card-role'>{role}</p>
        <p class='card-description'>{description}</p>
      </div>
    </Link>
  )
  }
  export default Card;

  Card.propTypes = {
    role: PropTypes.string.isRequired,
    backgroundGradientColors: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  };
