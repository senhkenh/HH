// Propiedades por defecto
const defaultProperties = [
    { id: 1, title: "Casa Moderna en Las Condes", location: "Las Condes, Santiago", image: "pexels-expect-best-79873-323772.jpg", bedrooms: 4, bathrooms: 3, area: 180, price: 8500 },
    { id: 2, title: "Departamento Ejecutivo", location: "Providencia, Santiago", image: "pexels-expect-best-79873-323776.jpg", bedrooms: 2, bathrooms: 2, area: 85, price: 4200 },
    { id: 3, title: "Casa Familiar con Jardín", location: "Ñuñoa, Santiago", image: "pexels-expect-best-79873-323780.jpg", bedrooms: 3, bathrooms: 2, area: 150, price: 6800 },
    { id: 4, title: "Penthouse de Lujo", location: "Vitacura, Santiago", image: "pexels-binyaminmellish-1396132.jpg", bedrooms: 5, bathrooms: 4, area: 250, price: 15000 },
    { id: 5, title: "Casa Estilo Colonial", location: "San Miguel, Santiago", image: "pexels-frans-van-heerden-201846-1438832.jpg", bedrooms: 3, bathrooms: 2, area: 120, price: 5500 },
    { id: 6, title: "Departamento Vista Panorámica", location: "Las Condes, Santiago", image: "pexels-freestockpro-1172064.jpg", bedrooms: 3, bathrooms: 2, area: 110, price: 7200 },
    { id: 7, title: "Casa Minimalista", location: "La Reina, Santiago", image: "pexels-jovydas-2462015.jpg", bedrooms: 4, bathrooms: 3, area: 200, price: 9800 },
    { id: 8, title: "Loft Industrial", location: "Ñuñoa, Santiago", image: "pexels-luis-yanez-57302-206172.jpg", bedrooms: 1, bathrooms: 1, area: 65, price: 3200 },
    { id: 9, title: "Casa Tradicional", location: "Maipú, Santiago", image: "pexels-pixabay-164558.jpg", bedrooms: 3, bathrooms: 2, area: 140, price: 5800 },
    { id: 10, title: "Departamento Moderno", location: "Santiago Centro", image: "pexels-pixabay-208736.jpg", bedrooms: 2, bathrooms: 1, area: 75, price: 3800 },
    { id: 11, title: "Casa con Piscina", location: "Lo Barnechea, Santiago", image: "pexels-pixabay-209296.jpg", bedrooms: 5, bathrooms: 4, area: 280, price: 18500 },
    { id: 12, title: "Departamento Céntrico", location: "Providencia, Santiago", image: "pexels-pixabay-210617.jpg", bedrooms: 2, bathrooms: 2, area: 90, price: 4500 }
];

// Inicializar propiedades - siempre cargar las 24 completas
function initializeProperties() {
    localStorage.setItem('hemmelmann_properties', JSON.stringify(defaultProperties));
    return [...defaultProperties];
}

// Almacenamiento local de propiedades
let properties = initializeProperties();
let editingId = null;

// Elementos del DOM
const modal = document.getElementById('propertyModal');
const btnAddProperty = document.getElementById('btnAddProperty');
const btnCancel = document.getElementById('btnCancel');
const closeModal = document.querySelector('.close');
const propertyForm = document.getElementById('propertyForm');
const modalTitle = document.getElementById('modalTitle');
const imageInput = document.getElementById('image');
const imagePreview = document.getElementById('imagePreview');

// Event Listeners
btnAddProperty.addEventListener('click', openAddModal);
btnCancel.addEventListener('click', closeModalHandler);
closeModal.addEventListener('click', closeModalHandler);
propertyForm.addEventListener('submit', saveProperty);
imageInput.addEventListener('change', previewImage);

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModalHandler();
    }
});

// Funciones del modal
function openAddModal() {
    editingId = null;
    modalTitle.textContent = 'Agregar Propiedad';
    propertyForm.reset();
    imagePreview.innerHTML = '';
    modal.style.display = 'block';
}

function openEditModal(id) {
    const property = properties.find(p => p.id === id);
    if (!property) return;
    
    editingId = id;
    modalTitle.textContent = 'Editar Propiedad';
    
    document.getElementById('propertyId').value = property.id;
    document.getElementById('title').value = property.title;
    document.getElementById('location').value = property.location;
    document.getElementById('propertyType').value = property.type || 'casa';
    document.getElementById('bedrooms').value = property.bedrooms;
    document.getElementById('bathrooms').value = property.bathrooms;
    document.getElementById('parking').value = property.parking || 0;
    document.getElementById('area').value = property.area;
    document.getElementById('price').value = property.price;
    document.getElementById('transactionType').value = property.transactionType || 'venta';
    document.getElementById('description').value = property.description || '';
    
    if (property.images && property.images.length > 0) {
        imagePreview.innerHTML = property.images.map((img, index) => `
            <div class="preview-image-container">
                <img src="${img}" alt="Preview ${index + 1}" class="preview-image">
            </div>
        `).join('');
    } else if (property.image) {
        imagePreview.innerHTML = `
            <div class="preview-image-container">
                <img src="${property.image}" alt="Preview" class="preview-image">
            </div>
        `;
    }
    
    modal.style.display = 'block';
}

function closeModalHandler() {
    modal.style.display = 'none';
    editingId = null;
    propertyForm.reset();
    imagePreview.innerHTML = '';
}

