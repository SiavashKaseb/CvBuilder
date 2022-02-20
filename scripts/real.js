const box = document.getElementById("box");

const maker = (src, title, text) => {
  let modelCard = `<div class="flex flex-col md:flex-row">
  <div class="w-full md:w-6/12 rounded overflow-hidden">
      <img class="object w-full h-auto" src="${src}" alt="">
  </div>
  <div class="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
      <h2 class="text-lg font-semibold leading-tight text-gray-800">${title}</h2>
      <p class="leading-normal pt-2">${text}</p>
      <a class="leading-normal pt-2 hover:underline text-blue-600" href="">Read more...</a>
  </div>
</div> `;
  box.innerHTML += modelCard;
};

fetch("https://api.freerealapi.com/blogs")
  .then((res) => res.json())
  .then((json) => {
    console.log(json.blogs);
    console.log(json.blogs[0].image);
    for(let i = 0; i < json.blogs.length; i++) {
      maker(json.blogs[i].image, json.blogs[i].title, json.blogs[i].text);
      console.log(json.blogs[i])
    }
  });


