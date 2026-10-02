const menu = document.querySelector(".menu");
const navigation = document.querySelector("nav");

function closeMenu() {
  navigation.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", "Abrir menu");
}

menu.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");

  menu.setAttribute("aria-expanded", String(open));

  menu.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

/* SEÇÃO INTERATIVA */

const topics = {
  individual: {
    title: "Um espaço para a sua história.",

    description:
      "Converse sobre a escuta psicanalítica, esclareça suas dúvidas e consulte os formatos de atendimento.",

    message:
      "Olá, Roberta! Conheci seu site e gostaria de saber mais sobre o atendimento individual.",
  },

  familia: {
    title: "Sua família também merece acolhimento.",

    description:
      "Conheça o Projeto Família e converse sobre o apoio a familiares de pessoas com dependência química.",

    message:
      "Olá, Roberta! Conheci seu site e gostaria de saber mais sobre o Projeto Família.",
  },

  acolhimento: {
    title: "Uma conversa no seu tempo.",

    description:
      "Você pode começar perguntando sobre a proposta de acolhimento, sem precisar compartilhar detalhes pessoais nesta página.",

    message:
      "Olá, Roberta! Conheci seu site e gostaria de conversar sobre a proposta de acolhimento.",
  },

  palestra: {
    title: "Um encontro que abre espaço para o diálogo.",

    description:
      "Converse sobre o tema, o público, a data e os formatos possíveis para a sua palestra ou encontro.",

    message:
      "Olá, Roberta! Conheci seu site e gostaria de consultar a possibilidade de uma palestra.",
  },
};

function updateTopic(value) {
  const topic = topics[value];

  if (!topic) return;

  document.getElementById("topic-title").textContent = topic.title;

  document.getElementById("topic-description").textContent = topic.description;

  document.getElementById("topic-message").textContent = topic.message;

  document.getElementById("topic-link").href =
    "https://wa.me/5519999491974?text=" + encodeURIComponent(topic.message);
}

document.querySelectorAll('input[name="topic"]').forEach((input) => {
  input.addEventListener("change", () => {
    updateTopic(input.value);
  });
});

const selectedTopic = document.querySelector('input[name="topic"]:checked');

if (selectedTopic) {
  updateTopic(selectedTopic.value);
}
