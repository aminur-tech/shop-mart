export default function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="bg-black rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="z-10 relative">
          <h2 className="text-white text-4xl md:text-5xl font-black mb-6">Join the Mart Club</h2>
          <p className="text-zinc-400 max-w-lg mx-auto mb-10 text-lg">
            Get exclusive early access to new collections and member-only discounts.
          </p>
          <div className="flex flex-col md:flex-row max-w-md mx-auto gap-3">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-zinc-800 border-none rounded-full px-6 py-4 text-white focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all">
              Join Now
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full blur-[80px]" />
        </div>
      </div>
    </section>
  );
}