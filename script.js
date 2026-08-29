/* =========================================================
   PERFECT DAY
   24 HOURS · 24 PEOPLE
========================================================= */


/* =========================================================
   DATA
========================================================= */

const people = [

    {
        time: "12:00 AM",
        shortTime: "12 AM",
        period: "MIDNIGHT",
        name: "Anya",
        condition: "A student with her board exams tomorrow",
        thought: "Perfect means finally putting the books away and getting some sleep."
    },

    {
        time: "01:00 AM",
        shortTime: "1 AM",
        period: "LATE NIGHT",
        name: "Maya",
        condition: "A college student who has an early class tomorrow",
        thought: "Perfect is being completely unaware of the alarm waiting for me in five hours."
    },

    {
        time: "02:00 AM",
        shortTime: "2 AM",
        period: "LATE NIGHT",
        name: "Luca",
        condition: "A young professional finally out with his closest friends",
        thought: "The music is still playing, my friends are still here, and nobody has said 'we should leave' yet."
    },

    {
        time: "03:00 AM",
        shortTime: "3 AM",
        period: "DEEP NIGHT",
        name: "Sara",
        condition: "A new mother whose baby has finally fallen asleep",
        thought: "Perfect is twenty minutes where nobody needs me."
    },

    {
        time: "04:00 AM",
        shortTime: "4 AM",
        period: "BEFORE DAWN",
        name: "Rohan",
        condition: "A baker who starts work before the city wakes up",
        thought: "The first batch is in the oven. The shop smells like bread. That's when my day feels right."
    },

    {
        time: "05:00 AM",
        shortTime: "5 AM",
        period: "DAWN",
        name: "Daniel",
        condition: "A runner who loves having the streets to himself",
        thought: "Empty roads, cold air, and the first bit of sunlight."
    },

    {
        time: "06:00 AM",
        shortTime: "6 AM",
        period: "EARLY MORNING",
        name: "Kamla",
        condition: "A grandmother who wakes before everyone else",
        thought: "Everyone is still asleep. I have my chai, my balcony, and ten quiet minutes."
    },

    {
        time: "07:00 AM",
        shortTime: "7 AM",
        period: "MORNING",
        name: "Maya",
        condition: "Someone who has taken a rare morning off from work",
        thought: "My perfect day starts with not hearing my alarm."
    },

    {
        time: "08:00 AM",
        shortTime: "8 AM",
        period: "MORNING",
        name: "Nisha",
        condition: "A homemaker getting three children ready for school",
        thought: "Perfect is getting everyone bathed, fed, packed and out of the house on time."
    },

    {
        time: "09:00 AM",
        shortTime: "9 AM",
        period: "MORNING",
        name: "Kabir",
        condition: "A project manager with a packed workday ahead",
        thought: "No urgent messages. No meetings moved forward. Just getting through the morning without putting out a fire."
    },

    {
        time: "10:00 AM",
        shortTime: "10 AM",
        period: "LATE MORNING",
        name: "Ira",
        condition: "A freelancer working from her favourite cafe",
        thought: "Finishing work before lunch so I don't have to think about it again all evening."
    },

    {
        time: "11:00 AM",
        shortTime: "11 AM",
        period: "LATE MORNING",
        name: "Yusuf",
        condition: "A shopkeeper who has known his customers for years",
        thought: "A good morning is when the shop is busy, but never so busy that I stop noticing the people walking in."
    },

    {
        time: "12:00 PM",
        shortTime: "12 PM",
        period: "NOON",
        name: "Tanya",
        condition: "A college student who has been waiting for lunch since 9 AM",
        thought: "Perfect is when lunch somehow becomes the best part of the day."
    },

    {
        time: "01:00 PM",
        shortTime: "1 PM",
        period: "AFTERNOON",
        name: "Arjun",
        condition: "An employee who usually eats lunch at his desk",
        thought: "A perfect day is when I actually leave my desk for lunch."
    },

    {
        time: "02:00 PM",
        shortTime: "2 PM",
        period: "AFTERNOON",
        name: "Priya",
        condition: "A mother whose children have finally gone back to school",
        thought: "Nobody is calling 'Mumma' for at least half an hour."
    },

    {
        time: "03:00 PM",
        shortTime: "3 PM",
        period: "AFTERNOON",
        name: "Aarav",
        condition: "A college student with no lectures left for the day",
        thought: "Perfect is having nowhere urgent to go."
    },

    {
        time: "04:00 PM",
        shortTime: "4 PM",
        period: "LATE AFTERNOON",
        name: "Vikram",
        condition: "A grandfather waiting for his wife to return home",
        thought: "The best part of my day is hearing the front door open and knowing she's home."
    },

    {
        time: "05:00 PM",
        shortTime: "5 PM",
        period: "EVENING",
        name: "Neha",
        condition: "An office worker who has been staring at the same screen since morning",
        thought: "Perfect is seeing 5:00 on the clock and knowing I'm actually going home."
    },

    {
        time: "06:00 PM",
        shortTime: "6 PM",
        period: "EVENING",
        name: "Riya",
        condition: "A friend who finally managed to get everyone together",
        thought: "Perfect is when 'let's just meet for an hour' turns into the whole evening."
    },

    {
        time: "07:00 PM",
        shortTime: "7 PM",
        period: "EVENING",
        name: "Dev",
        condition: "An amateur footballer playing after a long workday",
        thought: "Coming home tired because I did something I actually wanted to do."
    },

    {
        time: "08:00 PM",
        shortTime: "8 PM",
        period: "NIGHT",
        name: "Raj",
        condition: "A businessman who managed to leave work early",
        thought: "The perfect day is when I get home early enough to have dinner while everyone is still awake."
    },

    {
        time: "09:00 PM",
        shortTime: "9 PM",
        period: "NIGHT",
        name: "Kabir",
        condition: "A man on his first proper date after months of work",
        thought: "Perfect is when the date was supposed to end an hour ago and neither of us has checked the time."
    },

    {
        time: "10:00 PM",
        shortTime: "10 PM",
        period: "LATE NIGHT",
        name: "Sameer",
        condition: "A father whose children have finally gone to sleep",
        thought: "Perfect is when the house is finally quiet and we get twenty minutes to talk."
    },

    {
        time: "11:00 PM",
        shortTime: "11 PM",
        period: "LATE NIGHT",
        name: "Elena",
        condition: "A traveller spending her last night in a city she has never visited before",
        thought: "Perfect is ending the day somewhere I've never been before."
    }

];


