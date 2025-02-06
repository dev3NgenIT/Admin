import { useForm } from "react-hook-form";
import BreadCrumbs from "../../../../../../comps/BreadCrumbs/BreadCrumbs";
import { FaCloudUploadAlt } from "react-icons/fa";

const SubCategoryAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Display form data in the console
  };
  const breadcrumbItems = [
    { label: "Admin", link: "/" },
    { label: "Sub Categories", link: "/admin/category/sub" },
    { label: "Sub Category Create" },
  ];

  return (
    <div className="px-5 py-5 container-full">
      <div className="py-3 pt-0">
        <BreadCrumbs items={breadcrumbItems} />
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-xl font-semibold text-gray-800">
          Add New Child Category
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6"
        >
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-9">
              <label className="block text-sm font-medium text-gray-700">
                Sub Category Name
              </label>
              <input
                type="text"
                {...register("sub_category_name", { required: true })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter sub category name"
              />
              {errors.sub_category_name && (
                <p className="mt-1 text-xs text-red-500">
                  Sub Category Name is required.
                </p>
              )}
            </div>
            <div className="col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Sub Category Status
              </label>
              <select
                {...register("sub_category_status", { required: true })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              {errors.sub_category_status && (
                <p className="mt-1 text-xs text-red-500">
                  Sub Category Status is required.
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 md:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sub Category Icon URL
              </label>
              <input
                type="file"
                {...register("sub_category_icon", { required: true })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter sub category icon URL"
              />
              {errors.sub_category_icon && (
                <p className="mt-1 text-xs text-red-500">
                  Sub Category Icon is required.
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sub Category Thumbnail URL
              </label>
              <input
                type="file"
                {...register("sub_category_thumbnail", { required: true })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter sub category thumbnail URL"
              />
              {errors.sub_category_thumbnail && (
                <p className="mt-1 text-xs text-red-500">
                  Sub Category Thumbnail is required.
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sub Category Banner URL
              </label>
              <input
                type="file"
                {...register("sub_category_banner", { required: true })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter sub category banner URL"
              />
              {errors.sub_category_banner && (
                <p className="mt-1 text-xs text-red-500">
                  Sub Category Banner is required.
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12">
              <label className="block text-sm font-medium text-gray-700">
                Sub Category Description
              </label>
              <textarea
                {...register("sub_category_description", { required: true })}
                rows={4}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter sub category description"
              />
              {errors.sub_category_description && (
                <p className="mt-1 text-xs text-red-500">
                  Sub Category Description is required.
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="py-4 mt-6 text-white transition bg-orange-500 rounded-lg shadow-md w-72 hover:bg-orange-600"
            >
              <div className="flex items-center justify-center">
                <span className="pe-3">Create Sub Category</span>
                <FaCloudUploadAlt />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubCategoryAdd;
