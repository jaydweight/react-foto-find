import React, { Component } from 'react';
import PhotoResults from './PhotoResults';

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filterText: '',
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event) {
        this.setState({ filterText: event.target.value })
      }

  render() {
    const {filterText} = this.state;      
    return (
        <div>
            <div>
                <header>
                <h1>Foto Find</h1>
                <p>An App to help you find your fotos</p>
                <form>
                    <input type="text" 
                            placeholder="Find foto here..." 
                            onChange={this.searchHandler}
                            value={filterText} 
                    />
                </form>
                </header>
            </div>
        <PhotoResults />
      </div>
    );
  }
}

export default SearchField;
