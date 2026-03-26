# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.login import router as login_router
from routes.sales import router as sales_router
from routes.predict import router as predict_router

app = FastAPI(title="AI Sales Prediction")

app.include_router(login_router)
app.include_router(sales_router)
app.include_router(predict_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)