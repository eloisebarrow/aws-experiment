const baseURL = 'http://localhost:3000/users';

const button = document.querySelector("#button")

button.addEventListener("click", async (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const userData = new FormData(form);
  const resp = await axios.post("http://localhost:3000/users", userData);
  console.log(resp);
});

// let allImages = document.querySelectorAll('img');

// const getImages = async () => {
//   try {
//     let resp = await axios.get(baseURL);
//     console.log('this is resp', resp.data);
//   } catch (e) {
//     console.log(e.message)
//   }
// };

