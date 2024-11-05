$(document).ready(() => {
    $("#change-section").on("click", () => {
        $(".form-section").each((i, el) => {
            $(el).toggleClass("hidden");
            $("#change-section").html(
                i && !$(el).hasClass("hidden") ? "Anterior" : "Próximo"
            );
            $("#send").toggleClass("hidden", i && $(el).hasClass("hidden"));
        });
    });

    $("#content").on("submit", (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);

        for (const [key, value] of formData) {
            if (key != "escola" && key != "etapa-escolar" && !value) {
                alert(`O campo de ${key} não foi prenchido.`);
                return;
            }
        }

        window.location.href = "../Login/Login.html";
    });
});
