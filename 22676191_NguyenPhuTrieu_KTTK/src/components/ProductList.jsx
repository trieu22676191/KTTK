import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import AddProduct from "./AddProduct";
import FindProduct from "./FindProduct";
import FilterByCategory from "./FilterByCategory";

const ProductList = () => {
  const [products, setProducts] = useState([
    { name: "Áo thun", price: "100,000 VND", category: "Thời trang", stock: 10 },
    { name: "Điện thoại", price: "5,000,000 VND", category: "Công nghệ", stock: 5 },
    { name: "Nồi cơm điện", price: "1,000,000 VND", category: "Gia dụng", stock: 8 },
    { name: "Quần jeans", price: "200,000 VND", category: "Thời trang", stock: 15 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  // Danh sách danh mục
  const categories = ["Thời trang", "Công nghệ", "Gia dụng"];

  // Hàm thêm sản phẩm mới
  const addProduct = (product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts); // Cập nhật danh sách hiển thị
  };

  // Hàm xử lý kết quả tìm kiếm
  const handleSearchResults = (results) => {
    setFilteredProducts(results);
  };

  // Hàm lọc sản phẩm theo danh mục
  const handleFilterByCategory = (category) => {
    if (category === "") {
      setFilteredProducts(products); // Hiển thị tất cả sản phẩm nếu không chọn danh mục
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  // Hàm xóa sản phẩm
  const deleteProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
    setFilteredProducts(newProducts); // Cập nhật danh sách hiển thị
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Danh sách sản phẩm</h1>

      {/* Dropdown lọc theo danh mục */}
      <FilterByCategory categories={categories} onFilter={handleFilterByCategory} />

      {/* Form tìm kiếm sản phẩm */}
      <FindProduct products={products} onSearchResults={handleSearchResults} />

      {/* Form thêm sản phẩm */}
      <AddProduct onAddProduct={addProduct} />

      {/* Bảng danh sách sản phẩm */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Danh mục</th>
            <th>Tồn kho</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => deleteProduct(index)}
                >
                  Xoá
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;