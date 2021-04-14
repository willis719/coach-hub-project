import React from 'react'
import { Card, Col, Form, Image, Nav } from 'react-bootstrap'
import './SocialFeedCard.css'

const SocialFeedCard = () => {
    return (
            <Col lg="4">
                <div align="center">
                    <Form style={{ marginTop: '5%' }}>
                        <Form.Control type="text" placeholder="Search for Atheletes..." />
                    </Form>
                </div>
                <div>
                    <Nav activeKey="/home" className="social-nav">
                        <Nav.Item>
                            <Nav.Link href="/home">Highlights</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Depth Chart</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Connect</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Sub-Teams</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4">Roster</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <hr className="horiz" />
                </div>
                <div>
                    <Card className="ind-card">
                        <Col className="pro-name" lg="12">
                            <Image className="pro-pic" src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70" roundedCircle />
                            <span className="name">Julio Jones</span>
                            <small className="timeStamp">1 min ago</small>
                        </Col>
                        <Card.Text style={{ padding: '2% 2% 0 2%' }}>
                            This is a description of the video and could be more if wanted too but it is okay for right now
                                    </Card.Text>
                        <Card.Img className="post-pic" src="https://www.profootballhof.com/assets/1/17/1st_ACT_8d420e8dbbff4c5a8f0085722faa10c9.jpg?69258" />
                        <Card.Text style={{ padding: '2% 2% 0 2%' }}>
                            <h3>Video Title</h3>
                            <small style={{ paddingBottom: '2%' }}>2020-2021 Junior Season</small>
                        </Card.Text>
                    </Card>
                </div>
            </Col>
    )
}

export default SocialFeedCard;

