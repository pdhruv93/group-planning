<h2>STEM based collaborative group planner</h2>
<img src="public/resources/screenshots/2.PNG">

<h2>Simple Drag and Drop UI</h2>
<img src="public/resources/screenshots/3.PNG">

<h2>Other features</h2>
<img src="public/resources/group-planning/1.png">
<img src="public/resources/group-planning/2.png">
<img src="public/resources/group-planning/3.png">
<img src="public/resources/group-planning/4.png">



COMMON ERRORS
===================================================
error eslint-visitor-keys@3.0.0: The engine "node" is incompatible with this module. Expected version "^12.22.0 || ^14.17.0 || >=16.0.0". Got "12.18.3"
error Found incompatible module.
info Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.
C:\Users\dhruv.pandey\Desktop\tier-react-native-clone\tier\node_modules\metro-hermes-compiler\src\emhermesc.js:77
          throw ex;
          ^

RuntimeError: abort(Error: Command failed: yarn add -D @babel/core @babel/runtime @react-native-community/eslint-config eslint jest babel-jest metro-react-native-babel-preset react-test-renderer@17.0.2). Build with -s ASSERTIONS=1 for more info.

fix: let the project get created. Do "yarn upgrade" after that, so that the modules are updated.


Git steps
===================================================
git init -b main git remote add origin https://github.com/pdhruv93/tier-clone.git git add . && git commit -m "initial commit" && git push git push origin main




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


3. When you???re ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app???s deploy directory (the default is ???public???). Then, run this command from your app???s root directory:


4. firebase deploy


Git Steps
=====================================
git init -b main git remote add origin https://github.com/pdhruv93/group-planning.git git add . && git commit -m "initial commit" && git push git push origin main
