"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is ShopMart?",
    answer:
      "ShopMart is a secure two-sided online marketplace where sellers can list products and buyers can purchase safely through an escrow-based payment system.",
  },
  {
    question: "How does the escrow payment system work?",
    answer:
      "Payments are held securely in escrow and released to the seller only after delivery confirmation.",
  },
  {
    question: "How can I become a seller?",
    answer:
      "Register an account, apply as a seller, and once approved you can start listing products.",
  },
  {
    question: "How do I request a refund?",
    answer:
      "Go to your dashboard, open 'My Orders', and submit a refund request with supporting evidence.",
  },
];

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-5 py-4 flex justify-between items-center font-medium text-gray-800"
              >
                {faq.question}
                <span className="text-amber-700">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}