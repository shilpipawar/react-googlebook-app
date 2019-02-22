function search(query, cb) {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    success: function (response) {
      console.log(response)
    }
  })

    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    console.log("Shilpa" + response.status)
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

function parseJSON(response) {
  const obj = response.json();
  //let jsonStr = JSON.stringify(obj);
  let arr = Object.keys(obj).map((key) => [key, obj[key]]);
  console.log(obj);
  return arr;
}

const NewSearch = { search };
export default NewSearch;