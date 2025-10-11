# Troubleshooting Guide

## Current Issue: Field 'profilebanner' doesn't exist

### What This Error Means

✅ **Good news**: Your DatoCMS API token is working! (The 401 error is fixed)

❌ **The problem**: Your DatoCMS project doesn't have the content models that your code is trying to query.

### Quick Diagnosis

Your app is trying to fetch data for:
- `profilebanner` - Profile banner information
- `allProjects` - List of your projects  
- `allSkills` - List of your skills
- `allCertifications` - List of certifications
- `workPermit` - Work permit information
- `contactMe` - Contact information

But your DatoCMS project is either:
1. **Empty** (no content models set up yet)
2. **Has different field names** (e.g., `profileBanner` vs `profilebanner`)
3. **Missing some content models**

### How to Fix It

#### Option 1: Check What You Have (Recommended First Step)

1. **Make sure your dev server is running**:
   ```bash
   npm start
   ```

2. **Visit the schema checker**:
   ```
   http://localhost:3000/test-schema
   ```

3. **Look at the output**:
   - It will show you all available fields in your DatoCMS project
   - Compare with what the app needs
   - Identify what's missing

#### Option 2: Create Content Models from Scratch

If your DatoCMS project is empty or missing models:

1. **Follow the setup guide**: See [DATOCMS_SETUP_GUIDE.md](./DATOCMS_SETUP_GUIDE.md)
2. **Create all required models** in DatoCMS
3. **Add your content** to each model
4. **Test again**

#### Option 3: Fix Field Name Mismatches

If you already have content models but the names don't match:

**Example**: You have `profileBanner` (camelCase) but code expects `profilebanner` (lowercase)

You can either:
- **Option A**: Change the API key in DatoCMS to match your code (lowercase)
- **Option B**: Update your code to match DatoCMS field names

To update the code (Option B), edit these files:
- `src/queries/getProfileBanner.ts` - Change `profilebanner` to match your DatoCMS field name
- Do the same for other query files

### Common Error Patterns

| Error Message | Cause | Solution |
|--------------|-------|----------|
| `401 Unauthorized` | Missing or invalid API token | Check `.env` file has correct token |
| `Field 'X' doesn't exist` | Content model not created or wrong name | Create model in DatoCMS or fix name |
| `Cannot query field 'X' on type 'Query'` | Same as above | Create model in DatoCMS |
| Empty data returned | Model exists but no content added | Add content records in DatoCMS |

### Step-by-Step Recovery

1. ✅ **Token working** (401 fixed)
2. 🔍 **Check schema**: Visit `/test-schema` 
3. 📝 **Compare**: What you have vs what you need
4. 🛠️ **Create missing models**: Follow setup guide
5. ✍️ **Add content**: Fill in your portfolio data
6. 🎉 **Test**: Refresh and enjoy!

### Need Help?

Check these resources:
- [DatoCMS Documentation](https://www.datocms.com/docs)
- [GraphQL API Reference](https://www.datocms.com/docs/content-delivery-api)
- Schema checker: `http://localhost:3000/test-schema`

### After Everything Works

Once your portfolio is working correctly, you can clean up:

```bash
# Remove test files
rm src/testSchema.tsx
rm src/utils/introspectSchema.ts
```

And remove the test route from `src/App.tsx`.

