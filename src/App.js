import React, { Component } from 'react';
import './App.css';

let tagStyle = {
  fontSize: 14,
  color: 'grey',
  fontFamily: 'Arial'
}
let imgResultsStyle = {
  width: 150,
  marginRight: 8
}

const photos = [
  {
    id: 1,
    tag: 'Kira',
    image: "https://www.dropbox.com/s/797f6j5dcfewanb/kira.jpg?raw=1"
  },
  {
    id: 2,
    tag: 'Kennedy',
    image: "https://www.dropbox.com/s/yuw3t8hp3vxf8ma/kennedy.jpg?raw=1"
  },
  {
    id: 3,
    tag: 'Hunter',
    image: "https://www.dropbox.com/s/h89hsmxq44wn3h4/hunter.jpg?raw=1"
  },
  {
    id: 4,
    tag: 'Lucy',
    image: "https://www.dropbox.com/s/nvqmdnpgzrndo5s/lucy.jpg?raw=1"
  },
  {
    id: 5,
    tag: 'Crew',
    image: "https://www.dropbox.com/s/hzxgws5hriuakdz/crew.jpg?raw=1"
  }
]  

function searchingFor(term) {
  return function(x) {
    return x.tag.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: photos ,
      term: '',
    }
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState({ term: event.target.value })
  }


  render() {
    const {term, photos} = this.state;
    return (
      <div className="App">
        <header>
          <h1>Foto Find</h1>
          <p>An App to help you find your fotos</p>
          <form>
            <input type="text" 
                    placeholder="Find foto here..." 
                    onChange={this.searchHandler}
                    value={term} 
            />
          </form>
        </header>
        <div className="main">
            {
              photos.filter(searchingFor(term)).map(photos => 
                <div key={photos.id}>
                    <p style={tagStyle}>{photos.tag}</p>
                    <img style={imgResultsStyle} alt={photos.tag} src={photos.image} />
                </div>
              )
            }
        </div>
      </div>
    );
  }
}

export default App;
