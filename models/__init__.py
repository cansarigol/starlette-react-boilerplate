
from pony.orm import Database, commit
from .entities import Person

db = Database()

def connect_db():
    db.bind(provider='sqlite', filename='../database.sqlite', create_db=True)
    db.generate_mapping(create_tables=True)
