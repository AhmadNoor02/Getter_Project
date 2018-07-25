import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import {connect} from 'react-redux'; 
import SetSearchTerm from './ActionCreators';


class AllItems extends Component {
   
    render() {
        const {Searching,GetValue,handleSubmit} = this.props; 
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" value={Searching} onChange={GetValue} />
                        <input type="submit" value="submit" />
                    </label>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Searching:state.Searching
})

const mapDispatchToProps = dispatch => ({
    GetValue(event){
        dispatch(SetSearchTerm(event.target.value))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(AllItems);