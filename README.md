# 🔍 CVLens – Smart Resume Parser

**CVLens** is a full-stack web application designed to simplify resume parsing. Users can upload resumes, which are automatically converted into structured JSON format. It's powered by our custom-trained NLP model using spaCy. Whether you're an individual job seeker or a developer looking to integrate parsing functionality into your application, CVLens makes resume data extraction seamless and accessible.

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## 🚀 Overview

CVLens simplifies the resume parsing process. Users can upload their resume through our clean frontend interface, and the backend handles data extraction using a Python-based ML pipeline. The result is a clean, structured JSON object that you can use in your applications or workflows.

We also provide an API integration page for developers who want to parse resumes programmatically.

---

## 🖼 Architecture

### 🧑🏽‍💻 Frontend (Next.js + Tailwind CSS)
- Built with **Next.js** for fast and dynamic UI rendering.
- Tailwind CSS for sleek, responsive design.
- Uploads resume files directly to the backend.
- Displays the structured JSON output after parsing.

### 🧠 Backend (FastAPI + spaCy)
- Receives and processes uploaded resume files.
- Uses our custom trained NLP model (built with spaCy) to extract entities like name, skills, experience, and education.
- Returns structured data in a JSON format.
- Dockerized for portability and easy deployment.

---

## 🌐 API Integration

Want to integrate CVLens into your own app? Simply send a POST request with the base64-encoded resume file:

```js
fetch('https://cvlens.vercel.app/api/parse', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    filename: 'resume.pdf',
    file: YOUR_BASE64_STRING
  })
});
```
## Example Response:

```js
{
  "name": "John Doe",
  "contact": { "email": "john@doe.com", "linkedin": "...", ... },
  "education": [ ... ],
  "experience": [ ... ],
  "skills": ["JavaScript", "AWS", ...]
}
```
---
## 🛠 Tech Stack
- **Frontend:** Next.js, Tailwind CSS, JavaScript
- **Backend:** Python, FastAPI, spaCy
- **Containerization:** Docker
- **Version Control:** Git
---

## 🤝 Contribution
If you're interested in contributing, feel free to open a PR or create an issue. We welcome improvements to parsing accuracy, UI enhancements, or documentation help.




