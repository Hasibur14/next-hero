import Link from "next/link";

const AboutPage = () => {

    const products = [
        {
            "id": 1,
            "name": "Product A",
            "description": "A high-quality product with multiple features.",
            "price": 99.99
        },
        {
            "id": 2,
            "name": "Product B",
            "description": "An affordable product with basic functionalities.",
            "price": 49.99
        },
        {
            "id": 3,
            "name": "Product C",
            "description": "A premium product with advanced specifications.",
            "price": 199.99
        },
        {
            "id": 4,
            "name": "Product D",
            "description": "A versatile product suitable for various needs.",
            "price": 89.99
        },
        {
            "id": 5,
            "name": "Product E",
            "description": "An eco-friendly product with sustainable materials.",
            "price": 129.99
        }
    ]


    return (
        <div className="container mx-auto space-y-4 mt-4">
            {
                products.map(product => (
                    <div key={product.id} className="p-4 border-2  rounded ">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <button className="btn bg-pink-500 rounded p-2 text-white">
                            <Link href={`/about/${product.id}`}>Details</Link>
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default AboutPage;