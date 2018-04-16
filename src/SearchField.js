import React, { Component } from 'react';

const SearchField = function() {
    return(
        <form>
            <input type="text" placeholder="Find foto here..." />
            <button type="submit" name="submit" value="submit">Find</button>
        </form>
    );
}


export default SearchField;