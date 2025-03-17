import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Form({ show, onHide, onAdd }) {
    const [formData, setFormData] = useState({
        id: "",
        reference: "",
        location: "",
        category: "",
        installationDate: "",
        maintenanceFrequency: "",
        technicalSpecsId: "",
        subCategoryId: ""
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = () => {
        // Validate inputs (ensure ID is unique, all fields are filled)
        if (!formData.id || !formData.reference) {
            alert("Please fill in required fields");
            return;
        }

        // Convert ID and maintenance frequency to numbers
        const newAsset = {
            ...formData,
        };

        onAdd(newAsset); // Add asset to the list
        setFormData({  // Reset form
            id: "",
            reference: "",
            location: "",
            category: "",
            installationDate: "",
            maintenanceFrequency: "",
            technicalSpecsId: "",
            subCategoryId: ""
        });
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add New Asset</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input type="text" name="id" className="form-control" placeholder="Enter an ID (ex: 1,2,...etc)" value={formData.id} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Reference</label>
                    <input type="text" name="reference" className="form-control" placeholder="Enter a reference (ex: P1-Beg)" value={formData.reference} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Location</label>
                    <select name="location" className="form-select" value={formData.location} onChange={handleChange}>
                        <option value="">Select a Location</option>
                        <option value="Beggara">Beggara</option>
                        <option value="Hostal">Hostal</option>
                        <option value="Manar">Manar</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select name="category" className="form-select" value={formData.category} onChange={handleChange}>
                        <option value="">Select a Category</option>
                        <option value="Pompe">Pompe</option>
                        <option value="Moteur">Moteur</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Installation Date</label>
                    <input type="text" name="installationDate" className="form-control" placeholder="Enter a Date (ex: 200X)" value={formData.installationDate} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Maintenance Frequency (days)</label>
                    <input type="text" name="maintenanceFrequency" className="form-control" placeholder="Enter maintenance frequency in days*" value={formData.maintenanceFrequency} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">ID Technical Specifications</label>
                    <input type="text" name="technicalSpecsId" className="form-control" placeholder="Enter the related technical specification's ID" value={formData.technicalSpecsId} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">ID Sub-Category</label>
                    <input type="text" name="subCategoryId" className="form-control" placeholder="Enter the related sub-category's ID" value={formData.subCategoryId} onChange={handleChange} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
                <Button variant="primary" onClick={handleSubmit}>Add Asset</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Form;
