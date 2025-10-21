const items = document.querySelectorAll(".sidebar li");
const title = document.getElementById("project-title");
const tec = document.getElementById("project-tec");
const image = document.getElementById("project-img");
const description = document.getElementById("project-description");
const siteLink = document.getElementById("site-link");
const repoLink = document.getElementById("repo-link");
const container = document.querySelector(".project-container");

const projects = {
    clair: {
        title: "Landing Page Clair Obscur: Expedition 33",
        tec: "HTML | CSS | JavaScript",
        image: "./src/assets/images/ProjectClair.png",
        description:
            "Uma pequena descricao do projeto clair",
        site: "",
        repo: "",
    },
    login: {
        title: "teste1",
        tec: "",
        image: "",
        description: "",
        site: "",
        repo: "",
    },
};

items.forEach((item) => {
    item.addEventListener("click", () => {
        items.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");

        const projectKey = item.getAttribute("data-project");
        const project = projects[projectKey];
        if (!project) return;

        container.classList.add("change");

        setTimeout(() => {
            title.textContent = project.title;
            tec.textContent = project.tec;
            image.src = project.image;
            description.textContent = project.description;
            siteLink.href = project.site;
            repoLink.href = project.repo;

            container.classList.remove("change");
        }, 100);
    });
});