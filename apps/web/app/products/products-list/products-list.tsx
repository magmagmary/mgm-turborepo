import React from "react";
import { Product } from "@repo/types";

export default async function ProductsList() {
  const res = await fetch("http://localhost:4000/products", {
    next: { tags: ["products"] }, // Revalidate every 60 seconds
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: Product[] = await res.json();

  return (
    <div className="w-1/2 mx-auto flex flex-col gap-3 overflow-hidden">
      <h2 className="text-2xl text-center">Products List</h2>
      <p className="text-center">This is where the products will be listed.</p>
      {/* You can add a component to fetch and display products here */}

      <div className="flex flex-col gap-4 overflow-y-auto grow">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-md">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
