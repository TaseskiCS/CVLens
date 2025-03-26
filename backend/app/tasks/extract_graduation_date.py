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