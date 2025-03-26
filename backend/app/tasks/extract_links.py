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