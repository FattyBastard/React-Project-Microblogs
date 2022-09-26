import React, {Component} from 'react';


export default class PostAddForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            text: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(event){
        this.setState(({text}) => ({
            text: event.target.value
        }));
    }

    onSubmit(event){
        event.preventDefault();
        this.props.addItem(this.state.text);
        this.setState(({text}) => ({text: ''}));
    }

    render(){
        const {addItem} = this.props;
        return (
            <form onSubmit={this.onSubmit} className='d-flex'>
                <input 
                    onChange={this.onValueChange}
                    value={this.state.text}
                    className='form-control add-form-input'
                    placeholder="О чем вы сейчас думаете?"
                    type="text">
                </input>
                <button className='btn btn-outline-secondary'>
                    Добавть
                </button>
            </form>
        )
    }
}
