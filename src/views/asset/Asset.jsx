import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";
import Table from "../../components/table/Table";
import "./asset.css";

function Asset() {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [assets, setAssets] = useState([
        { id: 1, reference: "P1-Beg", location: "Beggara", category: "Pompe", installationDate: "2015", maintenanceFrequency: 120, technicalSpecsId: 1, subCategoryId: 1 },
        { id: 2, reference: "P2-Beg", location: "Beggara", category: "Pompe", installationDate: "2015", maintenanceFrequency: 120, technicalSpecsId: 2, subCategoryId: 1 },
        { id: 3, reference: "P3-Beg", location: "Beggara", category: "Pompe", installationDate: "2015", maintenanceFrequency: 120, technicalSpecsId: 3, subCategoryId: 1 }
    ]);

    // Function to add a new asset
    const addAsset = (newAsset) => {
        setAssets([...assets, newAsset]);  // Update state of assets
        setShowForm(false); // Close modal after adding
    };

    // Filter assets based on search query
    const filteredAssets = assets.filter(asset =>
        asset.reference.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="px-4">
            <div className="parent-container mb-4">
                {/* Search Input */}
                <div className="d-flex justify-content-between align-items-center">
                    <input
                        className="form-control me-2 w-50"
                        type="search"
                        placeholder="Search by reference..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="button" className="btn btn-primary btn-md create-button" onClick={() => navigate("/assets/create")}>
                        Add New Asset
                    </button>
                </div>
            </div>

            {/* Table Component */}
            <Table assets={filteredAssets} />

            {/* Modal Form */}
            <Form show={showForm} onHide={() => setShowForm(false)} onAdd={addAsset} />
        </div>
    );
}

export default Asset;
