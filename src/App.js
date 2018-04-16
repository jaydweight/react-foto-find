import React, { Component } from 'react';
import SearchField from './SearchField';
import PhotoList from './PhotoList';
import './App.css';

let tagStyle = {
  fontSize: 14,
  color: 'grey',
  fontFamily: 'Arial'
}
let imgResultsStyle = {
  width: 150
}

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
          {/* <ul>
              <li>
                <img src={this.state.user[0].image} style={imgResultsStyle} />
                <h1 style={tagStyle}>{this.state.user[0].tag}</h1>
              </li>  
              <li>
                <img src={this.state.user[1].image} style={imgResultsStyle} />
                <h1 style={tagStyle}>{this.state.user[1].tag}</h1>
              </li>
              <li>
                <img src={this.state.user[2].image} style={imgResultsStyle} />
                <h1 style={tagStyle}>{this.state.user[2].tag}</h1>
              </li>
              <li>
                <img src={this.state.user[3].image} style={imgResultsStyle} />
                <h1 style={tagStyle}>{this.state.user[3].tag}</h1>
              </li>
              <li>
                <img src={this.state.user[4].image} style={imgResultsStyle} />
                <h1 style={tagStyle}>{this.state.user[4].tag}</h1>
              </li>
          </ul>            */}
        </div>
      </div>
    );
  }
}

export default App;
