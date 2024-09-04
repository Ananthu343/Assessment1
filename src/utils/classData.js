const classData = [
    {
        name:"Graphic Designing",
        status:"book",
        date: "2024-09-04T22:59:59",
        instructor_name:"Surya R",
        instructor_img:"data:image/jpeg;base64,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",
        details:null,
    },
    {
        name:"UI/UX Designing",
        status:"join",
        date: "",
        instructor_name:"Priya sweety",
        instructor_img:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        details:null,
    },
    {
        name:"Design Hierarchy",
        status:"book",
        date: getDateExtended(),
        instructor_name:"Leslie Alexander",
        instructor_img:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        details:null,
    },
    {
        name:"Basics of Frontend",
        status:"scheduled",
        date: "2024-09-07T21:59:59",
        instructor_name:"Courtney Henry",
        instructor_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJrXSXb_jayac8vtbpTX_FYximkklGxSWZgA&s",
        details:null,
    },
    {
        name:"Graphic Designing",
        status:"disable",
        date: "2024-09-04T21:59:59",
        instructor_name:"Jerome Bell",
        instructor_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggauC9GzZ20cDt94Nzm2-z-qvmi9Jrh1JK-6n1HG-derBaewvGMJTsHMcw8ndDX7Fjqc&usqp=CAU",
        details:null,
    },
    {
        name:"Graphic Designing",
        status:"book",
        date: "2024-10-04T15:59:59",
        instructor_name:"Wade Warren",
        instructor_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsAz7vVGbb-Ai93NrFN9oZVTyPJMTn6GkA95fnOZhYpbXGUiHikUDzktE2e8b2vtSFAg&usqp=CAU",
        details:null,
    },
    {
        name:"Graphic Designing",
        status:"book",
        date: "2024-10-04T15:59:59",
        instructor_name:"Robert Fox",
        instructor_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQciAJtXhbGx1-Pq7Jt4U511yKcFr9dte272WAgwWuEVp1wq6ABSWMkstohhIDAYu4ot4k&usqp=CAU",
        details:null,
    },
]

function getDateExtended() {
    const currentDate = new Date();
    const newDate = new Date(currentDate.getTime() + 6 * 60 * 60 * 1000); // Add 6 hours
    return newDate;
}

export default classData