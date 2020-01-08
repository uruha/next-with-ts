const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
    testRegex: TEST_REGEX,
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testPathIgnorePatterns: [
        '<rootDir>/.next/',
        '<rootDir>/out/',
        '<rootDir>/node_modules/',
        '<rootDir>/dist/'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    collectCoverage: true,
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/src/$1',
        '^~pages/(.*)$': '<rootDir>/pages/$1'
    },
    globals: {
        'ts-jest': {
            'babelConfig': true,
            'tsConfig': 'jest.tsconfig.json'
        }
    },
    automock: false,
    setupFiles: ['./setupJestFetchMock.js']
};