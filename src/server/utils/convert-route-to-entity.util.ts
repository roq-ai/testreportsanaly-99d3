const mapping: Record<string, string> = {
  builds: 'build',
  projects: 'project',
  reports: 'report',
  teams: 'team',
  'test-runs': 'test_run',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
