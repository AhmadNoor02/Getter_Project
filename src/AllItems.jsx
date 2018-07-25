import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';


class AllItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.GetVale = this.GetVale.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    GetVale(event){
        const value = event.target.value;
        this.setState({value});
    }
    handleSubmit(event){
        const {onSubmit} = this.props;
        const {value} = this.state;
        event.preventDefault();
        onSubmit({value, id:uniqueId() , packed:true});
    }
    render() {
        const {value} = this.state; 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={value} onChange={this.GetVale} />
                        <input type="submit" value="submit" />
                    </label>
                </form>
            </div>
        );
    }
}

export default AllItems;