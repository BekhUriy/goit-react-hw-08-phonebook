//selector.jsx
import { createSelector } from "@reduxjs/toolkit";

export const selectFilter = state => state.filter.filter;

 export const selectContact = state => state.contact.contacts.items;

export const selectIsLoading = state => state.contact.contacts.isLoading;

export const selectError = state => state.contact.contacts.error;

  export const selectVisibleContacts = createSelector(
[ selectContact, selectFilter],
  (items, filter) => {
     console.log('items', items);
     return items.filter(contact => contact.name.toLowerCase()
    .includes(filter.toLowerCase()))
 }
)
