# Backend - Async API Srever

## Setting up the Backend

1. **Virtual Environment** -  Activate the virtual environment by running:

ON MAC - `source venv/Scripts/activate`

ON Winows - `call venv/Scripts/activate`


2. **Run the server** - From within the `./backend` directory first ensure you are working using the virtual environment.

First set tthe flask app to the api.py file. Run the command:
ON Mac - `FLASK_APP=api.py`
ON Windows - `set FLASK_APP=api.py`

To run the server, execute:

ON Mac - `bash flask run --reload`
On Windows - `flask run --reload`

The `--reload` flag will detect file changes and restart the server automatically.


### Error Handling
Errors are returned as JSON in the following format:

```{
    "success": False,
    "error": 404,
    "message": "resource not found"
}
```


### Endpoints

## GET /users
Returns a list current users.
Sample: `curl http://127.0.0.1:5000/users`

Returns: 
```
    {
    "success": true,
    "total_users": 3,
    "users": [
        {
            "email address": "kelanitaiwo34@gmail.com",
            "first name": "Taiwo",
            "id": 1,
            "last name": "Kelani"
        },
        {
            "email address": "georgeolufemi@gmail.com",
            "first name": "George",
            "id": 6,
            "last name": "Olufemi"
        }
    ]
}
```

## DELETE /users/<int:id>
This will delete a user based on the user id passed in the url as a parameter
Returns id of deleted user upon success.
Sample: `curl http://127.0.0.1:5000/users/6 -X DELETE'`

Returns:
```
  {
    "deleted": 1,
    "success": true,
    "total_user": 1,
    "user": [
        {
            "email address": "kelanitaiwo34@gmail.com",
            "first name": "Taiwo",
            "id": 1,
            "last name": "Kelani"
        }
    ]
}
```

## POST /users
This endpoint either creates a new question or returns search results.

If no search term is included in request:

Creates a new question using JSON request parameters.
Returns JSON object with newly created question, as well as paginated questions.
Sample:` curl http://127.0.0.1:5000/users -X POST -H "Content-Type: application/json" -d '{ "first_name": "John", "last_name": "john", "email": "john@gmail.com" }'`

Returns:
```
{
    "created": 10,
    "success": true,
    "total_users": 3,
    "user": [
        {
            "email address": "georgeolufemi@gmail.com",
            "first name": "George",
            "id": 6,
            "last name": "Olufemi"
        },
        {
            "email address": "john@gmail.com",
            "first name": "john",
            "id": 10,
            "last name": "john"
        }
    ]
}
```