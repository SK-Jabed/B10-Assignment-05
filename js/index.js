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


// Donation Section JS Start Here 
function handleDonation(coinAvailable, coinDonated, donationInput, cause) {
    const donationInputValue = donationInput.value;
    const donationAmount = parseInt(donationInputValue);

    if (donationInputValue === "" || donationAmount <= 0 || isNaN(donationAmount) || isNaN(donationInputValue)) {
        alert("Please enter a valid amount");
        donationInput.value = ""; 
        return;
    }

    const donationTotal = donationAmount + parseInt(coinDonated.innerText);
    const coinAvailableTotal = parseInt(coinAvailable.innerText) - donationAmount;

    if (coinAvailableTotal >= 0) {
        coinAvailable.innerText = coinAvailableTotal;
        coinDonated.innerText = donationTotal;
        my_modal_1.showModal();
        addTransactionHistory(donationAmount, cause);
    } 
    else {
        alert("Insufficient funds");
    }
    donationInput.value = "";
}


document.getElementById("noakhali-donation-btn")
    .addEventListener("click", function() {
        const coinAvailable = document.getElementById("available-amount");
        const coinDonated = document.getElementById("donated-amount-noakhali");
        const noakhaliDonationInput = document.getElementById("input-noakhali-donation");
        handleDonation(coinAvailable, coinDonated, noakhaliDonationInput,"famine-2024 at Feni, Bangladesh");
});

document.getElementById("feni-donation-btn")
    .addEventListener("click", function() {
        const coinAvailable = document.getElementById("available-amount");
        const coinDonated = document.getElementById("donated-amount-feni");
        const feniDonationInput = document.getElementById("input-feni-donation");
        handleDonation(coinAvailable, coinDonated, feniDonationInput,"Flood Relief in Feni,Bangladesh");
});

document.getElementById("quota-donation-btn")
    .addEventListener("click", function() {
        const coinAvailable = document.getElementById("available-amount");
        const coinDonated = document.getElementById("donated-amount-quota");
        const quotaDonationInput = document.getElementById("input-qouta-donation");
        handleDonation(coinAvailable, coinDonated, quotaDonationInput,"Aid for Injured in the Quota Movement, Bangladesh");
});



// History Section JS Start Here
function addTransactionHistory(amount, cause) {
    const transactionHistory = document.getElementById("show-donation-history");
    const transactionEntry = document.createElement("div");

    transactionEntry.classList.add("bg-white", "p-4", "rounded-lg", "mb-4", "border", "shadow-md", "container", "w-10/12", "mx-auto");

    transactionEntry.innerHTML = `
        <p class="font-bold text-lg mb-2">${amount} Taka is Donated for ${cause}</p>
        <p class="text-sm text-gray-600">Date : ${new Date().toString()}</p>
    `;
    transactionHistory.appendChild(transactionEntry);
}
// History Section JS End Here