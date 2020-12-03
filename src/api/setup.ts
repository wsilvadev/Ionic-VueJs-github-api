import axios, { AxiosInstance } from 'axios';

let Api: AxiosInstance | undefined;

function setup(): AxiosInstance | undefined {
    if (!Api) {
        Api = axios.create({
            baseURL: 'https://api.github.com'
        });

        return Api;
    }
}

export default setup;
