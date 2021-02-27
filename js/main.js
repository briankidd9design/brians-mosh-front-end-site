const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
AOS.init({disable: 'mobile'});

/********************different ways to write the same algorithm to expand the collapsible container ************************************/ 
// collapsibles.forEach((item) =>
//   item.addEventListener("click", () => {
//     item.classList.toggle("collapsible--expanded");
//   })
// );

// for (let i = 0; i < collapsibles.length; i++ ){
//   const collapsibleItems = collapsibles[i];
//   collapsibleItems.addEventListener("click", function() {
//       this.classList.toggle("collapsible--expanded");
//   }); 
// }


// for (let i = 0; i < collapsibles.length; i++ ){
//   const collapsibleItems = collapsibles[i];
//   collapsibleItems.addEventListener("click", () => {
//       collapsibleItems.classList.toggle("collapsible--expanded");
//   }); 
// }