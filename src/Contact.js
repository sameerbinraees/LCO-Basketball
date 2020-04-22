import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            flexGrow: 1,

        },
        form: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        table: {

            borderBottom: "none"
        },

    },
}));

function Contact() {
    const classes = useStyles();
    return (
        <div style={{ backgroundColor: "#f2f2f2" }}>
            <div style={{ padding: "20px", }}>
                <h1>CONTACT US!</h1>
                <h4>We love to hear from our fans!</h4>
                <h6>Our fanbase is what motivates us, you are our real pride, let's hear from you.</h6>

                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6}>
                        <form className={classes.form} noValidate autoComplete="off">
                            <Grid container
                                direction="column"
                                justify="center"
                                alignItems="stretch"
                            >
                                <TextField id="outlined-basic" label="Name" variant="outlined" style={{ margin: "30px" }} />
                                <TextField id="outlined-basic" label="Email" variant="outlined" type="email" style={{ marginLeft: "30px", marginRight: "30px", marginBottom: "30px" }} />
                                <TextField id="outlined-basic" label="Description" variant="outlined" type="email" multiline="true" rows="5" style={{ marginLeft: "30px", marginRight: "30px", marginBottom: "30px" }} />

                            </Grid>
                            <Button variant="contained" style={{backgroundColor:"#440464", color:"white"}}>
                                Submit
                            </Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ marginTop: "30px", paddingRight: "30px", paddingLeft: "30px" }}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">

                                <TableBody>
                                    <TableRow hover={true}>
                                        <TableCell align="left"><LocationOnIcon fontSize="large" /></TableCell>
                                        <TableCell align="left"><b> LCO Baketball Ground, Frictional Road</b></TableCell>
                                    </TableRow>

                                    <TableRow hover={true}>
                                        <TableCell align="left"><CallIcon fontSize="large" /></TableCell>
                                        <TableCell align="left"><b>+91999999999</b></TableCell>
                                    </TableRow>

                                    <TableRow hover={true}>
                                        <TableCell align="left"><EmailIcon fontSize="large" /></TableCell>
                                        <TableCell align="left"><b>LCO@FictionalDomain.com</b></TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Contact;
