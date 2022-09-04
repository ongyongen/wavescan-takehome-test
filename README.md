# wavescan-takehome-test


## Deployment ##
Frontend deployment : https://wavescan-frontend.netlify.app <br />
Backend deployment: https://wavescan-backend.herokuapp.com <br />

## Tech stack ##
Frontend: React <br />
Backend: FastAPI <br />
Testing: FastAPI (Testclient), Cypress <br />
Storage (image file) : Amazon S3, Amazon CloudFront <br />

## API endpoints ##
| Description  | Endpoint | Method |
| ------------- | ------------- | ------------- | 
| Display welcome message  | /  | GET  |
| Form validation for user input  | /new  | POST  |
| Retrieve image link upon successful submission of form  | /image  | GET  |