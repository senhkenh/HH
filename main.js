// Datos ficticios de propiedades
const properties = [
    {
        id: 1,
        title: "Casa Moderna en Las Condes",
        location: "Las Condes, Santiago",
        image: "pexels-expect-best-79873-323772.jpg",
        bedrooms: 4,
        bathrooms: 3,
        area: 180,
        price: 8500
    },
    {
        id: 2,
        title: "Departamento Ejecutivo",
        location: "Providencia, Santiago",
        image: "pexels-expect-best-79873-323776.jpg",
        bedrooms: 2,
        bathrooms: 2,
        area: 85,
        price: 4200
    },
    {
        id: 3,
        title: "Casa Familiar con Jardín",
        location: "Ñuñoa, Santiago",
        image: "pexels-expect-best-79873-323780.jpg",
        bedrooms: 3,
        bathrooms: 2,
        area: 150,
        price: 6800
    },
    {
        id: 4,
        title: "Penthouse de Lujo",
        location: "Vitacura, Santiago",
        image: "pexels-binyaminmellish-1396132.jpg",
        bedrooms: 5,
        bathrooms: 4,
        area: 250,
        price: 15000
    },
    {
        id: 5,
        title: "Casa Estilo Colonial",
        location: "San Miguel, Santiago",
        image: "pexels-frans-van-heerden-201846-1438832.jpg",
        bedrooms: 3,
        bathrooms: 2,
        area: 120,
        price: 5500
    },
    {
        id: 6,
        title: "Departamento Vista Panorámica",
        location: "Las Condes, Santiago",
        image: "pexels-freestockpro-1172064.jpg",
        bedrooms: 3,
        bathrooms: 2,
        area: 110,
        price: 7200
    },
    {
        id: 7,
        title: "Casa Minimalista",
        location: "La Reina, Santiago",
        image: "pexels-jovydas-2462015.jpg",
        bedrooms: 4,
        bathrooms: 3,
        area: 200,
        price: 9800
    },
    {
        id: 8,
        title: "Loft Industrial",
        location: "Ñuñoa, Santiago",
        image: "pexels-luis-yanez-57302-206172.jpg",
        bedrooms: 1,
        bathrooms: 1,
        area: 65,
        price: 3200
    },
    {
        id: 9,
        title: "Casa Tradicional",
        location: "Maipú, Santiago",
        image: "pexels-pixabay-164558.jpg",
        bedrooms: 3,
        bathrooms: 2,
        area: 140,
        price: 5800
    },
    {
        id: 10,
        title: "Departamento Moderno",
        location: "Santiago Centro",
        image: "pexels-pixabay-208736.jpg",
        bedrooms: 2,
        bathrooms: 1,
        area: 75,
        price: 3800
    },
    {
        id: 11,
        title: "Casa con Piscina",
        location: "Lo Barnechea, Santiago",
        image: "pexels-pixabay-209296.jpg",
        bedrooms: 5,
        bathrooms: 4,
        area: 280,
        price: 18500
    },
    {
        id: 12,
        title: "Departamento Céntrico",
        location: "Providencia, Santiago",
        image: "pexels-pixabay-210617.jpg",
        bedrooms: 2,
        bathrooms: 2,
        area: 90,
        price: 4500
    },
    {
        id: 13,
        title: "Casa Contemporánea",
        location: "Vitacura, Santiago",
        image: "pexels-pixabay-221024.jpg",
        bedrooms: 4,
        bathrooms: 3,
        area: 220,
        price: 12800
    },
    {
        id: 14,
        title: "Departamento de Lujo",
        location: "Las Condes, Santiago",
        image: "pexels-pixabay-259588.jpg",
        bedrooms: 3,
        bathrooms: 3,
        area: 130,
        price: 9200
    },
    {
        id: 15,
        title: "Casa Familiar Amplia",
        location: "La Reina, Santiago",
        image: "pexels-pixabay-259593.jpg",
        bedrooms: 4,
        bathrooms: 3,
        area: 190,
        price: 8900
    },
    {
        id: 16,
        title: "Penthouse Exclusivo",
        location: "Providencia, Santiago",
        image: "pexels-pixabay-259685.jpg",
        bedrooms: 3,
        bathrooms: 2,
        area: 160,
        price: 11500
    },
    {
        id: 17,
        title: "Casa Estilo Mediterráneo",
        location: "Lo Barnechea, Santiago",
        image: "pexels-pixabay-277667.jpg",
        bedrooms: 5,
        bathrooms: 4,
        area: 300,
        price: 22000
    },
    {
        id: 18,
        title: "Departamento Boutique",
        location: "Ñuñoa, Santiago",
        image: "pexels-pixabay-280229.jpg",
        bedrooms: 2,
        bathrooms: 2,
        area: 95,
        price: 5200
    },
    {
        id: 19,
        title: "Casa Rústica Moderna",
        location: "San Miguel, Santiago",
        image: "pexels-pixabay-53610.jpg",
        bedrooms: 3,
        bathrooms: 2,
        area: 135,
        price: 6200
    },
    {
        id: 20,
        title: "Loft Urbano",
        location: "Santiago Centro",
        image: "pexels-pripicart-463734.jpg",
        bedrooms: 1,
        bathrooms: 1,
        area: 70,
        price: 3600
    },
    {
        id: 21,
        title: "Casa de Campo Urbana",
        location: "Maipú, Santiago",
        image: "pexels-rquiros-1876045.jpg",
        bedrooms: 4,
        bathrooms: 3,
        area: 210,
        price: 9500
    },
    {
        id: 22,
        title: "Departamento Premium",
        location: "Las Condes, Santiago",
        image: "pexels-sebastians-731082.jpg",
        bedrooms: 3,
        bathrooms: 2,
        area: 115,
        price: 7800
    },
    {
        id: 23,
        title: "Casa Arquitectónica",
        location: "Vitacura, Santiago",
        image: "pexels-tobiasbjorkli-2360673.jpg",
        bedrooms: 4,
        bathrooms: 4,
        area: 240,
        price: 16500
    },
    {
        id: 24,
        title: "Mansión Exclusiva",
        location: "Lo Barnechea, Santiago",
        image: "pexels-tomas-malik-793526-2581922.jpg",
        bedrooms: 6,
        bathrooms: 5,
        area: 350,
        price: 28000
    }
];

