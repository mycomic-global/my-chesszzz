import Link from 'next/link';

export default function Navbar({ t }) {
  return (
    <div style={{display:"flex",gap:20,padding:20}}>
      <Link href="/">{t.play}</Link>
      <Link href="/friends">{t.friends}</Link>
      <Link href="/leaderboard">{t.leaderboard}</Link>
    </div>
  )
}
