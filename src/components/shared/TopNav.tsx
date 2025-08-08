import Image from "next/image";
import hamburgerMenu from "../../../public/hamburger-menu.svg";
import fintrackLogo from "../../../public/fintrack-logo.svg";
import searchIcon from "../../../public/search-icon.svg";
import appGrid from "../../../public/app-grid.svg";
import profileAvatar from "../../../public/profile.svg";
export default function TopNav() {
  return (
    <nav className='py-4 px-12 flex'>
      <div className='flex items-center gap-x-7'>
        <Image src={hamburgerMenu} alt='menu' />
        <Image src={fintrackLogo} alt='logo' />
      </div>
      <div className='ml-auto flex items-center gap-x-7'>
        <Image src={searchIcon} alt='search' />
        <Image src={appGrid} alt='app' />
        <Image src={profileAvatar} alt='profile' />
      </div>
    </nav>
  );
}