// Función para crear una tarjeta de propiedad
function createPropertyCard(property) {
    const transactionType = property.transactionType || 'venta';
    let transactionLabel, priceLabel;
    
    switch(transactionType) {
        case 'venta':
            transactionLabel = 'Venta';
            priceLabel = 'UF';
            break;
        case 'arriendo':
            transactionLabel = 'Arriendo';
            priceLabel = 'UF/mes';
            break;
        case 'transaccion':
            transactionLabel = 'Transacción';
            priceLabel = 'UF';
            break;
        default:
            transactionLabel = 'Venta';
            priceLabel = 'UF';
    }
    
    return `
        <div class="property-card" onclick="openPropertyDetail(${property.id})">
            <div class="property-badge">${transactionLabel}</div>
            <img src="${property.image}" alt="${property.title}" class="property-image">
            <div class="property-info">
                <h3 class="property-title">${property.title}</h3>
                <p class="property-location">${property.location}</p>
                <div class="property-details">
                    <div class="detail-item">
                        <i class="fas fa-bed"></i>
                        <span class="detail-value">${property.bedrooms}</span>
                        <span>Dormitorios</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-bath"></i>
                        <span class="detail-value">${property.bathrooms}</span>
                        <span>Baños</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-car"></i>
                        <span class="detail-value">${property.parking || 0}</span>
                        <span>Estacionamientos</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-ruler-combined"></i>
                        <span class="detail-value">${property.area}m²</span>
                        <span>Superficie</span>
                    </div>
                </div>
                <div class="property-price">${property.price.toLocaleString()} ${priceLabel}</div>
            </div>
        </div>
    `;
}

// Función para abrir el detalle de la propiedad
function openPropertyDetail(propertyId) {
    const adminProperties = JSON.parse(localStorage.getItem('main_properties'));
    const propertiesToSearch = adminProperties && adminProperties.length > 0 ? adminProperties : properties;
    const property = propertiesToSearch.find(p => p.id === propertyId);
    if (!property) return;
    
    // Usar imágenes múltiples si existen, sino repetir la principal
    const gallery = property.images && property.images.length > 0 ? property.images : Array(5).fill(property.image);
    
    // Llenar el modal con los datos
    document.getElementById('detailTitle').textContent = property.title;
    document.getElementById('detailLocation').textContent = property.location;
    document.getElementById('detailBedrooms').textContent = property.bedrooms;
    document.getElementById('detailBathrooms').textContent = property.bathrooms;
    document.getElementById('detailParking').textContent = property.parking || 0;
    document.getElementById('detailArea').textContent = property.area;
    document.getElementById('detailPrice').textContent = `${property.price.toLocaleString()} UF`;
    document.getElementById('detailDescription').textContent = property.description || 'Hermosa propiedad en excelente ubicación, ideal para familias que buscan comodidad y calidad de vida.';
    
    // Configurar imagen principal
    const mainImage = document.getElementById('mainPropertyImage');
    mainImage.src = property.image;
    mainImage.alt = property.title;
    
    // Crear thumbnails
    const thumbnailGallery = document.getElementById('thumbnailGallery');
    thumbnailGallery.innerHTML = gallery.map((img, index) => 
        `<img src="${img}" alt="${property.title} ${index + 1}" class="thumbnail" onclick="changeMainImage('${img}')">`
    ).join('');
    
    // Marcar el primer thumbnail como activo
    setTimeout(() => {
        const firstThumbnail = thumbnailGallery.querySelector('.thumbnail');
        if (firstThumbnail) {
            firstThumbnail.classList.add('active');
        }
    }, 100);
    
    // Mostrar modal
    document.getElementById('propertyDetailModal').style.display = 'block';
}

