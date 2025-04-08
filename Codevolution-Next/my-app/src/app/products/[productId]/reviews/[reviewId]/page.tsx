import { notFound } from "next/navigation";

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>Product {productId}</h1>
      <h2>Review {reviewId}</h2>
    </div>
  );
}
