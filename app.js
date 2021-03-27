console.log("Let's get this party started!");

$("#search").on("click", function (e) {
  e.preventDefault();
  let searchTerm = $("#searchTerm").val();

  async function getGif(searchTerm) {
    let result = await axios.get("https://api.giphy.com/v1/gifs/search", {
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