/* =========================================================
   CURRENT HOUR
========================================================= */

let currentHour = 0;


/* =========================================================
   DOM ELEMENTS
========================================================= */

const hourMarkers =
    document.getElementById("hourMarkers");

const timeline =
    document.getElementById("timeline");

const clockTime =
    document.getElementById("clockTime");

const clockPerson =
    document.getElementById("clockPerson");

const timeBadge =
    document.getElementById("timeBadge");

const periodText =
    document.getElementById("periodText");

const largeTime =
    document.getElementById("largeTime");

const personName =
    document.getElementById("personName");

const personCondition =
    document.getElementById("personCondition");

const personThought =
    document.getElementById("personThought");

const timelineSelected =
    document.getElementById("timelineSelected");

const previousHour =
    document.getElementById("previousHour");

const nextHour =
    document.getElementById("nextHour");

const aboutButton =
    document.getElementById("aboutButton");

const aboutModal =
    document.getElementById("aboutModal");

const closeModal =
    document.getElementById("closeModal");

const beginButton =
    document.getElementById("beginButton");

const exploreButton =
    document.getElementById("exploreButton");

const clockExperience =
    document.getElementById("clockExperience");

const peopleGrid =
    document.getElementById("peopleGrid");


/* =========================================================
   CREATE CLOCK HOURS
========================================================= */

function createClockHours() {

    people.forEach((person, index) => {

        const marker =
            document.createElement("div");


        marker.className =
            "hour-marker";


        marker.textContent =
            index + 1;


        /*
            Place the 24 hours
            around the circle.
        */

        const angle =
            (index / people.length) * 360 - 90;


        const radius = 43;


        const x =
            50 +
            radius *
            Math.cos(
                angle * Math.PI / 180
            );


        const y =
            50 +
            radius *
            Math.sin(
                angle * Math.PI / 180
            );


        marker.style.left =
            `${x}%`;


        marker.style.top =
            `${y}%`;


        marker.dataset.index =
            index;


        marker.addEventListener(
            "click",
            () => {

                selectHour(index);

            }
        );


        hourMarkers.appendChild(marker);

    });

}


/* =========================================================
   CREATE TIMELINE
========================================================= */

