import './Flat.scss'

const Flat = ({ price , name, imageUrl}) => {
  return (
    <div className="flat">
      <img src={imageUrl} className="flat-img" alt="" />
      <div className="flat-content">
        {name} | {price}
      </div>
    </div>
  );
}

export default Flat;
