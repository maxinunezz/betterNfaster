import { useEffect, useState } from "react";
import axios from "axios";

//Utilizo un hook personalizado para obtener los planes desde mi backend y poder utilizarlo en el compnente que lo necesite

export function useGetAllPlans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get("/api/plans/")
      .then((response) => {
        setPlans(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the plans!", error);
      });
  }, []);

  return {
    plans,
    isLoading: plans.length === 0,
  };
}
