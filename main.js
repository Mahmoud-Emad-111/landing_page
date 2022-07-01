let landing = document.querySelector(".landing-page");
let imges = ["imges/4.jpg", "imges/5.png", "imges/3.jpg", "imges/2.jpg", "imges/1.jpg"];
let option_color = document.querySelectorAll(".setings-option ul li");
let btn = document.querySelector(".toogel_seting");
let nav_setings = document.querySelector(".setings");
let setings_option = document.querySelector(".setings-option");
let set = document.getElementById("set");
let span_btn = document.querySelectorAll(".setings-option span");
let skils_weight = document.querySelectorAll(".skils span");
let nav = document.querySelector(".header-area");
let link = document.querySelectorAll(".links a")
document.documentElement.style.setProperty("--main--color", localStorage.getItem("color"));
//for
for (let index = 0; index < span_btn.length; index++) {
    span_btn[index].classList.remove("Active_random");

}

//
for (let index = 0; index < option_color.length; index++) {
    option_color[index].classList.remove("Activ_e");

}


//
if (localStorage.getItem("Active_random") == 0) {
    setInterval(function() {
        let number_background = 0;

        number_background = Math.floor(Math.random() * imges.length);
        landing.style = `background-image: url(${imges[number_background]}); transition: 0.3s;`;

        document.bo
    }, 10000);

}
//
span_btn[localStorage.getItem("Active_random")].classList.add("Active_random");

btn.addEventListener("click", function() {

    if (!nav_setings.classList.contains("Active")) {
        nav_setings.classList.add("Active");
        nav_setings.style = "width: 200px;";
        setings_option.style = "display: block;";
        set.classList.toggle("fa-spin");
    } else {
        nav_setings.classList.remove("Active");
        nav_setings.style = "width: 0;"
        setings_option.style = "display: none;";
        set.classList.toggle("fa-spin");
    }

});

for (let index = 0; index < option_color.length; index++) {
    option_color[index].addEventListener("click", function() {
        for (let j = 0; j < option_color.length; j++) {
            option_color[j].classList.remove("Activ_e");
        }
        option_color[index].classList.add("Activ_e");
        localStorage.setItem("Activ_e", index);
        localStorage.setItem("color", option_color[index].getAttribute("data-color"));

        document.documentElement.style.setProperty("--main--color", localStorage.getItem("color"));
    })

}

// end_seting
function chane_background() {
    let number_background = 0;

    for (let index = 0; index < span_btn.length; index++) {
        span_btn[index].addEventListener("click", function() {
            for (let j = 0; j < span_btn.length; j++) {
                span_btn[j].classList.remove("Active_random");

            }
            this.classList.add("Active_random");
            localStorage.setItem("Active_random", index);
            if (span_btn[0].classList.contains("Active_random")) {
                let time_back = setInterval(function() {
                    number_background = Math.floor(Math.random() * imges.length);
                    landing.style = `background-image: url(${imges[number_background]}); transition: 0.3s;`;

                    document.bo
                }, 10000);

            } else {
                clearInterval(1);
            }
        })
    }



}
chane_background();
// start_seting
// start_skils
function skils() {

    if (window.scrollY >= 1000) {

        skils_weight.forEach(span => {
            span.style = `width:${span.getAttribute("data-weight")}; `
        });
    }
}

window.onscroll = function() {
    skils();
    if (window.scrollY >= 50) {
        link[1].classList.add("navcolor");
        link[2].classList.add("navcolor");
        link[3].classList.add("navcolor");
        link[4].classList.add("navcolor");
        link[5].classList.add("navcolor");
        for (let index = 1; index < link.length; index++) {
            if (link[index].classList.contains("navcolor")) {
                link[index].style = "color: black; font-weight: bold;";
                link[0].style = "font-weight: bold;"
            }

        }
        nav.classList.add("nav")
        nav.style = "position: fixed"
    } else {
        for (let index = 1; index < link.length; index++) {
            link[index].classList.remove("nav_color");
            link[index].style = "color:#fff;"
        }
        nav.classList.remove("nav");
        nav.style = "position: reltive";
    }

};

// end_skils

// start_gallry
let our_gallry = document.querySelectorAll(".gallry img")
our_gallry.forEach(image => {
    image.addEventListener("click", function() {

        let overlay = document.createElement("div");
        let popup_box = document.createElement("div");
        let popup_img = document.createElement("img");
        let popup_close = document.createElement("span")
        overlay.className = "overlay_popup";
        document.body.appendChild(overlay);
        popup_box.className = "popu_box";
        popup_img.src = image.src;
        popup_box.appendChild(popup_img);
        document.body.appendChild(popup_box)
        popup_close.innerHTML = "X";
        popup_box.prepend(popup_close)
        popup_close.addEventListener("click", function() {
            popup_box.remove()
            overlay.remove()
        })

    })
});
// end_gallry
// start_scroll_nav

// end_scroll_nav

// reset_local_storg
let btn_reset = document.querySelector(".reset");
btn_reset.onclick = function() {
        localStorage.removeItem("color");
        localStorage.removeItem("Activ_e");

        window.location.reload();
    }
    //s reset_local_storg
option_color[localStorage.getItem("Activ_e")].classList.add("Activ_e");