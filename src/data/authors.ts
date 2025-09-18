export type Author = {
  id: string;
  name: string;
  role?: string;
  bio?: string;
  avatar: string;
};

// Import images explicitly for clarity and type safety
import ayomideLawal from "@/assets/images/authors/ayomide-lawal.png";
import beatriceOlajideCopy from "@/assets/images/authors/Beatrice-olajide - Copy.png";
import benardEdwin from "@/assets/images/authors/BENARD-EDWIN.png";
import favourKaluCopy from "@/assets/images/authors/FAVOUR-KALU - Copy.png";
import imeldaOnyebueke from "@/assets/images/authors/Imelda-Onyebueke.png";
import quadriAbdullahi from "@/assets/images/authors/Quadri-Abdullahi.png";

export const authors: Author[] = [
  { id: "ayomide-lawal", name: "Ayomide Lawal", avatar: ayomideLawal },
  { id: "beatrice-olajide", name: "Beatrice Olajide", avatar: beatriceOlajideCopy },
  { id: "benard-edwin", name: "Benard Edwin", avatar: benardEdwin },
  { id: "favour-kalu", name: "Favour Kalu", avatar: favourKaluCopy },
  { id: "imelda-onyebueke", name: "Imelda Onyebueke", avatar: imeldaOnyebueke },
  { id: "quadri-abdullahi", name: "Quadri Abdullahi", avatar: quadriAbdullahi },
];


