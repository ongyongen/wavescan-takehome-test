from pydantic import BaseModel

# Model for input form
class UserInputForm(BaseModel):
    project_name: str 
    scanning_mode: str
    scan_dimensions_x: int
    scan_dimensions_y: int
    scanner_frequency: float
