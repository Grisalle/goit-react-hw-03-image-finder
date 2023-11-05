const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39589884-40cfc9e6470c89d61febbc7ff';

export async function fetchImage(search, currentPage) {
  return fetch(
    `${BASE_URL}?q=${search}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
}
