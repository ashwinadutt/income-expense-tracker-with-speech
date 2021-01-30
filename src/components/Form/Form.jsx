import React, { useState, useContext } from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem, Menu } from '@material-ui/core'
import { v4 as  uuidv4} from 'uuid'

import useStyles from './styles'
import { ExpenseTrackerContext } from '../../context/context'
import { incomeCategories, expenseCategories } from '../../constants/categories'
import { formatDate } from '../../utils/formatDate'

const intialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date())
}

const Form = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(intialState);
    const {addTransaction} = useContext(ExpenseTrackerContext);
    const categoryExpenses = formData.type === 'Income' ? incomeCategories : expenseCategories;

    const createTransaction = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4()}
        
        addTransaction(transaction);
        setFormData(intialState);
    }
        
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
                    <Select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                        {categoryExpenses.map(c => <MenuItem value={c.type}>{c.type}</MenuItem>)} 
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth type="number" label="Amount" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth type="date" label="Date" value={formData.date} onChange={e => setFormData({...formData, date: formateDate(e.target.value)})} />
            </Grid>
            <Button fullWidth className={classes.button} variant="outlined" color="primary" onClick={createTransaction}>Create</Button>
        </Grid>
    )
}

export default Form
