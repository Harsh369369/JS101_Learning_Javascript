// Student information
const student = {
    name: "Krishna",
    school: "ABC School",
    grade: "10",
    section: "A",
    rollno: "9",
    marks: {
        subject1: 85,
        subject2: 90,
        subject3: 88
    }
};

// Function to print report card
function printReportCard(student) {
    console.log("========================================");
    console.log("          REPORT CARD                   ");
    console.log("========================================");
    console.log("Name:             " + student.name);
    console.log("School:           " + student.school);
    console.log("Grade:            " + student.grade);
    console.log("Section:          " + student.section);
    console.log("Roll No:          " + student.rollno);
    console.log("----------------------------------------");
    console.log("Subject        Marks");
    console.log("----------------------------------------");
    for (const subject in student.marks) {
        console.log(subject + "            " + student.marks[subject]);
    }
    console.log("----------------------------------------");
}

// Print report card
printReportCard(student);