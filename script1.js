document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#countryForm");
    const inputField = document.querySelector("#countryInput");
    const countriesList = document.querySelector("#countriesList");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const country = inputField.value.trim();

        if (country !== "") {
            if (countriesList.textContent === "") {
                countriesList.textContent = country;
            } else {
                countriesList.textContent += `, ${country}`;
            }

            inputField.value = "";
        }

        if (!countriesList.classList.contains("list")) {
            countriesList.classList.add("list");
        }
    });
});
