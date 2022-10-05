

const createProduct = async (jsonProduct) => {
    try {
        const response = await fetch(`http://localhost:3000/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonProduct
        });
        return response.json;
    } catch (error) {
        return console.log(error);
    }
}

const readProducts = () => fetch('http://localhost:3000/products')
    .then(response => response.json());


const readProduct = (id) => fetch(`http://localhost:3000/products/${id}`).then(response => response.json());



const updateProduct = (id, jsonProduct) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonProduct
    })
    .then(response => response.json)
    .catch(error => console.log(error))
}


const deleteProduct = (id) => {
    return fetch(`http://127.0.0.1:5500/assets/db.json/${id}`, {
        method: 'DELETE'
    });
};




export const clientService = {
    createProduct,
    readProducts,
    readProduct,
    updateProduct,
    deleteProduct,
};