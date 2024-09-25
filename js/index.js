// Features Button
const historyBtn = document.getElementById("history-button");
const donationBtn = document.getElementById("donation-button");

// Show Donation & Donation History Section
const donationSection =  document.getElementById("show-donation-section");
const historySection = document.getElementById("show-donation-history");


// Features Button Event Handler Starts Here
historyBtn.addEventListener("click", function() {
    donationSection.classList.add("hidden");
    historySection.classList.remove("hidden");

    historyBtn.classList.add("bg-buttonColor", "text-black");
    historyBtn.classList.remove("border", "border-solid", "border-secondaryBorderColor","text-secondaryTextColor");

    donationBtn.classList.remove("bg-buttonColor", "text-black")
    donationBtn.classList.add("border", "border-solid", "border-secondaryBorderColor","text-secondaryTextColor");
});

donationBtn.addEventListener("click", function() {
    donationSection.classList.remove("hidden");
    historySection.classList.add("hidden");

    donationBtn.classList.add("bg-buttonColor", "text-black");
    donationBtn.classList.remove("border", "border-solid", "border-secondaryBorderColor","text-secondaryTextColor");

    historyBtn.classList.remove("bg-buttonColor","text-black");
    historyBtn.classList.add("border", "border-solid", "border-secondaryBorderColor","text-secondaryTextColor");
});
// Features Button Event Handler Ends Here


// Donation Section JS Starts Here 
function handleDonation(coinAvailable, coinDonated, donationInput, cause) {
    const donationInputValue = donationInput.value;
    const donationAmount = parseFloat(donationInputValue);

    if (donationInputValue === "" || donationAmount <= 0 || isNaN(donationAmount) || isNaN(donationInputValue)) {
        alert("Please enter a valid amount");
        donationInput.value = ""; 
        return;
    }

    const donationTotal = ((donationAmount) + parseFloat(coinDonated.innerText)).toFixed(2);
    const coinAvailableTotal = parseFloat((coinAvailable.innerText) - donationAmount).toFixed(2);

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
        handleDonation(coinAvailable, coinDonated, noakhaliDonationInput,"Flood at Noakhali, Bangladesh");
});

document.getElementById("feni-donation-btn")
    .addEventListener("click", function() {
        const coinAvailable = document.getElementById("available-amount");
        const coinDonated = document.getElementById("donated-amount-feni");
        const feniDonationInput = document.getElementById("input-feni-donation");
        handleDonation(coinAvailable, coinDonated, feniDonationInput,"Flood Relief in Feni, Bangladesh");
});

document.getElementById("quota-donation-btn")
    .addEventListener("click", function() {
        const coinAvailable = document.getElementById("available-amount");
        const coinDonated = document.getElementById("donated-amount-quota");
        const quotaDonationInput = document.getElementById("input-qouta-donation");
        handleDonation(coinAvailable, coinDonated, quotaDonationInput,"Aid for Injured in the Quota Movement, Bangladesh");
});
// Donation Section JS Ends Here 


// History Section JS Starts Here
function addTransactionHistory(amount, cause) {
    const transactionHistory = document.getElementById("show-donation-history");
    const transactionEntry = document.createElement("div");

    transactionEntry.classList.add("bg-white", "p-4", "rounded-lg", "mb-4", "border", "shadow-md", "container", "w-10/12", "mx-auto");

    transactionEntry.innerHTML = `
        <p class="font-bold text-lg mb-2">${amount.toFixed(2)} Taka is Donated for ${cause}</p>
        <p class="text-sm text-gray-600">Date : ${new Date().toString()}</p>
    `;
    transactionHistory.appendChild(transactionEntry);
}
// History Section JS Ends Here