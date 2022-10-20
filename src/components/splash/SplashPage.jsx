import React from 'react';
import Todo from '../todo/Todo'
import Typography from '@mui/material/Typography';

const SplashPage = () => {
    return(
        <>
            <Typography variant="h1">
                Todo List App
            </Typography>
            <Todo />
        </>
    )
}

export default SplashPage;
