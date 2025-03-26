import spacy
import fitz
import base64
import traceback
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from tasks import *

# Load the our model
model_path = './model/content/output/model-best'
nlp = spacy.load(model_path)

def prep_file(doc):
    text = ""
    try:
        for page in doc:
            text += page.get_text()
    except Exception as e:
        print(f"Error reading file: {str(e)}")
    text = text.strip()
    return ' '.join(text.split())


def parse_resume(doc):
    json_data = {
        "name": extract_name(doc),
        "email": extract_email(doc),
        "phone": extract_phone(doc),
        "experiences": extract_experiences(doc),
        "education": extract_education(doc),
        "skills": extract_skills(doc),
        'links': extract_links(doc)
    }
    return json_data

app = FastAPI()

origins = [
    "http://localhost:3000",
    # "https://cvlens.ai"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], #utility api so allow everyone maybe in future add we will add only accounts to be able to use it
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=["*"]
)

class FileRequest(BaseModel):
    filename: str
    file: str  # base64 string

def decode_b64_file(file):
    try:
        decoded_data = base64.b64decode(file)
        return decoded_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/upload")
def parse_file(request: FileRequest):
    print(f"Received file: {request.filename}")
    try:
        pdf_bytes = decode_b64_file(request.file)
        print("PDF Bytes Length:", len(pdf_bytes))

        # Open PDF document
        doc = fitz.open(stream=pdf_bytes, filetype="pdf")
        
        # Extract text from PDF
        text = prep_file(doc)
        
        # Process text with spaCy model ONCE
        
        processed_doc = nlp(text)
        for ent in processed_doc.ents:
            print(ent.text + "->"+  ent.label_)
        # Parse resume using the processed document
        parsed_resume = parse_resume(processed_doc)

        return {
            "filename": request.filename,
            "parsed_data": parsed_resume
        }
    except Exception as e:
        error_details = traceback.format_exc()
        print("Error processing file:", error_details)
        return {"error": str(e), "details": error_details}