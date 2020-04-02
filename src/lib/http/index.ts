import fetch from 'isomorphic-unfetch';
import { API_BASE_URL } from '~/config';

const get = (path: string, options?: RequestInit) =>
    fetch(API_BASE_URL + path, {
        ...options,
        method: 'GET'
    });

const post = (path: string, options?: RequestInit) =>
    fetch(API_BASE_URL + path, {
        ...options,
        method: 'POST'
    });

const put = (path: string, options?: RequestInit) =>
    fetch(API_BASE_URL + path, {
        ...options,
        method: 'PUT'
    });

const del = (path: string, options?: RequestInit) =>
    fetch(API_BASE_URL + path, {
        ...options,
        method: 'DELETE'
    });

export default { get, post, put, delete: del };
