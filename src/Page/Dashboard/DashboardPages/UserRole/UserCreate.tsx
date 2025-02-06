import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaCloudUploadAlt } from "react-icons/fa";
import BreadCrumbs from "../../../../comps/BreadCrumbs/BreadCrumbs";

const UserCreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Form Data:", data);
    toast.success("User created successfully!");
  };

  const breadcrumbItems = [
    { label: "Admin", link: "/" },
    { label: "Users", link: "/admin/users" },
    { label: "User Create" },
  ];
  return (
    <div className="px-5 mx-auto mt-5 container-full">
      <div className="py-3 pt-0">
        <BreadCrumbs items={breadcrumbItems} />
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-start">Create User</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {(errors.name as any).message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {(errors.email as any).message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {(errors.password as any).message}
              </p>
            )}
          </div>

          {/* Role */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              {...register("role", { required: "Role is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            {errors.role && (
              <p className="mt-1 text-sm text-red-500">
                {(errors.role as any).message}
              </p>
            )}
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
  );
};

export default UserCreateForm;
