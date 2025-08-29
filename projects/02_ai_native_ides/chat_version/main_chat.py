# main_chat.py
# ==========================================
# REST API Scaffold - CHAT ONLY VERSION
# ==========================================
# This file was generated entirely using an AI-native IDE's
# chat feature (Cursor/Zed/Trae). The goal is to evaluate
# how effective chat-based code generation is when scaffolding
# a simple REST API.

# Key Features:
# - Maintains a simple in-memory database of items.
# - Includes incremental IDs for items.
# - Enforces validation on the `price` field (must be >= 0).
# - Includes response models for better type hints and API docs.

# Experiment Context:
# This file is part of a side-by-side experiment comparing
# AI inline (ghost) completions vs AI chat-based code generation.
# ==========================================

from typing import List
from fastapi import FastAPI
from pydantic import BaseModel, Field

# Initialize the FastAPI app
app = FastAPI()


# Define data models
class ItemIn(BaseModel):
    """
    Input model for creating a new item.
    Includes:
    - name: Item name (string)
    - price: Item price (float, must be >= 0)
    """
    name: str
    price: float = Field(..., ge=0)  # Validation: price >= 0


class Item(ItemIn):
    """
    Output model representing an item in the database.
    Inherits fields from ItemIn and adds:
    - id: Unique identifier for the item
    """
    id: int


# Define in-memory database
_db: List[Item] = []   # Stores all items
_next_id = 1           # Auto-incrementing ID counter


# Define API endpoints
@app.get("/items", response_model=List[Item])
def get_items() -> List[Item]:
    """
    GET /items
    ----------
    Returns all items currently stored in the in-memory database.
    """
    return _db


@app.post("/items", response_model=Item, status_code=201)
def add_item(item: ItemIn) -> Item:
    """
    POST /items
    -----------
    Accepts an ItemIn payload (name, price) and:
    - Creates a new Item with a unique ID.
    - Adds it to the in-memory database.
    - Returns the created Item object.
    """
    global _next_id
    new_item = Item(id=_next_id, name=item.name, price=item.price)
    _db.append(new_item)
    _next_id += 1
    return new_item


# Run the FastAPI app locally
if __name__ == "__main__":
    # Runs the FastAPI app locally with live reload enabled.
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
