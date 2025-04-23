import React, { useState } from "react";

const FindProduct = ({ products, onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Hàm xử lý tìm kiếm
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Lọc sản phẩm theo tên (không phân biệt hoa thường)
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    // Trả kết quả tìm kiếm về component cha
    onSearchResults(filteredProducts);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Tìm sản phẩm theo tên..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};

export default FindProduct;