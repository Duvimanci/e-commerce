import { clientService } from "../services/client-service.js";

const categoryNames = ['Star Wars', 'Consolas', 'Diversos']

const renderProducts = async () => {
    try {
        const dataProducts = await clientService.readProducts();
        filterProducts(dataProducts);
    } catch (error) {
        console.log(error);
    }
};

const filterProducts = (dataProducts) => {
    categoryNames.forEach( (category, index) => {
        const categoryProducts = dataProducts.filter(product => product.category == category);
        if(categoryProducts.length > 0){
            const main = document.querySelector(`main`);
            const section = main.children[index];
            writeTitle(section, category);
            showProducts(categoryProducts, section, index)
        } else {
            console.log(`"${category}" has not products`)
        }    
    })
};

const writeTitle = (section, categoryName) => {
    const title = section.querySelector('.product__card--title');
    title.textContent = categoryName;
}

const showProducts = (arrProducts, section, index) => {
        const categoryCarousel = section.querySelector('.product__list');        
        categoryCarousel.innerHTML = '';
        arrProducts.forEach(product => {
            const card = createCard(product);
            categoryCarousel.appendChild(card);
        });

};

const createCard = (product) => {
    const card = document.createElement('a');
    card.classList.add('product__card');
    
    card.href = `detail_product.html?id=${product.id}`;
    card.innerHTML = createContentCard(product)
    card.setAttribute("draggable", "false");
    return card
}

const createContentCard = ({name, category, url, price, id}) => {
    return  `<img class="product__card--img" src="${url}" alt="${category}" onerror="imgErrorHTML(this)" draggable="false">
            <div class="product__card--info">
                <p class="product__card--title">${name}</p>
                <p class="product__card--price">${price}</p>
                <a href = "detail_product.html?id=${id}"><button class="product__card-boton">Ver producto</button></a>
            </div>`;

};

renderProducts();

const mostrarProds = document.querySelectorAll('.product__mostrar');
mostrarProds.forEach( mostrarProds => {
    mostrarProds.addEventListener('click', (e) => {
        const category = 
            e.path[2].children[0].children[0].textContent
            .replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
        window.location.href = `./search.html?search=${category}`
    });
});
