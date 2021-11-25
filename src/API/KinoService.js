import axios from '../plugins/axios';

export class KinoService {
  static async fetchMovies(cPage, mPerPage, fun) {
    const from = cPage * mPerPage - mPerPage;
    const to = cPage * mPerPage;
    const moviesFetch = fun(from, to);
    const requests = moviesFetch.map((id) => axios.get(`/?i=${id}`)); //вызов 12 промисов, т.к. api поддерживает 1 запрос
    const response = await Promise.all(requests);

    const mass = KinoService.axiosData(response);
    return mass;
  }
  static async fetchMoviesBySearch(search) {
    const response = await axios.get(`/?s=${search}`);
    return response;
  }
  static axiosData(resp) {
    const mass = resp.map((ar) => ar.data);
    return mass;
  }
}
