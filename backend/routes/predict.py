from fastapi import APIRouter, HTTPException
import joblib
from pydantic import BaseModel

router = APIRouter(tags=["predict"])

model = joblib.load("../ml/model.pkl")

class PredictRequest(BaseModel):
    jumlah_penjualan: int
    harga: float
    diskon: float

@router.post("/predict")
def predict(request: PredictRequest):
    try:
      input_data = [[
          request.jumlah_penjualan,
          request.harga,
          request.diskon
      ]]
      prediction = model.predict(input_data)
      return {"status": "Laris" if prediction[0] == 1 else "Tidak Laris"}
    except Exception as e:
      return {"error": str(e)}