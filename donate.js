function blog(){
    document.getElementById('blog').addEventListener('click', function(){
        window.location.href = 'blog.html';
    });
}


blog();


function changeBg(makegreen,makewhite){
    document.getElementById(makegreen).addEventListener('click', function(){
        this.style.backgroundColor='lightgreen'
    document.getElementById(makewhite).style.backgroundColor = 'white';
})
}


changeBg('donation', 'history')
changeBg('history', 'donation')


function showPage(id) {
    const sections = document.querySelectorAll('.page')
    for (let section of sections) {
        section.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}


document.getElementById('donation').addEventListener('click', function() {
    showPage('donation-page');
});


document.getElementById('history').addEventListener('click', function() {
    showPage('history-page');
});


function handleDonation(donationFieldId, inputFieldId, balanceId, donationFieldName) {
    const userAmountElement = document.getElementById(balanceId);
    const currentBalance = parseFloat(userAmountElement.innerText);


    const inputElement = document.getElementById(inputFieldId);
    const donationAmount = parseFloat(inputElement.value);


    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount.");
    }
    else if (donationAmount > currentBalance) {
        alert("You do not have enough balance for this donation.");
    }
    else {
        const donationField = document.getElementById(donationFieldId);
        const currentDonation = parseFloat(donationField.innerText);
        donationField.innerText = (currentDonation + donationAmount).toFixed(2);


        userAmountElement.innerText = (currentBalance - donationAmount).toFixed(2);


        document.getElementById('successfull-donation').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';


        inputElement.value = "";


        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-[rgba(17,17,17,0.10)] w-[90%] mx-[5%] my-5">
          <div class="card-body mb-5">
            <h2 class="card-title">${donationAmount} Taka is Donated for ${donationFieldName}</h2>
            <p>Date : ${new Date().toString()}</p>
          </div>
        </div>`;
       
        document.getElementById('history-page').appendChild(div);
    }
}


document.getElementById('noakhali-btn').addEventListener('click', function () {
    handleDonation("noakhali", "noakhali-donation", "initial-amount", "Donate for Flood at Noakhali, Bangladesh");
});
document.getElementById('feni-btn').addEventListener('click', function () {
    handleDonation("feni", "feni-donation", "initial-amount", "Donate for Flood Relief in Feni,Bangladesh");
});
document.getElementById('quota-btn').addEventListener('click', function () {
    handleDonation("quota", "quota-donation", "initial-amount", "Aid for Injured in the Quota Movement");
});


document.getElementById('confirmation').addEventListener('click', function () {
    document.getElementById('successfull-donation').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});