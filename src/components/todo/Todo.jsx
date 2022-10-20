import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import TodoItem from "./TodoItem";
import Typography  from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Todo = () => {
    const [todoItems, setTodoItems] = useState([]);
    const [completedItems, setCompletedItems] = useState([]);

    const completeItem = (item_index) => {
        setTodoItems(todoItems.filter((_value, index) =>  index !== item_index));
    }

    const renderTodoItems = () => {
        return todoItems.map((title, index) => {
            return <TodoItem title={title} action={() => completeItem(index)}/>
        })
    }
    return (
        <Grid container direction="column">
            <Typography variant="h3">
                Todo items
            </Typography>
            {renderTodoItems()}
            <CreateTodo currentList={todoItems} create={setTodoItems}/>
        </Grid>
    )
}

export default Todo;
