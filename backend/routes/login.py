from fastapi import APIRouter, Depends, HTTPException 
from fastapi.security import OAuth2PasswordRequestForm 
from datetime import datetime, timedelta 
from jose import jwt

router = APIRouter(tags=["login"])

SECRET_KEY = "ai-sales-prediction"

dummy_user = {"username": "admin", "password": "admin123"}

@router.post("/login")
async def login(data:dict):
    username = data.get("username")
    password = data.get("password")
    if username != dummy_user["username"] or password != dummy_user["password"]:
        raise HTTPException(401, "Wrong credentials")
    token = jwt.encode(
        {"sub": username}, SECRET_KEY, algorithm="HS256"
    )
    return {"access_token": token}