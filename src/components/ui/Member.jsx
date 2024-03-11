const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
            "https://i.imgur.com/mG9ovNis.jpg",
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
            "https://i.imgur.com/CYlO6Wms.jpg",
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
            "https://i.imgur.com/YJPSLNds.jpg",
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
            "https://i.imgur.com/cOxc85B.jpg",
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
            "https://i.imgur.com/A21CCRGs.jpg",
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image:
            "https://i.imgur.com/QWtrkvFs.jpg",
    },
];

const Member = () => {
    return (<div className="flex" >
        {people && people.map(i => {
            return <img key={i.id} className="w-8 h-8 object-cover rounded-full border border-gray-100" title={`${i.name} (${i.designation})`} src={i.image} alt={i.name} />
        })}
    </div>);
}

export default Member;