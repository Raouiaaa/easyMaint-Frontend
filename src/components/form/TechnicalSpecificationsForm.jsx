import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useToast } from '../toast/ToastProvider';
import { createAsset, updateAsset} from '../../api/assetApi';
import { manufacturerList } from '../../constants';
import { useNavigate } from "react-router-dom";

function TechnicalSpecificationsForm({ setSteps, asset, setAsset, action}) {
    const navigate = useNavigate();
    const { setSuccessMessage, setErrorMessage } = useToast();

    const handleSubmit = async () => {
        try {
            console.log("Submitting asset:", asset);
            if (action === "create") {
                await createAsset(asset);
                setSuccessMessage("Asset created successfully!");
            } else if (action === "update") {
                await updateAsset(asset.id, asset);
                setSuccessMessage("Asset updated successfully!");
            }
            navigate("/assets");
        } catch (error) {
            console.error("Asset creation error:", error);
            setErrorMessage("Failed to create/update asset. Please try again.");
        }
    };
    
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
                    <Form.Group controlId="manufacturer">
                        <Form.Label>Manufacturer</Form.Label>
                        <Form.Select 
                            value={asset.manufacturer || ''} 
                            onChange={(e) => setAsset({ ...asset, manufacturer: e.target.value })} 
                        >
                            <option value="">Select Manufacture</option>
                            {manufacturerList.map((manufacture) => (
                                <option key={manufacture} value={manufacture}>{manufacture}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="rated_voltage">
                        <Form.Label>Rated Voltage</Form.Label>
                        <Form.Control 
                            value={asset.ratedVoltage || ''} 
                            onChange={(e) => setAsset({ ...asset, ratedVoltage: e.target.value })} 
                            type="text" 
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="rated_current">
                        <Form.Label>Rated Current</Form.Label>
                        <Form.Control 
                            value={asset.ratedCurrent || ''} 
                            onChange={(e) => setAsset({ ...asset, ratedCurrent: e.target.value })} 
                            type="text" 
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="rated_power">
                        <Form.Label>Rated Power</Form.Label>
                        <Form.Control 
                            value={asset.ratedPower || ''} 
                            onChange={(e) => setAsset({ ...asset, ratedPower: e.target.value })}  
                            type="text" 
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="frequency">
                        <Form.Label>Frequency</Form.Label>
                        <Form.Control 
                            value={asset.frequency || ''} 
                            onChange={(e) => setAsset({ ...asset,frequency: e.target.value })}   
                            type="text" 
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="speed">
                        <Form.Label>Speed</Form.Label>
                        <Form.Control 
                            value={asset.speed || ''} 
                            onChange={(e) => setAsset({ ...asset,speed: e.target.value })}  
                            type="text" 
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="insulation_class">
                        <Form.Label>Insulation Class</Form.Label>
                        <Form.Control 
                            value={asset.insulationClass || ''} 
                            onChange={(e) => setAsset({ ...asset, insulationClass: e.target.value })}  
                            type="text" 
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="ingress_protection">
                        <Form.Label>Ingress Protection</Form.Label>
                        <Form.Control 
                            value={asset.ingressProtection || ''} 
                            onChange={(e) => setAsset({ ...asset, ingressProtection: e.target.value })}  
                            type="text" 
                        />
                    </Form.Group>
                </Col>
            </Row>
            < Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="operating_temperature_range">
                        <Form.Label>Operating Temperature Range</Form.Label>
                        <Form.Control 
                            value={asset.operatingTemperatureRange || ''} 
                            onChange={(e) => setAsset({ ...asset, operatingTemperatureRange: e.target.value })}  
                            type="text" 
                        />
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