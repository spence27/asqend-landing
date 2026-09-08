(() => {
  "use strict";
  const dialog = document.querySelector("#image-dialog");
  const image = document.querySelector("#expanded-image");
  const scroller = dialog.querySelector(".image-scroll");
  const centerImage = () => {
    scroller.scrollLeft = Math.max(0, (scroller.scrollWidth - scroller.clientWidth) / 2);
    scroller.scrollTop = 0;
  };
  document.querySelectorAll("[data-image]").forEach((button) => {
    button.addEventListener("click", () => {
      image.onload = centerImage;
      image.alt = button.dataset.alt;
      image.src = button.dataset.image;
      dialog.showModal();
      if (image.complete) requestAnimationFrame(centerImage);
    });
  });
  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
})();
