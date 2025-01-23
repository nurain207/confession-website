// Fungsi untuk menyimpan jawapan
function saveAnswer(answer, question) {
    localStorage.setItem(question, answer);
}

// Simpan jawapan soalan
document.getElementById('questionsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let food = document.getElementById('food').value;
    let dream = document.getElementById('dream').value;
    
    saveAnswer(food, "food");
    saveAnswer(dream, "dream");
    
    alert("Terima kasih atas jawapan awak!");
});

// Simpan jawapan Yes! I want to be your boyfriend atau No!
document.getElementById('acceptBtn').addEventListener('click', function() {
    localStorage.setItem("response", "Yes! I want to be your boyfriend");
    alert("serious laa awak terimaa Huaaaaa nak nangisss Thankyou sayanggg");
});

document.getElementById('rejectBtn').addEventListener('click', function() {
    localStorage.setItem("response", "No!");
    alert("thankyou sebab menjawab.");
});

// Hantar confession
document.getElementById('submitBtn').addEventListener('click', function() {
    let confessionText = document.getElementById('confessionText').value;
    if (confessionText === "") {
        alert("Sila tulis confession awak.");
    } else {
        alert("Confession telah dihantar! Terima kasih kerana berkongsi perasaan awak.");
    }
})