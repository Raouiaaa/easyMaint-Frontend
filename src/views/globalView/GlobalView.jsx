import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card';
import { getAllWorkOrders, getOverdueWorkOrders} from '../../api/workOrdersApi';
import "./globalView.css";

function GlobalView() {
    const [workOrders, setWorkOrders] = useState([]);
    const [overdueWorkOrders, setOverdueWorkOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch both API calls in parallel
                const [workOrdersData, overdueWorkOrdersData] = await Promise.all([
                    getAllWorkOrders(),
                    getOverdueWorkOrders()
                ]);

                // Ensure data is not null before updating state
                if (workOrdersData) setWorkOrders(workOrdersData.workOrders);
                if (overdueWorkOrdersData) setOverdueWorkOrders(overdueWorkOrdersData.overdueWorkOrders);
            } catch (err) {
                console.error("Error fetching work orders:", err);
                // setError("Failed to fetch work orders."); // Set error message
            }
        };

        fetchData();
    }, []); // Runs once on mount

    console.log("workOrders:", workOrders);
    console.log("overdueWorkOrders:", overdueWorkOrders);

    // getting open work orders
    const openWorkOrders = workOrders.filter((order) => {
        return order.status === "open";
    });

    const doneWorkOrders = workOrders.filter((order) => {
        return order.status === "done";
    });


    return (
        <div className="grid-container">
            <Card
                className="item-a"
                title="Overdue work orders"
                total={overdueWorkOrders.length}
                style={{ width: "25rem", height: "20.58rem" }}
            />
            <Card
                className="item-b"
                title="Open work orders"
                total={openWorkOrders.length}
                style={{ width: "15rem", height: "10rem" }}
            />
            <Card
                className="item-c"
                title="Completed work orders"
                total={doneWorkOrders.length}
                style={{ width: "15rem", height: "10rem" }}
            />
            <Card
                className="item-d"
                title="Low stock items"
                total="7"
                style={{ width: "15rem", height: "10rem" }}
            />
        </div>
    )
}

export default GlobalView