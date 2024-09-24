function showSectionById(id) {
    document.getElementById("show-donation-section").classList.add("hidden");
    document.getElementById("show-donation-history").classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
}


function showButtonBackground(id) {
    document.getElementById("donation-button").classList.remove("bg-buttonColor");
    document.getElementById("history-button").classList.remove("bg-buttonColor");

    document.getElementById(id)
        .classList.add(
            "bg-buttonColor",
            "border-none"
        );
}


document.getElementById("donation-btn")
    .addEventListener("click", function() {
        showSectionById("show-donation-section");
        showButtonBackground("donation-button");
});

document.getElementById("history-btn")
    .addEventListener("click", function() {
        showSectionById("show-donation-history");
        showButtonBackground("history-button");
});