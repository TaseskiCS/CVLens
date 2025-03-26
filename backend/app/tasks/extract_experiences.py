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
