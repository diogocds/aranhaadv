function abrirWhatsapp() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg").value;
  const url = " https://wa.me/558494973584?text="
    + "*Olá Drº Robson Aranha, Segue meus dados e minha solicitação de atendimento.*" + "%0a"
    + "%0a"
    + "*Nome*: " + nome + "%0a"
    + "*E-mail*: " + email + "%0a"
    + "*Mensagem*: " + msg;
  window.open(url, '_blank').focus();
}

let count = 0;
const targetCount = 5000;
let hasStarted = false;

const animateCounter = () => {
  const interval = setInterval(() => {
    if (count < targetCount) {
      count += 250;
      if (count > targetCount) {
        count = targetCount;
      }
      document.getElementById('counter').innerText = `+ ${count} Clientes Atendidos.`;
    } else {
      clearInterval(interval);
    }
  }, 100);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasStarted) {
      hasStarted = true;
      animateCounter();
    }
  });
});
const counterElement = document.getElementById('counter');
observer.observe(counterElement);

let countyears = 0;
const targetCounts = 5;
const animateCounterYears = () => {
  const interval = setInterval(() => {
    if (countyears < targetCounts) {
      countyears++;
      document.getElementById('counter-year').innerText = `+ ${countyears} Anos de Atuação.`;
    } else {
      clearInterval(interval);
    }
  }, 500);
};

animateCounterYears();
