import React, { createContext, useContext, useState } from "react";

// Create Notification Context
const NotificationContext = createContext();

// Custom Hook to use Notifications
export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);

    // Function to add a new notification
    const addNotification = (message) => {
        setNotifications((prev) => [...prev, message]);
        setUnreadCount((prevCount) => prevCount + 1);
    };

    // Function to clear notifications when modal is opened
    const clearNotifications = () => {
        setNotifications([]);
        setUnreadCount(0);
    };

    return (
        <NotificationContext.Provider value={{ notifications, unreadCount, addNotification, clearNotifications }}>
            {children}
        </NotificationContext.Provider>
    );
};
