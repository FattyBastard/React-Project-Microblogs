import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [{ label: "fw3nfinfoin3iifw", state: false, like: false, id: 1 },
              { label: "wefwefreferfref", state: true, like: false, id: 2},
              { label: "ewfreferferferfefrrf", state: false, like: false, id: 3 },
              { label: "sdfsfewqwe wefergfr rtbrybfr r", state: false, like: false, id: 4 },
              { label: "ere err erer erer erre", state: false, like: false, id: 5 }],
      term: '',
      filter: 'all'
    };

    this.maxId = 6

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.toggleImportant = this.toggleImportant.bind(this);
    this.toggleLike = this.toggleLike.bind(this);

    this.searchPosts = this.searchPosts.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);

    this.filterPosts = this.filterPosts.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  setFilter(filter){
    this.setState({filter : filter});
  }

  searchPosts(items, term){
    if (term.length === 0){
      return items;
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1
    });
  }

  filterPosts(items, filter){

    if (filter === "likes"){
      return items.filter((item) => item.like);
    }
    else{
      return items;
    }
  }

  onUpdateSearch(term){
    this.setState({term : term});
  }

  toggleLike(id){
    
    this.setState(({data}) => {

      const index = this.state.data.findIndex((item) => item.id === id)
      const old = data[index];
      const newItem = {...old, like: !old.like}

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }
    });

  }
  toggleImportant(id){

    this.setState(({data}) => {

      const index = this.state.data.findIndex((item) => item.id === id)
      const old = data[index];
      const newItem = {...old, state: !old.state}

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }
    });  
  }

  addItem(body) {

    const addElement = {
      label: body,
      state: false,
      like: false,
      id: this.maxId++
    }

    this.setState(({data}) => {
      const newData = [...this.state.data, addElement];
      return {
        data: newData
      }
    });
  }

  deleteItem(id) {
   
    const index = this.state.data.findIndex(elem => elem.id === id);
    const newData = [...this.state.data.slice(0,index), ...this.state.data.slice(index + 1,)];
    this.setState(({data}) => ({ data: newData}));
  
  }

  render() {

    const {data, term, filter} = this.state;
    
    const numberOfLikedPosts = data.filter((item) => item.like).length;
    const numberOfAllPosts = data.length;

    const visiblePosts = this.filterPosts(this.searchPosts(data, term), filter);
    
    return (
      <div className='app border-for'>
        <AppHeader 
          likes = {numberOfLikedPosts}
          sizePosts = {numberOfAllPosts}/>
        <div className='d-flex search-panel'>
          <SearchPanel 
            onUpdateSearch = {this.onUpdateSearch}/>
          <PostStatusFilter
          setFilter = {this.setFilter}/>
        </div>
        <PostList
          posts = {visiblePosts}
          deleteItem = {this.deleteItem}
          toggleImportant = {this.toggleImportant}
          toggleLike = {this.toggleLike}/>
        <PostAddForm
          addItem={this.addItem} />
      </div>
    )
  }
}
