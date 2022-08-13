import axios from 'axios';
import { get } from 'svelte/store';
import { userInfo } from '../store';
import config from '../config.json';

const API_URL = config.API_URL;

export const getFonts = async () => {

    try {

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        };

        const { data } = await axios.get(`${API_URL}/api/fonts`, config);

        return { fonts: data.value, loading: false, message: data.message };

    } catch (error) {

        return { fonts: {}, loading: false, message: 'Error loading fonts ' + error };

    }
};

export const updateOrCreateFont = async (font) => {

    const userInfoStored = get(userInfo);

    try {

        const config = {
            headers: {
                'Content-type': 'Application/json',
                Authorization: `Bearer ${userInfoStored.token}`
            }
        };

        const { data } = await axios.post(`${API_URL}/api/fonts`, font, config);

        return { font: data.value, loading: false, message: data.message };

    } catch (error) {

        return { font: {}, loading: false, message: 'Error updating font ' + error };
    }
};

export const deleteAFont = async (font) => {

    const userInfoStored = get(userInfo);

    try {

        const config = {
            headers: {
                'Content-type': 'Application/json',
                Authorization: `Bearer ${userInfoStored.token}`
            }
        };

        const { data } = await axios.delete(`${API_URL}/api/fonts/${font._id}`, config);

        return { font: data.value, loading: false, message: data.message };

    } catch (error) {

        return { font: {}, loading: false, message: 'Error deleting font ' + error };
    }
};