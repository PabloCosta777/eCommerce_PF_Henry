const axios = require("axios");

const getProducts = async()=>{
    let colors = ["black", "white", "green", "gold", "red", "blue"];
    let ram = ["4GB","8GB","16GB"];
    let camera = ["16MP", "32MP", "64MP"];
    
    let productsMotorola = await axios("https://api.mercadolibre.com/sites/MLA/search?q=Motorola");
    productsMotorola = productsMotorola.data.results.slice(0,25);
    const cellphonesMotorola = productsMotorola.map(e=>{
       return {
            model: e.title,
            // color: colors[Math.ceil(Math.random()*5)],
            ram: ram[Math.ceil(Math.random()*2)],
            camera: camera[Math.ceil(Math.random()*2)],
            marca: e.attributes[0].value_name,
            price: e.price,
            stock: e.available_quantity,
            image : e.thumbnail,
            
        }
    })
   let productsSamsung = await axios("https://api.mercadolibre.com/sites/MLA/search?q=Samsung");
   productsSamsung = productsSamsung.data.results.slice(0,25);
   const cellphonesSamsung = productsSamsung.map(e=>{
    return {
        model: e.title,
        color: colors[Math.ceil(Math.random()*5)],
        ram: ram[Math.ceil(Math.random()*2)],
        camera: camera[Math.ceil(Math.random()*2)],
        marca: e.attributes[0].value_name,
        price: e.price,
        stock: e.available_quantity,
        image : e.thumbnail,
    }
   })
   let productsHuawei = await axios("https://api.mercadolibre.com/sites/MLA/search?q=Huawei");
   productsHuawei = productsHuawei.data.results.slice(0,25);
   const cellphonesHuawei = productsHuawei.map(e=>{
    return {
        model: e.title,
        color: colors[Math.ceil(Math.random()*5)],
        ram: ram[Math.ceil(Math.random()*2)],
        camera: camera[Math.ceil(Math.random()*2)],
        marca: e.attributes[0].value_name,
        price: e.price,
        stock: e.available_quantity,
        image : e.thumbnail,
    }
   })
   let productsIphone = await axios("https://api.mercadolibre.com/sites/MLA/search?q=Iphone");
   productsIphone = productsIphone.data.results.slice(0,25);
   const cellphonesIphone = productsIphone.map(e=>{
    return {
        model: e.title,
        color: colors[Math.ceil(Math.random()*5)],
        ram: ram[Math.ceil(Math.random()*2)],
        camera: camera[Math.ceil(Math.random()*2)],
        marca: e.attributes[0].value_name,
        price: e.price,
        stock: e.available_quantity,
        image : e.thumbnail,
    }
   });
   const allCellphones = [...cellphonesMotorola,...cellphonesSamsung,...cellphonesHuawei,...cellphonesIphone];

   return allCellphones;
}

module.exports= getProducts;