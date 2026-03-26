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
        calificacion: 5
    },
    {
        categoria: "tecnologia",
        imagen: "https://res.cloudinary.com/dmhmynwqc/image/upload/v1774547793/D_NQ_NP_2X_801835-MLA96126700023_102025-F_iqfbdw.webp",
        titulo: "Smart TV QLED 55 pulgadas 4K 55C655A Google TV 120Hz TCL",
        precio: "$799.999",
        precioAntiguo: "$899.999",
        descuento: "11% OFF",
        link: "https://meli.la/2tu8enm",
        envioGratis: true,
        calificacion: 4.7
    },
    {
        categoria: "tecnologia",
        imagen: "https://res.cloudinary.com/dmhmynwqc/image/upload/v1774547848/D_NQ_NP_2X_939049-MLA98258256533_112025-F_w6uvda.webp",
        titulo: "Smart TV RCA 55 LED Google TV 4K G55P7UHD-F",
        precio: "$699.999",
        precioAntiguo: "$999.999",
        descuento: "30% OFF",
        link: "https://meli.la/2tu8enm",
        envioGratis: true,
        calificacion: 4.7
    },
{
        categoria: "tecnologia",
        imagen: "https://res.cloudinary.com/dmhmynwqc/image/upload/v1774548032/D_NQ_NP_2X_853184-MLA99505241442_112025-F_iuixjo.webp",
        titulo: "Led Smart TV 43 RCA R43gl100 Google",
        precio: "$410.000",
        precioAntiguo: "$459.999",
        descuento: "10% OFF",
        link: "https://meli.la/1wCdX7Z",
        envioGratis: true,
        calificacion: 4.6
    },
    {
        categoria: "tecnologia",
        imagen: "https://res.cloudinary.com/dmhmynwqc/image/upload/v1774547893/D_NQ_NP_2X_919222-MLA99475874918_112025-F_gebpws.webp",
        titulo: "Smart Tv Samsung 50 Uhd 4k 50u8000f",
        precio: "$639.999",
        precioAntiguo: "$899.999",
        descuento: "28% OFF",
        link: "https://meli.la/1xiBHd2",
        envioGratis: true,
        calificacion: 4.9
    },
    {
        categoria: "tecnologia",
        imagen: "https://res.cloudinary.com/dmhmynwqc/image/upload/v1774548070/D_NQ_NP_2X_693564-MLA99977285891_112025-F_yfeskm.webp",
        titulo: "Smart Tv Quint 55 Pulgadas, Sistema Operativo Google Tv",
        precio: "$899.999",
        precioAntiguo: "$1.099.999",
        descuento: "18% OFF",
        link: "https://meli.la/1jjA8M2",
        envioGratis: true,
        calificacion: 4.6
    },
    {
        categoria: "tecnologia",
        imagen: "https://res.cloudinary.com/dmhmynwqc/image/upload/v1774548121/D_NQ_NP_2X_989662-MLA99507690888_112025-F_fh8kcm.webp",
        titulo: "Smart Tv Hqs Hqs50x6500 50 Pulgadas 4k Led",
        precio: "$434.099",
        precioAntiguo: "$613.599",
        descuento: "29% OFF",
        link: "https://meli.la/1N7GUER",
        envioGratis: true,
        calificacion: 4.8
    },
    {
        categoria: "tecnologia",
        imagen: "https://res.cloudinary.com/dmhmynwqc/image/upload/v1774547726/D_NQ_NP_2X_848686-MLA99382703094_112025-F_lpkwdu.webp",
        titulo: "Smart Tv Led 50 Motorola 4k 91MT5000",
        precio: "$674.499",
        precioAntiguo: "$1.099.999",
        descuento: "38% OFF",
        link: "https://meli.la/1CrQaDY",
        envioGratis: true,
        calificacion: 4.8
    },
    {
        categoria: "tecnologia",
        imagen: "https://res.cloudinary.com/dmhmynwqc/image/upload/v1774548400/D_NQ_NP_2X_893539-MLA107110980718_022026-F_robudf.webp",
        titulo: "Smart TV 50” Gadnic FHD Pulgadas WiFi Procesador Quad Core Sonido Estéreo 20W",
        precio: "$465.699",
        precioAntiguo: "$699.999",
        descuento: "38% OFF",
        link: "https://meli.la/1CrQaDY",
        envioGratis: true,
        calificacion: 4.3
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