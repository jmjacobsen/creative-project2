
document.getElementById("musicSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("musicInput").value;
    if (value === "")
        return;
    const stringArray = value.split(" ");
    console.log('Array: ', stringArray);
    let searchTerm = "";
    for (let i = 0; i < stringArray.length; i++) {
        if (i === stringArray.length - 1) {
            searchTerm += stringArray[i];
        }
        else {
            searchTerm += stringArray[i] + "+";
        }
    }
    console.log(searchTerm);
    const url = "https://itunes.apple.com/search?term=" + searchTerm;
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
        let results = "";
        console.log(json);
        // console.log(json.results.primaryGenreName);
        results+= '<h3>' + "Country: " + json.results[0].country + '</h3>';
        results+= '<h3>' + "Genre: " + json.results[0].primaryGenreName + '</h3>';


        results+= '<h2>' + '<i>' + "Songs " + '</i>' + "and " + '<b>' + "Albums" + '</b>' + ":" + '</h2>';
        for (let i = 0; i < json.results.length; i++) {

            console.log(json.results[i].trackName);
            results+= '<ul>' + '<i>' + json.results[i].trackName + '</i>' + " " + '<b>' + json.results[i].collectionName + '</b>' + "</ul>";
        }



        document.getElementById("musicResults").innerHTML = results;
    });
});