import './Flat.scss'

const Flat = ({ price , name, imageUrl}) => {
  return (
    <div className="flat">
      <img src={imageUrl} className="flat-img" alt="" />
      <div className="flat-content">
        <h4>{name}</h4>
        <p>{price}€ / night</p>
      </div>
    </div>
  );
}

export default Flat;
