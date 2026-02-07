const urlParms = new URLSearchParams(location.search);

// console.log(urlParms);

// console.log("Owner's name:", urlParms.get("owner_name"));

document.getElementById("owner_name").innerText = urlParms.get("owner_name");
document.getElementById("dog_name").innerText = urlParms.get("dog_name");
document.getElementById("dog_age").innerText = urlParms.get("dog_age");
document.getElementById("dog_breed").innerText = urlParms.get("dog_breed");
document.getElementById("dog_gender").innerText = urlParms.get("dog_gender");
document.getElementById("dog_fav_activity").innerText =
  urlParms.get("dog_fav_activity");
