import axios from 'axios';
import config from '../config.json';

const API_URL = config.API_URL;

export const sendContactEmail = async (email) => {

    try {
        
        const config = {
            headers: {
                'Content-type': 'Application/json',
            }
        };

        await axios.post(`${API_URL}/api/emails`, email, config);

        return {
            success:true, 
            loading:false, 
            message:'Message envoyé ! Nous revenons vers vous rapidement.'
        }
        
    } catch (error) {
        return {
            success:false, 
            loading:false, 
            message:'Error sending email ' + error
        }
    }
};