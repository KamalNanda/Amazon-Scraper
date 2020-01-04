const request = require('request-promise');
const cheerio = require('cheerio');
const urls = require('./url');
const URL = urls;
const fs = require('fs');

(async ()=>{
    let productData = [];
    for(let product of URL){
        const response = await request({
            uri: product.url,
            
        }) ;

        let $ = cheerio.load(response) ;
        let title = $('span[id="productTitle"]').text().trim();
        let price = $('span[id="priceblock_ourprice"]').text().trim();
        let rating = $('span[id="acrPopover"] span > a > i > span').text().trim();
        let manufacturer = $('a[id="bylineInfo"]').text();
        let status = $('div[id="availability"] > span').text().trim();
        let category = [];
        $('ul[class="a-unordered-list a-horizontal a-size-small"] > li:nth-child(odd)').each((i, element) =>{
            let cat = $(element).text().trim();
            category.push(cat);
        })
        let description = [];
        $('div[id="feature-bullets"] > ul > li').each((i , element ) =>{
            let desc = $(element).text().trim();
            description.push(desc) ;
        })
        
        productData.push({
            title,
            price,
            rating,
            manufacturer,
            status,
            category,
            description
        });
        console.log(productData);

        fs.writeFileSync( "./data.json" , JSON.stringify(productData, null , 4), {encoding: 'utf-8'});
        
    }
})()