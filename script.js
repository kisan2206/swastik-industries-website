/* =====================================================
   SWASTIK AI ASSISTANT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const aiToggle = document.getElementById("aiToggle");
    const aiChatBox = document.getElementById("aiChatBox");
    const aiClose = document.getElementById("aiClose");

    const aiInput = document.getElementById("aiInput");
    const aiSend = document.getElementById("aiSend");
    const aiBody = document.getElementById("aiBody");


    /* CHECK */

    if (!aiToggle) {
        console.log("AI Button not found");
        return;
    }


    /* ================= OPEN AI ================= */

    aiToggle.addEventListener("click", function () {

        aiChatBox.style.display = "block";

        if (aiInput) {
            setTimeout(function () {
                aiInput.focus();
            }, 200);
        }

    });


    /* ================= CLOSE AI ================= */

    if (aiClose) {

        aiClose.addEventListener("click", function () {

            aiChatBox.style.display = "none";

        });

    }


    /* ================= SEND ================= */

    if (aiSend) {

        aiSend.addEventListener("click", function () {

            sendAIMessage();

        });

    }


    /* ================= ENTER ================= */

    if (aiInput) {

        aiInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                sendAIMessage();

            }

        });

    }


    /* =================================================
       SEND MESSAGE
    ================================================= */

    function sendAIMessage() {

        const question = aiInput.value.trim();

        if (question === "") {
            return;
        }


        /* USER MESSAGE */

        addAIMessage(
            question,
            "ai-user-message"
        );


        aiInput.value = "";


        /* AI RESPONSE */

        setTimeout(function () {

            const answer = getAIResponse(
                question.toLowerCase()
            );

            addAIMessage(
                answer,
                "ai-bot-message"
            );

        }, 500);

    }


    /* =================================================
       ADD MESSAGE
    ================================================= */

    function addAIMessage(message, className) {

        const div = document.createElement("div");

        div.className = className;

        div.innerHTML = message;

        aiBody.appendChild(div);

        aiBody.scrollTop = aiBody.scrollHeight;

    }


    /* =================================================
       AI RESPONSE
    ================================================= */

    function getAIResponse(question) {


        if (
            question.includes("hello") ||
            question.includes("hi") ||
            question.includes("hey")
        ) {

            return `
                👋 Hello! Welcome to
                <strong>Swastik Industries.</strong>

                <br><br>

                How can I help you today?
            `;

        }


        if (
            question.includes("product") ||
            question.includes("products")
        ) {

            return `
                🏭 <strong>Our Products</strong>

                <br><br>

                • Electrical Enclosures<br>
                • Machine Base Frames<br>
                • Conveyor Systems<br>
                • Structural Fabrication<br>
                • Industrial Safety Fencing<br>
                • Conveyor Base Frames
            `;

        }


        if (
            question.includes("service") ||
            question.includes("services")
        ) {

            return `
                🔧 <strong>Our Services</strong>

                <br><br>

                • Industrial Fabrication<br>
                • Custom Fabrication Solutions<br>
                • Machine Assembly<br>
                • Industrial Manufacturing
            `;

        }


        if (
            question.includes("conveyor")
        ) {

            return `
                ⚙️ <strong>Conveyor Systems</strong>

                <br><br>

                We manufacture industrial conveyor
                systems and conveyor base frames for
                material handling applications.
            `;

        }


        if (
            question.includes("fencing") ||
            question.includes("safety")
        ) {

            return `
                🛡️ <strong>Industrial Safety Fencing</strong>

                <br><br>

                We manufacture robotic and industrial
                safety fencing solutions for machinery
                and controlled work areas.
            `;

        }


        if (
            question.includes("fabrication")
        ) {

            return `
                🏗️ <strong>Industrial Fabrication</strong>

                <br><br>

                We provide custom industrial fabrication,
                machine structures, base frames and
                customized metal fabrication solutions.
            `;

        }


        if (
            question.includes("project") ||
            question.includes("projects")
        ) {

            return `
                📂 <strong>Our Projects</strong>

                <br><br>

                Please visit our Projects section
                to explore our industrial fabrication
                and engineering work.
            `;

        }


        if (
            question.includes("profile") ||
            question.includes("company")
        ) {

            return `
                📄 <strong>Company Profile</strong>

                <br><br>

                Learn more about Swastik Industries,
                our capabilities and engineering solutions.

                <br><br>

                <a href="pdf/Swastik-Industries-Profile.pdf"
                   target="_blank">

                    📥 View Company Profile

                </a>
            `;

        }


        if (
            question.includes("contact") ||
            question.includes("phone") ||
            question.includes("call")
        ) {

            return `
                📞 <strong>Contact Us</strong>

                <br><br>

                <a href="tel:+917757028913">
                    +91 77570 28913
                </a>

                <br><br>

                <a href="https://wa.me/917757028913"
                   target="_blank">

                    💬 WhatsApp

                </a>

                <br><br>

                <a href="mailto:sales@swastikindustry.co">

                    📧 sales@swastikindustry.co

                </a>
            `;

        }


        if (
            question.includes("location") ||
            question.includes("address")
        ) {

            return `
                📍 <strong>Our Location</strong>

                <br><br>

                Dighi, Pimpri-Chinchwad,
                Maharashtra, India.
            `;

        }


        return `
            😊 I can help you with:

            <br><br>

            🏭 Products<br>
            🔧 Services<br>
            📂 Projects<br>
            📄 Company Profile<br>
            📞 Contact<br>
            📍 Location
        `;

    }


    /* =================================================
       QUICK QUESTIONS
    ================================================= */

    window.aiQuickQuestion = function (text) {

        if (!aiInput) {
            return;
        }

        aiInput.value = text;

        sendAIMessage();

    };

});