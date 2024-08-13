import Link from "next/link";

const page = () => {
    return (
        <div className=" container mx-auto">

            <div className="space-y-5 mt-10">
                <div>
                    <Link href="/blog/blogContent" className="btn  py-2 px-3 mt-8 bg-pink-500 text-white rounded">Blog Content</Link>
                </div>

                <div>
                    <Link href="/blog/blogApi" className="btn  py-3 px-4 mt-8 bg-pink-500 text-white rounded">My Blogs</Link>
                </div>
            </div>


        </div>

    );
};

export default page;