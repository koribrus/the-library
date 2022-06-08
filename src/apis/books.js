import axios from 'axios';
export const API_KEY = 'AIzaSyByiUQd1tNqxj7rhfkJTEozPt7vzZTlYrI';
export const USER_ID = '113898730893786578440';

export default axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/users/',
});

// * full api url
// https://www.googleapis.com/books/v1/users/${USER_ID}/bookshelves/${BOOKSHELF_ID}/volumes?key=${API_KEY}
