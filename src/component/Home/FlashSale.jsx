export default function FlashSale() {
  return (
    <div className="max-w-7xl mx-auto px-4 my-10">
      <div className="bg-gradient-to-r from-red-600 to-rose-500 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between text-white">
        <div className="space-y-2">
          <h2 className="text-4xl font-black italic tracking-tighter">FLASH SALE</h2>
          <p className="text-rose-100">Grab the best deals before they disappear!</p>
        </div>
        <div className="flex items-center gap-6 mt-6 md:mt-0">
          <div className="flex gap-3">
            {['12', '45', '08'].map((unit, i) => (
              <div key={i} className="bg-black/20 backdrop-blur-sm px-4 py-2 rounded-xl text-2xl font-mono font-bold">
                {unit}
              </div>
            ))}
          </div>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}