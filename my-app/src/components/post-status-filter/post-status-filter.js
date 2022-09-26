import React, {Component} from 'react';


export default class PostStatusFilter extends Component{
    constructor(props){
        super(props);
        this.buttons = [
            {name: "all", label: "Все"},
            {name: "likes", label: "Понравилось"}
        ];

    }
    render(){
        const {setFilter} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            return(
                <button  onClick = {() => setFilter(name)} key = {name} className='btn btn-outline-secondary'>{label}</button>
            ) 
        });
        return(
            <div className='btn-group'>
                {buttons}
            </div>)
    }
}


