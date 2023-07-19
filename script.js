
const wrapper = document.querySelector(".wrapper");
const btn = document.querySelector(".form button");
const qrInput = document.querySelector(".form input");
const qrImg = document.querySelector(".qrcode img");

const qr = () => {
    const qrVal = qrInput.value;
    if( !qrVal){
        // input is empty , do nothing
        return;
    }

    btn.innerHTML = `Generating QR Code...`;

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrVal}`;

    qrImg.addEventListener('load', () =>{
        wrapper.classList.add("active");
        btn.innerHTML = `Generate QR Code`;
    });
}


btn.addEventListener("click", qr);

qrInput.addEventListener("keyup" , (event) =>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
    if(event.key === "Enter"){
        qr();
    }
})
