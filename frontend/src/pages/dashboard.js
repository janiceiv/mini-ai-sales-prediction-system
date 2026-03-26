import SalesTable from "../components/salesTable"
import PredictForm from "../components/predictForm";
import { getSales } from "../services/sales";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";


export default function Dashboard() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [sales, setSales] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  
  const fetchSales = async () => {
    try{
      const data = await getSales();
      if (data){
        setSales(data)
      }
    }catch(error){
      console.error("Failed to fetch sales", error)
    }
  };

  useEffect(()=>{
    fetchSales();
  }, []);

  return(
    <div>
      <div>
        <Header onLogout={handleLogout}/>
        <SalesTable sales={sales} />
        <PredictForm/>
      </div>
    </div>
  )
}