function createTimeline() {

    people.forEach(
        (person, index) => {

            const item =
                document.createElement("div");


            item.className =
                "timeline-item";


            item.dataset.index =
                index;


            item.innerHTML = `
                <span>
                    ${person.shortTime}
                </span>
            `;


            item.addEventListener(
                "click",
                () => {

                    selectHour(index);


                    clockExperience.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );


            timeline.appendChild(item);

        }
    );

}


/* =========================================================
   CREATE PEOPLE CARDS
========================================================= */

function createPeopleCards() {

    /*
        We deliberately show only a few
        representative lives here.

        The complete 24 hours remain
        accessible through the clock
        and timeline.
    */

    const selectedPeople = [
        0,
        4,
        7,
        11,
        17,
        20,
        23
    ];


    selectedPeople.forEach(
        (index) => {

            const person =
                people[index];


            const card =
                document.createElement("div");


            card.className =
                "person-card";


            card.dataset.index =
                index;


            card.innerHTML = `

                <div>

                    <div class="person-card-time">
                        ${person.time}
                    </div>

                    <div class="person-card-name">
                        ${person.name}
                    </div>

                    <div class="person-card-condition">
                        ${person.condition}
                    </div>

                </div>

                <div class="person-card-arrow">
                    →
                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    selectHour(index);


                    clockExperience.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );


            peopleGrid.appendChild(card);

        }
    );

}


/* =========================================================
   SELECT HOUR
========================================================= */

function selectHour(index) {

    currentHour = index;


    const person =
        people[index];


    /* --------------------------------
       Update main information
    -------------------------------- */

    clockTime.textContent =
        person.time;


    clockPerson.textContent =
        person.name.toUpperCase();


    timeBadge.textContent =
        String(index + 1).padStart(2, "0");


    periodText.textContent =
        person.period;


    largeTime.textContent =
        person.time;


    personName.textContent =
        person.name;


    personCondition.textContent =
        person.condition;


    personThought.textContent =
        person.thought;


    timelineSelected.textContent =
        person.time;



    /* --------------------------------
       Active clock marker
    -------------------------------- */

    document
        .querySelectorAll(".hour-marker")
        .forEach(
            (marker, markerIndex) => {

                marker.classList.toggle(
                    "active",
                    markerIndex === index
                );

            }
        );



    /* --------------------------------
       Active timeline item
    -------------------------------- */

    document
        .querySelectorAll(".timeline-item")
        .forEach(
            (item, itemIndex) => {

                item.classList.toggle(
                    "active",
                    itemIndex === index
                );

            }
        );



    /* --------------------------------
       Small transition effect
    -------------------------------- */

    const panel =
        document.querySelector(
            ".info-panel"
        );


    panel.style.animation =
        "none";


    requestAnimationFrame(
        () => {

            panel.style.animation =
                "fadeUp 0.35s ease";

        }
    );

}


/* =========================================================
   NEXT HOUR
========================================================= */

function goNext() {

    currentHour++;


    if (
        currentHour >=
        people.length
    ) {

        currentHour = 0;

    }


    selectHour(currentHour);

}


/* =========================================================
   PREVIOUS HOUR
========================================================= */

function goPrevious() {

    currentHour--;


    if (currentHour < 0) {

        currentHour =
            people.length - 1;

    }


    selectHour(currentHour);

}


/* =========================================================
   BUTTON EVENTS
========================================================= */

nextHour.addEventListener(
    "click",
    goNext
);


previousHour.addEventListener(
    "click",
    goPrevious
);


/* =========================================================
   BEGIN BUTTON
========================================================= */

beginButton.addEventListener(
    "click",
    () => {

        clockExperience.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
);


/* =========================================================
   NAVIGATION — EXPLORE
========================================================= */

exploreButton.addEventListener(
    "click",
    () => {

        clockExperience.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
);


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key ===
            "ArrowRight"
        ) {

            goNext();

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            goPrevious();

        }


        if (
            event.key ===
            "Escape"
        ) {

            closeAbout();

        }

    }
);


/* =========================================================
   ABOUT MODAL
========================================================= */

aboutButton.addEventListener(
    "click",
    () => {

        aboutModal.classList.add(
            "active"
        );

    }
);


function closeAbout() {

    aboutModal.classList.remove(
        "active"
    );

}


closeModal.addEventListener(
    "click",
    closeAbout
);


aboutModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            aboutModal
        ) {

            closeAbout();

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

createClockHours();

createTimeline();

createPeopleCards();

selectHour(0);