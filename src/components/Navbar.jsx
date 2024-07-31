"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathName = usePathname();

    const Links = [
        {
            title: " Home",
            path: '/'
        },
        {
            title: "About ",
            path: '/about'
        },
        {
            title: "Blog",
            path: '/blog'
        },
        {
            title: "Contact ",
            path: '/contact'
        },
    ];

    // dashboard layout
    if (pathName.includes('dashboard')) {
        return (
            <div className="bg-orange-600 h-screen w-36">
            </div>
        )
    }
    return (
        <>
            <nav className="bg-sky-300 text-white  flex justify-between items-center px-6 py-2">
                <h2 className="text-2xl font-bold">Next <span className="text-pink-500
                ">HE</span>ro</h2>
                <ul className=" space-x-6">
                    {
                        Links?.map(link => <Link className={` ${pathName === link.path && "text-red-500 font-bold"}`} href={link.path}>{link.title}</Link>)
                    }
                </ul>
                <button className="btn bg-pink-500 px-3 py-2 rounded hover:bg-red-600">Login</button>
            </nav>
        </>
    );
};

export default Navbar;