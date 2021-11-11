var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
fetch("http://3.34.200.226/country", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));