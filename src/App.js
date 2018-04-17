import React, { Component } from 'react';
import SearchField from './SearchField';
import PhotoList from './PhotoList';
import './App.css';

class App extends Component {
  
  state = {
    users: [
        {
          tag: 'Kira',
          image: "https://www.dropbox.com/s/797f6j5dcfewanb/kira.jpg?raw=1"
        },
        {
          tag: 'Kennedy',
          image: "https://www.dropbox.com/s/yuw3t8hp3vxf8ma/kennedy.jpg?raw=1"
        },
        {
          tag: 'Hunter',
          image: "https://www.dropbox.com/s/h89hsmxq44wn3h4/hunter.jpg?raw=1"
        },
        {
          tag: 'Lucy',
          image: "https://www.dropbox.com/s/nvqmdnpgzrndo5s/lucy.jpg?raw=1"
        },
        {
          tag: 'Crew',
          image: "https://www.dropbox.com/s/hzxgws5hriuakdz/crew.jpg?raw=1"
        }
      ]   
    }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Foto Find</h1>
          <p>An App to help you find your fotos</p>
          <SearchField />
        </header>
        <div className="main">
          <PhotoList users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
