// ----------------------------------------
// Temple Data
// ----------------------------------------
const temples = [
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: "1893-04-06",
        area: 253015,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-1086-main.jpg"
    },
    {
        templeName: "Nauvoo Temple",
        location: "Nauvoo, Illinois",
        dedicated: "1846-05-01",
        area: 54000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-temple/nauvoo-temple-3060.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019-03-10",
        area: 41000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3548.jpg"
    },

    // Extra Temples
    {
        templeName: "Panama City Panama Temple",
        location: "Panama City, Panama",
        dedicated: "2008-08-10",
        area: 32000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/panama-city-panama-temple/panama-city-panama-temple-4880.jpg"
    },
    {
        templeName: "Paris France Temple",
        location: "Paris, France",
        dedicated: "2017-05-21",
        area: 44175,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-thumb.jpg"
    },
    {
        templeName: "Lima Peru Los Olivos Temple",
        location: "Lima, Peru",
        dedicated: "2024-01-14",
        area: 9600,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-los-olivos-temple/lima-peru-los-olivos-temple-42502-thumb.jpg"
    },
    {
        templeName: "Coban Guatemala Temple",
        location: "Coban, Guatemala",
        dedicated: "2024-06-09",
        area: 8772,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-47546-thumb.jpg"
    },
    {
        templeName: "Wichita Kansas Temple",
        location: "Kansas, USA",
        dedicated: "2024-09-07",
        area: 9950,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/wichita-kansas-temple/wichita-kansas-temple-64947-thumb.jpg"
    },
    {
        templeName: "Cleveland Ohio Temple",
        location: "Ohio, USA",
        dedicated: "2024-06-01",
        area: 9950,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cleveland-ohio-temple/cleveland-ohio-temple-65075-thumb.jpg"
    },
    {
        templeName: "Cody Wyoming Temple",
        location: "Wyoming, USA",
        dedicated: "2024-09-27",
        area: 9950,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cody-wyoming-temple/cody-wyoming-temple-65957-thumb.jpg"
    },
    {
        templeName: "Cali Colombia Temple",
        location: "Cali, Colombia",
        dedicated: "2025-03-01",
        area: 9500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cali-colombia-temple/cali-colombia-temple-22101-thumb.jpg"
    },
    {
        templeName: "Cape Town South Africa Temple",
        location: "Cape Town, South Africa",
        dedicated: "2025-10-25",
        area: 9500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cape-town-south-africa-temple/cape-town-south-africa-temple-64609-thumb.jpg"
    }
];


// ----------------------------------------
// Render Function
// ----------------------------------------
function renderTemples(list) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    list.forEach(temple => {
        const card = document.createElement("figure");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";

        const caption = document.createElement("figcaption");
        caption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

        card.appendChild(img);
        card.appendChild(caption);
        gallery.appendChild(card);
    });
}

// First render
renderTemples(temples);


// ----------------------------------------
// Filtering System
// ----------------------------------------
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        const filter = link.dataset.filter;
        document.getElementById("page-title").textContent = link.textContent;

        let filtered = temples;

        if (filter === "old") filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
        if (filter === "new") filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
        if (filter === "large") filtered = temples.filter(t => t.area > 90000);
        if (filter === "small") filtered = temples.filter(t => t.area < 10000);

        renderTemples(filtered);
    });
});


// ----------------------------------------
// Footer Dates
// ----------------------------------------
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;


// ----------------------------------------
// Hamburger Menu
// ----------------------------------------
document.getElementById("hamburger").addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("open");
});
