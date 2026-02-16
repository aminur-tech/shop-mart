export default function NewArrivalsScroll() {
  return (
    <section className="py-16 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">New Arrivals</h2>
          <button className="text-sm font-bold text-zinc-500 hover:text-black">VIEW ALL</button>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="min-w-[280px] h-[350px] bg-white rounded-3xl border border-gray-200" />
          ))}
        </div>
      </div>
    </section>
  );
}