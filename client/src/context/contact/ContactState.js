import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Sid Viscious',
                email: 'sviscious@gmail.com',
                phone: '917-234-2345',
                type: 'personal',
            },
            {
                id: 2,
                name: 'Sara Smith',
                email: 'ssmith@gmail.com',
                phone: '917-999-6534',
                type: 'professional',
            },
        ],
        current: null,
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add actions
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    };

    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    };

    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    };

    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;
