import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({title, completeItem, deleteItem, completedList}) => {
    console.log(completedList);
    return(
        <Card variant="outlined" sx={{width: '50%', m: 'auto'}}>
            <CardContent>
                <Grid container direction="row" alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography>{title}</Typography>
                    </Grid>
                    <Grid item>
                    <Grid container>
                        {!completedList &&  <Button size="small" variant="outlined" onClick={completeItem}>Complete</Button> }
                        <Button color="error" onClick={deleteItem}>
                            <DeleteIcon />
                        </Button>
                    </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )    
}

TodoItem.defaultProps = {
    completedList: false,
}

export default TodoItem;
