const changeTabs = (
  containerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = "block"
) => {
  const tabContainer = document.querySelector(containerSelector),
    tabs = document.querySelectorAll(tabSelector),
    contents = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    contents.forEach((content) => (content.style.display = "none"));
    tabs.forEach((tab) => tab.classList.remove(activeClass));
  }
  function showTabContent(index = 0) {
    contents[index].style.display = display;
    tabs[index].classList.add(activeClass);
  }
  hideTabContent();
  showTabContent();

  tabContainer.addEventListener("click", (e) => {
    const clickedTab = e.target.closest(tabSelector);
    if (!clickedTab) return;
    // if (
    //   target.classList.contains(tabSelector.replace(/\./, "")) ||
    //   target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
    // ) {}
    tabs.forEach((currentTab, index) => {
      if (currentTab == clickedTab) {
        hideTabContent();
        showTabContent(index);
      }
    });
  });
};

export default changeTabs;
