import React from 'react';

const AppHeader = () => {
    return (
      <div
          className="app-header d-flex justify-content-between">
        <p className='app-header-name'>Васильев Никита</p>
        <p className="app-header-notes">5 записей, из них 3 лайка</p>
      </div>
    )
  }

export default AppHeader;