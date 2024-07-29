from fastapi import FastAPI, HTTPException, Depends
from typing import Annotated, List
from sqlalchemy.orm import Session
from pydantic import BaseModel  # for data validation
from database import SessionLocal, engine
import models
from fastapi.middleware.cors import CORSMiddleware

# CORS are a way for our application to defend against Cross-Origin requests i.e.
# something is calling the app that is not the app, in our case this would be the
# React app.

app = FastAPI()

origins = [
    "http://localhost:3000",  # Allowing the react app to call our fastapi application
    "http://192.168.1.164:3000",  # Allows other devices on the network to make call from the host IP address to the backend
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TransactionBase(BaseModel):
    """Creating a Pydantic model to validate requests
    from our React application.
    """

    amount: float
    category: str
    description: str
    is_income: bool
    date: str


class TransactionModel(TransactionBase):
    id: int

    class Config:
        from_attributes = True


# Create Database dependency
def get_dB():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_dB)]

# This will create our database table automatically when the fast api app is created.
models.Base.metadata.create_all(bind=engine)


# First Endpoint
@app.post("/transactions/", response_model=TransactionModel)
async def create_transaction(transaction: TransactionBase, db: db_dependency):
    db_transaction = models.Transaction(**transaction.model_dump())
    db.add(db_transaction)
    db.commit()
    db.refresh(db_transaction)
    return db_transaction


@app.get("/transactions/", response_model=List[TransactionModel])
async def read_transactions(db: db_dependency, skip: int = 0, limit: int = 100):
    transactions: List[models.Transaction] = (
        db.query(models.Transaction).offset(skip).limit(limit).all()
    )
    return transactions
