// ============================================
// MODIFY THESE ARRAYS TO UPDATE THE PAGE
// ============================================

// Array of images with their names
// Add your images to the 'assets' folder and list them here
const microscopyImages = [
    { filename: 'image1.bmp', name: 'Cells visible in onion peel' },
    { filename: 'image2.bmp', name: 'Radish petiole skin' },
    // Add more images here following the same format
    // { filename: 'your-image.jpg', name: 'Description' },
];

// Array of student names
const students = [
    'Sai Swaroopini',
    'Mohan Seshasai V',
];

// Array of teacher names
const teachers = [
    'Pranati Jali',
    'S Anupama Rani (ATL Mentor of Change)',
    // Add more teacher names here
];

// ============================================
// DO NOT MODIFY BELOW THIS LINE
// ============================================

// Function to load images into the gallery
function loadGallery() {
    const gallery = document.getElementById('gallery');
    
    microscopyImages.forEach(image => {
        const card = document.createElement('div');
        card.className = 'image-card';
        
        const img = document.createElement('img');
        img.src = `assets/${image.filename}`;
        img.alt = image.name;
        img.onerror = function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="Arial" font-size="18"%3EImage not found%3C/text%3E%3C/svg%3E';
        };
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'image-name';
        nameDiv.textContent = image.name;
        
        card.appendChild(img);
        card.appendChild(nameDiv);
        gallery.appendChild(card);
    });
}

// Function to load student names
function loadStudents() {
    const studentsList = document.getElementById('students-list');
    
    students.forEach(student => {
        const nameSpan = document.createElement('span');
        nameSpan.className = 'student-name';
        nameSpan.textContent = student;
        studentsList.appendChild(nameSpan);
    });
}

// Function to load teacher names
function loadTeachers() {
    const teachersList = document.getElementById('teachers-list');
    
    teachers.forEach(teacher => {
        const nameSpan = document.createElement('span');
        nameSpan.className = 'teacher-name';
        nameSpan.textContent = teacher;
        teachersList.appendChild(nameSpan);
    });
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    loadStudents();
    loadTeachers();
});
