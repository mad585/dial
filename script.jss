const input = document.querySelector('input[type="text"]');
const messages = document.querySelector('.messages');
const csvInput = document.getElementById('csvInput');
const uploadCsvButton = document.getElementById('uploadCsv');
const audioInput = document.getElementById('audioInput');
const playAudioButton = document.getElementById('playAudio');
const callButton = document.getElementById('callButton');

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && input.value) {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.textContent = input.value;
        messages.appendChild(newMessage);
        input.value = '';
        messages.scrollTop = messages.scrollHeight;
    }
});

// Handle CSV upload
uploadCsvButton.addEventListener('click', () => {
    const file = csvInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const contents = e.target.result;
            console.log(contents); // For demonstration, just log it to the console
        };
        reader.readAsText(file);
    } else {
        alert('Please select a CSV file to upload.');
    }
});

// Handle audio playback
playAudioButton.addEventListener('click', () => {
    const file = audioInput.files[0];
    if (file) {
        const audioUrl = URL.createObjectURL(file);
        const audio = new Audio(audioUrl);
        audio.play();
    } else {
        alert('Please select an audio file to play.');
    }
});

// Handle call logic
callButton.addEventListener('click', async () => {
    const numberToCall = "+1234567890"; // Replace with dynamic number from CSV
    try {
        // Simulate Skype call
        console.log(`Dialing ${numberToCall}...`);
        
        // Simulate answering machine or human
        const isHuman = Math.random() < 0.5; // Randomly simulate response

        if (isHuman) {
            console.log('Human answered.');
            playAudio('human-answer.wav'); // Play human answer audio
        } else {
            console.log('Voicemail answered.');
            playAudio('voicemail.wav'); // Play voicemail audio
        }
    } catch (error) {
        console.error('Error during the call:', error);
    }
});

function playAudio(file) {
    const audio = new Audio(file);
    audio.play();
}
