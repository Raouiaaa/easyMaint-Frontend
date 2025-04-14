import React, { createContext, useContext, useState } from "react";

// Create Global Context
const GlobalContext = createContext();

// Custom Hook to use Global Context
export const useAppContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [selectedAsset, setSelectedAsset] = useState(null);

    // Function to handle asset selection
    const handleAssetSelection = (asset) => {
        setSelectedAsset({
            id: asset.id_assets,
            name: asset.name,
            location: asset.location,
            category: asset.category,
            installationDate: asset.installation_date,
            maintenanceFrequencyInDays: asset.maintenance_frequency_inDays,
            fkSubCategoryID: asset.FK_subCategory_id,
            manufacturer: asset.technicalSpecifications.manufacturer,
            ratedVoltage: asset.technicalSpecifications.rated_voltage,
            ratedCurrent: asset.technicalSpecifications.rated_current,
            ratedPower: asset.technicalSpecifications.rated_power,
            frequency: asset.technicalSpecifications.frequency,
            speed: asset.technicalSpecifications.speed,
            insulationClass: asset.technicalSpecifications.insulation_class,
            ingressProtection: asset.technicalSpecifications.ingress_protection,
            operatingTemperatureRange: asset.technicalSpecifications.operating_temperature_range
        });
    };

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
        <GlobalContext.Provider 
            value={{ 
                notifications, 
                unreadCount, 
                addNotification, 
                clearNotifications,
                handleAssetSelection,
                selectedAsset,
                setSelectedAsset,
            }}>
            {children}
        </GlobalContext.Provider>
    );
};
