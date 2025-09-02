import '@testing-library/jest-dom';

// Mock para fetch si usas API calls en tests
global.fetch = jest.fn();