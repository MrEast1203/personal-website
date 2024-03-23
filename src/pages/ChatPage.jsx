import React, { useState } from "react";
import DefaultCard from "../components/DefaultCard";
import { PlusIcon } from "@heroicons/react/20/solid";
import Form from "../components/Form";
import MessageCard from "../components/MessageCard";

const ChatPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [Cards, setCards] = useState([]);
  //   console.log(Cards);
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <>
      <div className="text-left mb-4">
        <button
          type="button"
          onClick={toggleForm}
          className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
          Add new card
          <PlusIcon className="h-4 w-4 ml-2 inline-block" />
        </button>
      </div>
      {isFormOpen && (
        <Form onClose={toggleForm} setCards={setCards} Cards={Cards} />
      )}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Cards.map((card, index) => (
            <MessageCard
              key={index}
              title={card.title}
              description={card.message}
              author={card.author}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatPage;
