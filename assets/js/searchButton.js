const searchButton = document.querySelector('.header__search-icon');
const inputSearch = document.querySelector('.search__items');

const searchProduct = () => {
    if(inputSearch.value){
        console.log(window.location.href);

        if (window.location.href.includes("index.html") )
            window.location.href = `/search.html?search=${inputSearch.value}`;
        if (window.location.href.includes("admin.html") )
            window.location.href = `../../search.html?search=${inputSearch.value}`;
        if (window.location.href.includes("search.html") )
            window.location.href = `../../search.html?search=${inputSearch.value}`;
    }
}

searchButton.addEventListener('click', searchProduct);
inputSearch.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        searchProduct();
    }
});
