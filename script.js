// ============================================
// MODIFY THESE ARRAYS TO UPDATE THE PAGE
// ============================================

// Array of images with their names
// Add your images to the 'assets' folder and list them here
const microscopyImages = [
    { filename: 'image1.bmp', name: 'Cells visible in onion peel' },
    { filename: 'image2.bmp', name: 'Tender palm shoots' },
    { filename: 'image3.jpeg', name: 'Matar pod cells' },
    { filename: 'image4.jpeg', name: 'Betel leaf cells' },
    { filename: 'image5.jpeg', name: 'Celosia argentea (Kodi juttu puvvulu) plant leaf cells' },
    { filename: 'image6.jpeg', name: 'Hibiscus leaf cells' },
    { filename: 'image7.jpeg', name: 'Butterfly pea flower plant /blue pea flower plant leaf cells (Sankam puvvu)' },
    { filename: 'image8.jpeg', name: 'Jasmine(sannajaji) leaf  cells' },
    { filename: 'image9.jpeg', name: 'White flower leaf cells' },
    { filename: 'image10.jpg', name: 'Bilva patra leaf cells' },
    { filename: 'image11.jpg', name: 'Decoration plant leaf cells' },
    { filename: 'image12.jpg', name: 'Orchid plant leaf cells' },
    { filename: 'image13.jpg', name: 'Betel leaf stomata' },
    { filename: 'image14.jpg', name: 'Amaryllis leaf cells'},
    { filename: 'image15.jpg', name: 'Money plant epidermal leaf cells'},
    { filename: 'image16.jpg', name: 'TS of Aglonema leaf stalk'},
    { filename: 'image17.jpg', name: 'Human cheek cells'},
    { filename: 'image18.jpg', name: 'Desert rose leaf cells ( lower epidermis)'},
    { filename: 'image19.jpg', name: 'Tangled heart plant epidermal cells'},
    { filename: 'image20.jpg', name: 'Tangled heart plant stomata on leaf epidermis'},
    { filename: 'image21.jpg', name: 'Lily leaf epidermal cells'},
    { filename: 'image22.jpg', name: 'Ti plant or Hawaiian Good luck plant leaf epidermis'},
    { filename: 'image23.jpg', name: 'Black plum tree leaf epidermal cells'},
    {
        name: 'Different stages of mitosis in onion root tip cells',
        images: [
            { filename: 'image24.jpg' },
            { filename: 'image25.jpg' },
            { filename: 'image26.jpg' },
            { filename: 'image27.jpg' },
            { filename: 'image28.jpg' },
            { filename: 'image29.jpg' },
        ],
    },
    { filename: 'image30.jpg', name: 'Yeast cells'},
];

// Array of student names
const students = [
    'Sai Swaroopini',
    'Mohan Seshasai V',
];

// Array of teacher names
const teachers = [
    'Pranati Jali (PGT - Biology)',
    'S Anupama Rani (ATL Mentor of Change)',
    // Add more teacher names here
];

// ============================================
// DO NOT MODIFY BELOW THIS LINE
// ============================================

// Function to load images into the gallery
function loadGallery() {
    const gallery = document.getElementById('gallery');

    microscopyImages.forEach(item => {
        if (item.images && Array.isArray(item.images)) {
            const card = document.createElement('div');
            card.className = 'group-card';
            card.tabIndex = 0;
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `Open group ${item.name}`);

            const preview = document.createElement('div');
            preview.className = 'group-preview';

            const previewImages = item.images.slice(0, 4);
            const extraCount = item.images.length - previewImages.length;

            previewImages.forEach((image, index) => {
                const tile = document.createElement('div');
                tile.className = 'preview-tile';

                const thumb = document.createElement('img');
                thumb.src = `assets/${image.filename}`;
                thumb.alt = image.name || image.filename;
                thumb.onerror = function() {
                    this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="Arial" font-size="18"%3EMissing%3C/text%3E%3C/svg%3E';
                };

                tile.appendChild(thumb);

                if (index === previewImages.length - 1 && extraCount > 0) {
                    const overlay = document.createElement('div');
                    overlay.className = 'overlay-count';
                    overlay.textContent = `+${extraCount}`;
                    tile.appendChild(overlay);
                }

                preview.appendChild(tile);
            });

            const nameDiv = document.createElement('div');
            nameDiv.className = 'group-name';
            nameDiv.textContent = item.name;

            card.appendChild(preview);
            card.appendChild(nameDiv);
            card.addEventListener('click', () => openGroupDialog(item));
            card.addEventListener('keydown', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openGroupDialog(item);
                }
            });

            gallery.appendChild(card);
        } else {
            const card = document.createElement('div');
            card.className = 'image-card';
            
            const img = document.createElement('img');
            img.src = `assets/${item.filename}`;
            img.alt = item.name;
            img.onerror = function() {
                this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="Arial" font-size="18"%3EImage not found%3C/text%3E%3C/svg%3E';
            };
            
            const nameDiv = document.createElement('div');
            nameDiv.className = 'image-name';
            nameDiv.textContent = item.name;
            
            card.appendChild(img);
            card.appendChild(nameDiv);
            gallery.appendChild(card);
        }
    });
}

function openGroupDialog(group) {
    const overlay = document.getElementById('gallery-dialog');
    const dialogTitle = document.getElementById('dialog-title');
    const dialogImages = document.getElementById('dialog-images');

    dialogTitle.textContent = group.name;
    dialogImages.innerHTML = '';

    group.images.forEach(image => {
        const item = document.createElement('div');
        item.className = 'dialog-image-card';

        const img = document.createElement('img');
        img.src = `assets/${image.filename}`;
        img.alt = image.name;
        img.onerror = function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="Arial" font-size="18"%3EImage not found%3C/text%3E%3C/svg%3E';
        };

        const caption = document.createElement('div');
        caption.className = 'dialog-image-title';
        caption.textContent = image.name;

        item.appendChild(img);
        item.appendChild(caption);
        dialogImages.appendChild(item);
    });

    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeGroupDialog() {
    const overlay = document.getElementById('gallery-dialog');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
}

const dialogClose = document.getElementById('dialog-close');
if (dialogClose) {
    dialogClose.addEventListener('click', closeGroupDialog);
}

document.addEventListener('click', event => {
    const overlay = document.getElementById('gallery-dialog');
    if (!overlay.classList.contains('hidden') && event.target === overlay) {
        closeGroupDialog();
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeGroupDialog();
    }
});

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
