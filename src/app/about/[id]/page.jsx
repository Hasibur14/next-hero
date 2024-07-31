

const page = ({ params }) => {

    const { name, description, price } = products.find(product => product.id == params.id)
    return (
        <div className="p-4 border-2  rounded mt-10 mx-10">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );

};

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

export default page;