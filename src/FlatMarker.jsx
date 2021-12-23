import './FlatMarker.scss'
import { Marker } from 'react-mapbox-gl';

const FlatMarker = ({ price, lng, lat }) => {
  return (
    <Marker
      coordinates={[lng, lat]}
      anchor="bottom">
      <div className="marker"> { price } </div>
    </Marker>
  );
}

export default FlatMarker;
