import apiSetup from './setup';
import { ServerResponse } from './types';

export interface IRepos {
    id: number;
}

export type RepositoryResponse = ServerResponse<IRepos[]>;

export const getRepositories = async (
    headers: Record<any, any>,
    skipCount: number = 0,
    userName: string
): Promise<RepositoryResponse | null> => {
    const response = await apiSetup()?.get(
        '/users/' + userName + '/repos?skipCount=' + skipCount,
        {
            headers
        }
    );
    return response?.data as RepositoryResponse;
};
