import React, { memo } from 'react';


const HabitAddForm = memo(props => {
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;   
        name && props.onAddHabit(name);
        inputRef.current.value = "";
    };


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <input ref={inputRef} className='add-input' type="text" placeholder='type in habit!!'/>
            <button className="add-button">Add</button>
        </form>
    );

});
export default HabitAddForm;