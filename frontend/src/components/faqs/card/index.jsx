import PropTypes from "prop-types";
import { ArrowIcon } from "../../../ui/icons";
import "./index.css";

CardFAQ.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default function CardFAQ({ question, answer, isOpen, onClick }) {
  return (
    <div className="card_faq_root" onClick={onClick}>
      <div className="card_faq_top">
        <h3>{question}</h3>
        <ArrowIcon isOpen={isOpen}></ArrowIcon>
      </div>
      {isOpen && <p className="card_faq_text">{answer}</p>}
    </div>
  );
}
