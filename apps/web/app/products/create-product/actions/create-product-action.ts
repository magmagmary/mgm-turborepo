"use server";

import { revalidateTag } from "next/cache";

export const submitCreatProductAction = async (
  prevData: { name: string; price: string },
  formData: FormData
) => {
  try {
    const result = await fetch(`http://localhost:4000/products`, {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!result.ok) {
      const error = await result.json();
      throw new Error(error.message || "Failed to create product");
    }

    revalidateTag("products");

    return {
      name: formData.get("name") as string,
      price: formData.get("price") as string,
      error: null,
    };
  } catch (error) {
    console.error("Error creating product:", error);
    // Optionally, you can handle the error further, e.g., show a notification
    return {
      name: prevData.name,
      price: prevData.price,
      error: (error as Error).message || "An unexpected error occurred",
    };
  }
};
