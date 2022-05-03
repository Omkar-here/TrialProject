from tinydb import TinyDB, Query
db=TinyDB('dbase.json')


Todo=Query()
#db.search(Todo.name == 'Copies')
print(db.get(Todo.Rating == 3.37))