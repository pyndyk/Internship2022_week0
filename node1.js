 /**
  * 1. call https://jsonplaceholder.typicode.com/users and write it to file users.json
  * todo: install module to call this API, and use node FS module
  */
 const fetch = require('cross-fetch')
 const fs = require('fs')
 const URL = 'https://jsonplaceholder.typicode.com/users'

 async function getData() {
     try {
         await fetch(URL)
             .then(res => {
                 return res.json()
             })
             .then((result) => {
                 fs.writeFile('./users.json', JSON.stringify(result), (error) => {
                     if (error) throw error;
                 })
             })
     } catch (e) {
         console.log(e)
     }
 }
 getData()

 /**
  * 2. Let's work with running node script with some environment variables
  * todo: Pass parameter ENV when you run this script. 
  * If param is PRODUCTION  get data from https://jsonplaceholder.typicode.com/todos and write it to file todos.json
  * If param is DEV get data from https://jsonplaceholder.typicode.com/albums and write if to file albums.json
  */

 async function two() {
     if (process.env.NODE_ENV === 'PRODUCTION') {
         prod();
     } else if (process.env.NODE_ENV === 'DEV') {
         dev();
     }
 }
 two()
 async function prod() {
     await fetch('https://jsonplaceholder.typicode.com/todos')
         .then(res => {
             return res.json()
         })
         .then(result => {
             fs.writeFile('./todos.json', JSON.stringify(result), (error) => {
                 if (error) throw error;
             })
         })
 }

 async function dev() {
     await fetch('https://jsonplaceholder.typicode.com/todos')
         .then(res => {
             return res.json()
         })
         .then(result => {
             fs.writeFile('./albums.json', JSON.stringify(result), (error) => {
                 if (error) throw error;
             })
         })
 }