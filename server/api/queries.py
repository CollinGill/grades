from .models import Users
from ariadne import convert_kwargs_to_snake_case

def listUsers_resolver(obj, info):
    try:
        users = [user.to_dict for user in Users.query.all()]
        print(users)
        payload = {
            'success': True,
            'users': users
        }
    except Exception as error:
        payload = {
            'success': False,
            'errors': [str(error)]
        }

    return payload

def getUser_resolver(obj, info, id):
    try:
        user = Users.query.get(id)
        payload = {
            "success": True,
            "user": user.to_dict()
        }
    except AttributeError: # user not found
        payload = {
            "success": False,
            "errors": ["Post item matching {id} not found"]
        }
    return payload

def hello_resolver(obj, info):
    try:
        payload = {
            'success': True,
            'message': 'Hello, world!'
        }
    except Exception as error:
        payload = {
            'success': False,
            'errors': [str(error)]
        }
    return payload