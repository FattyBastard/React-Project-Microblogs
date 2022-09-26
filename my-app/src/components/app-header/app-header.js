import React, {Component} from 'react';

export default class AppHeader extends Component{

  constructor(props){
    super(props);
  }

  render(){

    const {likes, sizePosts} = this.props;

    return (
      <div
          className="app-header d-flex justify-content-between">
        <p className='app-header-name'>Васильев Никита</p>
        <p className="app-header-notes">{sizePosts} записей, из них {likes} лайка</p>
      </div>
    )

  }
}

