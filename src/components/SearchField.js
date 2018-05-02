import React, { Component } from 'react';

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event) {
        this.props.onFilterTextChange(event.target.value)
      }

  render() {   
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
                            value={this.props.filterText} 
                    />
                </form>
                </header>
            </div>
      </div>
    );
  }
}

export default SearchField;
