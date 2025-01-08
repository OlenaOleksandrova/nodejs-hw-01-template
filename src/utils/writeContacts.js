import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
        const jsonFile = JSON.stringify(updatedContacts);
        await fs.writeFile(PATH_DB, 'utf-8',jsonFile);
        console.log('Дані записані у файл');
    } catch (err) {
        console.log('Помилка:', err);
    }
};
