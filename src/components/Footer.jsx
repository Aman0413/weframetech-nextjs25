import Logo from "@/icons/Logo";
import React from "react";
import Icon from "./ui/Icon";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className=" container p-4 flex flex-col md:flex-row justify-between border-t text-sm h-80"
      style={{
        fontFamily: "Geist",
      }}
    >
      <nav
        aria-label="Footer Navigation"
        className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-0 md:items-start  space-x-10"
      >
        <div>
          <Logo width={100} height={100} />
        </div>
        <ui className="text-[rgb(107,114,128)] flex flex-col space-y-1">
          <li className="text-black font-medium">INFOS PRATIQUES</li>
          <li>À propos</li>
          <li>Livraisons & Reprises</li>
          <li>Mode d’emploi</li>
          <li>F.A.Q</li>
        </ui>
        <ul className="text-[#6B7280] flex flex-col space-y-1">
          <li className="font-medium text-black">LÉGAL</li>
          <li>Mentions légales</li>
          <li>CGU</li>
          <li>CGV</li>
          <li>Politique de confidentialité</li>
        </ul>
        <ul className="text-[#6B7280] flex flex-col space-y-1">
          <li className="font-medium text-black uppercase">MON COMPTE</li>
          <li>Accéder à mon compte</li>
          <li>Ma liste d’envie</li>
          <li>Créer un compte</li>
          <li>Mot de passe oublié</li>
        </ul>
      </nav>

      <section
        aria-label="Social Media"
        className="flex flex-col items-center mt-10 md:mt-0"
      >
        <span>NOUS SUIVRE</span>
        <div className="flex justify-center gap-2">
          <Icon icon={<FaTwitter />} />
          <Icon icon={<FaInstagram />} />
          <Icon icon={<FaLinkedinIn />} />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
