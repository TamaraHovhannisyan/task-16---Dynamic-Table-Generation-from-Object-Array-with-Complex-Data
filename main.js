

    const tbody = document.getElementById("body");

    const employees = [
        {
            id: 1,
            name: "John Doe",
            age: 30,
            department: "Engineering",
            role: { title: "Frontend Developer", level: "Mid" },
            contact: { email: "john.doe@example.com", phone: "123-456-7890" },
            skills: ["JavaScript", "React", "CSS"]
        },
        {
            id: 2,
            name: "Jane Smith",
            age: 28,
            department: "Design",
            role: { title: "UI/UX Designer", level: "Senior" },
            contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
            skills: ["Figma", "Sketch", "Adobe XD"]
        }
        // Additional employee objects...
        
        
    ];

    employees.forEach(obj => {
        const row = document.createElement("tr");
        const { id, name, age, department, role: { title, level }, contact: { email, phone }, skills } = obj;

        row.innerHTML = 
            `<td>${id}</td>
            <td>${name}</td>
            <td>${age}</td>
            <td>${department}</td>
            <td>${title}</td>
            <td>${level}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${skills.join(", ")}</td>`;

       tbody.appendChild(row);
    });



