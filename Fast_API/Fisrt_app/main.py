"Inventory Management system - ArjanCodes"

from enum import Enum
from typing import Any

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()


class Category(Enum):
    TOOLS = "tools"
    CONSUMABLES = "consumables"


class Item(BaseModel):
    name: str
    price: float
    count: int
    id: int
    category: Category


items = {
    0: Item(name="Hammer", price=9.89, count=20, id=0, category=Category.TOOLS),
    1: Item(name="Pliers", price=5.89, count=20, id=1, category=Category.TOOLS),
    2: Item(name="Nails", price=1.99, count=100, id=2, category=Category.CONSUMABLES),
}


# FastAPI handles JSON serialization and deserialization for me.
# I can simply use the built-in Python and Pydantic types, in the case dict[int, Item]


@app.get("/")
def index() -> dict[str, dict[int, Item]]:
    """Returns the index of all items."""
    return {"items": items}


# Retrieve item by id
@app.get("/items/{item_id}")
def query_item_by_id(item_id: int) -> Item:
    """Retrieves an item by its id.

    Fast API automatically handles input validation, so if the
    server receives id types other than 'int', FastAPI is able
    to provide a detailed error log as to why.
    """
    if item_id not in items:
        raise HTTPException(
            status_code=404, detail=f"Item with id {item_id} does not exist!"
        )
    return items[item_id]


# Function parameters that are not path parameters can be specified as query parameters in the endpoint
# Here, we can query items like this, /items?count=20
Selection = dict[
    str, str | int | float | Category | None
]  # dict containing the user's query arguments.


@app.get("/items/")
def query_item_by_parameters(
    name: str | None = None,
    price: float | None = None,
    count: int | None = None,
    category: Category | None = None,
) -> dict[str, Selection]:

    def check_item(item: Item) -> bool:
        return all(
            (
                name is None or item.name == name,
                price is None or item.price == price,
                count is None or item.count != count,
                category is None or item.category is category,
            )
        )

    selection: list[Selection] = [item for item in items.values() if check_item(item)]
    return {
        "query": {
            "name": name,
            "price": price,
            "count": count,
            "category": category,
            "selection": selection,
        }
    }
