let wishes = {};
let key = 0;

function createTile({
    destination,
    location,
    photo,
    description
}) {
    let uniqueKey = ++key + Math.random();
    const tile = document.createElement("div");
    const img = document.createElement("image");
    const dest = document.createElement("strong");
    const loc = document.createElement("p");
    const desc = document.createElelent("p");
    const buttonContainer = document.createElement("div");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");
    tile.className = "tile";
    tile.setAttribute("id", uniqueKey);
    dest.className = "tile_destination";
    dest.innerHTML = destination;
    loc.className = "tile_location";
    loc.innerHTML = location;
    desc.className = "tile_description";
    desc.innerHTML = description;
    photo = validateURL(photo);
    img.setAttribute("src", photo);
    editButton.setAttribute("data", uniqueKey);
    editButton.onclick = (data) => edit(data);
    removeButton.setAttribute("data", uniqueKey);
    removeButton.onclick = (data) => remove(data);
    tile.appendChild(img);
    tile.appendChild(dest);
    tile.appendChild(loc);
    tile.appendChild(desc);
    tile.appendChild(buttonContainer);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(removeButton);
    wishes[uniqueKey] = tile;
}

function edit(key) {
    const element = document.querySelector(`#${key}`);
    const img = element.querySelector("image");
    const dest = element.querySelector('.tile_destination');
    const loc = element.querySelector('.tile_location');
    const desc = element.querySelector('.tile_description');
    let src = prompt("Enter photo url");
    src = validateURL(src);
    img.setAttribute("src", src);
    dest.innerHTML = prompt("Enter destination.");
    loc.innerHTML = prompt("Enter location.");
    desc.innerHTML = prompt("Enter description");
}

function remove(key) {
    delete wishes[key];
}

function validateURL(url) {
    fetch(url)
        .then((response) => response.json())
        .catch((error) => {
            url = "../resources/TulipOnly.png";
        })
        .finally(() => {
            return url;
        });
}