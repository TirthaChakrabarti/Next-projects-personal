"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];

  return (
    <div>
      <p>
        Review not found for product {productId} and review {reviewId}
      </p>
    </div>
  );
}
