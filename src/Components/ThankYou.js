import React from 'react'
import { Col } from 'react-bootstrap'
const ThankYou = () => {
    return (
        <Col className="text-center" sm={{ span: 9, offset: 2 }} md={{ span: 6, offset: 0 }} lg={{ span: 5, offset: 0 }} xl={{ span: 5, offset: 0 }}>
            <h3>Got it!</h3>
            <h4> I'll be in touch soon.</h4>
        </Col>
    )
}

export default ThankYou
