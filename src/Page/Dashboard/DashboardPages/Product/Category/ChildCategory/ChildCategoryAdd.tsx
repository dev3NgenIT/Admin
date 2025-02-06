import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import BreadCrumbs from "../../../../../../comps/BreadCrumbs/BreadCrumbs";
import { FaCloudUploadAlt } from "react-icons/fa";

const ChildCategoryAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Form Data:", data);
    toast.success("Child Category created successfully!");
  };
  const breadcrumbItems = [
    { label: "Admin", link: "/" },
    { label: "Category", link: "/admin/category/child" },
    { label: "Child Category Create" },
  ];

  return (
    <div className="px-5 py-5">
      <div className="py-3 pt-0">
        <BreadCrumbs items={breadcrumbItems} />
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-xl font-semibold text-gray-800">
          Add New Child Category
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mb-4 md:grid-cols-4">
            {/* Category ID */}
            <div>
              <label
                htmlFor="category_id"
                className="block text-sm font-medium text-gray-700"
              >
                Category ID
              </label>
              <input
                {...register("category_id", {
                  required: "Category ID is required",
                })}
                type="text"
                id="category_id"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Category ID"
              />
              {errors.category_id && (
                <p className="text-sm text-red-500">
                  {errors.category_id?.message
                    ? typeof errors.category_id.message === "string"
                      ? errors.category_id.message
                      : ""
                    : "Category ID"}
                </p>
              )}
            </div>

            {/* Subcategory ID */}
            <div>
              <label
                htmlFor="subcategory_id"
                className="block text-sm font-medium text-gray-700"
              >
                Subcategory ID
              </label>
              <input
                {...register("subcategory_id", {
                  required: "Subcategory ID is required",
                })}
                type="text"
                id="subcategory_id"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Subcategory ID"
              />
              {errors.subcategory_id && (
                <p className="text-sm text-red-500">
                  {errors.subcategory_id?.message
                    ? typeof errors.subcategory_id.message === "string"
                      ? errors.subcategory_id.message
                      : ""
                    : "Subcategory ID"}
                </p>
              )}
            </div>

            {/* Childcategory Name */}
            <div>
              <label
                htmlFor="childcategory_name"
                className="block text-sm font-medium text-gray-700"
              >
                Childcategory Name
              </label>
              <input
                {...register("childcategory_name", {
                  required: "Childcategory Name is required",
                })}
                type="text"
                id="childcategory_name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Childcategory Name"
              />
              {errors.childcategory_name && (
                <p className="text-sm text-red-500">
                  {errors.childcategory_name?.message
                    ? typeof errors.childcategory_name.message === "string"
                      ? errors.childcategory_name.message
                      : ""
                    : "Subcategory Name"}
                </p>
              )}
            </div>

            {/* Category Icon */}
            <div>
              <label
                htmlFor="category_icon"
                className="block text-sm font-medium text-gray-700"
              >
                Category Icon
              </label>
              <input
                {...register("category_icon", {
                  required: "Category Icon is required",
                })}
                type="file"
                id="category_icon"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.category_icon && (
                <p className="text-sm text-red-500">
                  {errors.category_icon?.message
                    ? typeof errors.category_icon.message === "string"
                      ? errors.category_icon.message
                      : ""
                    : "Subcategory ID"}
                </p>
              )}
            </div>

            {/* Category Thumbnail */}
            <div>
              <label
                htmlFor="category_thumbnail"
                className="block text-sm font-medium text-gray-700"
              >
                Category Thumbnail
              </label>
              <input
                {...register("category_thumbnail", {
                  required: "Category Thumbnail is required",
                })}
                type="file"
                id="category_thumbnail"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.category_thumbnail && (
                <p className="text-sm text-red-500">
                  {errors.category_thumbnail?.message
                    ? typeof errors.category_thumbnail.message === "string"
                      ? errors.category_thumbnail.message
                      : ""
                    : "Subcategory ID"}
                </p>
              )}
            </div>

            {/* Category Banner */}
            <div>
              <label
                htmlFor="category_banner"
                className="block text-sm font-medium text-gray-700"
              >
                Category Banner
              </label>
              <input
                {...register("category_banner", {
                  required: "Category Banner is required",
                })}
                type="file"
                id="category_banner"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.category_banner && (
                <p className="text-sm text-red-500">
                  {errors.category_banner?.message
                    ? typeof errors.category_banner.message === "string"
                      ? errors.category_banner.message
                      : ""
                    : "Subcategory ID"}
                </p>
              )}
            </div>

            {/* Category Status */}
            <div>
              <label
                htmlFor="category_status"
                className="block text-sm font-medium text-gray-700"
              >
                Category Status
              </label>
              <select
                {...register("category_status", {
                  required: "Category Status is required",
                })}
                id="category_status"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              {errors.category_status && (
                <p className="text-sm text-red-500">
                  {errors.category_status?.message
                    ? typeof errors.category_status.message === "string"
                      ? errors.category_status.message
                      : ""
                    : "Subcategory ID"}
                </p>
              )}
            </div>
          </div>
          <div>
            {/* Category Description */}
            <div>
              <label
                htmlFor="category_description"
                className="block text-sm font-medium text-gray-700"
              >
                Category Description
              </label>
              <textarea
                {...register("category_description", {
                  required: "Category Description is required",
                })}
                id="category_description"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Enter Category Description"
              ></textarea>
              {errors.category_description && (
                <p className="text-sm text-red-500">
                  {errors.category_description?.message
                    ? typeof errors.category_description.message === "string"
                      ? errors.category_description.message
                      : ""
                    : "Subcategory ID"}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="py-4 mt-6 text-white transition bg-orange-500 rounded-lg shadow-md w-72 hover:bg-orange-600"
            >
              <div className="flex items-center justify-center">
                <span className="pe-3">Create Child Category</span>
                <FaCloudUploadAlt />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChildCategoryAdd;
