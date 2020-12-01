let wishes = {};
let key = 0;
document.getElementById("travelDestinationForm").onsubmit = (event) => {
    event.preventDefault();
    submition = {
        destination: event.target[0].value,
        location: event.target[1].value,
        photo: event.target[2].value,
        description: event.target[3].value,
    };
    createTile(submition);
};

function displayTiles() {
    const directions = document.getElementById("directions");
    directions.innerHTML = "My Wish List";
    const container = document.getElementById("wishContainer");
    container.innerHTML = '';
    for (let wish in wishes) {
        container.appendChild(wishes[wish]);
    }
}


function createTile({
    destination,
    location,
    photo,
    description,
}) {
    let uniqueKey = 'a' + ++key;
    const tile = document.createElement("div");
    const img = document.createElement("img");
    const dest = document.createElement("strong");
    const loc = document.createElement("p");
    const desc = document.createElement("p");
    const buttonContainer = document.createElement("div");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");
    validateURL(photo, img);
    tile.className = "tile";
    tile.setAttribute("id", uniqueKey);
    dest.className = "tile_destination";
    dest.innerHTML = destination;
    loc.className = "tile_location";
    loc.innerHTML = location;
    desc.className = "tile_description";
    desc.innerHTML = description;
    buttonContainer.className = "buttonContainer";
    img.setAttribute("width", "100%");
    img.setAttribute("height", "100%");
    img.setAttribute("alt", "default");
    editButton.setAttribute("data", uniqueKey);
    editButton.setAttribute("type", "button");
    editButton.onclick = (event) => edit(event.target.attributes.data.value);
    editButton.innerHTML = "Edit";
    editButton.className = "editButton";
    removeButton.setAttribute("data", uniqueKey);
    removeButton.onclick = (event) => remove(event.target.attributes.data.value);
    removeButton.setAttribute("type", "button");
    removeButton.innerHTML = "Remove";
    removeButton.className = "removeButton";
    tile.appendChild(img);
    tile.appendChild(dest);
    tile.appendChild(loc);
    tile.appendChild(desc);
    tile.appendChild(buttonContainer);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(removeButton);
    wishes[uniqueKey] = tile;
    displayTiles();
}

function edit(key) {
    const element = document.querySelector(`#${key}`);
    const img = element.querySelector("image");
    const dest = element.querySelector('.tile_destination');
    const loc = element.querySelector('.tile_location');
    const desc = element.querySelector('.tile_description');
    let src = prompt("Enter photo url");
    validateURL(src, img);
    dest.innerHTML = prompt("Enter destination.");
    loc.innerHTML = prompt("Enter location.");
    desc.innerHTML = prompt("Enter description");
    displayTiles();
}

function remove(key) {
    delete wishes[key];
    displayTiles();
}

function validateURL(url, img) {
    const defaultURL = 'https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg';
    if (url === "") {
        url = defaultURL;
    }
    fetch(url, {
            mode: "no-cors"
        })
        .then(function (response) {
            if (response.ok) {
                img.setAttribute("src", url);
            } else {
                img.setAttribute("src", defaultURL);
            }
        })
        .catch(() => {
            img.setAttribute("src", defaultURL);
        })
}