import BreadCrumbs from "../../../../../comps/BreadCrumbs/BreadCrumbs";
import RequiredStar from "../../../../../comps/RequiredStar/RequiredStar";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./Category.css"

const CategoryAdd = () => {
  const breadcrumbItems = [
    { label: "Admin", link: "/" },
    { label: "Category", link: "/admin/category" },
    { label: "Add Category" }, // No link for the current page
  ];

  return (
    <div className="p-4">
      <div className="py-3 pt-0">
        <BreadCrumbs items={breadcrumbItems} />
      </div>
      <div className="card bg-white shadow-lg rounded-lg">
        <div className="card-header flex justify-between items-center p-4">
          <h1 className="text-2xl font-semibold site-primary-text">
            Create New Category
          </h1>
        </div>
        <div className="card-body p-6">
          <form className="space-y-6">
            {/* Parent Category and Category Name */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
              <div>
                <label className="label">
                  <span className="label-text font-medium flex">
                    Select Parent Category <RequiredStar />
                  </span>
                </label>
                <select className="select select-bordered w-full rounded">
                  <option disabled selected>
                    Choose a parent category
                  </option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="home-appliances">Home Appliances</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium flex">
                    Category Name <RequiredStar />
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full rounded"
                  placeholder="Enter category name"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium flex">
                    Category Icon <RequiredStar />
                  </span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-md rounded file-input-bordered w-full"
                />
              </div>
            </div>

            {/* Images and Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="label">
                  <span className="label-text font-medium">Thumbnail Image</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-md file-input-bordered rounded w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium">Banner Image</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-md file-input-bordered rounded w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium flex">
                    Select a Status <RequiredStar />
                  </span>
                </label>
                <select className="select select-bordered w-full rounded">
                  <option disabled selected>
                    Select status
                  </option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button type="submit" className="submit-btn">
              <FaCloudUploadAlt className="me-2"/>  Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryAdd;
