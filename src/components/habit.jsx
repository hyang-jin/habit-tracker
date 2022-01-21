import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count:0
    };

    handleIncrease = (event) =>{
        //state 오브젝트 안에 있는 count를 증가한뒤 업데이트
        this.setState({count: this.state.count + 1});
    }

    handleDecrease = (event) =>{
        //state 오브젝트 안에 있는 count를 증가한뒤 업데이트
        const count = this.state.count - 1;
        this.setState({count: count < 0?0:count});
    }


    render() {
        const { name, count } = this.props.habit;
        return (
            <li className='habit'>
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className ="habit-button habit-increase" onClick={this.handleIncrease}>
                    <i className="far fa-plus-square"></i>
                </button>
                <button className ="habit-button habit-decrease" onClick={this.handleDecrease}>
                    <i className="far fa-minus-square"></i>
                </button>
                <button className ="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;