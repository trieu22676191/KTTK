import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const AddProduct = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  });

  // Hàm xử lý thay đổi input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Hàm xử lý thêm sản phẩm
  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.category && newProduct.stock) {
      onAddProduct(newProduct); // Gọi hàm từ props để thêm sản phẩm
      setNewProduct({ name: "", price: "", category: "", stock: "" }); // Reset form
    } else {
      alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");
    }
  };

  return (
    <Form className="mb-4">
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Tên sản phẩm"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="Giá"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="Danh mục"
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            placeholder="Tồn kho"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
          />
        </Col>
        <Col>
          <Button variant="primary" onClick={handleAddProduct}>
            Thêm sản phẩm
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddProduct;