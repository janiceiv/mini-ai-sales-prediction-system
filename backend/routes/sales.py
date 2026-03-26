from fastapi import APIRouter, HTTPException
import pandas as pd


router = APIRouter(tags=["sales"])

file_path = "../data/sales_data.csv"

@router.get("/sales")
def get_sales():
  try:
    df = pd.read_csv(file_path)
    return df.to_dict(orient="records")
  except Exception as e:
    raise HTTPException(500, f"Error reading CSV: {str(e)}")
