import React from 'react';
import PropTypes from 'prop-types';

let tagStyle = {
    fontSize: 14,
    color: 'grey',
    fontFamily: 'Arial'
  }
  let imgResultsStyle = {
    width: 150
  }

const Photo = props => 
    <li>
        <p style={tagStyle}>{props.tag}</p>
        <img style={imgResultsStyle} src={props.image} />
    </li>    

Photo.propTypes = {
    tag: PropTypes.string.isRequired
}

export default Photo;