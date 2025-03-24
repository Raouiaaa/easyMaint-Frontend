import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../components/table/Table";
import { getAssetsData } from "../../api/assetApi";
import "./asset.css";

function Asset() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [assets, setAssets] = useState([]);

    // Filter assets based on search query
    const filteredAssets = assets.filter(asset =>
        asset.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const fetchAssets = async () => {
            const data = await getAssetsData();
            setAssets(data.slice(0, 10))
        }

        fetchAssets()
    }, [])


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

        </div>
    );
}

export default Asset;
