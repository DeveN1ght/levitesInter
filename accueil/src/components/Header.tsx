import { Button } from "./ui/button";
import Link from "next/link";
import { HeartIcon } from "lucide-react";

export default function Header(){
    return(
        <header className="flex items-center justify-between px-40 py-4  bg-white shdow-md ">
            <div className="flex  gap-2 items-center">
                <HeartIcon className="h-7 w-7 text-blue-600" /> 
                <p className="text-blue-400 font-bold text-lg">Fondation Lévites Inter</p>
            </div>
                <nav>
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link href={"/Accueil"} className="text-blue-800 hover:text-gray-600 font-midium">Accueil</Link>
                        </li>
                        <li>
                            <Link href={"/Lutte"} className="text-blue-800 hover:text-gray-600 font-midium">La Lutte</Link>
                        </li>
                        <li>
                            <Link href={"/Actions"} className="text-blue-800 hover:text-gray-600 font-midium">Nos Actions</Link>
                        </li>
                        <li>
                            <Link href={"/Initiateurs"} className="text-blue-800 hover:text-gray-600 font-midium">Initiateurs</Link>
                        </li>
                        <li>
                            <Link href={"/Evènements"} className="text-blue-800 hover:text-gray-600 font-midium">Evènements</Link>
                        </li>
                        <li>
                            <Link href={"/Blog"} className="text-blue-800 hover:text-gray-600 font-midium">Blog</Link>
                        </li>
                        <li>
                            <Link href={"/Contact"} className="text-blue-800 hover:text-gray-600 font-midium">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Faire un don</Button>
        </header>
    )
}