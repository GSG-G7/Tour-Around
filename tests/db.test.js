const tape = require('tape');
const buildDB = require('../src/database/db_build');
const getData = require('../src/database/queries/getData');
const {postPlace,postUser} = require('../src/database/queries/postData');

const getD =  tape("testing for get data from database",t=> {
    buildDB()
        getData()
        .then(res => {
            t.deepEqual(res.rows[0].user_name, 'Sajeda', 'the name should be sajeda')
            t.end()
        } )
})

const postU = tape("testing for post user data to database",t=> {
    const user = {userName:'alaa',email:'alaa@gmail.com',phone:125654};
    buildDB()
    postUser(user)
    .then(res=> {
        t.deepEqual(res.rows[0].user_name,'alaa' , 'should be the same')
        t.end()
    })
   


})

const postP = tape("testing for post place data to database",t=> {
const place = {placeName:'pizzaShop',location:'gaza',service:'pizza',delivery:true,img:'http://pizza',userID:2};
    buildDB()
    postPlace(place,2)
    .then(res=> {
        console.log(res.rows)
        t.deepEqual(res.rows[0].place_name, 'pizzaShop', 'should be the same')
        t.end()
    })
})



tape.onFinish(() => process.exit(0));

module.exports = { getD, postU, postP };
