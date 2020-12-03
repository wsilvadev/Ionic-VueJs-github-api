import { thorwApiError } from './../Auth/index';
import { IRepos, RepositoryResponse, getRepositories } from './../../api/repos';

export const getReposList = async (
    skipCount?: number
): Promise<IRepos[] | undefined> => {
    let response: RepositoryResponse | null = null;
    const userName = 'wsilvadev';

    try {
        const headers = await getAuthHeaders();
        response = await getRepositories(headers, skipCount, userName);
    } catch (error) {
        if (error.response) {
            response = error.response.data as RepositoryResponse;
        }
    }
    if (!response?.result) {
        return thorwApiError(response);
    }
};
