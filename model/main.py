import fitz, sys 
import spacy
from spacy.language import Language
from spacy_transformers import Transformer

# Load model
nlp = spacy.load('./content/output/model-best')
fname = './data/test-resume.pdf'
doc = fitz.open(fname)
text = " "
for page in doc:
  text = text + str(page.get_text())
text = text.strip()

text = ' '.join(text.split())

skills = set()
experiences = {}

file = nlp(text)
for ent in file.ents:
  
    print(ent.text + "->"+  ent.label_)
  
def extract_name(doc):
    for ent in doc.ents:
        if ent.label_.strip() == 'NAME':
            return ent.text
    return 'not_found'

def extract_email(doc):
  for ent in doc.ents:
    if ent.label_ == 'EMAIL':
        print('found the email: ', ent.text)
        return ent.text
  return 'not_found'

def extract_skills(doc):
  skills = set()
  for ent in doc.ents:
    if ent.label_ == 'SKILL':
      skills.add(ent.text)
  return skills if len(skills) > 0 else 'not_found'

def extract_phone(doc):
  for ent in doc.ents:
    if ent.label_ == 'PHONE_NUMBER':
      return ent.text
  return 'not_found'

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


def extract_graduation_date(doc):
  # find school names
  school_names = []
  for ent in doc.ents:
    if ent.label_ == "SCHOOL":
      school_names.append(ent.text)

  if not school_names:
    print('no school')
    return None  

  
  most_recent_school = school_names[-1]

  
  school_index = -1
  for i, ent in enumerate(doc.ents):
    if ent.text == most_recent_school:
      school_index = i
      break

  if school_index != -1:
    # look for the first date after the school name
    for i in range(school_index + 1, len(doc.ents)):
      if doc.ents[i].label_ in ["START_DATE", "END_DATE", "GRAD_DATE"]:
        first_date_after_school = doc.ents[i].text
        return first_date_after_school
        break

    

def extract_experiences(doc):
    """
    Extract professional experiences from a document by hardcoding entity matching logic.
    
    Args:
        doc (spaCy Doc): Processed document with named entities
    
    Returns:
        list: List of dictionaries containing extracted experiences
    """
    experiences = []
    current_experience = {}
    
    # Iterate through entities in the document
    for i, ent in enumerate(doc.ents):
        # Check for company or role
        if ent.label_ in ["COMPANY", "ROLE"]:
            # If we already have a partial experience, add it to experiences
            if current_experience.get("company") and current_experience.get("role"):
                experiences.append(current_experience)
                current_experience = {}
            
            # Set company or role based on the entity label
            if ent.label_ == "COMPANY":
                current_experience["company"] = ent.text
            else:
                current_experience["role"] = ent.text
        
        # Extract dates
        if ent.label_ in ["START_DATE", "END_DATE", "GRAD_DATE"]:
            # If we don't have start date, set it as start date
            if not current_experience.get("start_date"):
                current_experience["start_date"] = ent.text
            
            #FIXME: doesnt work rn but its for end date
            elif not current_experience.get("end_date"):
                if ent.text.lower() in ["current", "present"]:
                    current_experience["end_date"] = "Present"
                else:
                    current_experience["end_date"] = ent.text
        if ent.text.lower() in ["current", "present"]:
            current_experience["end_date"] = "Present"
        
    
    
    if current_experience.get("company") and current_experience.get("role"):
        experiences.append(current_experience)
    
    return experiences

def extract_links(doc):
    links = set()
    for ent in doc.ents:
        if ent.label_ in ['GITHUB', 'LINKEDIN', 'WEBSITE']:
            if 'http' not in ent.text:
                links.add(f"http://{ent.text}")
            else:
                links.add(ent.text)
        else:
            if 'http' in ent.text:
                links.add(ent.text)
    return links

def print_experiences(experiences):
    """
    Helper function to print extracted experiences in a readable format.
    
    Args:
        experiences (list): List of extracted experience dictionaries
    """
    for exp in experiences:
        print("Experience:")
        for key, value in exp.items():
            print(f"  {key.capitalize()}: {value}")
        print()


# print_experiences(extract_experiences(file))
        
     



json_data = {
    "name": extract_name(file),
    "email": extract_email(file),
    "phone": extract_phone(file),
    "experiences": extract_experiences(file), # OBJ
    "education": extract_education(file), # OBJ 
    "skills": extract_skills(file),      #OBJ
    'links': extract_links(file)         #OBJ
}

print(json_data)