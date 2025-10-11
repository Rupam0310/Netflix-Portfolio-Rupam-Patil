# Setting Up Local Domain Testing

If you want to test all portfolio versions (ROR, Java, Frontend, Node) locally, you need to set up hostname aliases.

## Windows Setup

1. **Edit your hosts file** (requires Administrator privileges):
   - Open Notepad as Administrator
   - Open file: `C:\Windows\System32\drivers\etc\hosts`

2. **Add these lines** at the end of the file:
   ```
   127.0.0.1 localhost
   127.0.0.1 ror.localhost
   127.0.0.1 java.localhost
   127.0.0.1 frontend.localhost
   127.0.0.1 node.localhost
   ```

3. **Save the file** and close Notepad

4. **Restart your browser** to clear DNS cache

## Testing Different Portfolios

After setting up the hosts file and adding all tokens to `.env`:

- Visit `http://localhost:3000` or `http://ror.localhost:3000` → ROR Portfolio
- Visit `http://java.localhost:3000` → Java Portfolio
- Visit `http://frontend.localhost:3000` → Frontend Portfolio
- Visit `http://node.localhost:3000` → Node Portfolio

Each URL will automatically use the corresponding DatoCMS token and display that portfolio's content.

## For Production Deployment

When deploying to production:
- `ror.sumanthsamala.com` uses `REACT_APP_DATOCMS_ROR_TOKEN`
- `java.sumanthsamala.com` uses `REACT_APP_DATOCMS_JAVA_TOKEN`
- `frontend.sumanthsamala.com` uses `REACT_APP_DATOCMS_FRONTEND_TOKEN`
- `node.sumanthsamala.com` uses `REACT_APP_DATOCMS_NODE_TOKEN`

Each subdomain deployment should have its corresponding token set in the environment variables.

