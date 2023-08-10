const fruta = {
   nome: "uva",
   cor: "roxa",
   peso: "100g",
   tipo: "fruta"
};

console.log(fruta);


const Feira= [
   {
        nome: "uva",
        cor: "roxa",
        peso: "100g",
        tipo: "fruta"
   },
   {
       nome: "Banana",
       cor: "Amarela",
       peso: "120g",
       tipo: "fruta"
   }, {
       nome: "alface",
       cor: "Verde",
       peso: "70g",
       tipo: "Verduras"
   }, {
       nome: "brócolis ",
       cor: "Verde",
       peso: "80g",
       tipo: "legumes" 
   }, {
       nome: "Abóbora ",
       cor: "Laranja",
       peso: "200g",
       tipo: "legumes" 
   },
];
console.log(Feira);

function exibirNomesDasFrutas() {
   Feira.forEach(fruta => {
       console.log(fruta.nome);
   });
}

function contarQuantidadePorTipo() {
   let contadorFrutas = 0;
   let contadorVerduras = 0;
   let contadorLegumes = 0;

   Feira.forEach(alimento => {
       if (alimento.tipo === "fruta") {
           contadorFrutas++;
       } else if (alimento.tipo === "Verduras") {
           contadorVerduras++;
       } else if (alimento.tipo === "legumes") {
           contadorLegumes++;
       }
   });

   console.log("Quantidade de frutas:", contadorFrutas);
   console.log("Quantidade de verduras:", contadorVerduras);
   console.log("Quantidade de legumes:", contadorLegumes);
}

exibirNomesDasFrutas();
contarQuantidadePorTipo();