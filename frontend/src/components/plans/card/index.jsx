import { CheckIcon } from "../../../ui/icons";
import "./index.css";
import PropTypes from "prop-types";

//Al hacer el Card.propType estoy tipando cada prop que le llega al componente
//Luego defino la funcion Card y le llega por parametros el destructuring de las prop

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.object.isRequired,
  isBest: PropTypes.bool.isRequired,
};

export default function Card({ name, description, price, features, isBest }) {
  //Ordeno los features, primero true y luego false
  const featuresArray = Object.entries(features);
  featuresArray.sort(([, a], [, b]) => b - a);
  const sortedFeatures = Object.fromEntries(featuresArray);
  //Creo el diccionario con el par clave valor 
  const FEATURES_DICTIONARY = {
    "1_workspace": "1 Workspace",
    group_audio: "Group audio and video meeting",
    data_exports: "Data exports for all messages",
    group_massages: "Group messages with people outside your organizations",
    "99.99%_guaranteed": "99.99% guaranteed uptime",
    SAML_based_single: "SAML-based single sign-on",
    Unlimited_message: "Unlimited message history",
    user_provisioning: "User provisioning and deprovisioning",
    collaborate_documents: "Create and collaborate documents anywhere",
    unlimited_integrations: "Unlimited app integrations and workflows",
    "90_days": "90 days os message history",
    "1_1_audio": "1:1 audio and video meetings",
    "1_1_massages": "1:1 messages with people outside your organization",
    "10_integrations": "10 app integrations or published workflows",
  };
  //JSX me permite retornar HTML
  //utilizo el estilo card_root para todas las cards, luego con el ternario pregunto si el boolean es true, si es tru utilizo el estilo card_isbest sino el card_root normal
  //uso el sortedfeatures y lo mapeo para obtener cada feature, si exite dicho feature en true lo renderizo con el estilo de deature sino diabled
  return (
    <div className={`card_root ${isBest ? "card_isBest" : ""}`}>
      <h2>{name}</h2>
      <div className="card_top">
        <p>{description}</p>
      </div>
      <span className="card_price">
        <p>${price}</p>
        <p>USD/mo*</p>
      </span>
      <button className="card_button">GET STARTED</button>
      <ul className="card_ul ">
        {Object.keys(sortedFeatures).map((feature) => (
          <li key={feature} className={features[feature] ? "" : "disabled"}>
            <CheckIcon disabled={!features[feature]}></CheckIcon>
            {FEATURES_DICTIONARY[feature]}
          </li>
        ))}
      </ul>
    </div>
  );
}
