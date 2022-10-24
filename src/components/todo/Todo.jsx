import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import TodoItem from "./TodoItem";
import Typography  from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Todo = () => {
    const [todoItems, setTodoItems] = useState([]);
    const [completedItems, setCompletedItems] = useState([]);

    const completeItem = (item_index) => {
        const newCompletedItem = todoItems[item_index];
        setCompletedItems([...completedItems, newCompletedItem]);
        setTodoItems(todoItems.filter((_value, index) =>  index !== item_index));
    }

    const deleteItem = (item_index, completedList = false) => {
        console.log('from completed list:', completedList);
        if(completedList){
            setCompletedItems(completedItems.filter((_value, index) => index !== item_index));
        } else {
            setTodoItems(todoItems.filter((_value, index) => index !== item_index));
        }
    }

    const renderTodoItems = () => {
        return todoItems.map((title, index) => {
            return <TodoItem title={title} completeItem={() => completeItem(index)} deleteItem={() => deleteItem(index)}/>
        })
    }

    const renderCompletedList = () => {
        return completedItems.map((title, index) => {
            return <TodoItem title={title} completeItem={() => completeItem(index)} deleteItem={() => deleteItem(index, true)} completedList={true}/>
        })
    }

    console.log(completedItems);

    return (
        <Grid container direction="column">
            <Typography variant="h3">
                Todo items
            </Typography>
            {renderTodoItems()}
            <CreateTodo currentList={todoItems} create={setTodoItems}/>
            <Typography variant="h3">
                Completed Todo Items
            </Typography>
            {renderCompletedList()}
        </Grid>
    )
}

export default Todo;
