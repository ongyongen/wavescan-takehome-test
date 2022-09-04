from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Response
from fastapi.responses import JSONResponse
from helpers import check_input
from model import UserInputForm
from fastapi.exceptions import RequestValidationError

app = FastAPI()

origins = [
    "https://localhost:8080",
    "https://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/image")
async def get_image():
    return {"image": "https://d2plt0bjayjk67.cloudfront.net/ScannedImage.png"}

@app.post("/new")
async def create_item(item: UserInputForm,response: Response):
    errors = check_input(item)
    if len(errors) == 0:
        return {"body": item}
    else:
        return JSONResponse(status_code=400, content={"error": errors})

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    return JSONResponse(status_code=400, content={"error": ["Please ensure you key in only numbers for scan dimensions and scan frequency fields"]})
