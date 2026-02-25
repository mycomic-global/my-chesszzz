export const ranks = [
  { name: "Warrior", min: 0, color: "#9CA3AF", icon: "⚔️" },
  { name: "Elite", min: 5000, color: "#3B82F6", icon: "🛡️" },
  { name: "Pro", min: 15000, color: "#8B5CF6", icon: "🔥" },
  { name: "Legend", min: 30000, color: "#F59E0B", icon: "👑" },
  { name: "Hacker", min: 100000, color: "#10B981", icon: "💻" }
];

export function getRank(coins) {
  return ranks.slice().reverse().find(r => coins >= r.min);
}
