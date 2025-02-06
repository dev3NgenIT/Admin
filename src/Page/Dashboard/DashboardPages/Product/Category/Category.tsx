import { Link } from "react-router-dom";
import BreadCrumbs from "../../../../../comps/BreadCrumbs/BreadCrumbs";
import CategoryList from "./CategoryList";
import { useEffect, useState } from "react";
import { categoryData } from "../../../../../mockData/categoryData";

const Category = () => {
  const breadcrumbItems = [
    { label: "Admin", link: "/" },
    { label: "Product", link: "/" },
    { label: "Category List" },
  ];

  const [data, setData] = useState(categoryData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 pt-3">
      <div className="py-3 pt-0">
        <BreadCrumbs items={breadcrumbItems} />
      </div>
      <div className="card bg-base-100">
        <div className="flex flex-col sm:flex-row justify-between items-center card-header p-3">
          <h1 className="card-title text-2xl sm:mb-0 mb-3">Category List</h1>
          <div>
            <Link to={"create"}>
              <button className="theme-btn-one">
                <div className="flex items-center justify-center">
                  <svg
                    className="me-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_82706_14878)">
                      <path
                        d="M23.2966 9.035C23.0151 8.70995 22.6669 8.44928 22.2758 8.2707C21.8846 8.09211 21.4596 7.99979 21.0296 8H20.9406C20.4406 3.507 16.6236 0 11.9996 0C7.37558 0 3.55858 3.507 3.05858 8H2.99958C2.5697 7.99963 2.14478 8.09174 1.75365 8.27008C1.36251 8.44842 1.01432 8.70882 0.732702 9.03359C0.451082 9.35837 0.242625 9.73993 0.121478 10.1524C0.000330605 10.5648 -0.0306717 10.9985 0.0305749 11.424L1.09158 18.848C1.51058 21.785 4.06458 23.999 7.03058 23.999H16.9996C19.9656 23.999 22.5196 21.784 22.9386 18.848L23.9996 11.424C24.0606 10.9985 24.0295 10.5649 23.9082 10.1525C23.7869 9.74012 23.5783 9.35966 23.2966 9.035ZM11.9996 2C15.5186 2 18.4316 4.613 18.9196 8H5.07958C5.56758 4.613 8.48058 2 11.9996 2ZM20.9596 18.565C20.8196 19.5166 20.3431 20.3865 19.6165 21.0168C18.8899 21.647 17.9614 21.9959 16.9996 22H7.03058C6.06873 21.9959 5.14024 21.647 4.41365 21.0168C3.68706 20.3865 3.21054 19.5166 3.07058 18.565L2.00958 11.141C1.9884 10.9993 1.99836 10.8547 2.03877 10.7172C2.07919 10.5797 2.14908 10.4527 2.24358 10.345C2.33684 10.2359 2.45282 10.1485 2.58341 10.0889C2.714 10.0293 2.85604 9.99895 2.99958 10H21.0296C21.1731 9.99928 21.315 10.0298 21.4455 10.0893C21.5761 10.1489 21.6921 10.2361 21.7856 10.345C21.8803 10.4526 21.9503 10.5796 21.9907 10.7171C22.0311 10.8546 22.041 10.9993 22.0196 11.141L20.9596 18.565ZM15.9996 16C15.9996 16.2652 15.8942 16.5196 15.7067 16.7071C15.5191 16.8946 15.2648 17 14.9996 17H12.9996V19C12.9996 19.2652 12.8942 19.5196 12.7067 19.7071C12.5191 19.8946 12.2648 20 11.9996 20C11.7344 20 11.48 19.8946 11.2925 19.7071C11.1049 19.5196 10.9996 19.2652 10.9996 19V17H8.99958C8.73436 17 8.48001 16.8946 8.29247 16.7071C8.10493 16.5196 7.99958 16.2652 7.99958 16C7.99958 15.7348 8.10493 15.4804 8.29247 15.2929C8.48001 15.1054 8.73436 15 8.99958 15H10.9996V13C10.9996 12.7348 11.1049 12.4804 11.2925 12.2929C11.48 12.1054 11.7344 12 11.9996 12C12.2648 12 12.5191 12.1054 12.7067 12.2929C12.8942 12.4804 12.9996 12.7348 12.9996 13V15H14.9996C15.2648 15 15.5191 15.1054 15.7067 15.2929C15.8942 15.4804 15.9996 15.7348 15.9996 16Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_82706_14878">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Add Category
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div className="card-body p-0">
          <div className="p-4">
            <CategoryList data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
