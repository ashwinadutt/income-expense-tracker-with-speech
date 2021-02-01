import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import { PushToTalkButtonContainer, PushToTalkButton, ErrorPanel} from '@speechly/react-ui'

import Main from './components/Main/Main'
import Details from './components/Details/Details'
import useStyles from './styles'
import { ExpenseTrackerContext } from './context/context'

const App = () => {
    const classes = useStyles();
    const {appName} = useContext(ExpenseTrackerContext)

    return (
        <div>
            <Grid container className={classes.grid}  spacing={0} alignItems="center" justify="center" style={{height: '100vh'}}>
                <Grid item xs={12} sm={4}>
                    <Details title='Income' />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Details title="Expense" />
                </Grid>
            </Grid>
            
            <PushToTalkButtonContainer>
                <PushToTalkButton />
                <ErrorPanel />
            </PushToTalkButtonContainer>
        </div>
    )
}

export default App
