
import React, {Component} from 'react';
import Filter from './Filter';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({searchTerm:event.target.value})
    }
    render(){
        const { Data, onRemove, onCheckedOff } = this.props;
        return (
            <div className="Items">
                <div className="heading">
                <h1>{this.props.title} ({Data.length})</h1>
                </div>
                <Filter searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
                {Data.filter(iter => iter.value.toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
                    .map(iter =>
                        <label className="Row">
                            <input id={iter.id} checked={iter.packed} onChange={() => onCheckedOff(iter)} className="Input" type="checkbox" />
                            {iter.value}
                            <div className="Item-remove"><button  onClick={() => onRemove(iter)}>
                                Remove
                        </button>
                        </div>
                        </label>

                    )}
            </div>
        );
    }
}


export default Items;