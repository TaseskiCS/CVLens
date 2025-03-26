def extract_name(doc):
    for ent in doc.ents:
        if ent.label_.strip() == 'NAME':
            return ent.text
    return 'not_found'