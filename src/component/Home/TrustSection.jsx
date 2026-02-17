"use client";
import { useEffect } from 'react';
import { Truck, ShieldCheck, Headphones, CreditCard } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TrustSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const perks = [
    { 
      icon: Truck, 
      title: 'Global Logistics', 
      text: 'Seamless delivery to over 120 countries with real-time tracking.',
      delay: "0" 
    },
    { 
      icon: ShieldCheck, 
      title: 'Buyer Protection', 
      text: 'Full refund if the item is not as described or not delivered.',
      delay: "200" 
    },
    { 
      icon: Headphones, 
      title: 'Expert Support', 
      text: 'Our concierge team is available 24/7 for your every need.',
      delay: "400" 
    },
  ];

  return (
    <section className="bg-gray-50/50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header for "Huge Data" feel */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-black tracking-tight text-gray-900 italic uppercase">
            Why Thousands Choose <span className="text-blue-600">Shop-Mart</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-medium">
            We’ve processed over 2 million secure transactions this year alone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {perks.map((p, i) => (
            <div 
              key={i} 
              data-aos="fade-up" 
              data-aos-delay={p.delay}
              className="group relative bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500"
            >
              {/* Background Accent Element */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <p.icon size={120} />
              </div>

              <div className="relative z-10">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-200 group-hover:rotate-[10deg] transition-transform duration-300">
                  <p.icon size={32} />
                </div>
                
                <h4 className="font-black text-2xl text-gray-900 mb-4 tracking-tight">
                  {p.title}
                </h4>
                
                <p className="text-gray-500 leading-relaxed font-medium">
                  {p.text}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-blue-600 font-bold text-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}