class ImageObject {
    constructor(title, image, description, author, year) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;
    }
}

const objects = [
    new ImageObject(
        "Bambi, Bambi",
        "images/BambiBambi.jpg",
        "Two baby deer sitting in the yard enjoying a hot summer day.",
        "Sawyer Reed",
        "2022"
    ),
    new ImageObject(
        "Cow",
        "images/Cow.jpg",
        "A lone cow grazing in an opern field in rural Oregon.",
        "Sawyer Reed",
        "2022"
    ),
    new ImageObject(
        "Daisy",
        "images/Daisy.jpg",
        "A harmless pitbull staring in awe at a beutiful dandelion.",
        "Sawyer Reed",
        "2022"
    ),
    new ImageObject(
        "The Hills of Portland",
        "images/Mountain.jpg",
        "A breathtaking view of Mt. Hood from the hills of Portland, Oregon.",
        "Sawyer Reed",
        "2022"
    ),
    new ImageObject(
        "Roses",
        "images/Roses.jpg",
        "Perfect red roses and a pinkish/orange colored sky.",
        "Sawyer Reed",
        "2022"
    )
];

function displayRandomObject() {
    const randomIndex = Math.floor(Math.random() * objects.length);
    const object = objects[randomIndex];

    const objectImageElement = document.getElementById("object-image");
    const objectTitleElement = document.getElementById("object-title");
    const objectDescriptionElement = document.getElementById("object-description");
    const objectAuthorYearElement = document.getElementById("object-author-year");

    objectImageElement.src = object.image;
    objectTitleElement.textContent = object.title;
    objectDescriptionElement.textContent = object.description;
    objectAuthorYearElement.textContent = `Author: ${object.author}, Year: ${object.year}`;
}

document.getElementById("random-btn").addEventListener("click", displayRandomObject);

displayRandomObject();
