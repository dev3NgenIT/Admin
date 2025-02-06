import { FaCloudUploadAlt } from "react-icons/fa";
import RequiredStar from "../../../../comps/RequiredStar/RequiredStar";
import BreadCrumbs from "../../../../comps/BreadCrumbs/BreadCrumbs";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import ReactQuill from "react-quill";

const ProductCreate = () => {
  const [productDescription, setProductDescription] = useState("");
  const [productSpecification, setProductSpecification] = useState("");
  const [productMetaDescription, setProductMetaDescription] = useState("");
  const [formData, setFormData] = useState({
    thumbnail: null,
    multiImage: null,
    productName: "",
    category: "",
    brand: "",
    skuCode: "",
    price: "",
    discountPrice: "",
    vat: "",
    tax: "",
    productSpecification: "",
    productDescription: "",
    size: "",
    color: "",
    metaTitle: "",
    metaKeywords: "",
    metaDescription: "",
  });

  const breadcrumbItems = [
    { label: "Admin", link: "/" },
    { label: "Product", link: "/admin/allproduct" },
    { label: "Add Product" },
  ];

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Optionally, you can also log the React Quill values here
    console.log("Product Description:", productDescription);
    console.log("Product Specification:", productSpecification);
    console.log("Meta Description:", productMetaDescription);
  };

  return (
    <div className="p-4">
      <div className="py-3 pt-0">
        <BreadCrumbs items={breadcrumbItems} />
      </div>
      <div className="bg-white rounded-lg shadow-lg card">
        <div className="flex items-center justify-between p-4 card-header">
          <h1 className="text-2xl font-semibold site-primary-text">
            Create New Product
          </h1>
        </div>
        <div className="p-6 card-body">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* New Required Fields */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
              <div>
                <label className="label">
                  <span className="flex font-medium label-text">
                    Thumbnail <RequiredStar />
                  </span>
                </label>
                <input
                  type="file"
                  name="thumbnail"
                  onChange={handleFileChange}
                  className="w-full rounded file-input file-input-md file-input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="font-medium label-text">Multi Image</span>
                </label>
                <input
                  type="file"
                  name="multiImage"
                  multiple
                  onChange={handleFileChange}
                  className="w-full rounded file-input file-input-md file-input-bordered"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
              <div>
                <label className="label">
                  <span className="flex font-medium label-text">
                    Product Name <RequiredStar />
                  </span>
                </label>
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  placeholder="Enter Product Name"
                  className="w-full rounded input input-md input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="flex font-medium label-text">
                    Select Child Category <RequiredStar />
                  </span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full rounded select select-bordered"
                >
                  <option disabled>Select a category</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Home & Garden</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="font-medium label-text">Brand</span>
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  placeholder="Enter Brand"
                  className="w-full rounded input input-md input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="font-medium label-text">SKU Code</span>
                </label>
                <input
                  type="text"
                  name="skuCode"
                  value={formData.skuCode}
                  onChange={handleInputChange}
                  placeholder="Enter SKU Code"
                  className="w-full rounded input input-md input-bordered"
                />
              </div>
            </div>

            {/* Pricing */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
              <div>
                <label className="label">
                  <span className="flex font-medium label-text">
                    Price <RequiredStar />
                  </span>
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Enter Price"
                  className="w-full rounded input input-md input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="font-medium label-text">Discount Price</span>
                </label>
                <input
                  type="number"
                  name="discountPrice"
                  value={formData.discountPrice}
                  onChange={handleInputChange}
                  placeholder="Enter Discount Price"
                  className="w-full rounded input input-md input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="font-medium label-text">Size</span>
                </label>
                <input
                  type="number"
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  placeholder="Enter Size"
                  className="w-full rounded input input-md input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="font-medium label-text">color</span>
                </label>
                <input
                  type="color"
                  name="color"
                  value={formData.color}
                  onChange={handleInputChange}
                  placeholder="Enter color"
                  className="w-full rounded input input-md input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="font-medium label-text">VAT (%)</span>
                </label>
                <input
                  type="number"
                  name="vat"
                  value={formData.vat}
                  onChange={handleInputChange}
                  placeholder="Enter VAT"
                  className="w-full rounded input input-md input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="font-medium label-text">Tax (%)</span>
                </label>
                <input
                  type="number"
                  name="tax"
                  value={formData.tax}
                  onChange={handleInputChange}
                  placeholder="Enter Tax"
                  className="w-full rounded input input-md input-bordered"
                />
              </div>
            </div>

            {/* Descriptions */}
            <div>
              <label className="label">
                <span className="font-medium label-text">
                  Product Specification
                </span>
              </label>
              <textarea
                name="productSpecification"
                value={formData.productSpecification}
                onChange={handleInputChange}
                placeholder="Enter Product Specification"
                className="w-full rounded textarea textarea-bordered"
                rows={3}
              ></textarea>
              <ReactQuill
                theme="snow"
                value={productSpecification}
                onChange={setProductSpecification}
                className="bg-white rounded"
              />
            </div>
            <div>
              <label className="label">
                <span className="font-medium label-text">
                  Product Description
                </span>
              </label>
              <ReactQuill
                theme="snow"
                value={productDescription}
                onChange={setProductDescription}
                className="bg-white rounded"
              />
            </div>

            {/* Meta Information */}
            <div>
              <label className="label">
                <span className="font-medium label-text">Meta Title</span>
              </label>
              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleInputChange}
                placeholder="Enter Meta Title"
                className="w-full rounded input input-md input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="font-medium label-text">Meta Keywords</span>
              </label>
              <input
                type="text"
                name="metaKeywords"
                value={formData.metaKeywords}
                onChange={handleInputChange}
                placeholder="Enter Meta Keywords"
                className="w-full rounded input input-md input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="font-medium label-text">Meta Description</span>
              </label>
              <ReactQuill
                theme="snow"
                value={productMetaDescription}
                onChange={setProductMetaDescription}
                className="bg-white rounded"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="py-4 mt-6 text-white transition bg-orange-500 rounded-lg shadow-md w-72 hover:bg-orange-600"
            >
              <div className="flex items-center justify-center">
                <span className="pe-3">Create Product</span>
                <FaCloudUploadAlt />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
