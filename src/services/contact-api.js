const KEY = 'Contacts';

export function getContacts() {
  const contacts = localStorage.getItem(KEY);
  return contacts ? JSON.parse(contacts) : undefined;
}
export function addContacts(contacts) {
  const contactsStr = JSON.stringify(contacts);
  localStorage.setItem(KEY, contactsStr);
}
// export function deleteContact(contactId) {
//   const contacts = getContacts();
//   localStorage.setItem(KEY, contactsStr);
// }
