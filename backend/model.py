from pydantic import BaseModel

class UserInputForm(BaseModel):
    project_name: str 
    scanning_mode: str
    scan_dimensions_x: int
    scan_dimensions_y: int
    scanner_frequency: float
