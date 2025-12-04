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
    return `
        <div class="property-card">
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
                        <i class="fas fa-ruler-combined"></i>
                        <span class="detail-value">${property.area}m²</span>
                        <span>Superficie</span>
                    </div>
                </div>
                <div class="property-price">${property.price.toLocaleString()} UF</div>
            </div>
        </div>
    `;
}

// Función para cargar las propiedades
function loadProperties() {
    const propertiesGrid = document.getElementById('propertiesGrid');
    const propertiesHTML = properties.map(property => createPropertyCard(property)).join('');
    propertiesGrid.innerHTML = propertiesHTML;
}



// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    loadProperties();
});

