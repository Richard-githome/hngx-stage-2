# hngx-stage-2

This is the stage two task for the HNGX program. Wish me well, thanks.


# Objective:

Build a simple REST API capable of CRUD operations on a "person" resource, interfacing with any database of your choice. Your API should dynamically handle parameters, such as adding or retrieving a person by name. Accompany the development with UML diagrams to represent your system's design and database structure.  Host your entire project on GitHub, and provide a well-structured documentation in the repository that outlines request/response formats, setup instructions, and sample API usage.


# CRUD RESTful API

This is a simple CRUD (Create, Read, Update, Delete) RESTful API built using Node.js. It provides endpoints to manage a person resource through HTTP requests.


## Features

- Create a new resource
- Retrieve/Read existing resources
- Update existing resources
- Delete resources

## Prerequisites

To run this API locally, you need to have the following installed:

- Node.js (version 18.13.0)
- npm (version 8.19.3)
- MongoDB (version 7.0)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/crud-api.git
```

2. Install dependencies:

```bash
cd hngx-stage-2
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and provide the following variables:

```
PORT=3000
DB_URL=mongodb+srv://username:<password>@cluster0.n1m2cz0.mongodb.net/{name-of-the-database}?retryWrites=true&w=majority
```

4. Start the server:

```bash
npm start
```

The API will be available at `http://localhost:3000`.

## API Endpoints

The following endpoints are available:

- `GET /