function atualizarCertificado() {
    const dataInicial = document.getElementById("data-inicial-input").value;
    const dataVencimento = document.getElementById("data-vencimento-input").value;

    document.getElementById("data-inicial").innerText = dataInicial;
    document.getElementById("data-vencimento").innerText = dataVencimento;
}

function exportarPDF() {
    const certificado = document.getElementById("certificado");
    html2canvas(certificado, {
        scale: 3, // Aumenta a escala para melhorar a resolução
        useCORS: true // Permite lidar com imagens externas
    }).then(canvas => {
        const imgData = canvas.toDataURL("image/png", 1.0); // Qualidade máxima para PNG

        // Define o PDF com as dimensões reais da imagem
        const pdf = new jsPDF('landscape', 'pt', [3509, 2480]);
        
        // Adiciona a imagem ao PDF com dimensões reais
        pdf.addImage(imgData, 'PNG', 0, 0, 3509, 2480, undefined, 'FAST');
        pdf.save("certificado.pdf");
    });
}