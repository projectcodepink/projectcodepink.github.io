const textLines = [
    "Welcome to ProjectCodePink",
    "We support young women in tech.",
    "We fund future women software engineers.",
    "We are here to change the industry.",
    "Join us in shaping the future."
];

let index = 0;
const animatedText = document.getElementById("animatedText");
const buttonsContainer = document.getElementById("buttonsContainer");
const finalImageLink = document.getElementById("finalImageLink");
const qrPopup = document.getElementById("qrPopup");
const closePopup = document.getElementById("closePopup");
const supportBtn = document.getElementById("supportBtn");

function typeText() {
    if (index < textLines.length) {
        animatedText.innerHTML = textLines[index];
        animatedText.style.opacity = 1;
        index++;
        setTimeout(typeText, 3000); // Yazı geçiş süresi (3 saniye)
    } else {
        setTimeout(() => {
            buttonsContainer.style.display = "block";
            finalImageLink.style.display = "block"; // Fotoğrafı ve bağlantıyı göster
        }, 1000); // 1 saniye sonra butonlar ve fotoğraf görünsün
    }
}

supportBtn.addEventListener('click', function () {
    qrPopup.style.display = "block"; // QR popup'ını göster
});

closePopup.addEventListener('click', function () {
    qrPopup.style.display = "none"; // QR popup'ını kapat
});

setTimeout(typeText, 1000); // İlk yazının animasyonuna başlama süresi

function typeText() {
    if (index < textLines.length) {
        animatedText.innerHTML = textLines[index];
        animatedText.style.opacity = 1;
        index++;
        setTimeout(typeText, 3000); // Yazı geçiş süresi (3 saniye)
    } else {
        setTimeout(() => {
            buttonsContainer.style.display = "block";
            finalImageLink.style.display = "block"; // Fotoğrafı ve bağlantıyı göster
            showFinalText(); // Son metni göstermek için fonksiyonu çağırıyoruz
        }, 1000); // 1 saniye sonra butonlar ve fotoğraf görünsün
    }
}

function showFinalText() {
    const finalText = document.getElementById('finalText');
    finalText.style.display = 'block'; // Yazıyı görünür yapıyoruz
}

document.getElementById("detailsButton").addEventListener("click", function() {
    window.open("https://e.pcloud.link/publink/show?code=XZHdAKZf1Fqse0qRrXpiEGQnSBxcLJYNH0k", "_blank");
});
