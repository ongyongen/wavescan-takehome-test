# wavescan-takehome-test


## Deployment ##
Frontend deployment : https://wavescan-frontend.netlify.app <br />
Backend deployment: https://wavescan-backend.herokuapp.com <br />

## Tech stack ##
Frontend: React <br />
Backend: FastAPI <br />
Testing: FastAPI (Testclient), Cypress <br />
Storage (for the image file) : Amazon S3, Amazon CloudFront <br />

## Packages installed ##
Axios : npm install axios <br />
Cypress : npm install cypress --save-dev <br />
React Router DOM : npm i react-router-dom <br />
FastAPI : pip install fastapi <br />

## API endpoints ##
| Description  | Endpoint | Method |
| ------------- | ------------- | ------------- | 
| Display welcome message  | /  | GET  |
| Form validation for user input  | /new  | POST  |
| Retrieve image link upon successful submission of form  | /image  | GET  |