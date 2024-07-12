import logo from "../assets/logo/taty-magazine.png";
import UserButtons from "./UserButtons";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const completeHeader = (
    <header className="flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 font-bold px-8 py-4 items-end justify-between z-10">
      <img className="h-16 px-2" src={logo} alt="Taty Magazine" />
      <UserButtons />
    </header>
  );
  const simpleHeader = (
    <header className="text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 font-bold px-8 py-4 flex items-end justify-between z-10">
      <a href="/" className="px-2">
        <img src={logo} alt="Taty Magazine" className="h-12" />
      </a>
    </header>
  );
  return <>{pathname === "/" ? completeHeader : simpleHeader}</>;
}
