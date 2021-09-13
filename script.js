let text_crt_acc = document.querySelector(".text_crt_acc")
let text_placeholder = document.querySelector("#text_placeholder")
let number_crt_acc = document.querySelector(".number_crt_acc")
let num_placeholder = document.querySelector("#num_placeholder")
let crt_sub_btn = document.querySelector("#crt_sub_btn")

function plcholder() {
   
if (text_crt_acc.value !== null && text_crt_acc.value!=="") {
    text_placeholder.setAttribute("style","transform: translateY(-23px);")
} else {
    text_placeholder.setAttribute("style","transform: translateY(0px);")
}


if (number_crt_acc !== null && number_crt_acc.value!=="") {
    num_placeholder.setAttribute("style","transform: translateY(-23px);")
} else {
    num_placeholder.setAttribute("style","transform: translateY(0px);")
}

// For Active Button
if (text_crt_acc.value!=="" && number_crt_acc.value!=="") {
    crt_sub_btn.classList.add("btn_active")
} else{
    crt_sub_btn.classList.remove("btn_active")
}


}


text_crt_acc.addEventListener("input",() =>{
    plcholder()
})

number_crt_acc.addEventListener("input",() =>{
    plcholder()
})

let show_hide1 = document.querySelector(".show_hide1 i")
let show_hide2 = document.querySelector(".show_hide2 i")

function eye() {
   eyes = document.querySelectorAll(".eye")
   pin_inp1 = document.querySelector("#pin_inp1")
   pin_inp2 = document.querySelector("#pin_inp2")

    eyes.forEach(eyes => {
        if (eyes.classList.contains("fa-eye")) {
            pin_inp1.type = "password";
            pin_inp2.type = "password";

            eyes.classList.remove("fa-eye")
            eyes.classList.add("fa-eye-slash")
        } else {
            pin_inp1.type = "text";
            pin_inp2.type = "text";
            eyes.classList.remove("fa-eye-slash")
            eyes.classList.add("fa-eye")
        }
    });
}

show_hide1.addEventListener("click",()=>{
    eye()
})

show_hide2.addEventListener("click",()=>{
    eye()
})


let pin_inp = document.querySelector(".pin_inp")
let pin_placeholder = document.querySelector(".pin_placeholder")
let pin_inp_again = document.querySelector("#pin_inp2")
let pin_placeholder_again = document.querySelector(".pin_placeholder_again")
let pin_sub_btn = document.querySelector("#pin_sub_btn")

function pin_plcholder() {

    // For Active Button
    if (pin_inp.value == pin_inp_again.value) {
        pin_sub_btn.classList.add("btn_active")
    } else {
        pin_sub_btn.classList.remove("btn_active")
    }

    
    if (pin_inp.value !== null && pin_inp.value!=="") {
        pin_placeholder.setAttribute("style","transform: translateY(-23px);")
    } else {
        pin_placeholder.setAttribute("style","transform: translateY(0px);")
        pin_sub_btn.classList.remove("btn_active")
    }
    
    
    if (pin_inp_again !== null && pin_inp_again.value!=="") {
        pin_placeholder_again.setAttribute("style","transform: translateY(-23px);")
    } else {
        pin_placeholder_again.setAttribute("style","transform: translateY(0px);")
        pin_sub_btn.classList.remove("btn_active")
    }
    
}


pin_inp.addEventListener("input",() =>{
    pin_plcholder()
})

pin_inp_again.addEventListener("input",() =>{
    pin_plcholder()
})


let setpinSec = document.querySelector("section.set_pin")
let crtSec = document.querySelector("section.create_acc")
let homeSec = document.querySelector("section.home_sec")
let name_taker = document.querySelector("#data_name_taker")
let store_name = document.querySelector(".store_name")
let store_num = document.querySelector(".store_num")
let round_name = document.querySelector(".round_short_name")

crt_sub_btn.addEventListener("click",() =>{
    localStorage.setItem('acc_name', [text_crt_acc.value] )
    localStorage.setItem('acc_num', [number_crt_acc.value] )
    crtSec.setAttribute("style","display:none; padding: 0px;")
    setpinSec.setAttribute("style","right:0px")
    name_taker.innerHTML = localStorage.getItem("acc_name")
    store_name.innerHTML = localStorage.getItem("acc_name")
    store_num.innerHTML = `<span>+88</span> ${localStorage.getItem("acc_num")}`
    round_name.innerHTML = localStorage.getItem("acc_name").slice(0,1)
})


pin_sub_btn.addEventListener("click",()=>{
    localStorage.setItem('pin', pin_inp_again.value);
    setpinSec.setAttribute("style","transition: 0; display:none;")
    homeSec.setAttribute("style","right:0px;")
})


let tally_div = document.querySelector('.tally_foot')
let cash_div = document.querySelector('.cash_foot')
let inbx_div = document.querySelector('.inbx_foot')

