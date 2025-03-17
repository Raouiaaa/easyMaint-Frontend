import React, { useState } from "react";
import Form from "../../components/form/Form";
import Table from "../../components/table/Table";
import "./asset.css";

function Asset() {
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
        <div>
            <div className="parent-container">
            {/* Search Input */}
            <div className="search-area">
                <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search by reference..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </form>
            </div>

            {/* Create Button */}
            <div className="create-area">
                <button type="button" className="btn btn-secondary btn-sm mt-3 create-button" onClick={() => setShowForm(true)}>
                    Add New Asset
                </button>
            </div>
            </div>

            {/* Table Component */}
            <Table assets={filteredAssets} />

            {/* Modal Form */}
            <Form show={showForm} onHide={() => setShowForm(false) } onAdd={addAsset} />
        </div>
    );
}

export default Asset;
