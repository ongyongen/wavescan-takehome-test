from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_get_image():
    response = client.get("/image")
    assert response.status_code == 200
    assert response.json() ==  {"image": "https://d2plt0bjayjk67.cloudfront.net/ScannedImage.png"}

def test_create_item_input_correct():
    response = client.post(
        "/new",
        json={
        "project_name": "aaaa",
        "scanning_mode": "Gantry",
        "scan_dimensions_x": 10,
        "scan_dimensions_y": 10,
        "scanner_frequency": 10
        }
    )
    assert response.status_code == 200
    assert response.json() == {'body': {
            'project_name': 'aaaa',
            'scan_dimensions_x': 10,
            'scan_dimensions_y': 10,
            'scanner_frequency': 10.0,
            'scanning_mode': 'Gantry'
        },
    }

def test_create_item_input_value_error():
    response = client.post(
        "/new",
        json={
        "project_name": "a",
        "scanning_mode": "Gantry",
        "scan_dimensions_x": 0,
        "scan_dimensions_y": 0,
        "scanner_frequency": 0
        }
    )
    assert response.status_code == 400
    assert response.json() == {'error': [ 
        'Project name has to be more than 3 characters',
        'Item dimensions have to be more than 1 cm',
        'Scanner frequency has to be more than 1 GHz'
        ]
    }

def test_create_item_dimensions_input_type_error():
    response = client.post(
        "/new",
        json={
        "project_name": "aaaa",
        "scanning_mode": "Gantry",
        "scan_dimensions_x": "test",
        "scan_dimensions_y": "test",
        "scanner_frequency": "test"
        }
    )
    assert response.status_code == 400
    assert response.json() == {'error': ['Please ensure you key in only numbers for scan dimensions and scan frequency fields']}
       