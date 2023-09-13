## API Documentation: CRUD RESTful API

## Table of Contents

<ol>
    <li>Overview</li>
    <li>Base URL</li>
    <li>Resource</li>
    <li>Error Handling</li>
    <li>UML Diagram</li>
</ol>

## Overview
This API provides Create, Read, Update, and Delete (CRUD) functionality for managing a person resource. It follows the REST architectural style and is built using Node.js.

## Base URL
The base URL for all API endpoints is: `https://localhost:3000/api`

## Resource

### Users : Person

#### Person Object
```
{
  "id": "string",
  "name": "string", 
}
```

#### Endpoints

1. **GET /api
   - Description: Retrieve all person users from the database.
   - Response:
     - Status: 200 OK
     - Body: Array of User Objects

2. **GET /api/{user_id}
   - Description: Retrieve a user by ID (serialNumber).
   - Parameters:
     - Path Params:
       - user_id (string || number): The ID (serialNumber) of the user to retrieve.
   - Response:
     - Status: 200 OK
     - Body: Person Object
     - Status: 404 Not Found (if user not found)

3. **POST /api
   - Description: Create a new person user.
   - Request:
     - Body: Person Object (name is required)
   - Response:
     - Status: 201 Created
     - Body: Person Object
     - Status: 400 Bad Request (if required fields are missing or invalid)

4. **PATCH /api/{user_id}
   - Description: Update a person by ID (serialNumber).
   - Parameters:
     - Path Params:
       - user_id (number): The ID (serialNumber) of the user to update.
   - Request:
     - Body: Person Object (name is required)
   - Response:
     - Status: 200 OK
     - Body: Person Object
     - Status: 400 Bad Request (if required fields are missing or invalid)
     - Status: 404 Not Found (if user not found)

5. **DELETE /api/{user_id}
   - Description: Delete a user by ID (serialNumber).
   - Parameters:
     - Path Params:
       - user_id (number): The ID (serialNumber) of the user to delete.
   - Response:
     - Status: 404 Not Found (if user not found)

## Error Handling

In case of any errors or invalid requests, the API will respond with appropriate error messages and status codes.

- **400 Bad Request**: Indicates that the request is missing required fields. The response body will contain an error message describing the issue.

- **404 Not Found**: Indicates that the requested resource does not exist. The response body will contain an error message indicating the resource was not found.

- **500 Internal Server**: Indicates that there is a server internal error while handling the request. The response body will contain an error message indicating that there is an internal server error.

## UML Diagram

<div align="center">
<img src="./src/utils/images/UML-Diagram.png" alt="UML Diagram"/>
</div>