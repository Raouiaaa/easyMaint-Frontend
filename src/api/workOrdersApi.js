import apiClient from "./apiClient";

export const getAllWorkOrders = async () => {
    try {
        const response = await apiClient.get("/api/workorders");
        console.log("response:", response);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};

export const getOverdueWorkOrders = async () => {
    try {
        const response = await apiClient.get("/api/workorders/overdue-workorders");
        console.log("response:", response);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};
