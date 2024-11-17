const textInput = document.getElementById('text-input');
const linkInput = document.getElementById('link-url');
const phoneInput = document.getElementById('phone-number');
const emailInput = document.getElementById('email');
const contactInputs = {
    name: document.getElementById('contact-name'),
    phone: document.getElementById('contact-phone'),
    email: document.getElementById('contact-email'),
    org: document.getElementById('contact-org'),
    address: document.getElementById('contact-address')
};
const qrCanvas = document.getElementById('qrcode');
const sizeSlider = document.getElementById('size-slider');
const sizeValue = document.getElementById('size-value');
const downloadBtn = document.getElementById('download-btn');
const downloadFormat = document.getElementById('download-format');
const templateButtons = document.querySelectorAll('.template-button');
let activeTemplate = 'custom';

templateButtons.forEach(button => {
    button.addEventListener('click', () => {
        activeTemplate = button.dataset.template;
        templateButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        toggleInputFields(activeTemplate);
    });
});

const toggleInputFields = (template) => {
    const inputGroups = {
        custom: textInput,
        link: linkInput,
        phone: phoneInput,
        email: emailInput,
        contact: contactInputs.name
    };

    for (const group in inputGroups) {
        inputGroups[group].parentElement.style.display = 'none';
    }

    // Special case for advanced contact form
    if (template === 'contact') {
        for (const key in contactInputs) {
            contactInputs[key].parentElement.style.display = 'block';
        }
    } else {
        inputGroups[template].parentElement.style.display = 'block';
    }
};

document.getElementById('toggle-options').addEventListener('click', () => {
    const optionalSettings = document.getElementById('optional-settings');
    optionalSettings.style.display = optionalSettings.style.display === 'none' ? 'block' : 'none';
});

sizeSlider.addEventListener('input', () => {
    sizeValue.textContent = sizeSlider.value;
});

document.getElementById('generate-btn').addEventListener('click', () => {
    let qrData;
    switch (activeTemplate) {
        case 'link':
            qrData = linkInput.value;
            break;
        case 'phone':
            qrData = `tel:${phoneInput.value}`;
            break;
        case 'email':
            qrData = `mailto:${emailInput.value}`;
            break;
        case 'contact':
            qrData = `MECARD:N:${contactInputs.name.value};TEL:${contactInputs.phone.value};EMAIL:${contactInputs.email.value};ORG:${contactInputs.org.value};ADR:${contactInputs.address.value};;`;
            break;
        default:
            qrData = textInput.value;
            break;
    }

    const qrOptions = {
        width: sizeSlider.value,
        color: {
            dark: document.getElementById('foreground-color').value,
            light: document.getElementById('background-color').value
        },
        errorCorrectionLevel: document.getElementById('error-level').value
    };

    QRCode.toCanvas(qrCanvas, qrData, qrOptions, function (error) {
        if (error) console.error(error);
    });
});

downloadBtn.addEventListener('click', () => {
    const format = downloadFormat.value;
    const link = document.createElement('a');
    link.download = `qrcode.${format}`;
    link.href = qrCanvas.toDataURL(`image/${format}`).replace(`image/${format}`, 'image/octet-stream');
    link.click();
});

document.getElementById('qrcode').addEventListener('click', () => {
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenImage = document.getElementById('fullscreen-image');
    fullscreenImage.src = qrCanvas.toDataURL();
    fullscreen.style.display = 'flex';
});

document.getElementById('close-fullscreen').addEventListener('click', () => {
    document.getElementById('fullscreen').style.display = 'none';
});

// Initialize on page load
toggleInputFields(activeTemplate);