import React from 'react';
import './App.css';
import poster from './assets/Big Tournament Coming Soon.png'
import Grid from '@material-ui/core/Grid';

function tournament() {
    return (
        <div style={{ backgroundColor: "black" }}>
            <br />
            <Grid container>
                <Grid item xs={12}>
                    <img src={poster} alt="image1" style={{width:"100%", height:"auto"}}/>
                </Grid>
            </Grid>

            <br />
            <br />

        </div>
    )
}
export default tournament;