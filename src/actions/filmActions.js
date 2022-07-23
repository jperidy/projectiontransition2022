import axios from 'axios';
//import { API_URL } from '../config/backend_api';
import { filmAllRequest, filmRequest, filmUpdateRequest, filmCreateRequest, userInfo, filmDeleteRequest } from '../store';
import { get } from 'svelte/store';
import config from '../config.json';
const API_URL = config.API_URL;

export const getAllFilms = async (location) => {

    filmAllRequest.set({films:null, loading:true, message:''});

    try {
        
        const config = {
            headers: {
                'Content-type': 'Application/json',
                //Authorization: `Bearer ${userInfoStored.token}`
            }
        };

        const { data } = await axios.get(`${API_URL}/api/film?location=${location}`, config);
        
        filmAllRequest.set({films:data.value, loading:false, message:''});
        return {films:data.value, loading:false, message:''};

    } catch (error) {
        filmRequest.set({films:null, loading:false, message:'Error loading films '+ location + ' ' + error});
        return {films:null, loading:false, message:'Error loading films '+ location + ' ' + error};
    }
};


export const getFilm = async (id) => {

    //const userInfoStored = get(userInfo);
    filmRequest.set({film:null, loading:true, message:''});

    try {
        
        const config = {
            headers: {
                'Content-type': 'Application/json',
                //Authorization: `Bearer ${userInfoStored.token}`
            }
        };

        const { data } = await axios.get(`${API_URL}/api/film/${id}`, config);
        
        filmRequest.set({film:data.value, loading:false, message:''});
        return {film:data.value, loading:false, message:''};

    } catch (error) {
        filmRequest.set({film:null, loading:false, message:'Error loading the film' + error});
        return {film:null, loading:false, message:'Error loading the film' + error};
    }
};

export const updateFilmRequest = async (id, film) => {

    filmUpdateRequest.set({success:false, loading:true, message:''});
    const userInfoStored = get(userInfo);

    try {
        
        const config = {
            headers: {
                'Content-type': 'Application/json',
                Authorization: `Bearer ${userInfoStored.token}`
            }
        };

        await axios.put(`${API_URL}/api/film/${id}`, film, config);
        
        filmUpdateRequest.set({success:true, loading:false, message:'film updated'});

    } catch (error) {
        filmUpdateRequest.set({success:false, loading:false, message:'Error updating film ' + error});
    }
};

export const createFilmRequest = async (city) => {

    const film= {
        "title": {},
        "location": city,
        "real": {},
        "url":{},
        "summury": {},
        "infosGenerales": {},
        "actions": []
    };

    filmCreateRequest.set({success:false, loading:true, message:''});
    const userInfoStored = get(userInfo);

    try {
        
        const config = {
            headers: {
                'Content-type': 'Application/json',
                Authorization: `Bearer ${userInfoStored.token}`
            }
        };

        const { data } = await axios.post(`${API_URL}/api/film`, film, config);
        
        filmCreateRequest.set({success:true, loading:false, message:'film updated'});

        return data.value._id;

    } catch (error) {
        filmCreateRequest.set({success:false, loading:false, message:'Error updating film ' + error});
    }
};

export const deleteFilmRequest = async (id) => {

    filmDeleteRequest.set({success:false, loading:true, message:''});
    const userInfoStored = get(userInfo);

    try {
        
        const config = {
            headers: {
                'Content-type': 'Application/json',
                Authorization: `Bearer ${userInfoStored.token}`
            }
        };

        await axios.delete(`${API_URL}/api/film/${id}`, config);
        
        filmDeleteRequest.set({success:true, loading:false, message:'film deleted'});

    } catch (error) {
        filmDeleteRequest.set({success:false, loading:false, message:'Error deleting film ' + error});
    }
};

export const recursiveFilmDelete = async (object) => {
    //console.log('object', object);
    if (object.filmId) {
        await deleteFilmRequest(object.filmId);
    }
    if (object.values && object.values.length) {
        for (let index = 0; index < object.values.length; index++) {
            recursiveFilmDelete(object.values[index]);
        }
    }
}