export default function RankBadge({ rank }) {
  return (
    <div style={{
      background: rank.color,
      padding:10,
      borderRadius:10,
      display:"inline-block"
    }}>
      {rank.icon} {rank.name}
    </div>
  )
}
