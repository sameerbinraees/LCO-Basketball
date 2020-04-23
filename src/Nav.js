import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {
    AppBar, Toolbar, Typography, List, ListItem,
    withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import logo from './assets/sports-logo-transparent.png'


const styleSheet = {
    list: {
        width: 200,
    },
    padding: {
        paddingRight: 30,
        cursor: "pointer",
    },

    sideBarIcon: {
        padding: 0,
        color: "white",
        cursor: "pointer",
    },

    logo: {
        height: 100,
        width: 100,

    },
}

class ResAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = { drawerActivate: false, drawer: false };
        this.createDrawer = this.createDrawer.bind(this);
        this.destroyDrawer = this.destroyDrawer.bind(this);
    }

    componentWillMount() {
        if (window.innerWidth <= 600) {
            this.setState({ drawerActivate: true });
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 600) {
                this.setState({ drawerActivate: true });
            }
            else {
                this.setState({ drawerActivate: false })
            }
        });
    }

    //Small Screens
    createDrawer() {
        return (
            <div>
                <AppBar position="static" style={{ backgroundColor: "#440464"/* #440464, #632d7e, #c86537,#fb8b24, #83314e, #943c44 */ }}>
                    <Toolbar>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <MenuIcon
                                className={this.props.classes.sideBarIcon}
                                onClick={() => { this.setState({ drawer: true }) }} />

                            <button className="logo-button" color="inherit" aria-label="menu">
                                <a href="/">
                                    <img src={logo} alt="logo" style={{width:"60px", height:"60px"}} />
                                </a>
                            </button>
                            <Typography color="inherit" variant="headline">Go fight for it team</Typography>
                            <Typography color="inherit" variant="headline"></Typography>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <SwipeableDrawer
                    open={this.state.drawer}
                    onClose={() => { this.setState({ drawer: false }) }}
                    onOpen={() => { this.setState({ drawer: true }) }}>

                    <div
                        tabIndex={0}
                        role="button"
                        onClick={() => { this.setState({ drawer: false }) }}
                        onKeyDown={() => { this.setState({ drawer: false }) }}>

                        <List className={this.props.classes.list}>
                            <ListItem key={1} button divider>
                                <Link href="/" color="inherit" className={this.props.classes.list}>
                                    Home
                                </Link>
                            </ListItem>

                            <ListItem key={2} button divider>
                                <Link href="/about" color="inherit" className={this.props.classes.list}>
                                    About Us
                                </Link>
                            </ListItem>

                            <ListItem key={3} button divider>
                                <Link href="/tournament" color="inherit" className={this.props.classes.list}>
                                    Tournament
                                </Link>
                            </ListItem>

                            <ListItem key={4} button divider>
                                <Link href="/team" color="inherit" className={this.props.classes.list}>
                                    Team
                                </Link>
                            </ListItem>

                            <ListItem key={5} button divider>
                                <Link href="/video" color="inherit" className={this.props.classes.list}>
                                    Video
                                </Link>
                            </ListItem>

                            <ListItem key={6} button divider>
                                <Link href="/faqs" color="inherit" className={this.props.classes.list}>
                                    FAQ
                                </Link>
                            </ListItem>

                            <ListItem key={7} button divider>
                                <Link href="/contact" color="inherit" className={this.props.classes.list}>
                                    Contact Us
                                </Link>
                            </ListItem>
                        </List>

                    </div>
                </SwipeableDrawer>

            </div>
        );
    }

    //Larger Screens
    destroyDrawer() {
        return (
            <AppBar position="static" style={{ backgroundColor: "#440464"/* #440464, #632d7e, #c86537,#fb8b24, #83314e, #943c44 */ }}>
                <Toolbar>
                    <button className="logo-button" color="inherit" aria-label="menu">
                        <a href="/">
                            <img src={logo} alt="logo" className={this.props.classes.logo} />
                        </a>
                    </button>
                    <Typography variant="h6" style={{ flexGrow: 1 }} color="inherit" >Go fight for it team</Typography>
                    <Typography variant="subheading" className={this.props.classes.padding} color="inherit" >
                    
                        <Link href="/" color="inherit" className="nav-a" style={{ textDecoration: "none" }}>
                            Home
                        </Link>

                        <Link href="/about" color="inherit" className="nav-a" style={{ textDecoration: "none" }}>
                            About Us
                        </Link>

                        <Link href="/tournament" color="inherit" className="nav-a" style={{ textDecoration: "none" }}>
                            Tournament
                        </Link>

                        <Link href="/team" color="inherit" className="nav-a" style={{ textDecoration: "none" }}>
                            Team
                        </Link>

                        <Link href="/video" color="inherit" className="nav-a" style={{ textDecoration: "none" }}>
                            Video
                        </Link>

                        <Link href="/faqs" color="inherit" className="nav-a" style={{ textDecoration: "none" }}>
                            FAQ
                        </Link>

                        <Link href="/contact" color="inherit" className="nav-a" style={{ textDecoration: "none" }}>
                            Contact Us
                        </Link>
                    </Typography>

                </Toolbar>
            </AppBar>
        )
    }

    render() {
        return (
            <div>
                {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
            </div>
        );
    }
}

ResAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);

