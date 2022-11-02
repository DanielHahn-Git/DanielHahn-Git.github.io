
function fileName(title) {
  let arr = title.split(/\s+/);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
  }
  arr = arr.join("");
  console.log(arr);
}

fileName("Use Responsive Design with Bootstrap Fluid Containers");