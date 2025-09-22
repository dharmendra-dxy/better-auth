import Link from "next/link";
import Logout from "./logout-button";


export default function Navbar() {


    return (
        <nav className="py-4 flex items-center justify-between">

            <button>
                <Link href="/"> Home</Link>
            </button>

            <div className="flex gap-6">

                <button className="px-4 py-2 bg-gray-300 text-slate-700 rounded-md">
                    <Link href="/dashboard"> Dashboard</Link>

                </button>

                <button className="px-4 py-2 bg-slate-700 text-gray-300 rounded-md">
                    <Link href="/signin"> Sign-In</Link>
                </button>
                <button className="px-4 py-2 bg-slate-700 text-gray-300 rounded-md">
                    <Link href="/signup"> Sign-Up</Link>
                </button>
                <Logout/>

            </div>

        </nav>
    )
}