import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    try {
        //читаємо контакти з джейсона
        const newReadContacts = await readContacts();

        //генеруємо вказану кільтість нових контактів
        const newContacts = [];
        for (let i = 0; i < number; i++) {
            newContacts.push(createFakeContact());
        }
        // додала нові контакти до тих що є
        const addNewContacts = [...newReadContacts, ...newContacts];

        // записала новий список контактів назад у файд
        await writeContacts(addNewContacts);
        console.log(`Successfully added  new contacts`);
    } catch (err) {
        console.error('Error:', err);
    }
};

console.log(generateContacts(5));

