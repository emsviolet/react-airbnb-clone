import { Component } from 'react';
import './App.scss';
import Flat from './Flat';
import ReactMapboxGl from 'react-mapbox-gl';
const Map = ReactMapboxGl({ accessToken:
    "pk.eyJ1IjoiZW1zdmlvbGV0IiwiYSI6ImNrdmt0MTZwZTB6Ymcyb3RreXBvdDNubGsifQ.UgnTFG2v0_BN890pVoT8kw"
});
// import 'mapbox-gl/dist/mapbox-gl.css';

const FLATS_URL = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"

class App extends Component {
  state = {
    flats: [ ]
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

  render () {
    if (this.state.flats.length === 0) {
      return (
        <h2>Loading flats..........</h2>
      );
    } else {
      return (
        <div className="app">
          <div className="left">
            <input className="search" />
            <div className="flats">
              {this.state.flats.map(flat => {
                return <Flat price={flat.price} name={flat.name} imageUrl={flat.imageUrl}/>
              })}
            </div>
          </div>
          <div className="map">
            <Map
              zoom={[14]}
              containerStyle={{height: '100vh', width: '100%' }}
              style="mapbox://styles/mapbox/streets-v8"
            />
          </div>
        </div>
      );
      }
    }
  }

export default App;
