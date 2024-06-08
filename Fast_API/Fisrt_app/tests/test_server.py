import requests
import json

# print(requests.get("http://127.0.0.1:8000/items/ab").json()) # Fast API automatically handles imput validation and provides clear error logs.
# print(requests.get("http://127.0.0.1:8000/items/1").json())
print(json.dumps(requests.get("http://127.0.0.1:8000/items/?name=Pliers").json()))
