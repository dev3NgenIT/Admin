import "./Dashboard.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const orders = [
  {
    id: 1,
    orderId: "ORD-1001",
    productCode: "P-98765",
    title: "Apple iPhone 14 Pro",
    category: "Electronics",
    status: "Completed",
    amount: "$1200.00",
    paid: "$1200.00",
    due: "$0.00",
    createdAt: "2024-02-01",
    paymentMethod: "Credit Card",
    trackingId: "TRK123456",
    userImg: "../../../../../public/assets/recent-order1.png",
  },
  {
    id: 2,
    orderId: "ORD-1002",
    productCode: "P-87654",
    title: "Nike Air Max Sneakers",
    category: "Fashion",
    status: "Pending",
    amount: "$85.50",
    paid: "$50.00",
    due: "$35.50",
    createdAt: "2024-02-03",
    paymentMethod: "PayPal",
    trackingId: "TRK654321",
    userImg: "../../../../../public/assets/recent-order1.png",
  },
  {
    id: 3,
    orderId: "ORD-1003",
    productCode: "P-76543",
    title: "Samsung 4K Smart TV",
    category: "Electronics",
    status: "Processing",
    amount: "$999.99",
    paid: "$750.00",
    due: "$249.99",
    createdAt: "2024-02-05",
    paymentMethod: "Bank Transfer",
    trackingId: "TRK789123",
    userImg: "../../../../../public/assets/recent-order1.png",
  },
  {
    id: 4,
    orderId: "ORD-1004",
    productCode: "P-65432",
    title: "Leather Office Chair",
    category: "Furniture",
    status: "Shipped",
    amount: "$150.75",
    paid: "$150.75",
    due: "$0.00",
    createdAt: "2024-02-07",
    paymentMethod: "Credit Card",
    trackingId: "TRK456789",
    userImg: "../../../../../public/assets/recent-order1.png",
  },
  {
    id: 5,
    orderId: "ORD-1004",
    productCode: "P-65432",
    title: "Leather Office Chair",
    category: "Furniture",
    status: "Shipped",
    amount: "$150.75",
    paid: "$150.75",
    due: "$0.00",
    createdAt: "2024-02-07",
    paymentMethod: "Credit Card",
    trackingId: "TRK456789",
    userImg: "../../../../../public/assets/recent-order1.png",
  },
  {
    id: 6,
    orderId: "ORD-1004",
    productCode: "P-65432",
    title: "Leather Office Chair",
    category: "Furniture",
    status: "Shipped",
    amount: "$150.75",
    paid: "$150.75",
    due: "$0.00",
    createdAt: "2024-02-07",
    paymentMethod: "Credit Card",
    trackingId: "TRK456789",
    userImg: "../../../../../public/assets/recent-order1.png",
  },
  {
    id: 7,
    orderId: "ORD-1004",
    productCode: "P-65432",
    title: "Leather Office Chair",
    category: "Furniture",
    status: "Shipped",
    amount: "$150.75",
    paid: "$150.75",
    due: "$0.00",
    createdAt: "2024-02-07",
    paymentMethod: "Credit Card",
    trackingId: "TRK456789",
    userImg: "../../../../../public/assets/recent-order1.png",
  },
  {
    id: 8,
    orderId: "ORD-1004",
    productCode: "P-65432",
    title: "Leather Office Chair",
    category: "Furniture",
    status: "Shipped",
    amount: "$150.75",
    paid: "$150.75",
    due: "$0.00",
    createdAt: "2024-02-07",
    paymentMethod: "Credit Card",
    trackingId: "TRK456789",
    userImg: "../../../../../public/assets/recent-order1.png",
  },
  {
    id: 9,
    orderId: "ORD-1004",
    productCode: "P-65432",
    title: "Leather Office Chair",
    category: "Furniture",
    status: "Shipped",
    amount: "$150.75",
    paid: "$150.75",
    due: "$0.00",
    createdAt: "2024-02-07",
    paymentMethod: "Credit Card",
    trackingId: "TRK456789",
    userImg: "../../../../../public/assets/recent-order1.png",
  },
  {
    id: 10,
    orderId: "ORD-1004",
    productCode: "P-65432",
    title: "Leather Office Chair",
    category: "Furniture",
    status: "Shipped",
    amount: "$150.75",
    paid: "$150.75",
    due: "$0.00",
    createdAt: "2024-02-07",
    paymentMethod: "Credit Card",
    trackingId: "TRK456789",
    userImg: "../../../../../public/assets/recent-order1.png",
  },
];

const RecentOrders = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: true,
        }}
        loop={true} 
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {orders.map((order) => (
          <SwiperSlide key={order.id}>
            <div className="shadow-sm card bg-base-100 trending">
              <figure className="bg-gray-100 rounded-2xl">
                <img
                  src={order.userImg}
                  alt="User"
                  className="object-cover w-full p-3 h-96 rounded-3xl"
                />
              </figure>
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-indigo-300 category">{order.category}</p>
                    <p className="text-start title">{order.title}</p>
                  </div>
                  <p className="text-gray-600 text-end price">{order.amount}</p>
                </div>
                <div className="items-center justify-between pt-3 card-actions">
                  <div className="text-sm">
                    <p className="text-light">
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <button className="py-2 btn-sm btn me-0">View</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RecentOrders;
