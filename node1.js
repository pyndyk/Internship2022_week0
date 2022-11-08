 /**
  * 1. call https://jsonplaceholder.typicode.com/users and write it to file users.json
  * todo: install module to call this API, and use node FS module
  */
 const fetch = require('cross-fetch')
 const fs = require('fs')
 require('dotenv').config();
 const variable = process.env.NODE_ENV

 function getData() {
     try {
         fetch('https://jsonplaceholder.typicode.com/users')
             .then((res) => {
                 if (res.status >= 400) {
                     throw new Error("Bad response from server");
                 }
                 return res.json()
             })
             .then((result) => {
                 fs.writeFile('./users.json', JSON.stringify(result), (error) => {
                     if (error) throw error;
                 })
             })

         if (variable == 'PRODUCTION') {
             fetch('https://jsonplaceholder.typicode.com/todos')
                 .then((res) => {
                     return res.json()
                 })
                 .then((result) => {
                     fs.writeFile('./todos.json', JSON.stringify(result), (error) => {
                         if (error) throw error;
                     })
                 })
         }
         if (variable == 'DEV') {
             fetch('https://jsonplaceholder.typicode.com/albums')
                 .then((res) => {
                     return res.json()
                 })
                 .then((result) => {
                     fs.writeFile('./albums.json', JSON.stringify(result), (error) => {
                         if (error) throw error;
                     })
                 })
         }
     } catch (err) {
         console.error(err);
     }
 }

 getData()