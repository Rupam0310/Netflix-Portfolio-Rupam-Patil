# DatoCMS Content Model Setup Guide

This guide will help you set up all the required content models in DatoCMS for your Netflix portfolio.

## 🔑 Important: Naming Convention

**DatoCMS Admin**: Use `snake_case` (e.g., `background_image`, `profile_summary`)  
**GraphQL Queries**: Use `camelCase` (e.g., `backgroundImage`, `profileSummary`)

DatoCMS **automatically converts** snake_case field names to camelCase in the GraphQL API! Your code already uses camelCase, so just follow the snake_case naming when creating fields in DatoCMS.

## Step 1: Check Your Current Schema

1. **Restart your development server** (if running):
   ```bash
   npm start
   ```

2. **Visit the schema test page**:
   ```
   http://localhost:3000/test-schema
   ```

This will show you all available fields in your DatoCMS project. Look for the fields your app needs:
- `profilebanner` or `profileBanner`
- `allProjects`
- `allSkills`
- `allTimelines`
- `allCertifications`
- `contactMe`
- `workPermit`

## Step 2: Create Missing Content Models in DatoCMS

If any models are missing, follow these steps:

### 1. Profile Banner Model

1. Go to your DatoCMS dashboard: https://www.datocms.com/
2. Navigate to **Schema** → **Add new model**
3. Configure the model:
   - **Model Name**: `Profile Banner`
   - **API Key**: `profilebanner` (lowercase, no spaces)
   - **Single instance**: ✅ (enabled)

4. Add these fields (use snake_case in DatoCMS, it auto-converts to camelCase in GraphQL):
   - **Background Image**
     - Field type: `Single asset`
     - API key: `background_image` *(becomes `backgroundImage` in queries)*
   
   - **Headline**
     - Field type: `Single-line string`
     - API key: `headline`
   
   - **Resume Link**
     - Field type: `Single asset`
     - API key: `resume_link` *(becomes `resumeLink` in queries)*
   
   - **LinkedIn Link**
     - Field type: `Single-line string`
     - API key: `linkedin_link` *(becomes `linkedinLink` in queries)*
   
   - **Profile Summary**
     - Field type: `Multiple-paragraph text`
     - API key: `profile_summary` *(becomes `profileSummary` in queries)*

### 2. Projects Model

1. **Model Name**: `Project`
2. **API Key**: `project`
3. **Single instance**: ❌ (disabled - multiple instances)

4. Add these fields:
   - **Title** (Single-line string) - API key: `title`
   - **Description** (Multiple-paragraph text) - API key: `description`
   - **Tech Used** (Single-line string) - API key: `tech_used` *(becomes `techUsed`)*
   - **Image** (Single asset) - API key: `image`

### 3. Skills Model

1. **Model Name**: `Skill`
2. **API Key**: `skill`
3. **Single instance**: ❌ (disabled)

4. Add these fields:
   - **Name** (Single-line string) - API key: `name`
   - **Category** (Single-line string) - API key: `category`
   - **Description** (Multiple-paragraph text) - API key: `description`
   - **Icon** (Single-line string) - API key: `icon`

### 4. Certifications Model

1. **Model Name**: `Certification`
2. **API Key**: `certification`
3. **Single instance**: ❌ (disabled)

4. Add these fields:
   - **Title** (Single-line string) - API key: `title`
   - **Issuer** (Single-line string) - API key: `issuer`
   - **Issued Date** (Date) - API key: `issued_date` *(becomes `issuedDate`)*
   - **Link** (Single-line string) - API key: `link`
   - **Icon Name** (Single-line string) - API key: `icon_name` *(becomes `iconName`)*

### 5. Work Permit Model

1. **Model Name**: `Work Permit`
2. **API Key**: `work_permit` *(query as `workPermit`)*
3. **Single instance**: ✅ (enabled)

4. Add these fields:
   - **Visa Status** (Single-line string) - API key: `visa_status` *(becomes `visaStatus`)*
   - **Expiry Date** (Date) - API key: `expiry_date` *(becomes `expiryDate`)*
   - **Summary** (Multiple-paragraph text) - API key: `summary`
   - **Additional Info** (Multiple-paragraph text) - API key: `additional_info` *(becomes `additionalInfo`)*

### 6. Contact Me Model

1. **Model Name**: `Contact Me`
2. **API Key**: `contact_me` *(query as `contactMe`)*
3. **Single instance**: ✅ (enabled)

4. Add these fields:
   - **Profile Picture** (Single asset) - API key: `profile_picture` *(becomes `profilePicture`)*
   - **Name** (Single-line string) - API key: `name`
   - **Title** (Single-line string) - API key: `title`
   - **Summary** (Multiple-paragraph text) - API key: `summary`
   - **Company/University** (Single-line string) - API key: `company_university` *(becomes `companyUniversity`)*
   - **LinkedIn Link** (Single-line string) - API key: `linkedin_link` *(becomes `linkedinLink`)*
   - **Email** (Single-line string) - API key: `email`
   - **Phone Number** (Single-line string) - API key: `phone_number` *(becomes `phoneNumber`)*

## Step 3: Add Content

After creating the models:

1. Go to **Content** in your DatoCMS dashboard
2. For each model, click **Add new record**
3. Fill in the content for your portfolio

## Step 4: Verify

1. Visit `http://localhost:3000/test-schema` again
2. You should now see all the models listed
3. Try navigating to your portfolio pages - they should now work!

## Important Notes

### API Key Naming

- **Must match exactly** what your code expects
- Use lowercase for single-instance models (e.g., `profilebanner`)
- GraphQL will auto-generate `all` queries for multi-instance models (e.g., `allProjects`)

### Multiple Portfolio Versions

If you have separate DatoCMS projects for ROR, Java, Frontend, and Node:
- You'll need to set up these content models in **each project**
- Each project will have its own content tailored to that tech stack
- Make sure each project's API token is correctly set in your `.env` file

## Troubleshooting

### "Field doesn't exist" error
- Check that the API key exactly matches what's in your GraphQL query
- Case sensitivity matters: `profilebanner` ≠ `profileBanner`

### Schema not updating
- DatoCMS may cache schema changes
- Wait a few seconds after making changes
- Refresh your browser

### Token issues
- Make sure you're using the correct token for your hostname
- Check that the token has read permissions

## Next Steps

After setup is complete, you can remove the test schema page:
1. Delete `/src/testSchema.tsx`
2. Delete `/src/utils/introspectSchema.ts`
3. Remove the test route from `App.tsx`

