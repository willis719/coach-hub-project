import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CoachNav from '../components/CoachNav'
import Concepts from '../components/Concepts'
import Schedule from '../components/Schedule'
import SocialFeedCard from '../components/SocialFeedCard'

const Home = () => {
    return (
        <div className="body">
            <div>
                <CoachNav />
            </div>
            <div>
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Concepts />
                        <SocialFeedCard />
                        <Col lg='4'>
                            <Schedule />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Home;