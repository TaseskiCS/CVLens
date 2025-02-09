# CVLens

Simply upload your resume and allow us to handle the parsing of the information!

# Overview
This Full Stack web app implements a file upload and processing pipeline using Next.js, Express.js, our pretrained ML model, and uses AWS technologies like ECS Fargate, S3, API Gateway and Lambda. The architecture enables users to upload files via a frontend interface, process them through a Express.js backend where the file gets stored in an S3 bucket, and triggers the API Gateway and Lambda function which hosts our  machine learning model to conduct data extraction. Developers may also directly use our api following our documentation via the API page on the website.

# Architecture Diagram
The following describes the flow of data in the system:

### 🧑🏽‍💻 Frontend (Next.js)
    - Users interact with the frontend to upload a file.
    - The frontend sends a POST request with { fileData } to the backend.
    - Users can retrieve processed data via a GET request (/parsedData).


### 🎒 Backend (Node, Express.js)
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
    - The backend provides an endpoint (/process-resume) for processing data.


# Technologies Used
### ⚙️ Stack
- **Frontend:** Next.js
- **Backend:** Node.js, Express.js
- **Cloud Storage:** AWS ECS Fargate, S3
- **Serverless Compute:** AWS Lambda
- **API Management:** AWS API Gateway
- **Machine Learning:** Custom pretrained ML Model
---

