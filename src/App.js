import React, { Component } from 'react';
import SearchField from './components/SearchField';
import PhotoResults from './components/PhotoResults';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: photos,
      filterText: '',
    };
    this.searchHandler = this.searchHandler.bind(this);    
  }

  searchHandler(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div className="App">
        <SearchField 
          filterText = {this.state.filterText}
          photos = {this.state.photos}
          onFilterTextChange={this.searchHandler}
        />
        <PhotoResults
          filterText = {this.state.filterText}
          photos = {this.state.photos}                    
        />
      </div>
    );
  }
}

export default App;
