
from pony.orm import Database, Required
from . import db

class Person(db.Entity):
    name = Required(str)
    age = Required(int)