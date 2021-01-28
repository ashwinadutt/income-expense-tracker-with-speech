import React from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem, Menu } from '@material-ui/core'

import useStyles from './styles'

const Form = () => {
    const classes = useStyles();
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ...
                    </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl  fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select>
                        <MenuItem value="business">Business</MenuItem>
                        <MenuItem value="salary">Salary</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth type="number" label="Amount" />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth type="date" label="Date" />
            </Grid>
            <Button fullWidth className={classes.button} variant="outlined" color="primary">Create</Button>
        </Grid>
    )
}

export default Form
