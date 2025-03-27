import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase, ref, set, get, push, remove } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// New Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHi7YWw2ElIw73-SjsS9kzM2ghxiGa_xk",
  authDomain: "newjsproject-65bdb.firebaseapp.com",
  databaseURL: "https://newjsproject-65bdb-default-rtdb.firebaseio.com",  // Make sure this is added
  projectId: "newjsproject-65bdb",
  storageBucket: "newjsproject-65bdb.appspot.com",  // Corrected storageBucket
  messagingSenderId: "1066069266880",
  appId: "1:1066069266880:web:7d53f68492c5414d137825",
  measurementId: "G-5JR92PL3CX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log("Firebase initialized successfully!");


// Cloudinary API details
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dih2voun3/upload";
const CLOUDINARY_UPLOAD_PRESET = "JS_Proj";

// Get form elements
const addMusicForm = document.getElementById("addMusicForm");
const submitMusicButton = document.getElementById("submitMusic");
const childCard = document.getElementById("childcard");

// Upload file to Cloudinary and return the URL
async function uploadToCloudinary(file, folder) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    formData.append("folder", folder);

    try {
        const response = await fetch(CLOUDINARY_URL, {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        return data.secure_url; // Cloudinary returns a secure URL
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        alert("Failed to upload file. Try again.");
        return null;
    }
}

// Add event listener for submitting music
submitMusicButton.addEventListener("click", async () => {
    const movieName = document.getElementById("movieName").value;
    const musicName = document.getElementById("musicName").value;
    const singerName = document.getElementById("singerName").value;
    const musicFile = document.getElementById("musicFile").files[0];
    const movieImage = document.getElementById("movieImage").files[0];

    if (!movieName || !musicName || !singerName || !musicFile || !movieImage) {
        alert("Please fill all the fields.");
        return;
    }

    try {
        // Upload image & song to Cloudinary
        const imageUrl = await uploadToCloudinary(movieImage, "music_images");
        const musicUrl = await uploadToCloudinary(musicFile, "music_files");

        if (!imageUrl || !musicUrl) return;

        // Save data to Firebase Realtime Database
        const newMusicRef = push(ref(db, "Music/"));
        await set(newMusicRef, {
            id: newMusicRef.key,
            title: musicName,
            movie: movieName,
            singer: singerName,
            img: imageUrl,
            song: musicUrl
        });

        console.log("Music added successfully!");
        Swal.fire({
            title: "Music Added Successfully!",
            icon: "success",
            confirmButtonText: "OK"
        }).then(() => {
            // Close the modal
            const addMusicModal = bootstrap.Modal.getInstance(document.getElementById("addMusicModal"));
            addMusicModal.hide();

            // Clear form fields
            addMusicForm.reset();

            // Refresh music list
            fetchMusicData();
        });
    } catch (error) {
        console.error("Error adding music:", error);
        alert("Failed to add music. Try again.");
    }
});

// Fetch and display music
async function fetchMusicData() {
    const musicRef = ref(db, "Music/");
    try {
        const musicSnapshot = await get(musicRef);
        if (musicSnapshot.exists()) {
            const musicData = musicSnapshot.val();
            displayMusic(Object.values(musicData));
        } else {
            console.log("No music data available");
            childCard.innerHTML = "<p>No songs available.</p>";
        }
    } catch (error) {
        console.error("Error fetching music data:", error);
    }
}


window.deleteMusic = async function (musicId) {
    try {
        await remove(ref(db, `Music/${musicId}`)); // Delete from Firebase
        console.log("Music deleted successfully!");
        fetchMusicData(); // Refresh UI after deletion
    } catch (error) {
        console.error("Error deleting music:", error);
    }
};


// Function to display music cards
function displayMusic(songs) {
    childCard.innerHTML = ""; // Clear previous content

    songs.forEach(song => {
        const card = document.createElement("div");
        card.classList.add("music-card");

        card.innerHTML = `
            <img src="${song.img}" alt="${song.title}" class="music-img" width="100">
            <h3>${song.title}
            <img src="../Images/trash.png" alt="bin" width="20px" class="delete-btn" onclick="deleteMusic('${song.id}')"/>
            </h3>
            <p><strong>Movie:</strong> ${song.movie}
            </p>
            <p><strong>Singer:</strong> ${song.singer}</p>
            <audio controls id="audiosize">
                <source src="${song.song}" type="audio/mp3">
            </audio>    
            
            
        `;

        childCard.appendChild(card);
    });
}

// Load existing music data when the page loads
document.addEventListener("DOMContentLoaded", fetchMusicData);


