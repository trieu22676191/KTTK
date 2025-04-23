import React from "react";

const FilterByCategory = ({ categories, onFilter }) => {
  // Hàm xử lý khi chọn danh mục
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    onFilter(selectedCategory); // Gửi danh mục được chọn về component cha
  };

  return (
    <div className="mb-4">
      <select
        onChange={handleCategoryChange}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      >
        <option value="">Tất cả danh mục</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByCategory;