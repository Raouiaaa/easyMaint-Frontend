import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TableInfo from "../../components/table/Table";
import { getAssetsData } from "../../api/assetApi";
import "./asset.css";

function Asset() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [assets, setAssets] = useState([]);
    // const {setSelectedAsset} = useAppContextProvider();

    // Filter assets based on search query
    const filteredAssets = assets.filter(asset =>
        asset.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(filteredAssets);

    useEffect(() => {
        const fetchAssets = async () => {
            const data = await getAssetsData();
            // setAssets(data.slice(0, 10))
            setAssets(data);
        }

        fetchAssets()
    }, [])

    const handleAssetSelection = (row) => {
        console.log('I m on the Asset Component')
        console.log('ROW-> ', row)
        // setSelectedAsset(row)
        // navigate ('/assets/update')
    }

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
            <TableInfo
                titles={["ID", "Reference", "Location", "Category", "SubCategory", "Installation Date", "Maintenance Frequency inDays", "Technical Specifications ID"]}
                data={filteredAssets}
                showActionsButtons={true}
                onUpdate={handleAssetSelection}
                type="assets"
            />

        </div>
    );
}

export default Asset;
