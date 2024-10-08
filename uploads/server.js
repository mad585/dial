const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

// Handle CSV upload
app.post('/upload-csv', upload.single('csv'), (req, res) => {
    console.log(req.file); // File information
    res.send('CSV file uploaded successfully.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
