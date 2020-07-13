require('jest-fetch-mock').enableMocks();
global.fetch.mockResponse(JSON.stringify({ data: 'ok' }));
