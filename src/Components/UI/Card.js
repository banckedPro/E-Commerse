import classes from './Card.module.css';
const Card = props => {
  return (
    <div className={classes.card}>
      <img src={props.src} alt="product" />
      <h1>{props.title}</h1>
      <p className={classes.rating}>Rating : {props.rating} ⭐</p>
      <div className={classes.price}>
        <h2>$ {props.price}</h2>
      </div>
    </div>
  );
};
export default Card;
