import axios from 'axios';

export const GET_CONTRIES='GET_CONTRIES';
export const SEARCH_CONTRY='SEARCH_CONTRY';
export const FILTER_CONTRIES='FILTER_CONTRIES';
export const GET_ACTIVITIES='GET_ACTIVITIES';
export const GET_COUNTRY_DETAIL='GET_COUNTRY_DETAIL'
export const POST_CONTRY='POST_CONTRY';
export const ORDER_BY_NAME='ORDER_BY_NAME';
export const ORDER_BY_ACTIVITIES='ORDER_BY_ACTIVITIES';
export const ORDER_BY_POBLATION='ORDER_BY_POBLATION';
export const GET_COUNTRY_NAME='GET_COUNTRY_NAME';
export const GET_COUNTRY= 'GET_COUNTRY';
export const POST_ACTIVITIES='POST_ACTIVITIES';
export const ORDER_BY_CONTINENTS='ORDER_BY_CONTINENTS';


var Api = 'http://localhost:3001'


export const getContries=() =>{
    return function (dispatch){
        axios.get(`http://localhost:3001/countries`)
        .then((json)=>{
            return dispatch({
                type:GET_CONTRIES,
                payload:json.data
            })
        })
    }
}


export function filterContries(data){
    return{
        type:FILTER_CONTRIES,
        payload:data
    }
}


export function getActivities(){
    return function(dispatch){
        axios.get(`http://localhost:3001/Activities`)
        .then((json)=>{
            return dispatch({
                type:GET_ACTIVITIES,
                payload:json.data
            })
        })
    }
}

export const getcountryByName=(name)=>{
    return function(dispatch){
        axios.get(`http://localhost:3001/countries?name=${name}`)
        .then((json)=>{
            return dispatch({
                type:GET_COUNTRY_NAME,
                payload:json.data
            })
        })
    }
}



export function searchContry(inp){
    return{
        type:SEARCH_CONTRY,
        payload:inp
    }
}



export function postActivities(payload){
    return async function (dispatch) {
        var json = await axios.post(`http://localhost:3001/activities`, payload);
        return {
            type:POST_ACTIVITIES ,
            json
        }
    }
}

export const orderByContinents =(payload)=>{
    return{
        type:ORDER_BY_CONTINENTS,
        payload:payload
    }
}



export const orderByName = (payload) =>{
    return{
        type:ORDER_BY_NAME,
        payload: payload
    }
}

export const orderByPoblation = (payload) =>{
    return{
        type:ORDER_BY_POBLATION,
        payload: payload
    }
}

export const orderByActivities = (payload) =>{
    return{
        type:ORDER_BY_ACTIVITIES,
        payload: payload
    }
}








export const getCountryById=(id)=>{
    return function (dispatch) {
        axios.get(`http://localhost:3001/country/${id}`)
        .then((json)=>{
            return dispatch({
                type:GET_COUNTRY,
                payload:json.data
            })
        })
    }
}

export const addActivities=(payload) =>{
    return async function(dispatch) {
         const response = await axios.post(`http://localhost:3001/countries`,payload) 
         return response
    }
}






