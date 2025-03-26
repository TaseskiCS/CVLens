import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import base64

app = FastAPI()

origins= [
    "http://localhost:3000",
    # "https://cvlens.ai"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=["*"]
)

class FileRequest(BaseModel):
    filename: str
    file: str # base64 string

def decode_b64_file(file):
    try:
        decoded_data = base64.b64decode(file)

        return decoded_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/upload")
def parse_file(request: FileRequest):
    decoded_data = decode_b64_file(request.file)

    return {"filename": request.filename, "parsed_data": decoded_data}
    

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)