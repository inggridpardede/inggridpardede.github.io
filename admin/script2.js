$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  function dashboardLinkClicked() {
    alert("Dashboard Link Clicked!");
}
document.addEventListener("DOMContentLoaded", function () {
  var taskForm = document.getElementById("taskForm");
  var taskList = document.getElementById("taskList");

  taskForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var newTaskValue = document.getElementById("newTask").value;

      if (newTaskValue.trim() !== "") {
          var listItem = document.createElement("li");
          listItem.className = "list-group-item";
          listItem.innerHTML = `
              <input type="checkbox" aria-label="Checkbox for following text input">
              ${newTaskValue}
              <button class="btn btn-danger btn-sm float-right ml-2">Delete</button>
          `;

          listItem.querySelector('.btn-danger').addEventListener("click", function () {
              listItem.remove();
          });

          listItem.querySelector('input[type="checkbox"]').addEventListener("change", function () {
              // Tambahkan atau hapus kelas 'checked' saat kotak centang berubah
              listItem.classList.toggle('checked', this.checked);
          });

          taskList.appendChild(listItem);

          document.getElementById("newTask").value = "";
      }
  });
});

