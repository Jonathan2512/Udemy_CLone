import { api } from './config';
import Axios from 'axios';

export const callAPI = async (uri, method = "GET", body, headers) => {
    const response = await Axios({
        method: method,
        url: api + "/" + uri,
        data: body,
        headers: headers
    });
    const data = await response;
    return data;
}