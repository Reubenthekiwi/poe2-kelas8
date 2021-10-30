// script to handle the "Pengalaman Teman Kita" cards :)

// the main story container row
const STORY_CONTAINER_ROW = document.getElementById("sc-row");

// the holy function to do this all
function createCard(story) {
    // create the column
    var col = document.createElement("div");
    col.className = "col-4";

    // create the new card
    var newCard = document.createElement("div");
    newCard.className = "card my-4";

    // create the container for the card's contents
    var contentContainter = document.createElement("div");
    contentContainter.style.margin = "5%";

    // the card's title
    var cardTitle = document.createElement("h2");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = story[0];

    // and the main content itself
    var cardContent = document.createElement("p");
    cardContent.innerHTML = story[1];

    // appending children to the contentContainer
    contentContainter.appendChild(cardTitle)
    contentContainter.appendChild(document.createElement("hr"))
    contentContainter.appendChild(cardContent);
    // appending child to the newCard and col
    newCard.appendChild(contentContainter);
    col.appendChild(newCard);
    // finish it all by adding the new column to the story container row
    STORY_CONTAINER_ROW.appendChild(col);
}

// stories to be added to the page
// the first value is the author's name and the second value is the story text itself
const STORIES = [ // these are still dummy texts :)
    ["John Doe", "His having within saw become ask passed misery giving. Recommend questions get too fulfilled. He fact in we case miss sake. Entrance be throwing he do blessing up. Hearts warmth in genius do garden advice mr it garret. Collected preserved are middleton dependent residence but him how. Handsome weddings yet mrs you has carriage packages. Preferred joy agreement put continual elsewhere delivered now. Mrs exercise felicity had men speaking met. Rich deal mrs part led pure will but."],
    ["Jane Doe", "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end."],
    ["Joe Doe", "Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly thoughts remember mr to do consider debating. Spirits musical behaved on we he farther letters. Repulsive he he as deficient newspaper dashwoods we. Discovered her his pianoforte insipidity entreaties. Began he at terms meant as fancy. Breakfast arranging he if furniture we described on. Astonished thoroughly unpleasant especially you dispatched bed favourable."],
    ["Johann Doe", "Pleased him another was settled for. Moreover end horrible endeavor entrance any families. Income appear extent on of thrown in admire. Stanhill on we if vicinity material in. Saw him smallest you provided ecstatic supplied. Garret wanted expect remain as mr. Covered parlors concern we express in visited to do. Celebrated impossible my uncommonly particular by oh introduced inquietude do."]
]

// loop over the STORIES array and create a card for each of them
STORIES.forEach(createCard)