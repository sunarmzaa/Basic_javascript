const Circuit = (num, code) => {
    console.log('IPHONE4(0),IPHONE5(1),IPHONE6(2),IPHONE7(3)');
    Mobile = [
        { name: 'IPHONE', model: 'IPHONE4', price: 1000 },
        { name: 'IPHONE', model: 'IPHONE5', price: 2000 },
        { name: 'IPHONE', model: 'IPHONE6', price: 3000 },
        { name: 'IPHONE', model: 'IPHONE7', price: 4000 },
    ]
    code === 'PSU' || code === 'psu' ? ('Price: ' + Mobile[num].price - console.log((Mobile[num].price * (15 / 100)))) : console.log('Price: ' + Mobile[num].price)
}
Circuit(3, 'PSU');