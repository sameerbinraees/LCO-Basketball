import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Team_Mem from './assets/artimg-2.png';
import Grid from '@material-ui/core/Grid';

function Team() {

    return (
        <div style={{ backgroundColor: "#f2f2f2" }}>
            <Grid container direction="row"
                justify="center"
                alignItems="center" >
                <Grid item xs={12} sm={6} className="upper-team-cards">
                    <Card className="upper-team-imgs">
                        <Card.Img variant="top" src={Team_Mem} />
                        <Card.Body>
                            <Card.Title>Team Member 1</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} className="upper-team-cards">
                    <Card className="upper-team-imgs">
                        <Card.Img variant="top" src={Team_Mem} />
                        <Card.Body>
                            <Card.Title>Team Member 2</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} className="remaining-team-cards">
                    <Card className="remaining-team-imgs">
                        <Card.Img variant="top" src={Team_Mem} />
                        <Card.Body>
                            <Card.Title>Team Member 3</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} className="remaining-team-cards">
                    <Card className="remaining-team-imgs">
                        <Card.Img variant="top" src={Team_Mem} />
                        <Card.Body>
                            <Card.Title>Team Member 4</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} className="remaining-team-cards">
                    <Card className="remaining-team-imgs">
                        <Card.Img variant="top" src={Team_Mem} />
                        <Card.Body>
                            <Card.Title>Team Member 5</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Grid>

            </Grid>

        </div>
    );
}
export default Team;