import menu from "../assets/data/menu.json";

export function getMenu() {
  // In real app, call API; here we return static JSON
  return Promise.resolve(menu);
}

export function getMenuItem(id) {
  const item = menu.find((m) => String(m.id) === String(id));
  return Promise.resolve(item);
}
