const request = require('request-promise');
const cheerio = require('cheerio');
const urls = require('./url');
const URL = urls;
const fs = require('fs');

const fetch_and_parse_response = async (uri) => {
    const response = await request({
            uri,
            
        }) ;
        let product = {}
        let $ = cheerio.load(response) ;
        product["title"] = $('span[id="productTitle"]').text().trim();
        product["price"] = $('span[id="priceblock_ourprice"]').text().trim();
        product["rating"] = $('span[id="acrPopover"] span > a > i > span').text().trim();
        product["manufacturer"] = $('a[id="bylineInfo"]').text();
        product["status"] = $('div[id="availability"] > span').text().trim();
        product["category"] = [];
        $('ul[class="a-unordered-list a-horizontal a-size-small"] > li:nth-child(odd)').each((i, element) =>{
            let cat = $(element).text().trim();
            product["category"].push(cat);
        })
        product['description'] = [];
        $('div[id="feature-bullets"] > ul > li').each((i , element ) =>{
            let desc = $(element).text().trim();
            product['description'].push(desc) ;
        })
        return product
}

const scrape = async () => {
    try{
         let productData = [];
    for(let product of URL){
        let product_instance = await fetch_and_parse_response(produt.uri);
        
        productData.push(product_instance);
        console.log(productData);

        fs.writeFileSync( "./data.json" , JSON.stringify(productData, null , 4), {encoding: 'utf-8'});
        
    }
    } catch(error){
        console.log(error)
    }
}

scrape()
 
