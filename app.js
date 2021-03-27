console.log("Let's get this party started!");

// const form = document.querySelector("form");
// const remove = document.querySelector("#remove");
// const div = document.querySelector("#gifs");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   searchGiphy();
// });

// remove.addEventListener('click',function(e){
//     e.preventDefault();
//     div.innerHTML="";
// }

// function searchGiphy(sTerm) {}

$("#search").on("click", function (e) {
  e.preventDefault();
  let searchTerm = $("#searchTerm").val();

  async function getGif(searchTerm) {
    let result = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: { q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
    });
    let amount = result.data.data.length;
    let random = Math.floor(Math.random() * amount);
    let gif = result.data.data[random].images.original.url;
    $("div").append(`<img src="${gif}"></img>`);
  }
  getGif(searchTerm);
});

$("#remove").on("click", function (e) {
  e.preventDefault();
  $("div").html("");
});
