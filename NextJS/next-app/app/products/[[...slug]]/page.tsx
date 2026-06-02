import React from "react";

interface Props {
  params: Promise<{ slug: string[] }>;
}
const ProductPage = async ({ params }: Props) => {
  const { slug } = await params;
  return <div>ProductPage {slug}</div>;
};

export default ProductPage;
