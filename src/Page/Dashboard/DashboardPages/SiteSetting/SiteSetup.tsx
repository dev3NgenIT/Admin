import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaCloudUploadAlt } from "react-icons/fa";
import BreadCrumbs from "../../../../comps/BreadCrumbs/BreadCrumbs";
import { useEffect, useState } from "react";

// Define the type for the site setup data
interface SiteSetupData {
  website_name: string;
  phone_one: string;
  phone_two: string;
  whatsapp_number: string;
  contact_email: string;
  support_email: string;
  info_email: string;
  about: string;
  address_line_one: string;
  address_line_two: string;
}

const SiteSetup = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [siteData, setSiteData] = useState<SiteSetupData | null>(null);

  // Fetch site data when the component mounts
  useEffect(() => {
    const fetchSiteData = async () => {
      try {
        // Fetch data from the public API endpoint
        const response = await fetch("/api/siteinfo.json"); // Path to your public file
        const data = await response.json();

        // Set the fetched data to the state
        const site = data[0]; // Assuming you only have one record in the array
        setSiteData(site);

        // Populate the form with the fetched data using setValue
        setValue("websiteName", site.website_name);
        setValue("phone1", site.phone_one);
        setValue("phone2", site.phone_two);
        setValue("whatsapp", site.whatsapp_number);
        setValue("contactEmail", site.contact_email);
        setValue("supportEmail", site.support_email);
        setValue("infoEmail", site.info_email);
        setValue("about", site.about);
        setValue("address1", site.address_line_one);
        setValue("address2", site.address_line_two);
      } catch (error) {
        console.error("Error fetching site data:", error);
        toast.error("Failed to load site data.");
      }
    };

    fetchSiteData();
  }, [setValue]);

  const onSubmit = (data) => {
    try {
      console.log("Form Data:", data);
      toast.success("Form submitted successfully!");
      // Here you can handle the form submission, e.g., POST the data to an API
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  const breadcrumbItems = [
    { label: "Admin", link: "/" },
    { label: "Setting", link: "/" },
    { label: "Site Info" },
  ];

  if (!siteData) return <div>Loading...</div>;

  return (
    <div className="px-4 mx-auto my-5 container-full">
      <div className="py-3 pt-0">
        <BreadCrumbs items={breadcrumbItems} />
      </div>
      <div className="bg-white card">
        <div className="card-header">
          <h2 className="p-3 text-xl font-semibold">
            Update Your Site Information
          </h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4 mb-3 md:grid-cols-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Website Name
                </label>
                <input
                  {...register("websiteName")}
                  type="text"
                  placeholder="Enter Website Name"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone 1
                </label>
                <input
                  {...register("phone1")}
                  type="text"
                  placeholder="Enter Phone 1"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone 2
                </label>
                <input
                  {...register("phone2")}
                  type="text"
                  placeholder="Enter Phone 2"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  WhatsApp Number
                </label>
                <input
                  {...register("whatsapp")}
                  type="text"
                  placeholder="Enter WhatsApp Number"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-3 md:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contact Email
                </label>
                <input
                  {...register("contactEmail")}
                  type="email"
                  placeholder="Enter Contact Email"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Support Email
                </label>
                <input
                  {...register("supportEmail")}
                  type="email"
                  placeholder="Enter Support Email"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Info Email
                </label>
                <input
                  {...register("infoEmail")}
                  type="email"
                  placeholder="Enter Info Email"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-3 md:grid-cols-3">
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  About
                </label>
                <textarea
                  {...register("about")}
                  className="block w-full h-24 p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter About"
                ></textarea>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Address Line 1
                </label>
                <textarea
                  {...register("address1")}
                  className="block w-full h-24 p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Address Line 1"
                ></textarea>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Address Line 2
                </label>
                <textarea
                  {...register("address2")}
                  className="block w-full h-24 p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Address Line 2"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="py-4 mt-6 text-white transition bg-orange-500 rounded-lg shadow-md w-72 hover:bg-orange-600"
            >
              <div className="flex items-center justify-center">
                <span className="pe-3">Update Site Information</span>
                <FaCloudUploadAlt />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SiteSetup;
