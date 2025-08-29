# main.py
# ==========================================
# REST API Scaffold - INLINE ONLY VERSION
# ==========================================
# This file was created by typing code manually
# and accepting only inline AI (ghost) completions
# in the Cursor IDE.
#
# Goal: Evaluate how well inline suggestions help
# write and scaffold a simple FastAPI app.
# ==========================================

from fastapi import FastAPI
from pydantic import BaseModel


# Initialize the FastAPI app
app = FastAPI()


# Define a model for the POST request body
class Item(BaseModel):
    name: str
    price: float


# In-memory "database"
items = []


# GET endpoint - returns all items
@app.get("/items")
def get_items():
    """
    Returns a list of all items in the in-memory database.
    """
    return {"items": items}


# POST endpoint - adds a new item
@app.post("/items")
def create_item(item: Item):
    """
    Accepts an Item JSON (name, price) and stores it in the list.
    """
    items.append(item.dict())
    return {"message": "Item added successfully"}
