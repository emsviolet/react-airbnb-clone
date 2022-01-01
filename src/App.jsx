import { Component } from 'react';
import './App.scss';
import Flat from './Flat';
import FlatMarker from './FlatMarker';
import ReactMapboxGl from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const FLATS_URL = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
const Map = ReactMapboxGl({ accessToken:
    "pk.eyJ1IjoiZW1zdmlvbGV0IiwiYSI6ImNrdmt0MTZwZTB6Ymcyb3RreXBvdDNubGsifQ.UgnTFG2v0_BN890pVoT8kw"
});

class App extends Component {
  state = {
    flats: [ ],
    center: [2.3522, 48.8566],
    selectedFlat: null,
    filterText: ""
  }


  componentDidMount() {
    this.fetchFlats();
  }

  fetchFlats = () => {
    fetch(FLATS_URL)
      .then(response => response.json())
      .then(data => {
        this.setState({ flats: data })
      });
  }

  handleFlatSelect = (flatId) => {
    const selectedFlat = this.state.flats.find(flat => flat.id === flatId)

    this.setState({
      center: [selectedFlat.lng, selectedFlat.lat],
      selectedFlat: selectedFlat
    });
  }

  handleFilter = (event) => {
    const { value } = event.target;
    this.setState({ filterText: value })
  }


  render () {
    const { center, flats, selectedFlat, filterText } = this.state;
    const filteredFlats = flats.filter(flat => {
      return flat.name.match(new RegExp(filterText, 'i'))
    });

    if (flats.length === 0) {
      return (
        <h2>Loading flats..........</h2>
      );
    } else {
      return (
        <div className="app">
          <div className="left">

            <input className="search" onChange={(this.handleFilter)} />

            <div className="flats">
              {filteredFlats.map(flat => {
                const isSelected = selectedFlat === flat;

                return <Flat
                  onSelect={this.handleFlatSelect}
                  selected={isSelected}
                  id={flat.id}
                  price={flat.price}
                  name={flat.name}
                  imageUrl={flat.imageUrl}/>
              })}

            </div>
          </div>

          <div className="map">
            <Map
              zoom={[12]}
              center= {center}
              containerStyle={{ height: '100vh', width: '100%' }}
              style="mapbox://styles/mapbox/streets-v11">
                {filteredFlats.map(flat => {
                  const isSelected = selectedFlat === flat;
                  return (<FlatMarker
                    selected={isSelected}
                    price={flat.price}
                    lat={flat.lat}
                    lng={flat.lng} />
                  );
              })}
            </Map>
          </div>
        </div>
      );
      }
    }
  }

export default App;
