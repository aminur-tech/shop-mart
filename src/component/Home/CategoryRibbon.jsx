import { Laptop, Shirt, Home, Zap, Heart, Disc } from 'lucide-react';

const categories = [
  { name: 'Electronics', icon: Laptop, color: 'bg-blue-100 text-blue-600' },
  { name: 'Fashion', icon: Shirt, color: 'bg-pink-100 text-pink-600' },
  { name: 'Home', icon: Home, color: 'bg-orange-100 text-orange-600' },
  { name: 'Gadgets', icon: Zap, color: 'bg-yellow-100 text-yellow-600' },
  { name: 'Beauty', icon: Heart, color: 'bg-red-100 text-red-600' },
  { name: 'Music', icon: Disc, color: 'bg-purple-100 text-purple-600' },
];

export default function CategoryRibbon() {
  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex gap-8 overflow-x-auto no-scrollbar justify-center">
        {categories.map((cat) => (
          <div key={cat.name} className="flex flex-col items-center min-w-[90px] cursor-pointer group">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${cat.color}`}>
              <cat.icon size={28} />
            </div>
            <span className="mt-3 text-sm font-semibold text-gray-700">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}