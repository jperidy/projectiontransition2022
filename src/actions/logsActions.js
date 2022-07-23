import axios from 'axios';
import { get } from 'svelte/store';
import config from '../config.json';
import { userInfo, statisticsSendRequest, statisticsAllPages } from '../store';

const API_URL = config.API_URL;

export const getStatistics = async (start, end, pages) => {

    try {

        statisticsSendRequest.set({loading:true, message:'', data:{}});

        const userInfoStored = get(userInfo);
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfoStored.token}`
            }
        }

        const { data } = await axios.get(`${API_URL}/api/statistics?start=${start}&end=${end}&pages=${pages}`, config);
        statisticsSendRequest.set({loading:false, success: true, message:'success', data:data.data});
                
    } catch (error) {
        statisticsSendRequest.set({ loading:false, success: false, message: 'Error fetching statistics ' + error, data:{} });
    }
};

export const getAllpages = async () => {
    try {
        statisticsAllPages.set({ loading:true, success: false, message: '', data:[], application:{} });
        const userInfoStored = get(userInfo);
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfoStored.token}`
            }
        }

        const { data } = await axios.get(`${API_URL}/api/statistics/params`, config);
        statisticsAllPages.set({ loading:false, success: true, message: 'success', data:data.data, application:data.application });
        
    } catch (error) {
        statisticsAllPages.set({ loading:false, success: false, message: 'error : ' + error, data:[], application:{} });
        
    }
}