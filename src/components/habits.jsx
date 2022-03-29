import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    handleIncrease = (habit) =>{
        this.props.onIncrement(habit);
    }

    handleDecrease = (habit) =>{
        this.props.onDecrement(habit);
    }

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    }

    handleAddHabit = (name) => {
        console.log("handleAddHabit " + name)
        this.props.onAdd(name)

    }  

    render() {
        return (
            <ul>
                <HabitAddForm
                onAddHabit={this.handleAddHabit}
                ></HabitAddForm>

                {
                    this.props.habits.map(habit=>(
                        <Habit 
                        key={habit.id} 
                        habit={habit}
                        onIncrement={this.handleIncrease}
                        onDecrement={this.handleDecrease}
                        onDelete={this.handleDelete}
                        ></Habit>
                    ))
                }

                <button className='habits-reset' onClick={this.props.onReset} >reset</button>
            </ul>
        );
    }
}

export default Habits;