// Завдання 5. Створюємо масив об'єктів orders
const orders = [
  {
    orderId: 1,
    customer: { name: "Олена", email: "olena@gmail.com" },
    items: [{ name: "Ноутбук", price: 20000 }, { name: "Мишка", price: 500 }],
    total: 20500
  },
  {
    orderId: 2,
    customer: { name: "Андрій", email: "andrii@gmail.com" },
    items: [{ name: "Клавіатура", price: 1500 }],
    total: 1500
  },
  {
    orderId: 3,
    customer: { name: "Олена", email: "olena@gmail.com" },
    items: [{ name: "Монітор", price: 7000 }],
    total: 7000
  }
];

// Функція getTotalSpentByCustomer, яка приймає масив orders та ім'я клієнта
function getTotalSpentByCustomer(ordersArray, customerName) {
  // Використовуємо filter для вибору замовлень конкретного клієнта
  // та reduce для підрахунку загальної суми
  return ordersArray
    .filter(order => order.customer.name.toLowerCase() === customerName.toLowerCase())
    .reduce((sum, order) => sum + order.total, 0);
}

console.log(getTotalSpentByCustomer(orders, "Олена")); 