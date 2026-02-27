console.log("Hello from JS");

const welcomeMessage = () => {
    console.log("GitHub Assignment 2: JavaScript loaded successfully!");
};

const initHeadingAlert = () => {
    const heading = document.querySelector('h1');
    if (heading) {
        heading.addEventListener('click', () => {
            alert("You clicked the header! JavaScript is working.");
        });
    }
};

// Run functions
welcomeMessage();
initHeadingAlert();