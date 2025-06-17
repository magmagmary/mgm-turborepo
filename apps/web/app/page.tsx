import CreateProduct from "./create-product/create-product";

export default function Home() {
  return (
    <div className="w-screen h-screen justify-cente p-10 flex flex-col gap-4">
      <h1 className="text-4xl text-center">Products App</h1>
      <CreateProduct />
    </div>
  );
}
