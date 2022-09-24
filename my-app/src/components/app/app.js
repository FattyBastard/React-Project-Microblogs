import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';


export default  class App extends Component{

    constructor(props){
      super(props);

      this.state = {
        data : [{label:"fw3nfinfoin3iifw", state: false},
                {label:"wefwefreferfref", state: true},
                {label:"ewfreferferferfefrrf", state: false},
                {label:"sdfsfewqwe wefergfr rtbrybfr r", state: false},
                {label:"ere err erer erer erre", state: false}]
      };

      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(){
      console.log("add item");
    }

    deleteItem(){
      console.log("delete item");
    }

    render() {
      return (
        <div className='app border-for'>
          <AppHeader />
          <div className='d-flex search-panel'>
            <SearchPanel />
            <PostStatusFilter />
          </div> 
            <PostList 
              posts={this.state.data}
              deleteItem={this.deleteItem}/>
            <PostAddForm
              addItem={this.addItem} />
        </div>
      )
    }
}
