import os
from sqlalchemy import Column, String, Integer
from flask_sqlalchemy import SQLAlchemy
import json

database_path = "postgres://hxhyrvbc:qmFxrfp3MksMlK2bWjr744SZAnXjJ4i2@suleiman.db.elephantsql.com/hxhyrvbc"

db = SQLAlchemy()

"""
setup_db(app)
    binds a flask application and a SQLAlchemy service
"""
def setup_db(app, database_path=database_path):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db.create_all()

"""
Users

"""
class User(db.Model):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    first_name= Column(String)
    last_name = Column(String)
    email = Column(String)

    def __init__(self, first_name,last_name, email):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'first name': self.first_name,
            'last name': self.last_name,
            'email address': self.email,
            }
