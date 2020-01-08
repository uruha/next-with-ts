global.fetch = require('jest-fetch-mock');
jest.mock(
    'isomorphic-unfetch',
    () => global.fetch.mockResponse(JSON.stringify({ data: 'ok' }))
);
