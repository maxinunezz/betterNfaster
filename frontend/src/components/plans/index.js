import { useGetAllPlans } from "../../hooks/plan";
import Card from "./card";
import "./index.css";
import "../navbar/index";

//Este es el index de mi componente plans donde utilizo el hook useGetAllPlans para el manejo de los estados, cuando obtengo la informacion desde el backend realizo un mapeo del objeto y renderizo en cada Card sus propiedades.

const Plans = () => {
  const { plans, isLoading } = useGetAllPlans();
  return (
    <>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <div className="cards_container">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              features={plan.features}
              isBest={plan.isBest}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Plans;
