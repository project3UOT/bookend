export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${query}&orderBy=newest&maxResults=20`);
};