const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
    // Read variables sent via POST from our SDK
    const { sessionId, serviceCode, phoneNumber, text } = req.body;

    console.log('####################', req.body);
    let response = "";

    if (text === "") {
        console.log(text);
        // This is the first request. Note how we start the response with CON
        response = `CON Welcome to Ngaoo
        1. Register
        2. Info
        3. Exit`;
    } else if (text === "1") {
        // Business logic for first level response
        response = `CON Enter adm no`;
    } else if (text === "2") {
        response = `END Ngaoo is a free instant alert platfrom`
            // Business logic for first level response
            // This is a terminal request. Note how we start the response with END
        response = `END Your phone number is ${phoneNumber}`;
    } else if (text === "1*1") {
        // This is a second level response where the user selected 1 in the first instance
        const accountNumber = "ACC100101";
        // This is a terminal request. Note how we start the response with END
        response = `END Your account number is ${accountNumber}`;
    } else if (text === "1*2") {
        // This is a second level response where the user selected 1 in the first instance
        const balance = "KES 10,000";
        // This is a terminal request. Note how we start the response with END
        response = `END Your balance is ${balance}`;
    }

    // Print the response onto the page so that our SDK can read it
    res.set("Content-Type: text/plain");
    res.send(response);
    // DONE!!!
});

module.exports = router;