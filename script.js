var characters = [];
window.onload = function () {
  document.getElementById("create").addEventListener("click", function (event) {
    event.preventDefault();
    var newChar = new Object();
    newChar.name = document.getElementById("cname").value;
    newChar.age = document.getElementById("age").value;
    newChar.role = document.getElementById("role").value;
    characters.unshift(newChar);
    document.getElementById("cname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("role").value = "";
    var newCard = document.createElement("div");
    newCard.id = newChar.name + "_card";
    newCard.classList.add("charcard");
    var heading = document.createElement("h2");
    heading.innerText = newChar.name + ", " + newChar.age;
    var role = document.createElement("p");
    role.style.fontWeight = "600";
    role.innerText = newChar.role;
    newCard.appendChild(heading);
    newCard.appendChild(role);
    document.getElementById("carousel").appendChild(newCard);
  });
};
