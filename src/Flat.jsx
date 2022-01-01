import './Flat.scss'

const Flat = ({ id, price , name, imageUrl, selected, onSelect}) => {
  const classes = selected ? 'flat selected' : 'flat'

  return (
    <div className={classes} onClick={() => onSelect(id)}>
      <img src={imageUrl} className="flat-img" alt="" />
      <div className="flat-content">
        <h4>{name}</h4>
        <p>{price}€ / night</p>
      </div>
    </div>
  );
}

export default Flat;
