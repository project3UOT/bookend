
export const searchGoogleBooks = (query) => {
  console.log(query);
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${query}`);
};