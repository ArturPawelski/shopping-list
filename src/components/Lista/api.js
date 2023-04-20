export const postDataToList = (listName, listDate, fullList, history) => {
    if (listName.trim().length >= 3 && listDate.trim().length >= 3) {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": listName,
            "date": listDate,
            "products": fullList
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/list", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                history('/twojelisty'); // przekierowanie użytkownika do /twojelisty
            })
            .catch(error => console.log('error', error));
    }
}



export const postDataToFoods = (foodsName, foodsDescription, foodsImg, fullList, history) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": foodsName,
        "description": foodsDescription,
        "img": foodsImg,
        "productsList": fullList
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3001/foods", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            history('/posilki'); // przekierowanie użytkownika do /twojelisty
        })
        .catch(error => console.log('error', error));
}