tally_div.addEventListener("click",()=>{
    tally_div.classList.add("foot_actv")
    inbx_div.classList.remove("foot_actv")
    cash_div.classList.remove("foot_actv")
})

cash_div.addEventListener("click",()=>{
    tally_div.classList.remove("foot_actv")
    inbx_div.classList.remove("foot_actv")
    cash_div.classList.add("foot_actv")
})

inbx_div.addEventListener("click",()=>{
    cash_div.classList.remove("foot_actv")
    tally_div.classList.remove("foot_actv")
    inbx_div.classList.add("foot_actv")
})


window.addEventListener('load', ()=>{
    let preloader = document.querySelector('.preloader_wrapper')
    setTimeout(() => {
        preloader.style.display = "none";
        
        if (preloader.style.display = "none") {
            document.querySelector(".create_acc").setAttribute("style","display: block;")
        }
    }, 3000 );

    if (localStorage.getItem("acc_name") != undefined && localStorage.getItem("pin") != undefined) {
        name_taker.innerHTML = localStorage.getItem("acc_name")
        store_name.innerHTML = localStorage.getItem("acc_name")
        store_num.innerHTML = `<span>+88</span> ${localStorage.getItem("acc_num")}`
        round_name.innerHTML = localStorage.getItem("acc_name").slice(0,1)

        crtSec.setAttribute("style","display: none; padding: 0;")
        setpinSec.setAttribute("style","display: none; padding: 0;")
        homeSec.setAttribute("style","right:0px;")
    }

})

let ul = document.querySelector("#help_ul");

for (let index = 0; index < 8;index++) {
    ul.innerHTML += `
    <li>
    <div class="li_wrapper">
        <div class="li_head">
            <h6 class="left_txt">টালিখাতায় কি কি করা যায় ?</h6>
            <i class="fas fa-angle-right"></i>
        </div>

        <p class="invisible_p">
            অর্থহীন লেখা যার মাঝে আছে অনেক কিছু। হ্যাঁ, এই লেখার
            মাঝেই আছে অনেক কিছু। যদি তুমি মনে করো, এটা তোমার কাজে
            লাগবে, তাহলে তা লাগবে কাজে। নিজের ভাষায় লেখা দেখতে
            অভ্যস্ত হও। মনে রাখবে লেখা অর্থহীন হয়, যখন তুমি তাকে
            অর্থহীন মনে করো; আর লেখা অর্থবোধকতা তৈরি করে, যখন তুমি
            তাতে অর্থ ঢালো। যেকোনো লেখাই তোমার কাছে অর্থবোধকতা তৈরি
            করতে পারে, যদি তুমি সেখানে অর্থদ্যোতনা দেখতে পাও।
            …ছিদ্রান্বেষণ? না, তা হবে কেন?
          </p>
    </div>
</li>
    `  
}





    let li = document.querySelectorAll(".li_wrapper");
    let head_txt = document.querySelectorAll(".left_txt");
    let li_head = document.querySelectorAll(".li_head");
    let p_txt = document.querySelectorAll(".invisible_p");
    let p_active_icon = document.querySelectorAll(".li_wrapper i");
    
    li_head.forEach((element,i) => {
        element.addEventListener("click", ()=>{
            
            element.classList.toggle("clicked_head")
            p_txt[i].classList.toggle("clicked_p")
            p_active_icon[i].classList.toggle("p_active_icon")

        })
    });


    let head_help_wrapper = document.querySelector(".head_help_wrapper")
    let help_sec = document.querySelector(".help_support_sec")

    head_help_wrapper.addEventListener("click",()=>{
        help_sec.setAttribute("style"," right: 0px; visibility:visible; transform: translateX(0%); pointer-events: inherit; width: 100%;")
    })

    let back_supp = document.querySelector("#back_support")

    back_supp.addEventListener("click",()=>{
        help_sec.setAttribute("style","right: 80px; transform: translateX(100%); visibility: hidden; pointer-events: none; width: 0%;")
    })



    let head_bar = document.querySelector("#header_bar")
    let left_menu = document.querySelector(".left_menu")
    let overlay = document.querySelector(".overlay")
    
    head_bar.addEventListener("click", () => {
        left_menu.classList.toggle("left_back")
    })

    overlay.addEventListener("click", () => {
        left_menu.classList.toggle("left_back")
    })


    let log_out = document.querySelector("#log_out")

    log_out.addEventListener("click", () => {
        localStorage.clear()
        location.reload()
    })


    let customer = document.querySelector(".customer")
    let suplier = document.querySelector(".suplier")
    let cus_sup = document.querySelectorAll(".cus_sup_opt")

    customer.addEventListener("click", () =>{
        customer.classList.add("active")
        suplier.classList.remove("active")
    })

    suplier.addEventListener("click", () =>{
        suplier.classList.add("active")
        customer.classList.remove("active")
    })
