import apiClient from "./apiClient";

export const getAllNotifications = async () => {
    try {
        const response = await apiClient.get("/api/notifications");
        return response.data;
    }
    catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};
