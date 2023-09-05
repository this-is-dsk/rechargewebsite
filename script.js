document.getElementById("rechargeButton").addEventListener("click", function(event) {
  event.preventDefault(); 

  const mobileNumber = document.getElementById("mobileNumberInput").value;
  const networkOperator = document.querySelector("select").value;

  if (mobileNumber && mobileNumber.length === 10 && /^\d+$/.test(mobileNumber) && networkOperator) {
    window.location.href = `second.html?mobile=${mobileNumber}&operator=${networkOperator}`;
  } else {
    alert("Please enter a valid 10-digit mobile number and select a network operator.");
  }
});

const mobileNumberInput = document.getElementById("mobileNumberInput");

mobileNumberInput.addEventListener("input", function() {
  this.value = this.value.replace(/[^0-9]/g, "");
});