import React from 'react';
import './App.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function Footer() {

    return (
        <Paper variant="elevation">
            <div className="footer">
                <br />

                <Grid container >
                    <Grid item xs={12} sm={6}>
                        <h3>Contact</h3>
                        <br />
                        <p><b>Phone Number:</b> +91999999999</p>
                        <p><b>Address:</b>  LCO Basketball Ground, Frictional Road</p>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <h3>Connect</h3>
                        <br />
                        <p >
                            <Tooltip title="Facebook">
                                <a href="https://www.facebook.com/" className="social-links">
                                    <FacebookIcon fontSize="large" className="social-icon-fb" />
                                </a>
                            </Tooltip> {' '}
                            <Tooltip title="Instagram">
                                <a href="https://www.instagram.com/" className="social-links">
                                    <InstagramIcon fontSize="large" className="social-icon-insta" />
                                </a>
                            </Tooltip> {' '}
                            <Tooltip title="Twitter">
                                <a href="https://twitter.com/explore" className="social-links">
                                    <TwitterIcon fontSize="large" className="social-icon-tw" />
                                </a>
                            </Tooltip>
                        </p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <p>&copy; 2020<a href="https://github.com/sameerbinraees" className="dev-link"> Muhamad Sameer Bin Raees </a></p>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    )
}
export default Footer;
