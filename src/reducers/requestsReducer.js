import { SET_REQUESTS, SET_FILTER, SET_SORT, SET_NOTIFICATION } from "../actions/actionTypes";

let initialState = {
    requestsGroup: [],
    filter: {
        type: "any",
        priority: "any",
        status: "any",
        search: ""
    },
    sort: "name-asc",
    notification: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_REQUESTS:
            return {
                ...state,
                requestsGroup: action.requests
            }
        case SET_FILTER:
            return {
                ...state,
                filter: action.filter
            }
        case SET_SORT:
            return {
                ...state,
                sort: action.sort
            }
        case SET_NOTIFICATION:
            return {
                ...state,
                notification: action.notification
            }
        default:
            return state;
    }
}
