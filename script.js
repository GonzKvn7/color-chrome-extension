const colorPickerBtn = document.querySelector("#color-picker");

class EyeDropper {
    async open() {

    }
}

const activateEyeDropper = async () => {
    try {
        const eyeDropper = new EyeDropper();
        const response = await eyeDropper.open();
        const { sRGBHex } = response?.value || {};
        console.log(sRGBHex);

    } catch (error) {
        console.log(error);
    }
}

colorPickerBtn.addEventListener("click", activateEyeDropper);