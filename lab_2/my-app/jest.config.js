module.exports = {
    testEnvironment: 'jest-environment-jsdom', // Или 'node', если тестируете не-UI код
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Обработка CSS-модулей
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Для настройки окружения (например, расширение expect)
};