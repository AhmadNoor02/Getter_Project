import React, { Component } from 'react';

class Filter extends Component {
    render() {
        const { searchTerm,handleChange} = this.props;
        return (
            <div>
            <input
                className="Items-searchTerm"
                value={searchTerm}
                onChange={handleChange}
                type="text"
            />
            </div>
        );
    }
}

export default Filter;