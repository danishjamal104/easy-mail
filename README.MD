# Easy-Mail

## Description
This project is design to simplify the process of sending emails, by providing
a template which is easy to setup and connet with your email.

## How It Works?
1. Fork the repo.
2. Install required modules/dependencies.
3. Modify index.js file to connect to your email.
4. [Deploy](#deploy-on-heroku) on your favourite platform(Heroku/GCP/Aws...).

##### After following above steps simple call the url with required query params to send emails
###### => URL: http://{host}:{port}/send?to={<enter receiver's mail id here>}&sub={<enter subject of email here>}&dt={<enter email body here>}
---

# Prerequisite
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Node.js and NPM ](https://nodejs.org/en/)
* [Heroku Account](http://heroku.com/)
* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
* Your favourite editor
```
// Run following commands in terminal/cmd to check if we are ready to go
git --version 
node -v 
npm -v 
heroku -v
```

# Follow From Here
* ### Step 1 - Fork/Clone
    1. Get this project on your local machine. 
    2. Open terminal/cmd.
    3. Navigate to that folder using cmd/terminal.
* ### Step 2 - Initialize Node.js App
    1. Execute command >>> ``` npm init 👇🏼```
    2. Enter the necessary details and finish setup.
* ### Step 3 - Installing Libraries
    1. ``` npm install nodemailer --save ```
    2. ``` npm install cors --save ```
    3. ``` npm install express --save ```
    4. ``` npm install morgan --save ```
* ### Step 4 - Connect Email
    1. Enter email in [index.js](index.js) line 11.
    2. Enter [app password](https://support.google.com/accounts/answer/185833?hl=en) of your above account in line 12 [index.js](/index.js).
    3. Navigate to {project_path}/package.json and add ``` "start": "node index" ``` inside ``` "scripts"``` key.
# Test
Enter ```npm start``` in terminal/cmd, this should start the server at [``` http://localhost:3000```](http://localhost:3000) if nothing goes wrong. Now copy this url and open in your favourite browser, you will see a page like👇 .
![Image](/page.png)
___
# Deploy On Heroku
Follow below steps to deploy this server from localhost to heroku, after which you will be able to execute use your heroku-url for sending emails.
* #### Step 1 - Create App
    1. Create a simple app on http://heroku.com/ .
    2. By clicking [new >> create new app](https://dashboard.heroku.com/new-app?org=personal-apps).
    3. Enter app name (whatever you want) and create app.
* #### Step 2  - Deploy
    1. Execute below commands in terminal, make sure that you are into your project directory.
    2. Login to Heroku CLI: ```heroku login```
    3. Create new empty repo: ```git init```
    4. Add all changes to repo: ```git add .```
    5. Commit changes: ```git commit -m "init"```
    6. Add remote repo: ```heroku git:remote -a <your app name>```
    7. Push changes: ```git push heroku master```
###### Now go to dashboard of your heroku app and navigate to settings page, scroll down untill you find domain where your app is deployed to, it will look somwthing like this ```https://<your app name>.herokuapp.com/```.

# Congratulations On Deploying Your First Cloud App