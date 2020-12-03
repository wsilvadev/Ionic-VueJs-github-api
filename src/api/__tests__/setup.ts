import axios from 'axios';

import setup from '../setup';

jest.mock('axios');

describe('api tests', () => {
    const axiosCreator = axios.create as jest.Mock;

    beforeEach(() => {
        axiosCreator.mockReturnValue({ get: jest.fn(), post: jest.fn() });
    });
    afterEach(axiosCreator.mockClear);

    it('creates the axios instance', async () => {
        setup();
        setup();
        setup();

        expect(axiosCreator).toHaveBeenCalledWith({
            baseURL: 'https://api.github.com'
        });
        expect(axiosCreator).toHaveBeenCalledTimes(1);
    });
});
