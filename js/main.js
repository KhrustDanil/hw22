let kitchenProduct = [
    {
        type: 'grater',
        price: 10
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];
console.log(kitchenProduct);

let devicesProduct = [
    {
        type: 'desktop',
        price: [100, 1000]
    },
    {
        type: 'laptop',
        price: [50, 1500]
    },
    {
        type: 'smartphone',
        price: [80, 2000]
    },
    {
        type: 'tablet',
        price: [20, 1300]
    }
];

console.log(devicesProduct);

let cosmeticsProduct = [
    {
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300
    }
];

console.log(cosmeticsProduct);


let Kitchen = {category:'kitchen'};
let Devices = {category:'devices'};
let Cosmetics = {category:'cosmetics'};

let modProducts = [];

let getProto = (arr, proto) => {
    modProducts = arr
    .map(products => {
        let newProducts = Object.create(proto);
        for (let key in products) {
            newProducts[key] = products[key];
        }
        return newProducts;
    })
    return modProducts;
}

let arr = [
    getProto(kitchenProduct, Kitchen),
    getProto(devicesProduct, Devices),
    getProto(cosmeticsProduct, Cosmetics)
];

console.log(arr);

let renderArr = [];
arr.forEach(category => {
    let categoryTitle = category[0].category;
    let categoryClass = categoryTitle === 'cosmetics' ? ' category cosmetics' : ' category';
    renderArr.push(`<div class="${categoryClass}"><h2>Category: ${categoryTitle}</h2><div class="category__items">`);
    category.map(obj => {
        renderArr.push(
            `<div class="category__box">
                <div class="category__image">
                    <img src="images/${obj.type}.svg" alt="${obj.type}">
                </div>
                <div class="category__title">
                    <p class="category__name">Name: <span>${obj.type}</span></p>
                    <p class="category__price">Price: <span>$${Array.isArray(obj.price) ? obj.price.join('-') : obj.price}</span></p>
                </div>
            </div>`
        );
    });
    renderArr.push('</div></div>');
});

document.write(`<div class="categories">${renderArr.join('')}</div>`);