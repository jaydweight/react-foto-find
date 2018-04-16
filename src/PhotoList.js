import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

const PhotoList = props =>
    <ul>
        {props.users.map((user, index) =>
        <Photo key={index} 
            tag={user.tag}
            image={user.image} />
        )}
    </ul>;

PhotoList.propTypes = {
    users: PropTypes.array.isRequired
}


export default PhotoList;