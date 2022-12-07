import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowForms = document.querySelectorAll(".balcon_icons_img"),
    windowHeight = document.querySelectorAll("#height"),
    windowWidth = document.querySelectorAll("#width"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfiles = document.querySelectorAll(".checkbox");

  checkNumInputs("#height");
  checkNumInputs("#width");

  function bindActionToElems(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = i;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              i === 0 ? (state[prop] = "Холодное") : (state[prop] = "Теплое");
              elem.forEach((box, k) => {
                box.checked = false;
                if (i == k) box.checked = true;
              });
            } else {
              state[prop] = +item.value;
            }
            break;
          case "SELECT":
            state[prop] = item.value;
            break;
        }
      });
    });
  }

  bindActionToElems("click", windowForms, "form");
  bindActionToElems("input", windowHeight, "height");
  bindActionToElems("input", windowWidth, "width");
  bindActionToElems("change", windowType, "type");
  bindActionToElems("change", windowProfiles, "profile");
};

export default changeModalState;
