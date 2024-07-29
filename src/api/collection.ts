import axios from 'axios';

const COLLECTION_API = 'http://localhost:8001/cards ';

export async function fetchCollectionApi() {
  return axios.get(COLLECTION_API);
}

export async function addNewCollectionItem(data) {
  return axios.post(COLLECTION_API, data);
}
