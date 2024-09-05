// src/api.js
import axios from 'axios';

const API_KEY = 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr';
const TENANT_KEY = 'TYKE070323';

const headers = {
    'X-Api-Key': API_KEY,
    'X-Tenant-Key': TENANT_KEY
};

export const getAllPlaylists = async () => {
    const body = { Content_Type: 2 };
    try {
        const response = await axios.post('https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList', body, { headers });
        return response.data;
    } catch (error) {
        console.error("Error fetching playlists", error);
    }
};

export const getFeeds = async () => {
    const body = { Index: 1, ContentType: [2], IsTagged: false, URL: '' };
    try {
        const response = await axios.post('https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1', body, { headers });
        return response.data;
    } catch (error) {
        console.error("Error fetching feeds", error);
    }
};
