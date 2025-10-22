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
            "Este projeto é uma landing page sobre no jogo Clair Obscur: Expedition 33.\nCriei-a de forma descontraída, principalmente para praticar técnicas de desenvolvimento front-end, e também porque me apaixonei pelo visual e pela atmosfera do jogo.\n\nO projeto foi desenvolvido utilizando apenas HTML, CSS e JavaScript puros, sem o uso de frameworks, com foco em aprimorar minhas habilidades de estruturação, estilização e interação básica com o usuário.\n\nAlém de ser um exercício técnico, também foi uma forma de unir duas coisas que gosto muito: design de interfaces e jogos.",
        site: "",
        repo: "",
    },
    login: {
        title: "",
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