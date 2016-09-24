import React from 'react';

export default class SearchBar extends React.Component {

    render() {
        return (
            <div className="search-bar-container input-group">
                <input type="text" className="form-control" placeholder="Search for..."/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Search</button>
                </span>
            </div>
        );
    }
}