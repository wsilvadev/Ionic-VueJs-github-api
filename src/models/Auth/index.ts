import { ServerResponse } from './../../api/types';

export const thorwApiError = (response: ServerResponse<any> | null): never => {
    if (response?.error?.details) {
        throw new Error(response.error.details);
    }
    if (response?.unAuthorizedRequest) {
        throw new Error('Token indisponível');
    }
    throw new Error('Error');
};
