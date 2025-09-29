console.log("FrontEnd ishga tushdi");

function itemTemplate(item) {
  return `<li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me tn btn-secondary btn-sm mr1"
              style="border-radius: 10px"
            >
              Ozgartirish
            </button>
            <button
              data-id="${item._id}"
              class="delete-me btn-danger btn-sm"
              style="border-radius: 10px"
              >Ochirish</button
            >
          </div>
        </li>`;
}

let creatField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: creatField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      creatField.value = "";
      creatField.focus();
    })
    .catch((err) => {
      console.log("Iltimos qaytdan harakat qiling");
    });
});
