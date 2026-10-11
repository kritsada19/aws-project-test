# AWS Practice Website

This is a simple Next.js website built for learning how to deploy an app on AWS.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Docker build

```bash
docker build -t aws-practice-site .
docker run -p 3000:3000 aws-practice-site
```

## AWS deployment ideas

You can deploy this app to AWS in several ways:

1. EC2
   - Upload project to GitHub
   - SSH to EC2 instance
   - Install Node.js
   - Run `npm install && npm run build && npm run start`

2. Elastic Beanstalk
   - Zip project
   - Create environment in Elastic Beanstalk
   - Deploy the app package

3. S3 + CloudFront
   - Best for static front-end projects
   - For a Next.js app, usually use EC2 or Amplify for easier setup

4. Amplify Hosting
   - Connect GitHub repo
   - Build and deploy automatically

## Good practice for this project

- Use GitHub for source control
- Keep environment variables in `.env.local`
- Set up a production build before deploy
- Add a domain and HTTPS when ready
- Practice using EC2, IAM, Security Groups, and CloudWatch

## Project structure

- `app/page.tsx` — homepage
- `app/globals.css` — styling
- `Dockerfile` — container setup for deployment
