from model import UserInputForm

def check_input(item: UserInputForm):
    errors = []
    if len(item.project_name) <= 3:
        errors += ["Project name has to be more than 3 characters"]
    if item.scan_dimensions_x < 1 or item.scan_dimensions_y < 1:
        errors += ["Item dimensions have to be more than 1 cm"]
    if item.scanner_frequency < 1:
        errors += ["Scanner frequency has to be more than 1 GHz"]
    return errors