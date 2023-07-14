import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ItemListPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // make api call
    axios
      .get("http://localhost:3000/api/items")
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((err) => {
        console.log("failed to fetch items");
      });
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            VR Game Experience
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {items.map((item) => {
              return (
                <div key={item._id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={item.image}
                      alt="thumbnail"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link to={`items/${item._id}`}> {item.name}</Link>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${item.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
