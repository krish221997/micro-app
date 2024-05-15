export interface ConnectionRecord {
  _id: string;
  platformVersion: string;
  connectionDefinitionId: string;
  name: string;
  key: string;
  group: string;
  environment: string;
  platform: string;
  secretsServiceId: string;
  eventAccessId: string;
  settings: {
    parseWebhookBody: boolean;
    showSecret: boolean;
    allowCustomEvents: boolean;
    oauth: boolean;
  };
  throughput: {
    key: string;
    limit: number;
  };
  ownership: {
    buildableId: string;
    clientId: string;
    organizationId: string;
    projectId: string;
    userId: string;
  };
  createdAt: number;
  updatedAt: number;
  updated: boolean;
  version: string;
  lastModifiedBy: string;
  deleted: boolean;
  tags: string[];
  active: boolean;
  deprecated: boolean;
}

export interface Connections {
  rows: ConnectionRecord[];
  limit: number;
  skip: number;
  total: number;
}
