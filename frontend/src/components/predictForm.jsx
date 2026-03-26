import { useState } from "react";
import { predictSales } from "../services/predict";
import "../css/predictionForm.css";

function PredictForm() {
  const [input, setInput] = useState({
    jumlah_penjualan: "",
    harga: "",
    diskon: ""
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await predictSales(input);
      setResult(res.status);
    } catch (error) {
      console.error("Error occurred while predicting sales:", error);
      alert("Failed to predict sales. Please try again.");
    }
  }

  return(
    <div className="pred-container">
      <h1 className="pred-title">Sales Prediction</h1>
      <form className="pred-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Jumlah Penjualan:</label>
          <input type="number" name="jumlah_penjualan" value={input.jumlah_penjualan} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Harga:</label>
          <input type="number" name="harga" value={input.harga} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Diskon:</label>
          <input type="number" name="diskon" value={input.diskon} onChange={handleChange} />
        </div>
        <button className="pred-btn" type="submit">Predict</button>
      </form>
      {result && <div className="result">
        <p>Status: <strong>{result}</strong></p>
      </div>}
    </div>
  )
}

export default PredictForm;