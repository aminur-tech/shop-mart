"use client";

const categories = ["All", "Jewelry", "Home Decor", "Accessories", "Clothing"];

const CategoryNav = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 border-2 ${
            activeCategory === cat
              ? "bg-[#F1641E] border-[#F1641E] text-white shadow-lg scale-105"
              : "bg-white border-orange-100 text-gray-600 hover:border-orange-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryNav;