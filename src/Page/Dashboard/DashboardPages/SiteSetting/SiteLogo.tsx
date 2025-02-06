import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaCloudUploadAlt } from "react-icons/fa";
import BreadCrumbs from "../../../../comps/BreadCrumbs/BreadCrumbs";
const SiteLogo = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    try {
      console.log("Form Data:", data);
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  const breadcrumbItems = [
    { label: "Admin", link: "/" },
    { label: "Setting", link: "/" },
    { label: "Site Logo" },
  ];
  return (
    <div className="px-4 mx-auto my-5 container-full">
      <div className="py-3 pt-0">
        <BreadCrumbs items={breadcrumbItems} />
      </div>
      <div className="bg-white card">
        <div className="card-header">
          <h2 className="p-3 text-xl font-semibold">Update Your Site Logo</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4 mb-3 md:grid-cols-1">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Site Icon
                </label>
                <input
                  {...register("site_icon")}
                  type="file"
                  placeholder="Enter Site Icon"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  System Logo White
                </label>
                <input
                  {...register("logo_white")}
                  type="file"
                  placeholder="Enter System Logo White"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  System Logo Black
                </label>
                <input
                  {...register("logo_black")}
                  type="file"
                  placeholder="Enter System Logo Black"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="py-4 mt-6 text-white transition bg-orange-500 rounded-lg shadow-md w-72 hover:bg-orange-600"
            >
              <div className="flex items-center justify-center">
                <span className="pe-3">Update Site Logo</span>
                <FaCloudUploadAlt />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SiteLogo;
