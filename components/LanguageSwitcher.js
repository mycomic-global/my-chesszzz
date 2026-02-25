export default function LanguageSwitcher({ setLang }) {
  return (
    <div>
      <button onClick={()=>setLang("en")}>EN</button>
      <button onClick={()=>setLang("id")}>ID</button>
      <button onClick={()=>setLang("jp")}>JP</button>
    </div>
  )
}
