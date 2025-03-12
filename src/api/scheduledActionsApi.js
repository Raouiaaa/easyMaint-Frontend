import apiClient from "./apiClient";

export const getAllScheduledActions = async () => {
    try {
        const response = await apiClient.get("/api/scheduled-actions");
        console.log("response:", response);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};