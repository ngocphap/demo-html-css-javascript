//select all element with the "i" tag and store them in a nidelist call "stars"
const stars = document.querySelectorAll(".stars i");
console.log(stars);
//loop through the stars nodelist
stars.forEach((star, index1) => {
  //add an event listener that rún a function when the "click"
  star.addEventListener("click", () => {
    // console.log(index1 + "clicked");
    //loop through the " stars" nodelist again
    stars.forEach((star, index2) => {
      // them class "active" vào star có index2 thấp hơn index1
      // xoa "active" cao hơn
      //   console.log("index1" + index1, "index2" + index2, star);
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});
