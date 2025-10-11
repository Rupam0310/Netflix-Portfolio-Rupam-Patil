// Temporary test component to check DatoCMS schema
import React, { useEffect, useState } from 'react';
import { introspectSchema } from './utils/introspectSchema';

export const TestSchema: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fields, setFields] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkSchema = async () => {
      try {
        const data: any = await introspectSchema();
        const fieldNames = data.__schema.queryType.fields
          .filter((f: any) => !f.name.startsWith('_'))
          .map((f: any) => f.name);
        setFields(fieldNames);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    checkSchema();
  }, []);

  if (loading) {
    return <div style={{ padding: '20px', fontFamily: 'Arial' }}>Loading schema...</div>;
  }

  if (error) {
    return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Available DatoCMS Query Fields:</h2>
      <p>Your DatoCMS schema has the following fields available:</p>
      <ul style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px' }}>
        {fields.map((field) => (
          <li key={field} style={{ marginBottom: '5px' }}>
            <code style={{ backgroundColor: '#e0e0e0', padding: '2px 6px', borderRadius: '3px' }}>
              {field}
            </code>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '5px' }}>
        <strong>Looking for:</strong>
        <ul>
          <li><code>profilebanner</code> or <code>profileBanner</code></li>
          <li><code>allProjects</code></li>
          <li><code>allSkills</code></li>
        </ul>
        <p>If these fields are missing, you need to create them in your DatoCMS dashboard.</p>
      </div>
    </div>
  );
};

