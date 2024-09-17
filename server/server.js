// document.addEventListener('DOMContentLoaded', function () {
//     console.log("Web app loaded successfully!");

//     // Add active class to clicked nav link
//     const navLinks = document.querySelectorAll('nav ul li a');
//     navLinks.forEach(link => {
//         link.addEventListener('click', function() {
//             navLinks.forEach(item => item.classList.remove('active'));
//             this.classList.add('active');
//         });
//     });
// });
const express = require('express'); // Assuming you're using Express.js
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (like HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

