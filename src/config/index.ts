import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_BASE_URL } = publicRuntimeConfig;

export { API_BASE_URL };
