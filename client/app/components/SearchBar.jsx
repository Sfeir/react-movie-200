import React from 'react';

export default class SearchBar extends React.Component {

    onSearch() {
        const searchKey = this.refs.searchBar.value;
        this.props.onSearch(searchKey);
    }

    render() {
        return (
            <div className="search-bar-container input-group">
                <input type="text" className="form-control" placeholder="Search for..." ref="searchBar"/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.onSearch.bind(this)}>Search</button>
                </span>
            </div>
        );
    }
}