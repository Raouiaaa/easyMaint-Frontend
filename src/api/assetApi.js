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

export const updateAsset = async (id, data) => {
    return await apiClient.patch(`/api/assets/${id}`, data);
};

export const deleteAsset = async (id) => {
    return await apiClient.delete(`/api/assets/${id}`);
}