// Función para previsualizar imágenes
function previewImage(event) {
    const files = Array.from(event.target.files).slice(0, 10); // Máximo 10 imágenes
    imagePreview.innerHTML = '';
    
    if (files.length > 10) {
        alert('Máximo 10 imágenes permitidas');
        return;
    }
    
    files.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'preview-image-container';
            imgContainer.innerHTML = `
                <img src="${e.target.result}" alt="Preview ${index + 1}" class="preview-image">
                <button type="button" class="remove-image" onclick="removePreviewImage(${index})">&times;</button>
            `;
            imagePreview.appendChild(imgContainer);
        };
        reader.readAsDataURL(file);
    });
}

// Función para eliminar imagen de preview
function removePreviewImage(index) {
    const containers = imagePreview.querySelectorAll('.preview-image-container');
    if (containers[index]) {
        containers[index].remove();
    }
}

// Función para guardar propiedad
function saveProperty(event) {
    event.preventDefault();
    
    const formData = new FormData(propertyForm);
    const imageFiles = Array.from(imageInput.files).slice(0, 10);
    
    const propertyData = {
        title: document.getElementById('title').value,
        location: document.getElementById('location').value,
        type: document.getElementById('propertyType').value,
        bedrooms: parseInt(document.getElementById('bedrooms').value),
        bathrooms: parseInt(document.getElementById('bathrooms').value),
        parking: parseInt(document.getElementById('parking').value),
        area: parseInt(document.getElementById('area').value),
        price: parseInt(document.getElementById('price').value),
        transactionType: document.getElementById('transactionType').value,
        description: document.getElementById('description').value
    };
    
    if (imageFiles.length > 0) {
        const imagePromises = imageFiles.map(file => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    resolve(e.target.result);
                };
                reader.readAsDataURL(file);
            });
        });
        
        Promise.all(imagePromises).then(images => {
            propertyData.images = images;
            propertyData.image = images[0]; // Primera imagen como principal
            savePropertyData(propertyData);
        });
    } else {
        if (editingId) {
            const existingProperty = properties.find(p => p.id === editingId);
            propertyData.images = existingProperty.images || [existingProperty.image];
            propertyData.image = existingProperty.image;
        }
        savePropertyData(propertyData);
    }
}

function savePropertyData(propertyData) {
    if (editingId) {
        // Editar propiedad existente
        const index = properties.findIndex(p => p.id === editingId);
        properties[index] = { ...propertyData, id: editingId };
    } else {
        // Agregar nueva propiedad
        propertyData.id = Date.now();
        properties.push(propertyData);
    }
    
    localStorage.setItem('hemmelmann_properties', JSON.stringify(properties));
    closeModalHandler();
    renderPropertiesTable();
    
    // Actualizar también el localStorage para la página principal
    updateMainPageProperties();
}

// Función para eliminar propiedad
function deleteProperty(id) {
    if (confirm('¿Estás seguro de que quieres eliminar esta propiedad?')) {
        properties = properties.filter(p => p.id !== id);
        localStorage.setItem('hemmelmann_properties', JSON.stringify(properties));
        renderPropertiesTable();
        updateMainPageProperties();
    }
}

// Función para renderizar la tabla de propiedades
function renderPropertiesTable() {
    const tableContainer = document.getElementById('propertiesTable');
    const propertyCount = document.getElementById('propertyCount');
    
    if (propertyCount) {
        propertyCount.textContent = properties.length;
    }
    
    if (properties.length === 0) {
        tableContainer.innerHTML = '<p>No hay propiedades registradas.</p>';
        return;
    }
    
    let tableHTML = `
        <div class="table">
            <div class="table-header">
                <div>Imagen</div>
                <div>Título</div>
                <div>Ubicación</div>
                <div>Tipo</div>
                <div>Transacción</div>
                <div>Dorm.</div>
                <div>Baños</div>
                <div>Estac.</div>
                <div>Área (m²)</div>
                <div>Precio (UF)</div>
                <div>Acciones</div>
            </div>
    `;
    
    properties.forEach(property => {
        tableHTML += `
            <div class="table-row">
                <div>
                    ${property.image ? `<img src="${property.image}" alt="${property.title}" class="property-image-small">` : 'Sin imagen'}
                </div>
                <div>${property.title}</div>
                <div>${property.location}</div>
                <div>${property.type || 'Casa'}</div>
                <div>${property.transactionType || 'Venta'}</div>
                <div>${property.bedrooms}</div>
                <div>${property.bathrooms}</div>
                <div>${property.parking || 0}</div>
                <div>${property.area}</div>
                <div>${property.price.toLocaleString()}</div>
                <div class="table-actions">
                    <button class="btn btn-edit" onclick="openEditModal(${property.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-danger" onclick="deleteProperty(${property.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    tableHTML += '</div>';
    tableContainer.innerHTML = tableHTML;
}

// Función para actualizar las propiedades en la página principal
function updateMainPageProperties() {
    // Convertir las propiedades del admin al formato de la página principal
    const mainPageProperties = properties.map(property => ({
        id: property.id,
        title: property.title,
        location: property.location,
        image: property.image || 'pexels-pixabay-164558.jpg', // imagen por defecto
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        area: property.area,
        price: property.price
    }));
    
    localStorage.setItem('main_properties', JSON.stringify(mainPageProperties));
}

// Verificar autenticación
function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('admin_logged_in');
    if (!isLoggedIn) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Función para cerrar sesión
function logout() {
    sessionStorage.removeItem('admin_logged_in');
    window.location.href = 'login.html';
}



// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    if (checkAuth()) {
        // Asegurar que las propiedades por defecto estén disponibles
        properties = initializeProperties();
        updateMainPageProperties();
        renderPropertiesTable();
    }
});