import React, {Component}from 'react';

export default class SearchPanel extends Component{
  constructor(props){
    super(props);

    this.state = {
      text : ''
    }

    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }

  onUpdateSearch(event){
    const term = event.target.value;
    this.setState(({text}) => ({text: term}));
    this.props.onUpdateSearch(term);
  }

  render(){
    return (
      <input 
        onChange={this.onUpdateSearch}
        className="form-control add-form-input" 
        type="text" 
        placeholder='Поиск по записям'> 
      </input>
    )
  }  
}
