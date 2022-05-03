from tinydb import TinyDB, Query
db = TinyDB('db.json')
items = [
         {"name": "Cake", "quantity": 1},
         {"name": "Candles", "quantity": 10},
         {"name": "Balloons", "quantity": 50}
   ]
db.insert_multiple(items) 


#Todo = Query()
#db.all()
#print(db.search(Todo.State == 'Maharashtra'))
# Get data from `Sarah`
#result = db.get(Query()['College Name'] == 'Visvesvaraya National Institute of Technology Nagpur')

#print(result)
#result.get('value')