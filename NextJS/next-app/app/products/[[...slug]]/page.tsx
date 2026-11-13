import React from "react";

interface Props {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ sortOrder: string }>;
}
const ProductPage = async ({ params, searchParams }: Props) => {
  // const { slug } = await params;
  // const { sortOrder } = await searchParams;
  const [{ slug }, { sortOrder }] = await Promise.all([params, searchParams]);
  return (
    <div>
      ProductPage {slug} {sortOrder}
    </div>
  );
};

export default ProductPage;
