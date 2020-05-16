import listsConsts from '../consts/lists';

const BASE_URL = 'http://localhost:3001';

class LibraryService {
  async fetchCategories(page) {
    const response = await fetch(`${BASE_URL}/categories?_limit=${listsConsts.CATEGORIES_FETCH_LIMIT}&_page=${page}`);

    return {
      items: await response.json(),
      count: +response.headers.get('X-Total-Count'),
    };
  }
}

export default new LibraryService();