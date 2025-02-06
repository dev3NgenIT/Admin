import { Link } from "react-router-dom";
import BreadCrumbs from "../../../../../comps/BreadCrumbs/BreadCrumbs";
import "./bramd.css";
import RequiredStar from "../../../../../comps/RequiredStar/RequiredStar";
import { FaCloudUploadAlt } from "react-icons/fa";
const BrandCreate = () => {
  const breadcrumbItems = [
    { label: "Admin", link: "/" },
    { label: "Brand", link: "/admin/brand" },
    { label: "Add Brand" }, // No link for the current page
  ];

  return (
    <div className="p-4">
      <div className="py-3 pt-0">
        <BreadCrumbs items={breadcrumbItems} />
      </div>
      <div className="bg-white rounded-lg shadow-lg card">
        <div className="flex items-center justify-between p-4 card-header">
          <h1 className="text-2xl font-semibold site-primary-text">
            Create New Brand
          </h1>
        </div>
        <div className="p-6 card-body">
          <form className="space-y-6">
            {/* Name and URL */}
            <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
              <div>
                <label className="label">
                  <span className="flex font-medium label-text">
                    Name <RequiredStar />
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter the Name"
                  className="w-full rounded input input-md input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="flex font-medium label-text">
                    URL <RequiredStar />
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter the URL"
                  className="w-full rounded input input-md input-bordered"
                />
              </div>
              {/* Select Status */}
              <div>
                <label className="label">
                  <span className="flex font-medium label-text">
                    Select a Status <RequiredStar />
                  </span>
                </label>
                <select className="w-full rounded select select-bordered">
                  <option disabled selected>
                    Select an option
                  </option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            {/* Logo, Thumbnail Image, and Banner Image */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label className="label">
                  <span className="font-medium label-text">Logo</span>
                </label>
                <input
                  type="file"
                  className="w-full rounded file-input file-input-md file-input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="font-medium label-text">
                    Thumbnail Image
                  </span>
                </label>
                <input
                  type="file"
                  className="w-full rounded file-input file-input-md file-input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="font-medium label-text">Banner Image</span>
                </label>
                <input
                  type="file"
                  className="w-full rounded file-input file-input-md file-input-bordered"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="label">
                <span className="font-medium label-text">Description</span>
              </label>
              <textarea
                placeholder="Enter the description"
                className="w-full rounded textarea textarea-bordered"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button type="submit" className="submit-btn">
                <FaCloudUploadAlt className="me-2" /> Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BrandCreate;
