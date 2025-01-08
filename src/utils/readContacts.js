import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';


export const readContacts = async () => {
    try {
        const fileContact = await fs.readFile(PATH_DB , 'utf-8');
        return JSON.parse(fileContact);
        
    } catch (error) {
        console.error('Error:', error);
    }

};
