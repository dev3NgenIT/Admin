export const categoryData = [
  {
    id: 1,
    parentCategory: null, // Null for root-level categories
    categoryName: "Electronics",
    icon: "https://static.vecteezy.com/system/resources/previews/004/210/331/non_2x/circuit-electronic-icon-free-vector.jpg",
    thumbnail: "https://www.matric.com/hubfs/classes%20of%20electronics.jpg",
    banner:
      "https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143835.jpg",
    status: "active",
    description: "All electronic gadgets, devices, and appliances.",
  },
  {
    id: 2,
    parentCategory: 1, // Parent is "Electronics"
    categoryName: "Mobile Phones",
    icon: "https://static.vecteezy.com/system/resources/previews/004/210/331/non_2x/circuit-electronic-icon-free-vector.jpg",
    thumbnail: "https://www.matric.com/hubfs/classes%20of%20electronics.jpg",
    banner:
      "https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143835.jpg",
    status: "active",
    description: "Smartphones, feature phones, and accessories.",
  },
  {
    id: 3,
    parentCategory: 1, // Parent is "Electronics"
    categoryName: "Laptops",
    icon: "https://static.vecteezy.com/system/resources/previews/004/210/331/non_2x/circuit-electronic-icon-free-vector.jpg",
    thumbnail: "https://www.matric.com/hubfs/classes%20of%20electronics.jpg",
    banner:
      "https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143835.jpg",
    status: "inactive",
    description: "Laptops, ultrabooks, and related accessories.",
  },
  {
    id: 4,
    parentCategory: null, // Root-level category
    categoryName: "Fashion",
    icon: "https://static.vecteezy.com/system/resources/previews/004/210/331/non_2x/circuit-electronic-icon-free-vector.jpg",
    thumbnail: "https://www.matric.com/hubfs/classes%20of%20electronics.jpg",
    banner:
      "https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143835.jpg",
    status: "active",
    description: "Clothing, footwear, and fashion accessories.",
  },
  {
    id: 5,
    parentCategory: 4, // Parent is "Fashion"
    categoryName: "Men's Fashion",
    icon: "https://static.vecteezy.com/system/resources/previews/004/210/331/non_2x/circuit-electronic-icon-free-vector.jpg",
    thumbnail: "https://www.matric.com/hubfs/classes%20of%20electronics.jpg",
    banner:
      "https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143835.jpg",
    status: "active",
    description: "Men's clothing, shoes, and accessories.",
  },
  {
    id: 6,
    parentCategory: 4, // Parent is "Fashion"
    categoryName: "Women's Fashion",
    icon: "https://static.vecteezy.com/system/resources/previews/004/210/331/non_2x/circuit-electronic-icon-free-vector.jpg",
    thumbnail: "https://www.matric.com/hubfs/classes%20of%20electronics.jpg",
    banner:
      "https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143835.jpg",
    status: "inactive",
    description: "Women's clothing, footwear, and accessories.",
  },
  {
    id: 7,
    parentCategory: null, // Root-level category
    categoryName: "Home Appliances",
    icon: "https://static.vecteezy.com/system/resources/previews/004/210/331/non_2x/circuit-electronic-icon-free-vector.jpg",
    thumbnail: "https://www.matric.com/hubfs/classes%20of%20electronics.jpg",
    banner:
      "https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143835.jpg",
    status: "active",
    description: "Essential and luxury appliances for your home.",
  },
  {
    id: 8,
    parentCategory: 7, // Parent is "Home Appliances"
    categoryName: "Kitchen Appliances",
    icon: "https://static.vecteezy.com/system/resources/previews/004/210/331/non_2x/circuit-electronic-icon-free-vector.jpg",
    thumbnail: "https://www.matric.com/hubfs/classes%20of%20electronics.jpg",
    banner:
      "https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143835.jpg",
    status: "active",
    description: "Microwaves, mixers, refrigerators, and more.",
  },
  {
    id: 9,
    parentCategory: 7, // Parent is "Home Appliances"
    categoryName: "Cleaning Appliances",
    icon: "https://static.vecteezy.com/system/resources/previews/004/210/331/non_2x/circuit-electronic-icon-free-vector.jpg",
    thumbnail: "https://www.matric.com/hubfs/classes%20of%20electronics.jpg",
    banner:
      "https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143835.jpg",
    status: "active",
    description: "Vacuum cleaners, washing machines, and more.",
  },
];
