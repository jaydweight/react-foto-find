import React, { Component } from 'react';

let tagStyle = {
  fontSize: 14,
  color: 'grey',
  fontFamily: 'Arial'
}
let imgResultsStyle = {
  width: 150,
  marginRight: 8
}

function searchingFor(filterText) {
  return function(x) {
    return x.tag.toLowerCase().includes(filterText.toLowerCase()) || !filterText;
  }
}

class PhotoResults extends Component {
  render() {
    const filterText = this.props.filterText;
    const photos = this.props.photos;
    return (
      <div className="main">
        {
          photos.filter(searchingFor(filterText)).map(photos => 
            <div key={photos.id}>
                <p style={tagStyle}>{photos.tag}</p>
                <img style={imgResultsStyle} alt={photos.tag} src={photos.image} />
            </div>
          )
        }
      </div> 
    );
  }
}

export default PhotoResults;
