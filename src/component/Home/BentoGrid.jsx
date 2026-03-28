export default function BentoGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[500px]">
      <div className="md:col-span-2 bg-zinc-900 rounded-[2rem] p-10 flex flex-col justify-end relative overflow-hidden group">
        <div className="z-10">
          <h3 className="text-white text-4xl font-bold">Future Tech</h3>
          <p className="text-zinc-400 mt-2">Next-gen wearables are here.</p>
          <button className="mt-6 bg-white px-6 py-2 rounded-full font-bold text-sm">Discover</button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px]" />
      </div>
      <div className="bg-amber-100 rounded-[2rem] p-8 md:col-span-2 relative overflow-hidden">
        <h3 className="text-3xl font-bold text-amber-900 leading-tight">Spring<br/>Arrivals</h3>
        <p className="text-amber-800 mt-2 underline font-bold cursor-pointer">Shop New Trends</p>
      </div>
    </section>
  );
}