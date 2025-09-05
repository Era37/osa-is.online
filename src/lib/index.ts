// place files you want to import through the `$lib` alias in this folder.
export const colors = [
  "#EF4444", // vibrant red
  "#F59E0B", // amber
  "#10B981", // emerald
  "#3B82F6", // blue
  "#8B5CF6", // violet
  "#EC4899", // pink
];

export function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
