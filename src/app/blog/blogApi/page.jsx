
const blogData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = res.json()
    return data
}


const BlogApi = async () => {

    const postData = await blogData()
    console.log(postData)
    return (
        <div className="mx-14">
            <h2>Post Data</h2>

            <div className="grid grid-cols-4 gap-10">
                {
                    postData.map(post => (
                        <div key={post.id} className="border-2 p-4 gap-4">
                            <h2>Title: {post.title}</h2>
                            <p>Description: {post.body}</p>
                            <button className="btn  py-3 px-4 mt-8 bg-pink-500 text-white rounded">See Details</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogApi;