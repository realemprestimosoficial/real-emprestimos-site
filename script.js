// ==========================
// REAL EMPRÉSTIMOS
// script.js
// ==========================

document.addEventListener("DOMContentLoaded", function () {
    console.log("Site da Real Empréstimos carregado com sucesso!");

    const botoes = document.querySelectorAll(".botao");

    botoes.forEach(function(botao){
        botao.addEventListener("mouseenter", function(){
            botao.style.transform = "scale(1.05)";
        });

        botao.addEventListener("mouseleave", function(){
            botao.style.transform = "scale(1)";
        });
    });
});
// ===== BOTÃO WHATSAPP =====

console.log("WhatsApp carregado com sucesso.");
