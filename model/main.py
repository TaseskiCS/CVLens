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

# doc = nlp(text)

# for ent in doc.ents:
  
#   if ent.label_ == 'SKILL':
#     skills.add(ent.text)
  
  
  

# for i in skills:
#   print('Skill: ' + i + ' ')

def extract_graduation_date(nlp, resume_text):

  doc = nlp(resume_text)

  # find school names
  school_names = []
  for ent in doc.ents:
    if ent.label_ == "SCHOOL":
      school_names.append(ent.text)

  if not school_names:
    print('no school')
    return None  

  
  most_recent_school = school_names[-1]
  print('school: ', most_recent_school)

  
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
        print('first date after school: ', first_date_after_school)
        break


  

print(extract_graduation_date(nlp, text))