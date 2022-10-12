import { CLEAR_ALL_CONTACT, CREATE_CONTACT, DELETE_CONTACT, DELETE_SELECTED_CONTACT, GET_CONTACT, SELECT_ALL_CONTACT, UPDATE_CONTACT } from "../constant/actionTypes"


export const addContact = (payload) => {
    return {
        type: CREATE_CONTACT,
        payload: payload,
    }
}

export const deleteContact = (payload) => {
    return {
        type: DELETE_CONTACT,
        payload: payload
    }
}

export const getContact = (payload) => {
    return {
        type: GET_CONTACT,
        payload: payload
    }
}

export const updateContact = (payload) => {
    return {
        type: UPDATE_CONTACT,
        payload: payload,
    }
}

export const selectAllContact = (payload) => {
    return {
        type: SELECT_ALL_CONTACT,
        payload: payload,
    }
}

export const deleteAllContact = (payload) => {
    return {
        type: DELETE_SELECTED_CONTACT,
        payload: payload,
    }
}
  
export const clearAllContact = (payload) => {
    return {
        type: CLEAR_ALL_CONTACT,
        payload: payload,
    }
}
  
