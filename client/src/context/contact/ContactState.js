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
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add actions

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;
