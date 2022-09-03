import uvicorn
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI, Response, status

import uvicorn
from pydantic import BaseModel

from fastapi.responses import JSONResponse


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

@app.get("/")
async def main():
    return {"message": "Hello World"}

@app.get("/image")
async def get_image():
    return {"image": "Image"}

class UserInputForm(BaseModel):
    project_name: str 
    scanning_mode: str
    scan_dimensions_x: int
    scan_dimensions_y: int
    scanner_frequency: float

@app.post("/new")
async def create_item(item: UserInputForm,response: Response):
    errors = []
    if len(item.project_name) <= 3:
        errors += ["Project name has to be more than 3 characters"]
    if item.scan_dimensions_x < 1 or item.scan_dimensions_y < 1:
        errors += ["Item dimensions have to be more than 1 cm"]
    if item.scanner_frequency < 1:
        errors += ["Scanner frequency has to be more than 1 GHz"]
    if len(errors) != 0:
        return JSONResponse(status_code=400, content={"error": errors})
    
    else:
        response.status_code = status.HTTP_200_OK
        return {"body": item}
    
if __name__=="__main__":
    uvicorn.run("app.app:app", port=8000, reload=True)