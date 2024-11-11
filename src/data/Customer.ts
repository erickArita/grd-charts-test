export interface CustomerResponse {
  legacyListId: string;
  listType:     string;
  fieldSchemas: FieldSchema[];
  items:        Item[];
}

export interface FieldSchema {
  id:        string;
  fieldType: string;
  fieldName: string;
  index:     number;
}

export interface Item {
  contact:      Contact;
  customFields: CustomField[];
}

export interface Contact {
  id:                number;
  fullName?:         string;
  imageUrl:          string;
  primaryEmail:      string;
  location?:         string;
  createdDateTime:   Date;
  organisationName?: string;
  organisationType:  OrganisationType;
  lastInteraction?:  Date;
}

export enum OrganisationType {
  Unclassified = "Unclassified",
}

export interface CustomField {
  value?:        string;
  fieldSchemaId: string;
  records?:      Record[];
}

export interface Record {
  id:        number;
  email:     string;
  firstName: null | string;
  lastName:  string;
  imageUrl:  string;
}
