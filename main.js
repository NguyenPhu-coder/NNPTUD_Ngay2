// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc ít nhất 2 danh mục
const products = [
  new Product(1, "Laptop Dell", 25000000, 10, "Electronics", true),
  new Product(2, "iPhone 15", 32000000, 5, "Electronics", true),
  new Product(3, "Chuột không dây", 500000, 0, "Accessories", false),
  new Product(4, "Bàn phím cơ", 1500000, 20, "Accessories", true),
  new Product(5, "Tai nghe Sony", 4500000, 15, "Accessories", true),
  new Product(6, "Macbook M3", 40000000, 3, "Electronics", true),
];

const nameAndPrice = products.map(
    (p) => ({
        name: p.name,
        price: p.price 
        })
);
console.log("Câu 3 - Tên và giá sản phẩm:", nameAndPrice);

const inStockProducts = products.filter((p) => 
    p.quantity > 0);
console.log("Câu 4 - Sản phẩm còn hàng:", inStockProducts);

const hasExpensiveProduct = products.some((p) => p.price > 30000000);
console.log(
  "Câu 5 - Có sản phẩm nào giá > 30 triệu không?:",
  hasExpensiveProduct,
);

const allAccessoriesAvailable = products
  .filter((p) => p.category === "Accessories")
  .every((p) => p.isAvailable === true);
console.log(
  "Câu 6 - Tất cả sản phẩm phụ kiện có đang bán không?:",
  allAccessoriesAvailable,
);

const totalInventoryValue = products.reduce(
  (total, p) => total + p.price * p.quantity,
  0,
);
console.log("Câu 7 - Tổng giá trị hàng tồn kho:", totalInventoryValue);
console.log("--- Câu 8: Danh sách sản phẩm ---");
for (const p of products) {
  const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${p.name} - ${p.category} - ${status}`);
}
console.log("--- Câu 9: Chi tiết sản phẩm đầu tiên ---");
const firstProduct = products[0];
for (const key in firstProduct) {
  console.log(`${key}: ${firstProduct[key]}`);
}

// Câu 10:
const availableProductNames = products
  .filter((p) => p.isAvailable && p.quantity > 0)
  .map((p) => p.name);

console.log("Câu 10 - Sản phẩm sẵn sàng:", availableProductNames);
