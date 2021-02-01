import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import { useSpeechContext } from '@speechly/react-client'



import Form from '../Form/Form'
import List from '../List/List'
import useStyles from './styles'

const Main = () => {
const classes = useStyles();
const { speechState, segment, toggleRecording } = useSpeechContext();

    return (
        <>
        <Card className={classes.root}>
                <CardHeader title="Expense Tracker" subheader="with voice input support" />
                <CardContent>
                    <Typography align="center" variant="h5" >Total Balance $100</Typography>
                    <Typography variant="subtitle1" style={{lineHeight: '1.5em', marginTop: '20px' }}>
                        Try saying: Add income for $100 in catergory salary for Monday
                    </Typography>
                    <Divider />
                    <Form />
                </CardContent>
                <CardContent className={classes.CardContent}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <List />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <div className="status">{speechState}</div>
      {segment ? (
        <div className="segment">
          {segment.words.map((w) => w.value).join(" ")}
        </div>
      ) : null}
      <div className="mic-button">
        <button onClick={toggleRecording}>Record</button>
      </div>
        </>
    )
}

export default Main
