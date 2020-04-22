import React from 'react';
import './App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const About = () => (
    <div style={{ backgroundColor: "#f2f2f2" }}>
        <div class="bgimg-1">
            <div class="caption">
                <span class="border">
                    <font style={{ verticalAlign: "inherit" }}>
                        Who we are
                    </font>
                </span>
            </div>
        </div>
        <div style={{ padding: 20, backgroundColor: "#f2f2f2" }}>
            <h1>We are the LCO!</h1>
            <h4>Find us at LCO Basketball Ground</h4>
            <h2>Go fight for it Team</h2>
        </div>

        <div class="bgimg-2">
            <div class="caption">
                <span class="border" style={{ backgrounColor: "transparent", fontSize: 25, color: "#f7f7f7;" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                        OUR VALUES
                    </font>
                </span>
            </div>
        </div>
        <div style={{ padding: 20, paddingLeft: 50, paddingRight: 50, }}>
            <TableContainer component={Paper} >
                <Table aria-label="simple table">
                    <TableBody >
                        <TableRow hover={true} >
                            <TableCell align="left" style={{ paddingLeft: 35 }}>
                                <h1 >#more_than_a_team</h1>
                                <h5>Here at LCO, we are not just a team, we are more than a team, a family</h5>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

        <div style={{ paddingBottom: 20, paddingLeft: 50, paddingRight: 50, }}>
            <TableContainer component={Paper} >
                <Table aria-label="simple table">
                    <TableBody >
                        <TableRow hover={true} >
                            <TableCell align="right" style={{ paddingRight: 35 }}>
                                <h1>#intensity</h1>
                                <h5>Every game we play is full of intensity, our players giver their 100% on the pitch</h5>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        <div style={{ paddingBottom: 20, paddingLeft: 50, paddingRight: 50, }}>
            <TableContainer component={Paper} >
                <Table aria-label="simple table">
                    <TableBody >
                        <TableRow hover={true} >
                            <TableCell align="left" style={{ paddingLeft: 35 }}>
                                <h1>#I.R.O.N.</h1>
                                <h5>I Integrity </h5>
                                <h5>R Reliability </h5>
                                <h5>O Opportunity </h5>
                                <h5>N Never give up </h5>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        <div class="bgimg-3">
            <div class="caption">
                <span class="border" style={{ backgrounColor: "transparent", fontSize: 25, color: "#f7f7f7;" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                        Our Slogan
                    </font>
                </span>
            </div>
        </div>
        <div style={{ padding: 20, paddingLeft: 50, paddingRight: 50, }}>
            <TableContainer component={Paper} >
                <Table aria-label="simple table">
                    <TableBody >
                        <TableRow hover={true} >
                            <TableCell align="center" >
                                <h2>Go Fight for it Team!</h2>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
);

export default About;

