import type { Product } from "../types/product";

interface CardsProps {
  products: Product[];
}

function Cards({ products }: CardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((item) => (
        <div
          key={item.id}
          className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
        >
          <div className="p-6">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-contain"
            />
            <h2 className="text-xl font-bold mt-4">
              {item.title}
            </h2>

            <p className="text-gray-600 my-4">
              {item.description.substring(0, 100)}...
            </p>

            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold text-blue-600">
                ${item.price}
              </span>

              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;