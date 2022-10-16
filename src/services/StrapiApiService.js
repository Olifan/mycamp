import axios from "axios";

export default class StrapiApiService {
  baseUrl = "http://localhost:1337/api/";

  get(url, params) {
    return axios
      .get(`${this.baseUrl}${url}`, params)
      .then((response) => response.data);
  }
}
