# CVLens

Simply upload your resume and allow us to handle the parsing of the information!

# Overview
This project implements a file upload and processing pipeline using Next.js, Node.js (or FastAPI), AWS S3, API Gateway, Lambda, and an ML model. The architecture enables users to upload files via a frontend interface, process them through a backend service, store them in AWS S3, and trigger a machine learning model for further analysis.

# Architecture Diagram
The following describes the flow of data in the system:

### 🧑🏽‍💻 Frontend (Next.js)
    - Users interact with the frontend to upload a file.
    - The frontend sends a POST request with { fileData } to the backend.
    - Users can retrieve processed data via a GET request (/parsedData).


### 🎒 Backend (Node.js or FastAPI)
    - Receives the file from the frontend.
    - Uploads the file to an AWS S3 bucket.
    - Responds to frontend requests for parsed data.


### 🪣 AWS S3 Bucket
    - Stores uploaded files.
    - Sends a POST request with { bucketData } to the API Gateway.


### 🔗 API Gateway & AWS Lambda
    - API Gateway triggers a Lambda function when new data is available.
    - The Lambda function processes the data and forwards it to an ML model.


### 🤖 Machine Learning Model
    - Receives data from the Lambda function.
    - Performs analysis and returns processed results.


### 📥 Data Retrieval
    - The backend provides an endpoint (GET /parsedData) for retrieving processed data.


# Technologies Used
### ⚙️ Stack
- **Frontend:** Next.js
- **Backend:** Node.js or FastAPI
- **Cloud Storage:** AWS S3
- **Serverless Compute:** AWS Lambda
- **API Management:** AWS API Gateway
- **Machine Learning:** Custom ML Model


# Setup & Deployment
### 📝 Prerequisites
    - Node.js / FastAPI installed
    - AWS account with access to S3, Lambda, and API Gateway
    - ML model deployed and accessible