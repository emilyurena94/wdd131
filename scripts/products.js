const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fc-2150", name: "Hoverboard" },
  { id: "fc-2350", name: "Rocket Boots" }
];

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("productName");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});
