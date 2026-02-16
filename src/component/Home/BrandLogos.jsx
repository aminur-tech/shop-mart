export default function BrandLogos() {
  return (
    <div className="py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center opacity-30 grayscale overflow-x-auto gap-12">
        {['NIKE', 'SAMSUNG', 'APPLE', 'ADIDAS', 'SONY'].map(brand => (
          <span key={brand} className="text-3xl font-black italic">{brand}</span>
        ))}
      </div>
    </div>
  );
}