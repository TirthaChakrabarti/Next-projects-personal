export default async function productDetails({
  params,
}: {
  params: Promise<{
    productId: string;
  }>;
}) {
  const productId = (await params).productId;
  return (
    <div>
      <h1>Product {productId}</h1>
    </div>
  );
}
