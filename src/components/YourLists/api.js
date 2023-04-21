export const deleteList = (id, toggleRefresh) => {
  var requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  fetch(`http://localhost:3001/list/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      toggleRefresh();
    })
    .catch((error) => console.log("error", error));
};

export const postDataToActualList = (id, listData, Navigate) => {
  fetch(`http://localhost:3001/actualList/1`, { method: "DELETE" })
    .then((response) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        list: listData[id - 1].products,
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

export const patchList = (listData, id, setEditButton, editButton) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    products: listData[id - 1].products,
  });

  var requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(`http://localhost:3001/list/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      setEditButton(!editButton);
    })
    .catch((error) => console.log("error", error));
};
