import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import AddProduct from "./AddProduct";

const ProductList = () => {
  const [products, setProducts] = useState([
    { name: "Sản phẩm A", price: "100,000 VND", category: "Danh mục 1", stock: 10 },
    { name: "Sản phẩm B", price: "200,000 VND", category: "Danh mục 2", stock: 5 },
  ]);

  // Hàm thêm sản phẩm mới
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Danh sách sản phẩm</h1>

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
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    const newProducts = [...products];
                    newProducts.splice(index, 1);
                    setProducts(newProducts);
                  }}
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