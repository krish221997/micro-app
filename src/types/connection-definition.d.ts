export interface ConnectionDefinition {
    authMethod: object | null; // You can specify the correct data type for authMethod if needed
    _id: string;
    platformVersion: string;
    platform: string;
    type: string;
    name: string;
    frontend: {
      spec: {
        title: string;
        description: string;
        platform: string;
        category: string;
        image: string;
        tags: string[];
      };
    };
    settings: {
      parseWebhookBody: boolean;
      showSecret: boolean;
      allowCustomEvents: boolean;
      oauth: boolean;
    };
    hidden: boolean;
    createdAt: number;
    updatedAt: number;
    updated: boolean;
    version: string;
    lastModifiedBy: string;
    deleted: boolean;
    tags: string[]; // You can specify the correct data type for tags if needed
    active: boolean;
    deprecated: boolean;
  }

  export interface ConnectionDefinitions {
    rows: ConnectionDefinition[];
    limit: number;
    skip: number;
    total: number;
  }