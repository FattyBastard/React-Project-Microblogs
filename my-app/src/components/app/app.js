import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';



const App = () => {

  const data = [{label:"fw3nfinfoin3iifw", state: false},
              {label:"wefwefreferfref", state: true},
              {label:"ewfreferferferfefrrf", state: false},
              {label:"sdfsfewqwe wefergfr rtbrybfr r", state: false}];

    return (
      <div className='app border-for'>
        <AppHeader />
        <div className='d-flex search-panel'>
          <SearchPanel />
          <PostStatusFilter />
        </div> 
          <PostList posts={data}/>
          <PostAddForm />
      </div>
    )
  }

export default App;