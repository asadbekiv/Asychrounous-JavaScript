'use strict'

const { log } = require('console');
const fs = require('fs');
const superagent = require('superagent');


const readFilePro = file =>{
    return new Promise((resolve,reject)=>{
        fs.readFile(file, (err,data) =>{
            if(err) reject('Could not find the file 📂')
            resolve(data);

        });

    });
};

const writeFilePro = (file ,data) =>{
    return new Promise ((resolve,reject) =>{
        fs.writeFile(file, data, err => {
            if(err) reject('File could not write the file !');
            resolve('202 : success')

        });
    });
};
 
const getDogPic = async () =>{

    try {
        
        const data = await readFilePro(`${__dirname}/dog.txt`);
        console.log(`Breed : ${data}`);
        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);
        
        await writeFilePro(`${__dirname}/dog-img.txt` , res.body.message)
        console.log('Random img was saved sucessfuly ✅');
    } catch (err) {
        console.log(err);
    }
    console.log('2');
};
    console.log('1');
getDogPic();
console.log('3');



/*
readFilePro(`${__dirname}/dog.txt`)
.then(data =>{
    console.log(`Breed : ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
})
.then(res => {
    console.log(res.body.message);
    return writeFilePro(`${__dirname}/dog-img.txt` , res.body.message)

})
.then(()=>{
    console.log('Random img was saved sucessfuly ✅');
})
.catch(err =>{
    console.log(err);
});
*/



        
        

    

