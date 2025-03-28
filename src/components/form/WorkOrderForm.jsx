import React, { useState } from 'react';
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';
import { useToast } from '../toast/ToastProvider';
import { createWorkOrder } from '../../api/workOrdersApi';
import { useNotifications } from "../../views/notification/NotificationProvider" // Import Notifications

function WorkOrderForm({ show, onHide }) {
    const { setSuccessMessage, setErrorMessage } = useToast();
    const { addNotification } = useNotifications(); // Use Notifications

    const [workOrder, setWorkOrder] = useState({
        idAsset: "",
        idUser: "",
        status: "",
        startDate: "",
        endDate: ""
    });

    const convertToUTC = (dateString) => {
        const localDate = new Date(dateString);
        return new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000).toISOString();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formattedStartDate = workOrder.startDate ? convertToUTC(workOrder.startDate) : null;
        const formattedEndDate = workOrder.endDate ? convertToUTC(workOrder.endDate) : null;

        const updatedWorkOrder = {
            ...workOrder,
            startDate: formattedStartDate,
            endDate: formattedEndDate
        };

        console.log("Sending work order:", updatedWorkOrder); // Debugging
        try {
            const response = await createWorkOrder(updatedWorkOrder);
            console.log("Work order created:", response); // Debugging
            setSuccessMessage("Work order created successfully!");
            addNotification(`A problem has occurred in asset ${response.data.newWorkOrder.asset.name} - ID: ${response.data.newWorkOrder.asset.id_assets} `); // Add Notification
            onHide();
        } catch {
            setErrorMessage("Failed to create work order. Please try again.");
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>New Work Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="idAsset">
                                <Form.Label>Asset</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    name="idAsset" 
                                    value={workOrder.idAsset} 
                                    onChange={(e) => setWorkOrder({ ...workOrder, idAsset: Number(e.target.value) })} 
                                    required 
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="idUser">
                                <Form.Label>User</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    name="idUser" 
                                    value={workOrder.idUser} 
                                    onChange={(e) => setWorkOrder({ ...workOrder, idUser: Number(e.target.value) })} 
                                    required 
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="status">
                                <Form.Label>Status</Form.Label>
                                <Form.Select 
                                    name="status" 
                                    value={workOrder.status} 
                                    onChange={(e) => setWorkOrder({ ...workOrder, status: e.target.value })} 
                                    required
                                >
                                    <option value="">Select Status</option>
                                    <option value="open">Open</option>
                                    <option value="in-progress">In Progress</option>
                                    <option value="done">Done</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="startDate">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control 
                                    type="datetime-local" 
                                    name="startDate" 
                                    value={workOrder.startDate} 
                                    onChange={(e) => setWorkOrder({ ...workOrder, startDate: e.target.value })} 
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="endDate">
                                <Form.Label>End Date</Form.Label>
                                <Form.Control 
                                    type="datetime-local" 
                                    name="endDate" 
                                    value={workOrder.endDate} 
                                    onChange={(e) => setWorkOrder({ ...workOrder, endDate: e.target.value })} 
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Modal.Footer>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default WorkOrderForm;
