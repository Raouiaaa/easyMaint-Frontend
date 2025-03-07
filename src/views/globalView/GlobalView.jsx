import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card';
import { getAllWorkOrders } from '../../api/workOrdersApi';
import "./globalView.css";

function GlobalView() {
    const [workOrders, setWorkOrders] = useState([]);

    useEffect(() => {
        const fetchWorkOrders = async () => {
            try {
                const data = await getAllWorkOrders();
                setWorkOrders(data);
            } catch (err) {
                console.log(err);
            }
        };


        fetchWorkOrders();
    }, []);

    console.log("workOrders:", workOrders);

    return (
        <div className="grid-container">
            <Card
                className="item-a"
                title="Overdue work orders"
                total={"3"}
                style={{ width: "25rem", height: "20.58rem" }}
            />
            <Card
                className="item-b"
                title="pen work orders"
                total="7"
                style={{ width: "15rem", height: "10rem" }}
            />
            {/* <MiniCard className="item-c" title="Completed work orders" content="0" />
      <MiniCard className="item-d" title="Low stock items" content="0" /> */}
        </div>
    )
}

export default GlobalView