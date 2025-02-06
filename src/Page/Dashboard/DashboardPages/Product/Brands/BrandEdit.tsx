import React from "react";
import BreadCrumbs from "../../../../../comps/BreadCrumbs/BreadCrumbs";
import RequiredStar from "../../../../../comps/RequiredStar/RequiredStar";

const BrandEdit = () => {
  const breadcrumbItems = [
    { label: "Admin", link: "/" },
    { label: "Brand", link: "/admin/brand" },
    { label: "Edit Brand" }, // No link for the current page
  ];
  return (
    <div className="p-4">
      <div className="py-3 pt-0">
        <BreadCrumbs items={breadcrumbItems} />
      </div>
      <div className="card bg-white shadow-lg rounded-lg">
        <div className="card-header flex justify-between items-center p-4">
          <h1 className="text-3xl font-semibold site-primary-text">
            Brand Edit
          </h1>
        </div>
        <div className="card-body p-6">
          <form className="space-y-6">
            {/* Name and URL */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
              <div>
                <label className="label">
                  <span className="label-text font-medium flex">
                    Name <RequiredStar />
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter the Name"
                  className="input input-md input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium flex">
                    URL <RequiredStar />
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter the URL"
                  className="input input-md input-bordered w-full"
                />
              </div>
              {/* Select Status */}
              <div>
                <label className="label">
                  <span className="label-text font-medium flex">
                    Select a Status <RequiredStar />
                  </span>
                </label>
                <select className="select select-bordered w-full">
                  <option disabled selected>
                    Select an option
                  </option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            {/* Logo, Thumbnail Image, and Banner Image */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="label">
                  <span className="label-text font-medium">Logo</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-md file-input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Thumbnail Image
                  </span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-md file-input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium">Banner Image</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-md file-input-bordered w-full"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Description</span>
              </label>
              <textarea
                placeholder="Enter the description"
                className="textarea textarea-bordered w-full"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BrandEdit;
