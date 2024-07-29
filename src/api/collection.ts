import axios from 'axios';
import { CARD_ENDPOINT } from '../constants/share';

export async function fetchCollectionApi() {
  return axios.get(CARD_ENDPOINT);
}
