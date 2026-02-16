import { Truck, ShieldCheck, Zap } from 'lucide-react';

export default function TrustSection() {
  const perks = [
    { icon: Truck, title: 'Free Delivery', text: 'On orders over $50' },
    { icon: ShieldCheck, title: 'Secure Payment', text: '100% Secure Transaction' },
    { icon: Zap, title: 'Fast Support', text: '24/7 dedicated help' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      {perks.map((p, i) => (
        <div key={i} className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-[2rem]">
          <div className="bg-gray-50 p-4 rounded-full mb-4 text-blue-600">
            <p.icon size={32} />
          </div>
          <h4 className="font-bold text-lg text-gray-900">{p.title}</h4>
          <p className="text-gray-500 text-sm mt-1">{p.text}</p>
        </div>
      ))}
    </section>
  );
}