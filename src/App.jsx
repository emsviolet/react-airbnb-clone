import { Component } from 'react';
import './App.scss';
import Flat from './Flat';

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

        </div>
      </div>
    );
  }
}

export default App;
