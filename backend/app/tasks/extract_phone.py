def extract_phone(doc):
  for ent in doc.ents:
    if ent.label_ == 'PHONE_NUMBER':
      return ent.text
  return 'not_found'