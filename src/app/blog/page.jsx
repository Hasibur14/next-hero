import Link from "next/link";

const page = () => {
    return (
        <div className="container mx-auto">
            <h2>This is Blog Page</h2>

       <div>
       <Link href="/blog/blogContent" className="btn  py-2 px-3 mt-8 bg-pink-500 text-white rounded">Blog Content</Link>
       </div>
        
        
        </div>
    
    );
};

export default page;