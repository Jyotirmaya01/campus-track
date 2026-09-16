
/* ================= DEMO STUDENT DATA ================= */

let students = [

    {
        roll: "CS-2026-001",
        name: "Aarav Sharma",
        department: "Computer Science",
        year: "3rd Year",
        phone: "9876543210",
        email: "aarav@college.edu",
        status: "Present"
    },

    {
        roll: "IT-2026-002",
        name: "Diya Patel",
        department: "Information Technology",
        year: "2nd Year",
        phone: "9823456710",
        email: "diya@college.edu",
        status: "Present"
    },

    {
        roll: "EC-2026-003",
        name: "Rohan Verma",
        department: "Electronics",
        year: "4th Year",
        phone: "9811122233",
        email: "rohan@college.edu",
        status: "Absent"
    },

    {
        roll: "ME-2026-004",
        name: "Ananya Singh",
        department: "Mechanical",
        year: "1st Year",
        phone: "9898989898",
        email: "ananya@college.edu",
        status: "Present"
    },

    {
        roll: "BA-2026-005",
        name: "Kabir Mehta",
        department: "Business Administration",
        year: "3rd Year",
        phone: "9765432109",
        email: "kabir@college.edu",
        status: "Leave"
    }

];


/* ================= DEMO TEACHERS ================= */

let teachers = [

    {
        name: "Dr. Neha Kapoor",
        department: "Computer Science",
        initials: "NK"
    },

    {
        name: "Prof. Rajiv Menon",
        department: "Electronics",
        initials: "RM"
    },

    {
        name: "Dr. Priya Iyer",
        department: "Business Administration",
        initials: "PI"
    },

    {
        name: "Prof. Amit Joshi",
        department: "Mechanical",
        initials: "AJ"
    },

    {
        name: "Ms. Sneha Rao",
        department: "Information Technology",
        initials: "SR"
    },

    {
        name: "Dr. Vikram Shah",
        department: "Computer Science",
        initials: "VS"
    }

];


/* ================= ACTIVITY ================= */

let activities = [

    "Aarav Sharma registered",

    "Dr. Neha Kapoor checked in",

    "Attendance updated for Computer Science",

    "Diya Patel's record was updated"

];


/* =====================================================
   LOGIN
   ===================================================== */

document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;

    /*
        This is NOT real authentication.

        We are simply accepting whatever the user enters.
    */

    document.getElementById("loginPage").classList.add("hidden");

    document.getElementById("dashboardPage").classList.remove("hidden");

    document.getElementById("loggedUser").innerText =
        email + " - Demo User";

    updateDashboard();

});


/* =====================================================
   PAGE NAVIGATION
   ===================================================== */

function showPage(pageName) {

    closeMoreMenu();

    let pages = document.querySelectorAll(".page");

    /*
        Hide every page
    */

    for (let i = 0; i < pages.length; i++) {

        pages[i].classList.remove("active");

    }


    /*
        Show selected page
    */

    document.getElementById(pageName).classList.add("active");


    /*
        Update sidebar button
    */

    let buttons = document.querySelectorAll(".menu-button");

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].classList.remove("active");

    }


    /*
        Find the button that opened this page
    */

    for (let i = 0; i < buttons.length; i++) {

        if (buttons[i].getAttribute("onclick") ===
            "showPage('" + pageName + "')") {

            buttons[i].classList.add("active");

        }

    }


    /*
        Refresh data
    */

    updateDashboard();

}


/* ================= MORE MENU ================= */

function toggleMoreMenu(event) {

    event.stopPropagation();

    let menu = document.getElementById("moreMenu");
    let button = document.getElementById("moreMenuButton");
    let isOpen = !menu.classList.contains("hidden");

    menu.classList.toggle("hidden", isOpen);
    button.setAttribute("aria-expanded", String(!isOpen));

}


function closeMoreMenu() {

    let menu = document.getElementById("moreMenu");
    let button = document.getElementById("moreMenuButton");

    if (!menu || !button) {
        return;
    }

    menu.classList.add("hidden");
    button.setAttribute("aria-expanded", "false");

}


document.addEventListener("click", function() {

    closeMoreMenu();

});


/* =====================================================
   DASHBOARD
   ===================================================== */

function updateDashboard() {

    document.getElementById("totalStudents").innerText =
        students.length;


    let present = 0;

    for (let i = 0; i < students.length; i++) {

        if (students[i].status === "Present") {

            present++;

        }

    }

    document.getElementById("presentStudents").innerText =
        present;


    /*
        Count unique departments
    */

    let departments = [];

    for (let i = 0; i < students.length; i++) {

        if (!departments.includes(students[i].department)) {

            departments.push(students[i].department);

        }

    }

    document.getElementById("totalDepartments").innerText =
        departments.length;


    displayRecentStudents();

    displayActivities();

    displayStudents();

    displayAttendance();

    displayTeachers();

}


