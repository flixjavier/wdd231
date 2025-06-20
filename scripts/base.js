/* Courses Content */
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

//Hamburger menu

const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
	menu.classList.toggle('open');
	hamburger.classList.toggle('open');
});


// use the date object
const today = new Date();

const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false // 24-hour format
};

const formattedDate = new Intl.DateTimeFormat('en-US', options).format(today);

const year = document.querySelector("#current-year");

const lastModified = document.querySelector("#lastModified");

year.innerHTML = `<span class="highlight">&copy${today.getFullYear()} Felix Javier Flores Zamarripa | Mexico</span> <img
				src="images/mexico_flag.svg"
				alt="Mexico Flag"
				class="flag"
				width="50"
				height="auto"
				loading="lazy"
			/>`;

lastModified.innerHTML = `<span class="highlight">Last modification: ${formattedDate}</span>`; 

/* Courses Buttons */

const allCoursesButton = document.querySelector("#all");
allCoursesButton.addEventListener("click", () => {
    allCoursescardsTemplate(courses);
});

const cseCoursesButton = document.querySelector("#cse");
cseCoursesButton.addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    coursesCardsTemplate(cseCourses);
});

const wddCoursesButton = document.querySelector("#wdd");
wddCoursesButton.addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    coursesCardsTemplate(wddCourses);
});

function allCoursescardsTemplate(array) {
    const container = document.querySelector(".course-grid");
    container.innerHTML = ""; // Clear previous content

    array.forEach(course => {
        const btn = document.createElement("button");
        btn.innerHTML = `<span>${course.subject} ${course.number}</span>`;
        btn.className = "course-title-btn";
        // You can add an event listener here later if needed
        container.appendChild(btn);
        btn.addEventListener("click", () => {
            displayCourseDetails(course);
        });
    });

}

function coursesCardsTemplate(array) {
    document.querySelector(".course-grid").innerHTML = "";
    const cardsTemplate = document.querySelector(".course-grid"); 
    
    const credits = document.createElement("div");
    credits.className = "credits";
    credits.innerHTML = `
    <div>
        <p>The total number of credits is: ${array.reduce((total, course) => total + course.credits, 0)}</p>
    </div>`;
    cardsTemplate.appendChild(credits);

    array.forEach(course => {
        const cardTemplate = document.createElement("div");
        cardTemplate.className = "card-template";
        cardTemplate.innerHTML = `
        <div class="wrapper">
            <p>${course.subject} ${course.number}</p>
            <p>${course.title}</p>
            <p>
                ${course.completed ? "✅ Completed" : "❌ Not Completed"}
            </p>
        </div>`;
        cardsTemplate.appendChild(cardTemplate);
    });
};

function displayCourseDetails(course) {
    const courseDetails = document.querySelector("#course-details");
    courseDetails.innerHTML = ``;  
    courseDetails.innerHTML = `
    <button id="closeModal"">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits:</strong> ${course.credits}</p>
    <p><strong>Certificate:</strong> ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>`;
    courseDetails.showModal();
    const closeModal = document.querySelector("#closeModal");
    closeModal.addEventListener("click", () => {   
        courseDetails.close();
    }
    );
}
