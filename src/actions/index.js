import * as firebase from 'firebase';
import { SET_REQUESTS, SET_FILTER, SET_SORT, SET_NOTIFICATION } from './actionTypes';


export const setRequests = requests => {
    return {
        type: SET_REQUESTS,
        requests
    }
}

export const setNotification = notification => {
    return {
        type: SET_NOTIFICATION,
        notification
    }
}

export const setFilter = filter => {
    return {
        type: SET_FILTER,
        filter
    }
}

export const setSort = sort => {
    return {
        type: SET_SORT,
        sort
    }
}

export const addRequest = (form) => {
    firebase.database().ref('requests').push(form);
}

export const fetchRequests = () => dispatch => {
    const requests = firebase.database().ref('requests');
    requests.on('value', snapshot => {
       const response = snapshot.val() || {};
       const result = Object.keys(response).map(key => response[key]) || []
       dispatch(setRequests(result))
    });
}