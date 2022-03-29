import { Component } from 'react/cjs/react.production.min';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component{
  state = {
      habits:[
          { id:1, name: "reading", count: 0},
          { id:2, name: "running", count: 0},
          { id:3, name: "coding", count: 0}
      ]
  };

  handleIncrease = (habit) =>{
      const habits = this.state.habits.map(item => {
          if(item.id === habit.id){
            return {...habit, count: habit.count+1};
          }
          return item;
      });
      this.setState({habits});
  }

  handleDecrease = (habit) =>{
    const habits = this.state.habits.map(item => {
        if(item.id === habit.id){
            const count = habit.count-1;
            return { ...habit, count: count<0?0:count}
        } 
        return item;

    });

      this.setState({habits});
  }

  handleDelete = (habit) => {
      console.log(` delete ${habit.name}`)
      const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({habits});
  }

  handleAdd = (name) => {
    console.log("handleAdd " + name)
    const habits = [...this.state.habits,{
        id: Date.now(),
        name,
        count: 0
    }];
    this.setState({habits});
  }

  handleReset = () => {
    const habits = this.state.habits.map(item => {
        if(item.count !== 0){
            return {...item, count:0};
        }
        return item;
    })
    this.setState({habits}); 
  }


  render(){      
    return(
        <div>
            <Navbar
            totalCount={this.state.habits.filter(item => item.count > 0).length}
            >
            </Navbar>
            <Habits
            habits={this.state.habits}
            onIncrement={this.handleIncrease}
            onDecrement={this.handleDecrease}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            onReset={this.handleReset}
            ></Habits>
        </div>
    );
  }

}


export default App;