/* =====================================================
   RECENT STUDENTS
   ===================================================== */

function displayRecentStudents() {

    let container =
        document.getElementById("recentStudents");

    container.innerHTML = "";


    /*
        Show last five students
    */

    let start = students.length - 5;

    if (start < 0) {

        start = 0;

    }


    for (let i = students.length - 1; i >= start; i--) {

        let student = students[i];

        let div = document.createElement("div");

        div.className = "activity";

        div.innerHTML =

            '<div class="avatar">' +
            student.name.substring(0, 2).toUpperCase() +
            '</div>' +

            '<div>' +

            '<p><b>' +
            student.name +
            '</b></p>' +

            '<small>' +
            student.roll +
            ' · ' +
            student.department +
            '</small>' +

            '</div>';


        container.appendChild(div);

    }

}


/* =====================================================
   ACTIVITY
   ===================================================== */

function displayActivities() {

    let container =
        document.getElementById("recentActivity");

    container.innerHTML = "";


    for (let i = 0; i < activities.length && i < 5; i++) {

        let div = document.createElement("div");

        div.className = "activity";

        div.innerHTML =

            '<div class="avatar">✓</div>' +

            '<div>' +

            '<p>' +
            activities[i] +
            '</p>' +

            '<small>Just now</small>' +

            '</div>';


        container.appendChild(div);

    }

}


/* =====================================================
   STUDENT TABLE
   ===================================================== */

function displayStudents() {

    let table =
        document.getElementById("studentTable");

    table.innerHTML = "";


    for (let i = 0; i < students.length; i++) {

        let student = students[i];

        let row = document.createElement("tr");


        row.innerHTML =

            '<td>' +
            student.roll +
            '</td>' +

            '<td><b>' +
            student.name +
            '</b></td>' +

            '<td>' +
            student.department +
            '</td>' +

            '<td>' +
            student.year +
            '</td>' +

            '<td>' +
            student.phone +
            '</td>' +

            '<td>' +

            '<span class="badge ' +
            getStatusClass(student.status) +
            '">' +

            student.status +

            '</span>' +

            '</td>' +

            '<td>' +

            '<button class="secondary-button" ' +
            'onclick="deleteStudent(' + i + ')">' +

            'Remove' +

            '</button>' +

            '</td>';


        table.appendChild(row);

    }

}


/* =====================================================
   STATUS CLASS
   ===================================================== */

function getStatusClass(status) {

    if (status === "Present") {

        return "present";

    }

    if (status === "Absent") {

        return "absent";

    }

    return "leave";

}


/* =====================================================
   SEARCH STUDENTS
   ===================================================== */

function searchStudents() {

    let search =
        document.getElementById("studentSearch")
        .value
        .toLowerCase();


    let rows =
        document.getElementById("studentTable")
        .getElementsByTagName("tr");


    for (let i = 0; i < rows.length; i++) {

        let text =
            rows[i].innerText.toLowerCase();


        if (text.includes(search)) {

            rows[i].style.display = "";

        } else {

            rows[i].style.display = "none";

        }

    }

}


/* =====================================================
   ADD STUDENT MODAL
   ===================================================== */

function openStudentForm() {

    document
        .getElementById("studentModal")
        .classList.add("show");

}


function closeStudentForm() {

    document
        .getElementById("studentModal")
        .classList.remove("show");

}


/* =====================================================
   ADD STUDENT
   ===================================================== */

document
    .getElementById("studentForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        /*
            Read values from form
        */

        let roll =
            document.getElementById("roll").value;

        let name =
            document.getElementById("name").value;

        let department =
            document.getElementById("department").value;

        let year =
            document.getElementById("year").value;

        let phone =
            document.getElementById("phone").value;

        let email =
            document.getElementById("studentEmail").value;


        /*
            Create student object
        */

        let newStudent = {

            roll: roll,

            name: name,

            department: department,

            year: year,

            phone: phone,

            email: email,

            status: "Present"

        };


        /*
            Add student to array
        */

        students.push(newStudent);


        /*
            Add activity
        */

        activities.unshift(
            name + " was added to the student register"
        );


        /*
            Update website
        */

        updateDashboard();


        /*
            Close popup
        */

        closeStudentForm();


        /*
            Clear form
        */

        document
            .getElementById("studentForm")
            .reset();


        alert("Student added successfully!");

    });


