import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";

import "./ProductForm.scss"; // Keeping the same file name

const ProductForm = ({
  product,
  description,
  setDescription,
  handleInputChange,
  saveProduct,
}) => {
  return (
    <div className="custom-add-product">
      <Card cardClass={"custom-card"}>
        <form onSubmit={saveProduct}>
          <Card cardClass={"custom-group"}>
            <label>Unique Product Name:</label>
            <input
              type="text"
              placeholder="Unique Product name"
              name="name"
              value={product?.name}
              onChange={handleInputChange}
            />

            <label>Unique Product Category:</label>
            <input
              type="text"
              placeholder="Unique Product Category"
              name="category"
              value={product?.category}
              onChange={handleInputChange}
            />

            <label>Unique Product Price:</label>
            <input
              type="text"
              placeholder="Unique Product Price"
              name="price"
              value={product?.price}
              onChange={handleInputChange}
            />

            <label>Unique Product Quantity:</label>
            <input
              type="text"
              placeholder="Unique Product Quantity"
              name="quantity"
              value={product?.quantity}
              onChange={handleInputChange}
            />

            <label>Unique Product Description:</label>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
              modules={ProductForm.simpleModules}
              formats={ProductForm.simpleFormats}
            />

            <div className="--my">
              <button type="submit" className="--btn --btn-unique">
                Save Unique Product
              </button>
            </div>
          </Card>
        </form>
      </Card>
    </div>
  );
};

ProductForm.simpleModules = {
  toolbar: [
    ["bold", "italic", "underline"],
  ],
};

ProductForm.simpleFormats = [
  "bold",
  "italic",
  "underline",
];

export default ProductForm;
