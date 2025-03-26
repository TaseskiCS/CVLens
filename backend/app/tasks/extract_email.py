def extract_email(doc):
  for ent in doc.ents:
    if ent.label_ == 'EMAIL':
        print('found the email: ', ent.text)
        return ent.text
  return 'not_found'