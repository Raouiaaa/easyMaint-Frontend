import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { yearsList } from '../../constants';

function AssetInfoForm({ setSteps, asset, setAsset }) {
    const handleNextBtnClick = () => {
        setSteps(2);
    };

    return (
        <Form>
            <Row className="mb-3">
                <Col md={12}>
                    <h5 className="card-title">Asset Details</h5>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="name">
                        <Form.Label>Reference</Form.Label>
                        <Form.Control
                            value={asset?.name || ""}
                            type="text"
                            onChange={(e) => setAsset({...asset, name: e.target.value})}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="location">
                        <Form.Label>Location</Form.Label>
                        <Form.Select
                            value={asset?.location || ""}
                            onChange={(e) => setAsset({...asset, location: e.target.value})}
                        >
                            <option value="">Select Location</option>
                            <option value="Beggara">Beggara</option>
                            <option value="Hostal">Hostal</option>
                            <option value="Manar">Manar</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Select
                            value={asset?.category || ""}
                            onChange={(e) => setAsset({...asset, category: e.target.value})}
                        >
                            <option value="">Select Category</option>
                            <option value="Pump">Pump</option>
                            <option value="Motor">Motor</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="fkSubCategoryID">
                        <Form.Label>SubCategory</Form.Label>
                        <Form.Select
                            value={asset?.fkSubCategoryID || ""}
                            onChange={(e) => setAsset({...asset, fkSubCategoryID: Number(e.target.value) })}
                        >
                            <option value="">Select SubCategory</option>
                            <option value="1">Centrifuge</option>
                            <option value="2">Submersible</option>
                            <option value="3">Immergée</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="installationDate">
                        <Form.Label>Installation date</Form.Label>
                        <Form.Select
                            value={asset?.installationDate || ""}
                            onChange={(e) => setAsset({...asset, installationDate: Number(e.target.value)})}
                        >
                            <option value="">Select Installation Year</option>
                            {yearsList.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="maintenanceFrequencyInDays">
                        <Form.Label>Maintenance frequency (days)</Form.Label>
                        <Form.Control
                            value={asset?.maintenanceFrequencyInDays || ""}
                            type="number"
                            onChange={(e) => setAsset({ ...asset, maintenanceFrequencyInDays: Number(e.target.value) })}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Button className="mt-2 ms-auto" variant="primary" onClick={handleNextBtnClick}>Next</Button>
        </Form>
    );
}


export default AssetInfoForm;
