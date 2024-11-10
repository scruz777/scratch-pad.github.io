// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
}


function makeContactList() {
    // The contacts array will store all contact objects
    let contacts = [];
    
    return {
        // 1. length() returns the number of contacts in the list
        length: function() {
            return contacts.length;
        },
        
        // 2. addContact(contact) adds a contact to the list
        addContact: function(contact) {
            contacts.push(contact);
        },
        
        // 3. findContact(fullName) finds a contact by full name
        findContact: function(fullName) {
            return contacts.find(contact => 
                `${contact.nameFirst} ${contact.nameLast}` === fullName
            );
        },
        
        // 4. removeContact(contact) removes a contact from the list
        removeContact: function(contact) {
            const index = contacts.indexOf(contact);
            if (index !== -1) {
                contacts.splice(index, 1);
            }
        },
        
        // 5. printAllContactNames() returns all names in the list, separated by line breaks
        printAllContactNames: function() {
            return contacts
                .map(contact => `${contact.nameFirst} ${contact.nameLast}`)
                .join('\n');
        }
    };
} 


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}