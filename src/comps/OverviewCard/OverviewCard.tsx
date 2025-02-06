import { Link } from "react-router-dom";
const OverviewCard = ({ image, title, percentage, count, link }) => {
  return (
    <Link to={link} className="flex justify-center no-underline">
      <div className="w-full border-0 shadow-sm card bg-base-100">
        <div className="card-body">
          <div className="flex items-center justify-between">
            <div>
              <div>
                <img src={image} alt={title} />
                <p className="pt-3">{title}</p>
              </div>
            </div>
            <div>
              <div className="flex">
                <p>{percentage}</p>
                <div> 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="pt-4 text-4xl font-bold">{count}</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OverviewCard;
