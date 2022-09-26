import React, {Component} from 'react';


export default class PostAddForm extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const {addItem} = this.props;
        return (
            <div className='d-flex'>
                <input className='form-control add-form-input'
                       placeholder="О чем вы сейчас думаете?"
                       type="text">
                </input>
                <button onClick={() => addItem("hello world!")} className='btn btn-outline-secondary'>
                    Добавть
                </button>
            </div>
        )
    }
}
