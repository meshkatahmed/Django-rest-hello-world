document.getElementById('myForm').addEventListener('submit',handleSubmit);
document.getElementById('image').addEventListener('change',handleImage);

let myImage = null;

function handleImage(e) {
  myImage = e.target.files[0];
}

function handleSubmit(e) {
  e.preventDefault();
  let user = document.getElementById('user').value;
  let content = document.getElementById('content').value;

  let form_data = new FormData();
  form_data.append('user',user);
  form_data.append('content',content);
  form_data.append('image',myImage);

  axios.put('http://127.0.0.1:8000/apiv1/status/8/',form_data,{
    header: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .catch(error=>console.log(error.message))
  .then(response=>console.log(response));
}
