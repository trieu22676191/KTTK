import React from "react";

const ProductSummary = ({ products }) => {
  // Tính tổng số sản phẩm và tổng tồn kho
  const totalProducts = products.length;
  const totalStock = products.reduce((sum, product) => sum + product.stock, 0);

  return (
    <div className="mb-4">
      <strong>Tổng sản phẩm:</strong> {totalProducts} | <strong>Tổng tồn kho:</strong> {totalStock}
    </div>
  );
};

export default ProductSummary;