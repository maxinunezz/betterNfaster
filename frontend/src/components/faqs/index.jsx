import CardFAQ from "./card";
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
//Uso useState para el manejo de los estados locales, dependiendo si la pregunta esta seleccionada o no
//por la falta de tiempo no llegue  a hacer el hook aparte, tenia todo mockeado pero a ultimo momento pude hacer el llamado a la api para corroborar que estan bien conectados back y front

export function useGetQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("/api/faqs/")
      .then((response) => {
        console.log("RESPONSEEE", response);
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the plans!", error);
      });
  }, []);

  return {
    questions,
    isLoading: questions.length === 0,
  };
}

export default function FAQ() {
  const { questions } = useGetQuestions();
  const [faqOpen, setFaqOpen] = useState(0);
  function handleClick(order) {
    if (order === faqOpen) {
      setFaqOpen(0);
    } else {
      setFaqOpen(order);
    }
  }
  return (
    <div className="root">
      <h1>Frequently asked questions</h1>
      {questions.map((faq) => (
        <CardFAQ
          onClick={() => handleClick(faq.order)}
          key={faq.id}
          answer={faq.answer}
          question={faq.question}
          isOpen={faqOpen === faq.order}
        ></CardFAQ>
      ))}
    </div>
  );
}
