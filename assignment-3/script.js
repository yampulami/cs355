let intervalID = null;

async function showDogs() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();

  const dogsList = document.getElementById("dogs");

  const allDogs = [];
  Object.keys(data.message).forEach((breed, idx) => {
    if (Object.values(data.message)[idx].length > 0) {
      Object.values(data.message)[idx].map((item) =>
        allDogs.push(`${item} ${breed}`),
      );
    } else {
      allDogs.push(breed);
    }
  });

  allDogs.forEach((dog) => {
    dogsList.innerHTML += `<option value="${dog}"></option>;`;
  });
}

async function showDogImage(event) {
  event.preventDefault();
  const imageContainer = document.getElementById("image-container");
  const dogName = document.getElementById("dog-choice");

  const dogValue = dogName.value;

  if (!dogValue) {
    alert("Please enter Dog's name");
    return;
  }

  const dogValues = dogName.value.split(" ");
  let valueForApi = "";
  console.log(dogValues);
  if (dogValues.length > 1) {
    valueForApi = `${dogValues[1]}/${dogValues[0]}`;
  } else {
    valueForApi = dogValues[0];
  }

  console.log(valueForApi);

  if (intervalID) {
    clearInterval(intervalID);
  }

  let image = await getRandomImage(valueForApi);

  if (image) {
    imageContainer.innerHTML = `<img width="300" height="300" src="${image}" />`;
    intervalID = setInterval(async () => {
      image = await getRandomImage(valueForApi);

      if (image) {
        imageContainer.innerHTML = `<img width="300" height="300" src="${image}" />`;
      }
    }, 5000);
  } else {
    imageContainer.innerHTML =
      "<p>Breed not found! Please try another breed.</p>";
  }
}

async function getRandomImage(valueForApi) {
  const response = await fetch(
    `https://dog.ceo/api/breed/${valueForApi}/images/random`,
  );

  if (response.status !== 200) {
    return null;
  }

  const data = await response.json();

  return data.message;
}

document.addEventListener("DOMContentLoaded", showDogs);
