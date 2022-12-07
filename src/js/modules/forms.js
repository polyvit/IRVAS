import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
  const forms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    windows = document.querySelectorAll("[data-modal]");

  checkNumInputs("input[name='user_phone']");

  const message = {
    loading: "Идет загрузка",
    error: "Что-то пошло не так",
    success: "Спасибо, менеджер скоро свяжется с вами",
  };

  const postData = async (url, formData) => {
    document.querySelector(".status").textContent = message.loading;
    let result = await fetch(url, {
      method: "POST",
      body: formData,
    });
    return await result.text();
  };

  const clearInputs = () => {
    inputs.forEach((input) => (input.value = ""));
  };

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      form.appendChild(statusMessage);

      const formData = new FormData(form);
      if (form.getAttribute("data-calc") === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData("assets/server.php", formData)
        .then((result) => {
          console.log(result);
          statusMessage.textContent = message.success;
        })
        .catch(() => (statusMessage.textContent = message.error))
        .finally(() => {
          clearInputs();
          state = {};
          setTimeout(() => {
            statusMessage.remove();
            windows.forEach((window) => (window.style.display = "none"));
          }, 5000);
        });
    });
  });
};

export default forms;
