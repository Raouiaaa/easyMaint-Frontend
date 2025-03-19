import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { manufacturerList } from '../../constants';

function TechnicalSpecificationsForm({ setSteps, asset, setAsset }) {
    const handleSubmit = () => {
        console.log('Technical Specifications Form submitted')
    }
    const handlePreviousBtnClick = () => {
        setSteps(1)
    }

    return (
        <Form>
            <Row className="mb-3">
                <Col md={12}>
                    <h5 className="card-title">Technical Specifications Details</h5>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="manufacture">
                        <Form.Label>Manufacture</Form.Label>
                        <Form.Select>
                            <option value={null}></option>
                            {manufacturerList.map((manufacture) => (
                                <option key={manufacture} value={manufacture}>{manufacture}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="rated_voltage">
                        <Form.Label>Rated Voltage</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="rated_current">
                        <Form.Label>Rated Current</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="rated_power">
                        <Form.Label>Rated Power</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="frequency">
                        <Form.Label>Frequency</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="speed">
                        <Form.Label>Speed</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="insulation_class">
                        <Form.Label>Insulation Class</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="ingress_protection">
                        <Form.Label>Ingress Protection</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
            </Row>
            < Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="operating_temperature_range">
                        <Form.Label>Operating Temperature Range</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
            </Row>
            <div className='d-flex justify-content-end my-4'>
                <Button className='me-4' variant="secondary" onClick={handlePreviousBtnClick}>Previous</Button>
                <Button variant="primary" onClick={handleSubmit}>Submit</Button>
            </div>
        </Form>
    )
}

export default TechnicalSpecificationsForm