
// Código Javascript que adiciona cada letra dentro de uma tag <span>, adiciona a classe "fade-in-down-animation" nele e faz com que a animação ocorra
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const titleElement = document.querySelector(".content-title h1");
        const letters = titleElement.innerText.split("");
        
        titleElement.innerText = "";
				titleElement.style.opacity = "1";
        
        letters.forEach(function(letter, index) {
            const span = document.createElement("span");
            span.textContent = letter;
            span.classList.add("fade-in-down-animation");
            span.style.animationDelay = `${index * 0.1}s`;
            titleElement.appendChild(span);
        });
    }, 1000);
});

// Código Javascript que remove o "checked" do checkbox ao clicar em qualquer item da lista do menu mobile e fecha o Menu
function desmarcarCheckbox() {
    var checkbox = document.getElementById('toggle');
    checkbox.checked = false;
}

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.menu-mobile .menu-items a');
    links.forEach(function(link) {
        link.addEventListener('click', desmarcarCheckbox);
    });
});

// Código Javascript que deixa a ancoragem mais suave
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
