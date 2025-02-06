import { Link } from "react-router-dom";

const BreadCrumbs = ({ items }) => {
  return (
    <div>
      <div className="breadcrumbs text-sm">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.link ? (
                <Link to={item.link}>{item.label}</Link>
              ) : (
                <span className="site-primary-text">{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumbs;
