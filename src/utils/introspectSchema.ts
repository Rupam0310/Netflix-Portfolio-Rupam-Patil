// This is a helper utility to introspect your DatoCMS schema
// Run this to see what fields are available in your DatoCMS project

import datoCMSClient from '../queries/datoCMSClient';

const INTROSPECTION_QUERY = `
  {
    __schema {
      queryType {
        fields {
          name
          description
          type {
            name
            kind
          }
        }
      }
    }
  }
`;

export async function introspectSchema() {
  try {
    const data = await datoCMSClient.request(INTROSPECTION_QUERY);
    console.log('Available DatoCMS Query Fields:');
    console.log('================================');
    
    // @ts-ignore
    const fields = data.__schema.queryType.fields;
    
    // Filter to show only the relevant fields (not metadata fields)
    const relevantFields = fields.filter((field: any) => 
      !field.name.startsWith('_') && 
      !field.name.startsWith('all') || 
      field.name.startsWith('all')
    );
    
    relevantFields.forEach((field: any) => {
      console.log(`- ${field.name} (${field.type.name || field.type.kind})`);
    });
    
    return data;
  } catch (error) {
    console.error('Error introspecting schema:', error);
    throw error;
  }
}

