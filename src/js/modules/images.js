const images = () => {
  const imgPopup = document.createElement("div"),
    imgSection = document.querySelector(".works"),
    bigImg = document.createElement("img");

  imgPopup.classList.add("popup");
  imgSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.display = "none";
  imgPopup.appendChild(bigImg);

  imgSection.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    if (target && target.classList.contains("preview")) {
      imgPopup.style.display = "flex";
      const path = target.parentNode.getAttribute("href");
      bigImg.setAttribute("src", path);
    }
    if (target && target.matches("div.popup")) {
      imgPopup.style.display = "none";
    }
  });
};

export default images;
