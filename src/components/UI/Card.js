import classes from './Card.module.css';
import { useSelector } from 'react-redux';

const Card = (props) => {

  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
