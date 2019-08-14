const goods = [
    {title: 'Shirt', price: 150},
    {title: 'Socks', price: 50},
    {title: 'Jacket', price: 350},
    {title: 'Shoes', price: 250}
];

const renderGoodsItem = (title, price) => `<div class="goods-item"><h3>${title}</h3><p>${price}</p><div>`;

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    
    // Выдает запятую после каждой позиции
    // console.log(goodsList);
    // document.querySelector('.goods-list').innerHTML = goodsList


    //фиксит появление запятых. Запятые берутся так как мы передаем в innerHTML массив полностью, а не каждый отдельный элемент. 
    /*
    В теории могли бы быть видны еще и квадратные скобки. Примерно так:
    [
        Shirt
        150,
        Socks
        50,
        Jacket
        350,
        Shoes
        250
    ]
    Но почему то видны только запятые. 
    
    В нашем случае лучше выводить элементы по-отдельности.
    */

    /* Старый код, используем метод join() по совету преподавателя
    goodsList.forEach(element => {
        document.querySelector('.goods-list').innerHTML += element;
    });
    */

    let goodsListString = goodsList.join();
    document.querySelector('.goods-list').innerHTML = goodsListString
    
}

renderGoodsList(goods);