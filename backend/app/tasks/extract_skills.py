def extract_skills(doc):
  skills = set()
  for ent in doc.ents:
    if ent.label_ == 'SKILL':
      skills.add(ent.text)
  return skills if len(skills) > 0 else 'not_found'