/* =====================================================
   DELETE STUDENT
   ===================================================== */

function deleteStudent(index) {

    let studentName =
        students[index].name;


    let confirmation =
        confirm(
            "Do you want to remove " +
            studentName +
            "?"
        );


    if (confirmation === true) {

        students.splice(index, 1);


        activities.unshift(
            studentName + " was removed"
        );


        updateDashboard();

    }

}


/* =====================================================
   ATTENDANCE TABLE
   ===================================================== */

function displayAttendance() {

    let table =
        document.getElementById("attendanceTable");

    let summary =
        document.getElementById("attendanceSummary");

    table.innerHTML = "";

    let present = students.filter(function(student) {
        return student.status === "Present";
    }).length;

    let absent = students.filter(function(student) {
        return student.status === "Absent";
    }).length;

    let leave = students.filter(function(student) {
        return student.status === "Leave";
    }).length;

    summary.innerHTML =
        '<div class="attendance-count present-count"><strong>' +
        present + '</strong><span>Present</span></div>' +
        '<div class="attendance-count absent-count"><strong>' +
        absent + '</strong><span>Absent</span></div>' +
        '<div class="attendance-count leave-count"><strong>' +
        leave + '</strong><span>On Leave</span></div>';


    for (let i = 0; i < students.length; i++) {

        let student = students[i];

        let row = document.createElement("tr");


        row.innerHTML =

            '<td>' +
            student.roll +
            '</td>' +

            '<td>' +
            student.name +
            '</td>' +

            '<td>' +
            student.department +
            '</td>' +

            '<td>' +

            '<div class="attendance-actions">' +
            '<button class="attendance-button present-button ' +
            (student.status === "Present" ? "selected" : "") +
            '" onclick="changeAttendance(' + i + ', \'Present\')">' +
            'Present</button>' +
            '<button class="attendance-button absent-button ' +
            (student.status === "Absent" ? "selected" : "") +
            '" onclick="changeAttendance(' + i + ', \'Absent\')">' +
            'Absent</button>' +
            '<button class="attendance-button leave-button ' +
            (student.status === "Leave" ? "selected" : "") +
            '" onclick="changeAttendance(' + i + ', \'Leave\')">' +
            'Leave</button>' +
            '</div>' +

            '</td>';


        table.appendChild(row);

    }

}


/* =====================================================
   CHANGE ATTENDANCE
   ===================================================== */

function changeAttendance(index, status) {

    students[index].status = status;


    activities.unshift(
        "Attendance updated for " +
        students[index].name
    );


    updateDashboard();

}


/* =====================================================
   MARK EVERYONE PRESENT
   ===================================================== */

function markAllPresent() {

    for (let i = 0; i < students.length; i++) {

        students[i].status = "Present";

    }


    activities.unshift(
        "All students marked present"
    );


    updateDashboard();


    alert("All students marked present!");

}


/* =====================================================
   TEACHERS
   ===================================================== */

function displayTeachers() {

    let container =
        document.getElementById("teacherList");

    container.innerHTML = "";


    for (let i = 0; i < teachers.length; i++) {

        let teacher = teachers[i];


        let card =
            document.createElement("div");


        card.className =
            "teacher-card";


        card.innerHTML =

            '<div class="avatar">' +
            teacher.initials +
            '</div>' +

            '<h3>' +
            teacher.name +
            '</h3>' +

            '<p>' +
            teacher.department +
            '</p>' +

            '<button class="primary-button" ' +
            'onclick="teacherCheckIn(\'' +
            teacher.name +
            '\')">' +

            'Check In' +

            '</button>';


        container.appendChild(card);

    }

}


/* =====================================================
   TEACHER CHECK-IN
   ===================================================== */

function teacherCheckIn(name) {

    activities.unshift(
        name + " checked in"
    );


    /*
        In a real system this could come from:

        RFID
        QR code
        biometric
        GPS
        college ID card

        For this mini project we simply simulate it.
    */


    updateDashboard();


    alert(
        name +
        " has been checked in successfully!"
    );

}


/* =====================================================
   LOGOUT
   ===================================================== */

function logout() {

    let confirmation =
        confirm(
            "Do you want to logout?"
        );


    if (confirmation === true) {

        document
            .getElementById("dashboardPage")
            .classList.add("hidden");


        document
            .getElementById("loginPage")
            .classList.remove("hidden");


        document
            .getElementById("loginForm")
            .reset();

    }

}


/* =====================================================
   START WEBSITE
   ===================================================== */

updateDashboard();