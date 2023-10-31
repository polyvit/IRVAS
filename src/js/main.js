import "./slider";
import modals from "./modules/modals";
import changeTabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let modalState = {};
  let deadline = "2022-12-10";

  changeModalState(modalState);
  modals();
  changeTabs(".decoration_slider", ".no_click", ".tab_content", "after_click");
  changeTabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
  changeTabs(
    ".balcon_icons",
    ".balcon_icons_img",
    ".big_img > img",
    "do_image_more",
    "inline-block"
  );
  forms(modalState);
  timer(".container1", deadline);
  images();
});