// Función para cambiar imagen principal
function changeMainImage(imageSrc) {
    document.getElementById('mainPropertyImage').src = imageSrc;
}

// Función para cerrar modal
function closePropertyModal() {
    document.getElementById('propertyDetailModal').style.display = 'none';
}

// Función para cargar las propiedades
function loadProperties() {
    // Cargar propiedades del admin si existen, sino usar las por defecto
    const adminProperties = JSON.parse(localStorage.getItem('main_properties'));
    allProperties = adminProperties && adminProperties.length > 0 ? adminProperties : properties;
    filteredProperties = [...allProperties];
    
    renderProperties(allProperties);
}



// Menú hamburger
function initializeHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Variables globales para filtros
let allProperties = [];
let filteredProperties = [];

// Función para filtrar propiedades
function filterProperties() {
    const transaction = document.getElementById('filterTransaction').value.toLowerCase();
    const type = document.getElementById('filterType').value.toLowerCase();
    const location = document.getElementById('filterLocation').value.toLowerCase();
    const bedrooms = document.getElementById('filterBedrooms').value;
    const priceMin = document.getElementById('priceMin').value;
    const priceMax = document.getElementById('priceMax').value;
    
    filteredProperties = allProperties.filter(property => {
        // Filtro por tipo de transacción
        if (transaction && property.transactionType && property.transactionType.toLowerCase() !== transaction) {
            return false;
        }
        
        // Filtro por tipo
        if (type && !property.title.toLowerCase().includes(type)) {
            return false;
        }
        
        // Filtro por ubicación
        if (location && !property.location.toLowerCase().includes(location)) {
            return false;
        }
        
        // Filtro por dormitorios
        if (bedrooms && property.bedrooms < parseInt(bedrooms)) {
            return false;
        }
        
        // Filtro por precio mínimo
        if (priceMin && property.price < parseInt(priceMin)) {
            return false;
        }
        
        // Filtro por precio máximo
        if (priceMax && property.price > parseInt(priceMax)) {
            return false;
        }
        
        return true;
    });
    
    renderProperties(filteredProperties);
}

// Función para renderizar propiedades
function renderProperties(propertiesToRender) {
    const propertiesGrid = document.getElementById('propertiesGrid');
    const propertiesHTML = propertiesToRender.map(property => createPropertyCard(property)).join('');
    propertiesGrid.innerHTML = propertiesHTML;
}

// Función para limpiar filtros
function clearFilters() {
    document.getElementById('filterTransaction').value = '';
    document.getElementById('filterType').value = '';
    document.getElementById('filterLocation').value = '';
    document.getElementById('filterBedrooms').value = '';
    document.getElementById('priceMin').value = '';
    document.getElementById('priceMax').value = '';
    
    renderProperties(allProperties);
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    // Siempre inicializar el menú hamburguesa
    initializeHamburgerMenu();
    
    // Solo cargar propiedades si estamos en la página principal
    if (document.getElementById('propertiesGrid')) {
        loadProperties();
    }
    
    // Event listeners para filtros (solo si existen)
    const searchBtn = document.getElementById('searchBtn');
    const clearBtn = document.getElementById('clearBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', filterProperties);
    }
    if (clearBtn) {
        clearBtn.addEventListener('click', clearFilters);
    }
    
    // Event listener para cerrar modal (solo si existe)
    const propertyClose = document.querySelector('.property-close');
    if (propertyClose) {
        propertyClose.addEventListener('click', closePropertyModal);
    }
    
    // Cerrar modal al hacer clic fuera (solo si existe)
    const modal = document.getElementById('propertyDetailModal');
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closePropertyModal();
            }
        });
    }
});

