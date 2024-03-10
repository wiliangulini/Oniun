let socios = document.getElementById("socios");
let skills = document.getElementById("skills");
let skills1 = document.getElementById("skills1");

let ricardo = document.getElementById("ricardo");
let skillRicardo = 'Bacharel em Ciências Contábeis';
let skill1Ricardo = 'Pós Graduado em Gestão Contábil e Financeira; Pós Graduado em Marketing e Vendas; Professor Universitário; Perito Contábil.';

let giquieu = document.getElementById("giquieu");
let skillGiquieu = 'Bacharel em Sistemas de Informação';
let skill1Giquieu = 'Pós Graduado em Engenharia de Software, com mais de 15 anos de experiência no desenvolvimento de produtos tecnológicos e palestrante.';

let michely = document.getElementById("michely");
let skillMichely = 'Bacharel em Ciências Contábeis';
let skill1Michely = 'Bacharel em Administração de Empresas; Pós Graduada em Planejamento Tributário, Financeiro, Perícia e Auditoria Contábil.';

let eder = document.getElementById("eder");
let skillEder = 'Bacharel em Administração de Empresas';
let skill1Eder = 'Bacharel em Ciências Contábeis; Pós Graduado em Gestão de Pessoas; Perito Contábil.';


let carouselLoop = setInterval(() => {
  if (ricardo.classList.contains('active')) {
    socios.innerHTML = 'Ricardo Vignaga';
    skills.innerHTML = skillRicardo;
    skills1.innerHTML = skill1Ricardo;
  } else if (giquieu.classList.contains('active')) {
    socios.innerHTML = 'Giquieu Duarte Pereira';
    skills.innerHTML = skillGiquieu;
    skills1.innerHTML = skill1Giquieu;
  } else if (michely.classList.contains('active')) {
    socios.innerHTML = 'Michely Gnoato';
    skills.innerHTML = skillMichely;
    skills1.innerHTML = skill1Michely;
  } else if (eder.classList.contains('active')) {
    socios.innerHTML = 'Eder Ortolan';
    skills.innerHTML = skillEder;
    skills1.innerHTML = skill1Eder;
  }
}, 100);