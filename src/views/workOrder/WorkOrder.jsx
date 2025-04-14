import React, { useState, useEffect} from "react";
import WorkOrderForm from "../../components/form/WorkOrderForm";
import TableInfo from "../../components/table/Table";
import { getAllWorkOrders } from "../../api/workOrdersApi";
import "./workOrder.css";

function WorkOrder() {
    const [showForm, setShowForm] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [workOrders, setWorkOrders] = useState([]);

    useEffect(() => {
        const fetchWorkOrders = async () => {
            const data = await getAllWorkOrders();
            setWorkOrders(data);
        }

        fetchWorkOrders()
    }, [])

    // Filter assets based on search query
    const filteredWorkOrders = workOrders.filter(order =>
        order.asset.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("filtred workorders:",filteredWorkOrders);

    return (
        <div className="px-4">
            <div className="parent-container mb-4">
                {/* Search Input */}
                <div className="d-flex justify-content-between align-items-center">
                    <input
                        className="form-control me-2 w-50"
                        type="search"
                        placeholder="Search by asset..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="button" className="btn btn-primary btn-md create-button" onClick={() => setShowForm(true)}>
                        Add New Work Order
                    </button>
                </div>
            </div>

            {/* Table Component */}
            <TableInfo 
                titles={["ID", "Asset", "Assigned to", "Status", "Start date", "End date", "Creation date", "Update date"]}
                data={filteredWorkOrders} 
                showActionsButtons={true} 
                type="workOrders"
            />

            {/* Modal Form */}
            <WorkOrderForm show={showForm} onHide={() => setShowForm(false)} workOrder={workOrders} setWorkOrder={setWorkOrders} />
        </div>
    );
}

export default WorkOrder;