from .extract_graduation_date import *

def extract_education(doc):
    education = []
    current_education = {}
    
    for i, ent in enumerate(doc.ents):
        if ent.label_ in ["SCHOOL", "DEGREE"]:
            if current_education.get("school") and current_education.get("degree"):
                education.append(current_education)
                current_education = {}
        
            if ent.label_ == "SCHOOL":
                current_education["school"] = ent.text
            else:
                current_education["degree"] = ent.text

            
    current_education["grad_date"] = extract_graduation_date(doc)
    if current_education.get("school") and current_education.get("degree"):
        education.append(current_education)

        
    return education
