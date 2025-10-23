const items = document.querySelectorAll(".sidebar li");
const title = document.getElementById("skills-title");
const stack = document.getElementById("skills-tec");
const description = document.getElementById("skills-description");
const container = document.querySelector(".skills-container");

const skills = {
    puro: {
        title: "HTML | CSS | JavaScript:",
        stack: "front-end",
        description: "São as três bases que me permitem dar vida a qualquer ideia, o HTML constrói a estrutura, o CSS traz estilo e identidade visual, e o JavaScript é o responsável por transformar tudo isso em algo dinâmico e interativo.\n\nNormalmente gosto de criar projetos utilizando código puro, porque isso me ajuda a entender cada detalhe do comportamento da aplicação e aprimorar minha lógica de desenvolvimento.",
    },
    react: {
        title: "React:",
        stack: "front-end",
        description: "Hoje, o React é o framework com o qual estou mais familiarizado e que mais utilizo. Ele me permite trabalhar de forma modular, reutilizando componentes e mantendo o código limpo e organizado.\n\nAlém disso, gosto da maneira como o React facilita a criação de interfaces modernas, rápidas e fluidas.",
    },
    types: {
        title: "TypeScript:",
        stack: "front-end",
        description: "Em alguns projetos, opto por usar TypeScript em vez do JavaScript.\n\nEle traz mais segurança e clareza ao código, principalmente em aplicações maiores, além de ajudar a evitar erros e deixar o desenvolvimento mais previsível e estruturado.",
    },
    next: {
        title: "Next.js:",
        stack: "front-end",
        description: "Atualmente, tenho me dedicado bastante ao estudo do Next.js, o framework que considero uma evolução natural do React.\n\nCom ele, consigo entregar aplicações com ótimo desempenho, renderização otimizada, SEO eficiente e uma experiência fluida tanto para o usuário quanto para o desenvolvedor.",
    },
    tailwind: {
        title: "Tailwind CSS:",
        stack: "front-end",
        description: "Há pouco tempo comecei a utilizar o Tailwind CSS, e ele vem se tornando uma parte importante dos meus novos projetos.\n\nGosto da forma como o framework simplifica o processo de estilização, permitindo criar interfaces modernas e responsivas com muito mais agilidade.",
    }
};

items.forEach((item) => {
    item.addEventListener("click", () => {
        items.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");

        const skillKey = item.getAttribute("data-skill");
        const skill = skills[skillKey];
        if (!skill) return;

        container.classList.add("change");

        setTimeout(() => {
            title.textContent = skill.title;
            stack.textContent = skill.stack;
            description.textContent = skill.description;

            container.classList.remove("change");
        }, 100);
    });
});