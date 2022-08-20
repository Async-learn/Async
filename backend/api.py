import os
from flask import Flask, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import random


from .database.models import setup_db, User
from .auth.auth import AuthError, requires_auth


USERS_PER_PAGE = 10

# paginate each pages to render 10 user on each page
# From the USERS_PER_PAGE constant


def user_paginated(request, selection):
    page = request.args.get('page', 1, type=int)
    start = (page - 1) * USERS_PER_PAGE
    end = start + USERS_PER_PAGE

    users = [user.format() for user in selection]
    current_user = users[start:end]

    return current_user

def create_app():

    # create and configure the app
    app = Flask(__name__)
    setup_db(app)

    # set up CORS, allowing all origins
    CORS(app, resources={'/': {'origins': '*'}})


    @app.after_request
    def after_request(response):
        '''
        Sets access control.
        '''
        response.headers.add('Access-Control-Allow-Headers',
                            'Content-Type,Authorization,true')
        response.headers.add('Access-Control-Allow-Methods',
                            'GET,POST,DELETE,PUT,OPTIONS')
        return response



    @app.route('/users')
    def get_users():
        ''' Renders all users paginated to 10 user per page'''
        selection = User.query.order_by(User.id).all()
        total_users = len(selection)
        current_users = user_paginated(request, selection)

        if len(current_users) == 0:
            abort(404)

        return jsonify({
            'success': True,
            'users': current_users,
            'total_users': total_users
        })


    @app.route('/users/<int:user_id>', methods=['DELETE'])
    def delete_user(user_id):
        ''' Renders Delete for a particular user'''
        try:
            user = User.query.filter(
                User.id == user_id).one_or_none()

            if user is None:
                abort(404)

            user.delete()
            selection = User.query.order_by(User.id).all()
            current_user = user_paginated(request, selection)

            return jsonify(
                {
                    'success': True,
                    'deleted': user_id,
                    'user': current_user,
                    'total_user': len(User.query.all())}
            )
        except:
            abort(422)


    @app.route('/users', methods=['POST'])
    def create_user():
        ''' Renders avalability to create new user'''
        body = request.get_json()

        first_name = body.get('first_name')
        last_name = body.get('last_name')
        email = body.get('email')
        try:
            user = User(
                first_name=first_name,
                last_name=last_name,
                email=email)
            user.insert()

            selection = User.query.order_by(User.id).all()
            if last_name is None or first_name is None or email is None:
                abort(404)
            current_user = user_paginated(request, selection)

            return jsonify(
                {
                    'success': True,
                    'created': user.id,
                    'user': current_user,
                    'total_users': len(User.query.all()),
                }
            )
        except:
            abort(422)

    # Error handllerss for each error that may occur


    @app.errorhandler(404)
    def handle_not_found_error404(e):
        return jsonify({
            "success": False,
            "error": 404,
            "message": "resource not found"
        }), 404


    @app.errorhandler(400)
    def handle_bad_request_error400(e):
        return jsonify({
            "success": False,
            "error": 400,
            "message": "bad request"
        }), 400


    @app.errorhandler(422)
    def handle_unprocessable_error422(e):
        return jsonify({
            "success": False,
            "error": 422,
            "message": "unprocessable"
        }), 422

    return app
# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=80)
