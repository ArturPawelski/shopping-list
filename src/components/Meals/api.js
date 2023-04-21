export const deleteFoodList = (id, toggleRefresh) => {
  var requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  fetch(`http://localhost:3001/foods/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      toggleRefresh();
    })
    .catch((error) => console.log("error", error));
};

export const postDataToActualList = (id, foodsData, Navigate) => {
  // Usunięcie wszystkich pozostałych wpisów z listy czyli 1
  fetch(`http://localhost:3001/actualList/1`, { method: "DELETE" })
    .then((response) => {
      // Dodanie nowego wpisu do listy po usunięciu pozostałych
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        list: foodsData[id - 1].productsList,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      return fetch("http://localhost:3001/actualList", requestOptions);
    })
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      Navigate("/list");
    })
    .catch((error) => console.log("error", error));
};

export const patchFoods = (foodsData, id, setEditButton, editButton) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    productsList: foodsData[id - 1].productsList,
  });

  var requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(`http://localhost:3001/foods/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      setEditButton(!editButton);
    })
    .catch((error) => console.log("error", error));
};
