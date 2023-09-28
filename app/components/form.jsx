"use client"
import { useState } from "react"
import Form2 from "./form2"
export default function Form() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
    <div className="flex justify-center">
     <Form2 isOpen={isPopupOpen} onClose={closePopup}/>
     <button className="bg-[#014164] w-40 h-20 text-white rounded-xl mt-20 " onClick={openPopup}>Create Form</button>
    </div>
  )
}

