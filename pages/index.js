import { useState } from "react";
import Navbar from "../components/Navbar";
import RankBadge from "../components/RankBadge";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { getRank } from "../lib/ranks";
import { translations } from "../lib/i18n";

export default function Home() {
  const [coins, setCoins] = useState(1200);
  const [lang, setLang] = useState("en");

  const t = translations[lang];
  const rank = getRank(coins);

  function winBattle() {
    setCoins(coins + 200);
  }

  return (
    <div style={{padding:20}}>
      <Navbar t={t}/>
      <LanguageSwitcher setLang={setLang}/>
      <h1>MyChess</h1>
      <p>{t.coins}: {coins}</p>
      <RankBadge rank={rank}/>

      <h2>{t.chooseOpponent}</h2>
      <button onClick={winBattle}>{t.vsBot}</button>
      <button onClick={winBattle}>{t.vsAnon}</button>
      <button onClick={winBattle}>{t.vsFriend}</button>
    </div>
  )
}
