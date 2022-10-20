import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const TodoItem = ({title, action}) => {
    return(
        <Card variant="outlined" sx={{width: '50%', m: 'auto'}}>
            <CardContent>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Typography>{title}</Typography>
                    <Button size="small" variant="outlined" onClick={action}>Complete</Button>
                </Grid>
            </CardContent>
        </Card>
    )    
}

export default TodoItem;
