Firebase Hosting steps
======================================
1. firebase login

2. firebase init
Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
Use an existing project
select your project
What do you want to use as your public directory? (public)   Enter
Configure as a single-page app (rewrite all urls to /index.html)? (y/N) N
Set up automatic builds and deploys with GitHub? (y/N) y 
For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) pdhruv93/group-planning
Set up the workflow to run a build script before every deploy? (y/N) n
Set up automatic deployment to your site's live channel when a PR is merged? (Y/n) y
What is the name of the GitHub branch associated with your site's live channel? (main)


3. When you’re ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory:


4. firebase deploy


Git Steps
=====================================
git init -b main git remote add origin https://github.com/pdhruv93/group-planning.git git add . && git commit -m "initial commit" && git push git push origin main
