const classData = [
    {
        name:"Graphic Designing",
        status:"book",
        date: "2024-09-04T22:59:59",
        instructor_name:"Surya R",
        instructor_img:"",
        details:"",
    },
    {
        name:"UI/UX Designing",
        status:"join",
        date: "",
        instructor_name:"Surya R",
        instructor_img:"",
        details:"",
    },
    {
        name:"Design Hierarchy",
        status:"book",
        date: getDateExtended(),
        instructor_name:"Surya R",
        instructor_img:"",
        details:"",
    },
    {
        name:"Basics of Frontend",
        status:"scheduled",
        date: "2024-09-07T21:59:59",
        instructor_name:"Surya R",
        instructor_img:"",
        details:"",
    },
    {
        name:"Graphic Designing",
        status:"disable",
        date: "2024-09-04T21:59:59",
        instructor_name:"Surya R",
        instructor_img:"",
        details:"",
    },
    {
        name:"Graphic Designing",
        status:"book",
        date: "2024-10-04T15:59:59",
        instructor_name:"Surya R",
        instructor_img:"",
        details:"",
    }
]

function getDateExtended() {
    const currentDate = new Date();
    const newDate = new Date(currentDate.getTime() + 6 * 60 * 60 * 1000); // Add 6 hours
    return newDate;
}

export default classData