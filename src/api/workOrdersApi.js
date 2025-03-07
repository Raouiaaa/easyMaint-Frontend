import apiClient from "./apiClient";

export const getAllWorkOrders = async () => {
    try {
        const response = await apiClient.get("/todos/1");
        console.log("response:", response);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};

