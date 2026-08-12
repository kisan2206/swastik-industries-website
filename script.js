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
document.addEventListener("DOMContentLoaded", function () {

```
const track = document.querySelector(".gallery-track");
const cards = document.querySelectorAll(".gallery-card");
const prev = document.querySelector(".gallery-prev");
const next = document.querySelector(".gallery-next");

if (!track || cards.length === 0) return;

let index = 0;

function moveSlider() {

    const card = cards[0];
    const gap = 25;
    const cardWidth = card.offsetWidth + gap;

    track.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
    });
}

next.addEventListener("click", function () {

    if (index < cards.length - 3) {
        index++;
    } else {
        index = 0;
    }

    moveSlider();
});

prev.addEventListener("click", function () {

    if (index > 0) {
        index--;
    } else {
        index = cards.length - 3;
    }

    moveSlider();
});
```

});
/* =====================================================
   PREMIUM PROJECT GALLERY SLIDER
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const galleryTrack = document.querySelector(".gallery-track");
    const galleryPrev = document.querySelector(".gallery-prev");
    const galleryNext = document.querySelector(".gallery-next");
    const galleryDots = document.querySelector(".gallery-dots");

    if (!galleryTrack || !galleryPrev || !galleryNext) {
        return;
    }

    const cards = galleryTrack.querySelectorAll(".gallery-card");

    if (!cards.length) {
        return;
    }

    /* -------------------------------------------------
       CALCULATE SLIDE
    ------------------------------------------------- */

    function getScrollAmount() {

        const card = cards[0];

        const cardWidth = card.offsetWidth;

        const gap = parseInt(
            window.getComputedStyle(galleryTrack).gap
        ) || 0;

        return cardWidth + gap;
    }


    /* -------------------------------------------------
       NEXT BUTTON
    ------------------------------------------------- */

    galleryNext.addEventListener("click", function () {

        galleryTrack.scrollBy({
            left: getScrollAmount(),
            behavior: "smooth"
        });

    });


    /* -------------------------------------------------
       PREVIOUS BUTTON
    ------------------------------------------------- */

    galleryPrev.addEventListener("click", function () {

        galleryTrack.scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth"
        });

    });


    /* -------------------------------------------------
       DRAG TO SCROLL
    ------------------------------------------------- */

    let isDown = false;
    let startX;
    let scrollLeft;

    galleryTrack.addEventListener("mousedown", function (e) {

        isDown = true;

        galleryTrack.style.cursor = "grabbing";

        startX = e.pageX - galleryTrack.offsetLeft;

        scrollLeft = galleryTrack.scrollLeft;

    });


    galleryTrack.addEventListener("mouseleave", function () {

        isDown = false;

        galleryTrack.style.cursor = "grab";

    });


    galleryTrack.addEventListener("mouseup", function () {

        isDown = false;

        galleryTrack.style.cursor = "grab";

    });


    galleryTrack.addEventListener("mousemove", function (e) {

        if (!isDown) return;

        e.preventDefault();

        const x = e.pageX - galleryTrack.offsetLeft;

        const walk = (x - startX) * 1.5;

        galleryTrack.scrollLeft = scrollLeft - walk;

    });


    /* -------------------------------------------------
       MOBILE TOUCH SWIPE
    ------------------------------------------------- */

    let touchStartX = 0;
    let touchEndX = 0;

    galleryTrack.addEventListener("touchstart", function (e) {

        touchStartX = e.touches[0].clientX;

    }, { passive: true });


    galleryTrack.addEventListener("touchend", function (e) {

        touchEndX = e.changedTouches[0].clientX;

        const difference = touchStartX - touchEndX;

        if (Math.abs(difference) > 50) {

            if (difference > 0) {

                galleryTrack.scrollBy({
                    left: getScrollAmount(),
                    behavior: "smooth"
                });

            } else {

                galleryTrack.scrollBy({
                    left: -getScrollAmount(),
                    behavior: "smooth"
                });

            }

        }

    }, { passive: true });


    /* -------------------------------------------------
       GALLERY DOTS
    ------------------------------------------------- */

    if (galleryDots) {

        const totalSlides = cards.length;

        cards.forEach(function (card, index) {

            const dot = document.createElement("button");

            dot.className = "gallery-dot";

            dot.type = "button";

            dot.setAttribute(
                "aria-label",
                "Go to project " + (index + 1)
            );

            if (index === 0) {

                dot.classList.add("active");

            }

            dot.addEventListener("click", function () {

                galleryTrack.scrollTo({
                    left: index * getScrollAmount(),
                    behavior: "smooth"
                });

            });

            galleryDots.appendChild(dot);

        });


        const dots = galleryDots.querySelectorAll(".gallery-dot");


        galleryTrack.addEventListener("scroll", function () {

            const currentIndex = Math.round(
                galleryTrack.scrollLeft / getScrollAmount()
            );

            dots.forEach(function (dot, index) {

                dot.classList.toggle(
                    "active",
                    index === currentIndex
                );

            });

        });

    }

});
/* =====================================================
   AUTOMATIC CLIENT SLIDER
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const clientSlides = document.querySelectorAll(".client-slide");

    if (!clientSlides.length) {
        return;
    }

    let currentClient = 0;

    function showNextClient() {

        clientSlides[currentClient].classList.remove("active");

        currentClient++;

        if (currentClient >= clientSlides.length) {
            currentClient = 0;
        }

        clientSlides[currentClient].classList.add("active");

    }

    setInterval(showNextClient, 3000);

});
