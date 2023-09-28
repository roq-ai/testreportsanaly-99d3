interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Project Manager'],
  tenantName: 'Team',
  applicationName: 'TestReportsAnalysisDashboard',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage users',
    'Manage teams',
    'Manage test runs',
    'Manage builds',
    'Manage reports',
    'Manage projects',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/6bf5f71e-63b7-403c-8fae-847214f46862',
};
