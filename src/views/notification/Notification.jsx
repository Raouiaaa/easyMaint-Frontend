import React, { useState, useEffect } from "react";
import TableInfo from "../../components/table/Table";
import {getAllNotifications} from "../../api/notificationApi";

function Notification() {
    const [searchQuery, setSearchQuery] = useState("");
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            const data = await getAllNotifications();
            setNotifications(data);
        }

        fetchNotifications()
    } , []);

    // Filter assets based on search query
    const filteredNotifications = notifications.filter(notif =>
        notif.message.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="px-4">
            <div className="parent-container mb-4">
                {/* Search Input */}
                <div className="d-flex justify-content-between align-items-center">
                    <input
                        className="form-control me-2 w-50"
                        type="search"
                        placeholder="Search by asset's Reference or ID..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Table Component */}
            <TableInfo
                type="notifications"
                titles={["ID", "Notifications"]}
                data={filteredNotifications}
                showActionsButtons={false}
            />

        </div>
    );
}

export default Notification;