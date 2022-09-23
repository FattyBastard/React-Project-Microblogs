import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';

const App = () => {
    return (
      <div>
        <AppHeader />
        <div className='d-flex search-panel'>
          <SearchPanel />
          <PostStatusFilter/>
        </div> 
          <PostList/>
      </div>
    )
  }

export default App;