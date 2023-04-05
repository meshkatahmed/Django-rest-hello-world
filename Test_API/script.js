// C => create => POST
// R => retrieve => GET
// U => update => PUT/PATCH
// D => delete => DELETE


// GET request
// axios.get('http://127.0.0.1:8000/apiv1/status/list/').then(response=>console.log(response));

// Details request
// axios.get('http://127.0.0.1:8000/apiv1/status/detail/3').then(response=>console.log(response));

// POST request
// let status = {
//     "user": 8,
//     "content": "I'm testing data",
//     "image": null
// }

// axios.post('http://127.0.0.1:8000/apiv1/status/create/',status, {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }).then(response=>console.log(response))
// .catch(error=>console.log(error.message));

// DELETE request
// axios.delete('http://127.0.0.1:8000/apiv1/status/delete/2')
// .then(response=>console.log(response))
// .catch(error=>console.log(error.message));

// PUT request - Whole entity
// PATCH request - Just the particular property
let updatedStatus = {
    "content": "I've been updated using patch",
}
axios.patch('http://127.0.0.1:8000/apiv1/status/update/7',updatedStatus,{
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response=>console.log(response))
.catch(error=>console.log(error.message));