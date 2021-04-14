import React from 'react'
import { Image,  Nav } from 'react-bootstrap';
import './Schedule.css'

const Schedule = () => {
    return (
        <div>
            <div align="center">
                <div style={{ marginTop: '5%' }}>
                    <h3>Quick Menu</h3>
                </div>
            </div>
            <div>
                <div style={{ paddingTop: '3.8%' }} align="center">
                    <h5>Schedule</h5>
                </div>
                <hr className="concept-horiz" />
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">
                        <Image className="team-pic" src="https://quincy-network.s3.ca-central-1.amazonaws.com/wp-content/uploads/sites/8/2020/01/Packers-Football-2016-860x484.jpg" roundedCircle/>
                        <span style={{marginLeft: '5%'}}>Week 1: Packers</span>
                        <hr className="sched-horiz" />
                    </Nav.Link>
                    <Nav.Link eventKey="link-1">
                        <Image className="team-pic" src="https://quincy-network.s3.ca-central-1.amazonaws.com/wp-content/uploads/sites/8/2020/01/Packers-Football-2016-860x484.jpg" roundedCircle/>
                        <span style={{marginLeft: '5%'}}>Week 2: Packers</span>
                        <hr className="sched-horiz" />
                    </Nav.Link>
                    <Nav.Link eventKey="link-2">
                        <Image className="team-pic" src="https://quincy-network.s3.ca-central-1.amazonaws.com/wp-content/uploads/sites/8/2020/01/Packers-Football-2016-860x484.jpg" roundedCircle/>
                        <span style={{marginLeft: '5%'}}>Week 3: Packers</span>
                        <hr className="sched-horiz" />
                    </Nav.Link>
                    <Nav.Link eventKey="link-3">
                        <Image className="team-pic" src="https://quincy-network.s3.ca-central-1.amazonaws.com/wp-content/uploads/sites/8/2020/01/Packers-Football-2016-860x484.jpg" roundedCircle/>
                        <span style={{marginLeft: '5%'}}>Week 4: Packers</span>
                        <hr className="sched-horiz" />
                    </Nav.Link>
                    <Nav.Link eventKey="link-4">
                        <Image className="team-pic" src="https://quincy-network.s3.ca-central-1.amazonaws.com/wp-content/uploads/sites/8/2020/01/Packers-Football-2016-860x484.jpg" roundedCircle/>
                        <span style={{marginLeft: '5%'}}>Week 5: Packers</span>
                        <hr className="sched-horiz" />
                    </Nav.Link>
                    <Nav.Link eventKey="link-5">
                        <Image className="team-pic" src="https://quincy-network.s3.ca-central-1.amazonaws.com/wp-content/uploads/sites/8/2020/01/Packers-Football-2016-860x484.jpg" roundedCircle/>
                        <span style={{marginLeft: '5%'}}>Week 6: Packers</span>
                        <hr className="sched-horiz" />
                    </Nav.Link>
                    <Nav.Link eventKey="link-6">
                        <Image className="team-pic" src="https://quincy-network.s3.ca-central-1.amazonaws.com/wp-content/uploads/sites/8/2020/01/Packers-Football-2016-860x484.jpg" roundedCircle/>
                        <span style={{marginLeft: '5%'}}>Week 7: Packers</span>
                        <hr className="sched-horiz" />
                    </Nav.Link>
                    <Nav.Link eventKey="link-7">
                        <Image className="team-pic" src="https://quincy-network.s3.ca-central-1.amazonaws.com/wp-content/uploads/sites/8/2020/01/Packers-Football-2016-860x484.jpg" roundedCircle/>
                        <span style={{marginLeft: '5%'}}>Week 8: Packers</span>
                        <hr className="sched-horiz" />
                    </Nav.Link>
                    <Nav.Link eventKey="link-8">
                        <Image className="team-pic" src="https://quincy-network.s3.ca-central-1.amazonaws.com/wp-content/uploads/sites/8/2020/01/Packers-Football-2016-860x484.jpg" roundedCircle/>
                        <span style={{marginLeft: '5%'}}>Week 9: Packers</span>
                        <hr className="sched-horiz" />
                    </Nav.Link>
                    <Nav.Link eventKey="link-9">
                        <Image className="team-pic" src="https://quincy-network.s3.ca-central-1.amazonaws.com/wp-content/uploads/sites/8/2020/01/Packers-Football-2016-860x484.jpg" roundedCircle/>
                        <span style={{marginLeft: '5%'}}>Week 10: Packers</span>
                        <hr className="sched-horiz" />
                    </Nav.Link>
                </Nav>
                {/* <Card>
                    <Card.Img variant="bottom" src="https://quincy-network.s3.ca-central-1.amazonaws.com/wp-content/uploads/sites/8/2020/01/Packers-Football-2016-860x484.jpg" />
                    <Card.Body>
                        <Card.Text>
                            Week 1
                        </Card.Text>
                    </Card.Body>
                </Card> */}
            </div>
        </div>
    )
}

export default Schedule;