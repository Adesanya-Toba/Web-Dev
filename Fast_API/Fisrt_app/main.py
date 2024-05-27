"Inventory Management system - ArjanCodes"

from enum import Enum

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


# retrieve item by id
@app.get("/items/{item_id}")
def query_item_by_id(item_id: int) -> Item:
    if item_id not in items:
        raise HTTPException(
            status_code=404, detail=f"Item with id {item_id} does not exist!"
        )
    return items[item_id]
