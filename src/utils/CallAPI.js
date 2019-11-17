import { api } from './config';
import Axios from 'axios';

export const callAPI = (uri, method = "GET", body, headers) => {
    return Axios({
        method: method,
        url: api + "/" + uri,
        data: body,
        headers: headers
    })
}