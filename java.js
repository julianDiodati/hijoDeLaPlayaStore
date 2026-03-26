// TUS PRODUCTOS DE MERCADO LIBRE (Agrega aquí tus links de afiliados)
const productos = [
    // TECNOLOGÍA
    {
        categoria: "tecnologia",
        imagen: "https://res.cloudinary.com/dmhmynwqc/image/upload/v1774461725/D_NQ_NP_2X_675525-MLA99461311188_112025-F_zjx8ci.webp",
        titulo: "Smart TV 43 TCL Full HD QLED 43S5K Google Tv Dolby Audio",
        precio: "$419.999",
        precioAntiguo: "$499.999",
        descuento: "16% OFF",
        link: "https://meli.la/1xvbP5y",
        envioGratis: true,
        calificacion: 4.7
    },
    {
        categoria: "tecnologia",
        imagen: "https://res.cloudinary.com/dmhmynwqc/image/upload/v1774537271/D_NQ_NP_2X_715041-MLA99473286046_112025-F_puo1cc.webp",
        titulo: "Smart Tv Noblex 65 Uhd 4k Google Tv Bluetooth Hdmi Usb Dv65x8580",
        precio: "$1.899.999",
        precioAntiguo: "$2.299.999",
        descuento: "17% OFF",
        link: "https://meli.la/1MCSiq4",
        envioGratis: true,
        calificacion: 4.8
    },
    {
        categoria: "tecnologia",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_995184-MLM74723498746_03_024-F.webp",
        titulo: "Notebook Gamer Lenovo LOQ i5 12ma Gen RTX 4050",
        precio: "$1.199.999",
        precioAntiguo: "$1.499.999",
        descuento: "20% OFF",
        link: "TU_LINK_AFILIADO_3_AQUI",
        envioGratis: true,
        calificacion: 4.7
    },
    {
        categoria: "tecnologia",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_630697-MLM74723498746_03_024-F.webp",
        titulo: "Auriculares Sony WH-1000XM5 Noise Cancelling",
        precio: "$399.999",
        precioAntiguo: "$499.999",
        descuento: "20% OFF",
        link: "TU_LINK_AFILIADO_4_AQUI",
        envioGratis: true,
        calificacion: 4.9
    },
    // HERRAMIENTAS
    {
        categoria: "herramientas",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_985463-MLA52345678912_112023-F.webp",
        titulo: "Taladro Percutor Inalámbrico Bosch 20V",
        precio: "$89.999",
        precioAntiguo: "$129.999",
        descuento: "31% OFF",
        link: "TU_LINK_AFILIADO_5_AQUI",
        envioGratis: true,
        calificacion: 4.8
    },
    // HOGAR
    {
        categoria: "hogar",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_745123-MLA52345678913_112023-F.webp",
        titulo: "Lavarropas Automático Samsung 10Kg Inverter",
        precio: "$459.999",
        precioAntiguo: "$599.999",
        descuento: "23% OFF",
        link: "TU_LINK_AFILIADO_6_AQUI",
        envioGratis: true,
        calificacion: 4.7
    },
    // ZAPATILLAS
    {
        categoria: "zapatillas",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_856789-MLA52345678914_112023-F.webp",
        titulo: "Nike Air Jordan 1 Low Travis Scott",
        precio: "$249.999",
        precioAntiguo: "$329.999",
        descuento: "24% OFF",
        link: "TU_LINK_AFILIADO_7_AQUI",
        envioGratis: true,
        calificacion: 4.9
    }
];

let categoriaActual = 'todas';
let productosFiltrados = [...productos];

function renderizarProductos(productos) {
    const grid = document.getElementById('productsGrid');
    const loading = document.getElementById('loading');
    const noProducts = document.getElementById('noProducts');

    if (productos.length === 0) {
        grid.style.display = 'none';
        loading.style.display = 'none';
        noProducts.style.display = 'block';
        return;
    }

    grid.innerHTML = productos.map(producto => `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${producto.imagen}" alt="${producto.titulo}" class="product-image" onclick="window.open('${producto.link}', '_blank')">
            </div>
            <div class="product-info">
                <h3 class="product-title">${producto.titulo}</h3>
                <div class="product-price">
                    ${producto.precio}
                    <span class="old-price">${producto.precioAntiguo}</span>
                </div>
                <div class="product-discount">${producto.descuento}</div>
                
                ${producto.envioGratis ? `
                    <div class="free-shipping">
                        <i class="fas fa-shipping-fast"></i>
                        Envío gratis
                    </div>
                ` : ''}
                
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span>${producto.calificacion}</span>
                </div>
                
                <a href="${producto.link}" class="buy-btn" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-shopping-cart"></i>
                    Comprar ahora
                </a>
            </div>
        </div>
    `).join('');

    grid.style.display = 'grid';
    loading.style.display = 'none';
    noProducts.style.display = 'none';
}

// FILTRO POR CATEGORÍAS
function filtrarPorCategoria(categoria) {
    categoriaActual = categoria;
    
    if (categoria === 'todas') {
        productosFiltrados = [...productos];
    } else {
        productosFiltrados = productos.filter(producto => producto.categoria === categoria);
    }
    
    renderizarProductos(productosFiltrados);
}

// Event listeners para categorías
document.addEventListener('DOMContentLoaded', () => {
    const botonesCategoria = document.querySelectorAll('.category-btn');
    
    botonesCategoria.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remover active de todos
            botonesCategoria.forEach(b => b.classList.remove('active'));
            // Agregar active al clickeado
            e.target.classList.add('active');
            // Filtrar productos
            const categoria = e.target.dataset.categoria;
            filtrarPorCategoria(categoria);
        });
    });
});

// Buscador (funciona con categorías)
document.getElementById('searchInput').addEventListener('input', (e) => {
    const termino = e.target.value.toLowerCase();
    
    let productosTemp = categoriaActual === 'todas' ? [...productos] : productos.filter(p => p.categoria === categoriaActual);
    
    productosFiltrados = productosTemp.filter(producto => 
        producto.titulo.toLowerCase().includes(termino)
    );
    
    renderizarProductos(productosFiltrados);
});

// Cargar productos al iniciar
window.addEventListener('load', () => {
    setTimeout(() => {
        renderizarProductos(productosFiltrados);
    }, 1000);
});