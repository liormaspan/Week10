btn.addEventListener("click", sub);

function sub(e) {
  e.preventDefault();
  const input = document.getElementById("name1").value;
  const input1 = document.getElementById("name2").value;

  let formData = {
    name: input,
    lastName: input1,
  };

  const button = document.getElementById("button");
  let jsonString = JSON.stringify(formData);
  document.getElementById("output").append(jsonString);
}