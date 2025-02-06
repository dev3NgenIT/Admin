import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaCloudUploadAlt } from "react-icons/fa";
import BreadCrumbs from "../../../../comps/BreadCrumbs/BreadCrumbs";
import { useEffect, useState } from "react";

// Define the type for the fetched site meta data
interface SiteMetaData {
  id: number;
  default_language: string;
  default_currency: string;
  meta_image: string;
  copyright_url: string;
  meta_keyword: string;
  copyright_title: string;
  meta_description: string;
}

const SiteMeta = () => {
  const [siteMeta, setSiteMeta] = useState<SiteMetaData | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // Track the selected file

  const { register, handleSubmit, setValue } = useForm();

  // Fetch site meta data from the local JSON file
  useEffect(() => {
    const fetchSiteMeta = async () => {
      try {
        const response = await fetch("/api/sitemeta.json"); // Fetch from public/api/sitemeta.json
        const data = await response.json();
        setSiteMeta(data[0]); // Assuming the JSON data is an array with one object
        // Populate form fields with fetched data
        setValue("defaultLanguage", data[0].default_language);
        setValue("defaultCurrency", data[0].default_currency);
        setValue("metaImage", data[0].meta_image);
        setValue("copyrightURL", data[0].copyright_url);
        setValue("metaKeywords", data[0].meta_keyword);
        setValue("copyrightTitle", data[0].copyright_title);
        setValue("metaDescription", data[0].meta_description);
      } catch (error) {
        console.error("Error fetching site meta:", error);
      }
    };

    fetchSiteMeta();
  }, [setValue]);

  const onSubmit = (data: any) => {
    try {
      console.log("Form Data:", data);
      toast.success("Form submitted successfully!");
      // Handle your form submission, for example, post data to your API
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file); // Update selected file state
  };

  const breadcrumbItems = [
    { label: "Admin", link: "/" },
    { label: "Setting", link: "/" },
    { label: "Site Info" },
  ];

  if (!siteMeta) return <div>Loading...</div>;

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
                  Default Language
                </label>
                <select
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  {...register("defaultLanguage")}
                >
                  <option disabled>Select Language</option>
                  <option value="en">English</option>
                  <option value="bn">Bengali</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Default Currency
                </label>
                <input
                  {...register("defaultCurrency")}
                  type="text"
                  placeholder="Enter Default Currency"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Meta Image
                </label>
                <input
                  {...register("metaImage")}
                  type="file"
                  onChange={handleFileChange}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Copyright URL
                </label>
                <input
                  {...register("copyrightURL")}
                  type="text"
                  placeholder="Enter Copyright URL"
                  defaultValue={siteMeta.copyright_url}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-3 md:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Meta Keywords
                </label>
                <input
                  {...register("metaKeywords")}
                  type="text"
                  placeholder="Enter Meta Keywords"
                  defaultValue={siteMeta.meta_keyword}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Copyright Title
                </label>
                <input
                  {...register("copyrightTitle")}
                  type="text"
                  placeholder="Enter Copyright Title"
                  defaultValue={siteMeta.copyright_title}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Meta Description
                </label>
                <input
                  {...register("metaDescription")}
                  type="text"
                  placeholder="Enter Meta Description"
                  defaultValue={siteMeta.meta_description}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3 md:grid-cols-2">
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Google Analytics Code
                </label>
                <textarea
                  {...register("googleAnalytics")}
                  className="block w-full h-24 p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Google Analytics Code"
                ></textarea>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Google Tag Manager Code
                </label>
                <textarea
                  {...register("googleTagManager")}
                  className="block w-full h-24 p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Google Tag Manager Code"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="py-4 mt-6 text-white transition bg-orange-500 rounded-lg shadow-md w-72 hover:bg-orange-600"
            >
              <div className="flex items-center justify-center">
                <span className="pe-3">Update Site Meta</span>
                <FaCloudUploadAlt />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SiteMeta;
