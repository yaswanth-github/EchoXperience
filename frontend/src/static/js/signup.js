document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup-form");
    const otpInput = document.getElementById("otp");
    const generateOTPButton = document.getElementById("generate-otp");

    generateOTPButton.addEventListener("click", function() {
        // Generate and send OTP to user's phone number (simulate for demo)
        const generatedOTP = generateRandomOTP();
        console.log("Generated OTP:", generatedOTP);
        alert("OTP generated and sent to your phone number!");
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Example: Send form data to server
        console.log(formDataObject);
        // Here you can send the form data to your backend for processing
    });
});

function generateRandomOTP() {
    // Generate a random 6-digit OTP
    return Math.floor(100000 + Math.random() * 900000);
}
