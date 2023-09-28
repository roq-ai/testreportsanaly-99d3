import queryString from 'query-string';
import { BuildInterface, BuildGetQueryInterface } from 'interfaces/build';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBuilds = async (query?: BuildGetQueryInterface): Promise<PaginatedInterface<BuildInterface>> => {
  return fetcher('/api/builds', {}, query);
};

export const createBuild = async (build: BuildInterface) => {
  return fetcher('/api/builds', { method: 'POST', body: JSON.stringify(build) });
};

export const updateBuildById = async (id: string, build: BuildInterface) => {
  return fetcher(`/api/builds/${id}`, { method: 'PUT', body: JSON.stringify(build) });
};

export const getBuildById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/builds/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteBuildById = async (id: string) => {
  return fetcher(`/api/builds/${id}`, { method: 'DELETE' });
};
