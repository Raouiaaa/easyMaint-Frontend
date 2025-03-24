import apiClient from "./apiClient";

export const getAssetsData = async () => {
    try {
        const response = await apiClient.get("/api/assets");
        return response.data;
    }
    catch (error) {
        console.error("Error fetching assets:", error);
        return [];
    }
}

export const createAsset = async (data) => {
    return await apiClient.post("/api/assets", data);
}