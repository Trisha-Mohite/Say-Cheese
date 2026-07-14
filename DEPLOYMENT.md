# Say Cheese Netlify Deploys

This project is now configured for Netlify automatic builds.

## Best setup: automatic deploy on every change

1. Put this `say-cheese` folder in a GitHub repository.
2. In Netlify, go to the project dashboard.
3. Open **Project configuration** > **Build & deploy**.
4. Connect the GitHub repository.
5. Use these settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

After that, every pushed change will rebuild and publish automatically.

## Local deploy option

After installing/logging into Netlify CLI once, deploy with:

```powershell
npm run deploy
```

Netlify CLI must be linked to the target site before the first local deploy.
