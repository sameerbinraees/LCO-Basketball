import React from 'react';
import './App.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

function Faq() {
    return (
        <div style={{ paddingLeft: "20%", paddingRight: "20%", paddingTop:"50px",
                        paddingBottom:"50px", backgroundColor:"#dfdddd"}}>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="collapse-cards-heading">
                        Lorem ipsum dolor sit amet
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="collapse-cards-body">
                        <Card.Body>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" className="collapse-cards-heading">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1" className="collapse-cards-body">
                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" className="collapse-cards-heading">
                        Lorem ipsum dolor sit amet
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2" className="collapse-cards-body">
                        <Card.Body>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3" className="collapse-cards-heading">
                        Lorem ipsum dolor sit amet
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3" className="collapse-cards-body">
                        <Card.Body>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4" className="collapse-cards-heading">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4" className="collapse-cards-body">
                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>
        </div>
    );
}
export default Faq;