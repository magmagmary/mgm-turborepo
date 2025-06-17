"use client";

import { Button } from "@components/components/ui/button";
import { Input } from "@components/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitCreatProductAction } from "./actions/create-product-action";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      Submit
    </Button>
  );
}

const CreateProduct = () => {
  const [, formAction] = useActionState(submitCreatProductAction, {
    name: "",
    price: "",
    error: null,
  });

  return (
    <form
      className="w-1/2 mx-auto flex flex-col gap-4 border border-emerald-700 rounded-md p-5"
      action={formAction}
    >
      <div className="flex flex-col w-full gap-3">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter the product's name"
        />
      </div>

      <div className="flex flex-col w-full gap-3">
        <Label htmlFor="price">Price</Label>
        <Input
          type="price"
          name="price"
          id="price"
          placeholder="Enter the product's price"
        />
      </div>

      <SubmitButton />
    </form>
  );
};

export default CreateProduct;
