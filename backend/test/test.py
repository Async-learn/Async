import os
import unittest
import json
from flask_sqlalchemy import SQLAlchemy

from ..api import create_app
from ..database.models import setup_db, User


class AsyncTestCase(unittest.TestCase):
    """This class represents the async test case"""

    def setUp(self):
        """Define test variables and initialize app."""
        self.app = create_app()
        self.client = self.app.test_client
        self.database_path = "postgres://picvozgv:PXnRqmO8X3eB1kg4NJg_iTWkwsGxxUX2@suleiman.db.elephantsql.com/picvozgv"
        setup_db(self.app, self.database_path)

        # binds the app to the current context
        with self.app.app_context():
            self.db = SQLAlchemy()
            self.db.init_app(self.app)
            # create all tables
            self.db.create_all()
    
    def tearDown(self):
        """Executed after reach test"""
        pass

    def test_get_users(self):
        res = self.client().get('/users')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertTrue(len(data['users']))
        self.assertTrue(data['total_users'])

    def test_404_get_users(self):
        res = self.client().get('/users/9999')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'], 'resource not found')

  
    def test_delete_user(self):
        user = User(first_name='taiwo', last_name='Kelani',
                            email='kelanitaiwo34@gmail.com')
        user.insert()
        user_id = user.id

        res = self.client().delete(f'/users/{user_id}')
        data = json.loads(res.data)

        user = User.query.filter(
            User.id == user.id).one_or_none()
        if res.status_code == 200:
            self.assertEqual(res.status_code, 200)
        elif res.status_code == 404:
            self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], True)

    def test_422_delete_user(self):
        res = self.client().delete('/users/999')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 422)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'], 'unprocessable')

    def test_create_user(self):
        new_user = {
            'first_name': 'George',
            'last_name': 'Olufemi',
            'email': 3
        }
        before = len(User.query.all())
        res = self.client().post('/users', json=new_user)
        data = json.loads(res.data)
        after = len(User.query.all())

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data["success"], True)
        self.assertTrue(data["created"])
        self.assertEqual(after, before + 1)
        self.assertTrue(data["total_users"])

    def test_422_create_user(self):
        new_user = { }
        res = self.client().post('/users', json=new_user)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 422)
        self.assertEqual(data["success"], False)
        self.assertEqual(data["message"], "unprocessable")

# Make the tests conveniently executable
if __name__ == "__main__":
    unittest.main()