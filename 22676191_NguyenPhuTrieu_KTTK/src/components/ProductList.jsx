import React from "react";
import { Table, Button } from "react-bootstrap";
import AddProduct from "./AddProduct";
import FindProduct from "./FindProduct";
import FilterByCategory from "./FilterByCategory";
import ProductSummary from "./ProductSummary";
import useLocalStorage from "./useLocalStorage"; // Import hook

const ProductList = () => {
  // Sử dụng useLocalStorage để lưu danh sách sản phẩm
  const [products, setProducts] = useLocalStorage("products", [
    { name: "Áo thun", price: "100,000 VND", category: "Thời trang", stock: 10 },
    { name: "Điện thoại", price: "5,000,000 VND", category: "Công nghệ", stock: 5 },
    { name: "Nồi cơm điện", price: "1,000,000 VND", category: "Gia dụng", stock: 8 },
    { name: "Quần jeans", price: "200,000 VND", category: "Thời trang", stock: 15 },
  ]);

  const [filteredProducts, setFilteredProducts] = React.useState(products);

  const categories = ["Thời trang", "Công nghệ", "Gia dụng"];

  const addProduct = (product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts); // Cập nhật localStorage
    setFilteredProducts(updatedProducts);
  };

  const handleSearchResults = (results) => {
    setFilteredProducts(results);
  };

  const handleFilterByCategory = (category) => {
    if (category === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const deleteProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts); // Cập nhật localStorage
    setFilteredProducts(newProducts);
  };

  React.useEffect(() => {
    setFilteredProducts(products); // Đồng bộ danh sách khi load lại trang
  }, [products]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Danh sách sản phẩm</h1>

      {/* Hiển thị tổng số sản phẩm và tổng tồn kho */}
      <ProductSummary products={filteredProducts} />

      <FilterByCategory categories={categories} onFilter={handleFilterByCategory} />
      <FindProduct products={products} onSearchResults={handleSearchResults} />
      <AddProduct onAddProduct={addProduct} />

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
                <Button variant="danger" onClick={() => deleteProduct(index)}>
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