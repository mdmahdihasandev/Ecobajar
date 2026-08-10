import React from 'react'
import Container from '../Components/Layuots/Container'

import  { useState } from "react";
import { Plus, Minus } from "lucide-react";
import faq from '../assets/faq.png'
 
const FAQ_ITEMS = [
  {
    question: "In elementum est a ante sodales iaculis.",
    answer:
      "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.",
  },
  {
    question: "Etiam lobortis massa eu nibh tempor elementum.",
    answer:
      "Nulla facilisi. Sed vel purus vitae nunc suscipit posuere. Integer sit amet lacus vel nulla tincidunt convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    question: "In elementum est a ante sodales iaculis.",
    answer:
      "Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Nam a sapien nunc, non fermentum nisi.",
  },
  {
    question: "Aenean quis quam nec lacus semper dignissim.",
    answer:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
  },
  {
    question: "Nulla tincidunt eros id tempus accumsan.",
    answer:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta.",
  },
];

const Faq = () => {

   const [openIndex, setOpenIndex] = useState(0);
 
  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <div>
      <Container>

       <section className="w-full bg-white py-10 px-4 sm:py-16 sm:px-6 lg:px-10">
      <div className="mx-auto flex  max-w-6xl flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:gap-14">
        {/* Left: FAQ card */}
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden">
            <div className="border-b px-5 py-6 sm:px-7 sm:py-7">
              <h2 className="text-2xl font-poppins font-bold leading-tight text-slate-900 sm:text-[40px]">
                Welcome, Let's Talk
                <br />
                About Our Ecobazar
              </h2>
            </div>
 
            <div className="divide-y divide-slate-200">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className={isOpen ? "bg-white" : "bg-slate-100"}
                  >
                    <button
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors sm:px-7"
                    >
                      <span
                        className={
                          "text-sm font-semibold sm:text-base " +
                          (isOpen ? "text-emerald-600" : "text-slate-800")
                        }
                      >
                        {item.question}
                      </span>
                      <span
                        className={
                          "flex h-7 w-7 flex-none items-center justify-center rounded-full transition-colors " +
                          (isOpen
                            ? "bg-emerald-500 text-white"
                            : "bg-white text-slate-600 shadow-sm")
                        }
                      >
                        {isOpen ? (
                          <Minus className="h-3.5 w-3.5" strokeWidth={3} />
                        ) : (
                          <Plus className="h-3.5 w-3.5" strokeWidth={3} />
                        )}
                      </span>
                    </button>
 
                    {isOpen && (
                      <div className="border-t border-emerald-200 bg-emerald-50/40 px-5 pb-5 pt-3 sm:px-7">
                        <p className="text-sm leading-relaxed text-slate-600">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
 
        {/* Right: image */}
        <div className="w-full lg:w-1/2">
          <div className="mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-md sm:aspect-square lg:aspect-[4/5]">
            <img
              src={faq}
              alt="Smiling farmer holding a basket full of fresh organic vegetables"
              className=" max-h-full max-w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

      </Container>
    </div>
  )
}

export default Faq