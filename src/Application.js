import React, { Component } from 'react';
import AllItems from './AllItems';
import Items from './Items';
import uniqueId from 'lodash/uniqueId';
import './Table.css'


const Data = [
    { value: 'Pants', id: uniqueId(), packed: false },
    { value: 'Jacket', id: uniqueId(), packed: false },
    { value: 'iPhone Charger', id: uniqueId(), packed: false },
    { value: 'MacBook', id: uniqueId(), packed: false },
    { value: 'Sleeping Pills', id: uniqueId(), packed: true },
    { value: 'Underwear', id: uniqueId(), packed: false },
    { value: 'Hat', id: uniqueId(), packed: false },
    { value: 'T-Shirts', id: uniqueId(), packed: false },
    { value: 'Belt', id: uniqueId(), packed: false },
    { value: 'Passport', id: uniqueId(), packed: true },
    { value: 'Sandwich', id: uniqueId(), packed: true },
];
 
class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: Data
        }
        this.Change = this.Change.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.unMarkall = this.unMarkall.bind(this);
        this.Markall = this.Markall.bind(this);   
        this.markAsPacked = this.markAsPacked.bind(this); 
    }
    Change(item) {
        this.setState({ term: [item, ...this.state.term] })
    }
    onRemove(item){
        this.setState({term:this.state.term.filter(iter => iter.id !== item.id)});
    }
    unMarkall(){
        this.setState({term: this.state.term.map(item => ({ ...item, packed: false }))})
    }
    Markall() {
        this.setState({ term: this.state.term.map(item => ({ ...item, packed: true })) })
    }
    markAsPacked(item){
        const otherItems = this.state.term.filter(other => other.id !== item.id);
        const updatedItem = { ...item, packed: !item.packed };
        this.setState({ term: [updatedItem, ...otherItems] });
    }
    render() {
        const {term} = this.state;        
        const UnPackedItems = term.filter(item => !item.packed);
        const PackedItems = term.filter(item => item.packed);
        return (
            <div className="main">
                <AllItems onSubmit={this.Change}/>
                <Items Data={UnPackedItems} title="Unpacked Items" onRemove={this.onRemove} onCheckedOff={this.markAsPacked}/>
                <Items title="packed Items" Data={PackedItems} onRemove={this.onRemove} onCheckedOff={this.markAsPacked}/>
                <button className="unMark" onClick={this.unMarkall}>unPackedall</button>
                <button className="Mark" onClick={this.Markall}>packedall</button>
            </div>
        );
    }
}

export default Application;