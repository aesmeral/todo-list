import React, { useState } from "react";
import TextField from '@mui/material/TextField/';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const CreateTodo = ({ currentList, create }) => {
    const [title, setTitle] = useState('');

    const createItem = () => {
        create([...currentList, title]);
        setTitle('');
    }

    return(
        <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center" sx={{m: 'auto'}}>
            <Grid item>
                <TextField 
                sx={{width: '500px'}}
                label="New todo list item"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={createItem}>Create Todo Item</Button>
            </Grid>
        </Grid>
    )
}

export default CreateTodo;
