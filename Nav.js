import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from './assets/sports-logo-transparent.png'
import Link from '@material-ui/core/Link';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft: theme.spacing(2),
    },
    links: {
        marginLeft: theme.spacing(2),
        textDecoration: 'none',
        '&:hover': {
            padding: theme.spacing(3),
            textDecoration: 'none',
            backgroundColor: "#632d7e",
            color: "white"
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        '&:hover': {
            backgroundColor: "#632d7e"
        }
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        height: 100,
        width: 100,

    },
}));

function Nav() {

    const classes = useStyles();
    return (
        <div className="App">
            <AppBar position="static" style={{ backgroundColor: "#440464"/* #440464, #632d7e, #c86537,#fb8b24, #83314e, #943c44 */ }}>
                <Toolbar>
                    <button className={classes.menuButton} color="inherit" aria-label="menu">
                        <a href="/">
                            <img src={logo} alt="logo" className={classes.logo} />
                        </a>
                    </button>
                    <Typography variant="h6" className={classes.title}>
                        Go Fight for it team
                    </Typography>

                    <Typography className={classes.root}>
                    
                        <Link href="/"  color="inherit" className={classes.links}>
                            Home
                        </Link>

                        <Link href="/about" color="inherit" className={classes.links}>
                            About us
                        </Link>

                        <Link href="/tournament" color="inherit" className={classes.links}>
                            Tournament
                        </Link>

                        <Link href="/team" color="inherit" className={classes.links}>
                            Team
                        </Link>

                        <Link href="/video" color="inherit" className={classes.links}>
                            Video
                        </Link>

                        <Link href="/faqs"  color="inherit" className={classes.links}>
                            FAQs
                        </Link>

                        <Link href="/contact" color="inherit" className={classes.links}>
                            Contact us
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            
        </div>
    );
}

export default Nav;
