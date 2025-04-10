import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
    description: `This is the page for product ${id}`,
  };
};

export default async function productDetails({ params }: Props) {
  const productId = (await params).productId;
  return (
    <div>
      <h1>Details about Product {productId}</h1>
    </div>
  );
}
