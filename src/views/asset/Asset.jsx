import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TableInfo from "../../components/table/Table";
import { deleteAsset, getAssetsData } from "../../api/assetApi";
import ConfirmModal from "../../components/confirmModal/ConfirmModal";
import { useAppContext } from "../../globalContextProvider/GlobalContextProvider";
import "./asset.css";

function Asset() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [assets, setAssets] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [assetToDelete, setAssetToDelete] = useState(null); // Store selected asset for deletion

    const { handleAssetSelection } = useAppContext();  // Use the global context functio
    
    const handleDeleteClick = (asset) => {
        setAssetToDelete(asset); // Save the asset to delete
        setShowModal(true);      // Show the confirmation modal
    };

    const handleDeleteConfirmation = async () => {
        if (!assetToDelete) return;

        try {
            await deleteAsset(assetToDelete.id_assets);
            setAssets(prevAssets =>
                prevAssets.filter(a => a.id_assets !== assetToDelete.id_assets)
            );
        } catch (error) {
            console.error("Error deleting asset:", error);
        } finally {
            setShowModal(false);
            setAssetToDelete(null);
        }
    };

    // const handleDeleteAsset = async (asset) => {   ----- OLD DELETION HANDLING
    //     setShowModal(true);
    //     try {
    //       await deleteAsset(asset.id_assets);
    //       setAssets(prevAssets => prevAssets.filter(a => a.id_assets !== asset.id_assets));
    //     } catch (error) {
    //       console.error("Error deleting asset:", error);
    //     }
    // };
      

    // Filter assets based on search query
    const filteredAssets = assets.filter(asset =>
        asset.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(filteredAssets);

    useEffect(() => {
        const fetchAssets = async () => {
            const data = await getAssetsData();
            setAssets(data);
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
            <TableInfo
                titles={["ID", "Reference", "Location", "Category", "SubCategory", "Installation Date", "Maintenance Frequency inDays", "Technical Specifications ID", "Creation date", "Update date"]}
                data={filteredAssets}
                showActionsButtons={true}
                onUpdate={handleAssetSelection}
                type="assets"
                navigationLink="/assets/update"
                deleteAction={handleDeleteClick}
            />

            {/* Confirm Modal for Delete Action */}
            {/* <ConfirmModal
                show={showModal}
                onHide={() => setShowModal(false)}
                onConfirm={handleDeleteConfirmation}
                title="Are you sure you want to delete this asset?"
                body="This action is irreversible. All associated data will be permanently removed."
            /> */}
            <ConfirmModal
                show={showModal}
                onHide={() => {
                    setShowModal(false);
                    setAssetToDelete(null);
                }}
                onConfirm={handleDeleteConfirmation}
                title="Are you sure you want to delete this asset?"
                body="This action is irreversible. All associated data will be permanently removed."
            />

        </div>
    );
}

export default Asset;
