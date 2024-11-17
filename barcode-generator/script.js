const textInput = document.getElementById('text-input');
        const sizeSlider = document.getElementById('size-slider');
        const generateBtn = document.getElementById('generate-btn');
        const downloadBtn = document.getElementById('download-btn');
        const downloadFormat = document.getElementById('download-format');
        const barcodeCanvas = document.getElementById('barcode');
        const fullscreenDiv = document.getElementById('fullscreen');
        const fullscreenImage = document.getElementById('fullscreen-image');

        generateBtn.addEventListener('click', () => {
            const text = textInput.value;
            const options = {
                format: "CODE128",
                width: sizeSlider.value / 100,
                height: 100,
                displayValue: true,
            };

            JsBarcode(barcodeCanvas, text, options);
        });

        function generateRandomFileName(length = 10) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        }

        downloadBtn.addEventListener('click', () => {
            const format = downloadFormat.value;

            if (format === 'svg') {
                const barcodeText = textInput.value;
                const svgOptions = {
                    format: "CODE128",
                    width: sizeSlider.value / 100,
                    height: 100,
                    displayValue: true,
                };

                JsBarcode('#barcode-svg', barcodeText, svgOptions);
                const svgElement = document.querySelector('#barcode-svg').outerHTML;
                const blob = new Blob([svgElement], { type: 'image/svg+xml' });
                const link = document.createElement('a');
                link.download = `${generateRandomFileName()}.svg`;
                link.href = URL.createObjectURL(blob);
                link.click();
            } else {
                const link = document.createElement('a');
                link.download = `${generateRandomFileName()}.${format}`;
                link.href = barcodeCanvas.toDataURL(`image/${format}`);
                link.click();
            }
        });

        barcodeCanvas.addEventListener('click', () => {
            fullscreenDiv.style.display = 'flex';
            fullscreenImage.src = barcodeCanvas.toDataURL('image/png');
        });

        document.getElementById('close-fullscreen').addEventListener('click', () => {
            fullscreenDiv.style.display = 'none';
        });