import queryString from 'query-string';
import { TestRunInterface, TestRunGetQueryInterface } from 'interfaces/test-run';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTestRuns = async (query?: TestRunGetQueryInterface): Promise<PaginatedInterface<TestRunInterface>> => {
  return fetcher('/api/test-runs', {}, query);
};

export const createTestRun = async (testRun: TestRunInterface) => {
  return fetcher('/api/test-runs', { method: 'POST', body: JSON.stringify(testRun) });
};

export const updateTestRunById = async (id: string, testRun: TestRunInterface) => {
  return fetcher(`/api/test-runs/${id}`, { method: 'PUT', body: JSON.stringify(testRun) });
};

export const getTestRunById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/test-runs/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTestRunById = async (id: string) => {
  return fetcher(`/api/test-runs/${id}`, { method: 'DELETE' });
};
