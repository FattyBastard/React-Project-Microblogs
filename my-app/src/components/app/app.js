import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';

const App = () => {
    return (
      <div>
        <AppHeader />
        <div className='d-flex search-panel'>
          <SearchPanel />
          <PostStatusFilter/>
        </div> 
      </div>
    )
  }

export default App;