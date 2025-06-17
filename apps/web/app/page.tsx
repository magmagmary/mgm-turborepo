import CreateProduct from "./products/create-product/create-product";
import ProductsList from "./products/products-list/products-list";

export default function Home() {
  return (
    <div className="w-screen h-screen justify-cente p-10 flex flex-col gap-4 overflow-hidden">
      <h1 className="text-4xl text-center">Products App</h1>
      <CreateProduct />
      <ProductsList />
    </div>
  );
}
