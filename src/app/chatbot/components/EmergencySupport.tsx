"use client";

import React, { useState } from 'react';

const EmergencySupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const supportOrganizations = [
    {
      name: "Gender Violence Recovery Centre (GVRC)",
      phone: "0800 720 186",
      description: "24/7 emergency support for survivors of gender-based violence"
    },
    {
      name: "Childline Kenya",
      phone: "116",
      description: "24/7 helpline for children and young people"
    },
    {
      name: "Healthcare Assistance Kenya (HAK)",
      phone: "0800 720 186",
      description: "Medical and psychological support for survivors"
    },
    {
      name: "FIDA Kenya",
      phone: "+254 20 271 1051",
      description: "Legal aid and support for women"
    },
    {
      name: "Counselling and Rehabilitation Centre for Victims of Torture (CRCVT)",
      phone: "+254 20 386 0431",
      description: "Psychological support and counseling services"
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-red-600 hover:text-red-700 font-medium text-sm md:text-base flex items-center gap-1 bg-red-50 px-3 py-1.5 rounded-lg border border-red-200 hover:bg-red-100 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        Need help?
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-80 bg-white rounded-lg shadow-lg p-4 border border-red-200 z-50">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-red-600 font-semibold text-lg">Emergency Support</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">
            If you're experiencing violence or abuse, these organizations can help:
          </p>
          
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {supportOrganizations.map((org, index) => (
              <div key={index} className="bg-red-50 p-3 rounded-lg border border-red-100">
                <div className="font-medium text-gray-800 mb-1">{org.name}</div>
                <a 
                  href={`tel:${org.phone}`}
                  className="text-red-600 font-semibold block mb-1 hover:text-red-700"
                >
                  {org.phone}
                </a>
                <div className="text-gray-600 text-sm">{org.description}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200">
            <p className="text-sm text-gray-600 font-medium">
              If you're in immediate danger, please contact:
            </p>
            <a 
              href="tel:999"
              className="text-red-600 font-bold text-lg block mt-1 hover:text-red-700"
            >
              999 or 112
            </a>
            <p className="text-xs text-gray-500 mt-1">
              (Kenya Police Emergency Number)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencySupport; 