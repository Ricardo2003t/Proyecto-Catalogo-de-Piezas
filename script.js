// ========================================
// MANEJO DEL BACK BUTTON - EVITAR SALIR DE LA WEB
// ========================================
window.addEventListener('load', function() {
    // Agregar un estado inicial al historial
    history.pushState(null, null, location.href);
    
    // Interceptar el botón atrás
    window.addEventListener('popstate', function() {
        // Volver a agregar el estado para evitar que salga
        history.pushState(null, null, location.href);
        
        // Cerrar modal si está abierto
        const modal = document.getElementById('modal-producto');
        if (modal && modal.classList.contains('flex')) {
            cerrarModal();
        }
    });
});

// Base de datos de productos
const productos = [
    {
        marca: 'hyundai',
        nombre: 'Filtro de Aceite H100',
        modelo: ['h100'],
        precio: 8.00,
        imagenes: [
            'Piezas/Hyundai/Filtro de Aceite  H100 (Foto 1).png',
            'Piezas/Hyundai/Filtro de Aceite  H100 (Foto 2).png'
        ],
        descripcion: 'Filtro de aceite original para Hyundai H100. Proporciona máxima protección al motor eliminando impurezas. Compatible con motores diesel y gasolina. Cambio recomendado cada 10,000 km o según indicaciones del fabricante.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Filtro de Aceite M20',
        modelo: ['universal'],
        precio: 8.00,
        imagenes: [
            'Piezas/Peugeot/Filtro Aceite M20.png'
        ],
        descripcion: 'Filtro de aceite M20 compatible con todos los modelos Peugeot. Filtración eficiente que protege el motor de impurezas y partículas. Garantiza mayor durabilidad del motor y mejor rendimiento. Cambio recomendado cada 10,000 km.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Camisas + Pistones',
        modelo: ['301', 'xud9', 'tud5', 'tu3', 'dvv8'],
        precio: 1.00,
        imagenes: [
            'Piezas/Peugeot/Camisas + Pistones.png'
        ],
        descripcion: 'Kit completo de camisas y pistones para motores Peugeot. Conjunto de alta precisión que garantiza un sellado perfecto y máximo rendimiento. Fabricado con materiales de primera calidad resistentes al desgarre.',
        disponible: true,
        oferta: true
    },
    {
        marca: 'peugeot',
        nombre: 'Junta de Block Metal',
        modelo: ['dvv8', 'xud9'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Junta de Block Metal DVV8 XUD9.png'],
        descripcion: 'Junta de block metal de alta calidad para motores DVV8 y XUD9.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Kit Clutch',
        modelo: ['tud5'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Kit Clutch TUD5.png'],
        descripcion: 'Kit completo de embrague para motor TUD5.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Kit de Retenes',
        modelo: ['universal'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Kit de Retenes (peugeot).png'],
        descripcion: 'Kit completo de retenes para motores Peugeot.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Kit Distribución',
        modelo: ['dvv8'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Kit Distribucion DVV8.png'],
        descripcion: 'Kit de distribución completo para motor DVV8.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Kit Distribución',
        modelo: ['tud5'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Kit Distribucion TUD5.png'],
        descripcion: 'Kit de distribución completo para motor TUD5.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Kit Distribución',
        modelo: ['xud7', 'xud9'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Kit Distribucion XUD9 XUD7.png'],
        descripcion: 'Kit de distribución completo para motores XUD7 y XUD9.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Líquido Freno',
        modelo: ['otras'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Liquido Freno (1 litro).PNG'],
        descripcion: 'Líquido de freno de 1 litro, especificación DOT 4.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Metales de Biela y Bancada',
        modelo: ['tud5', 'xud9', 'dvv8', 'tu5jp4'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Metales de Biela y Bancada TUD5 XUD9 XUD9turbo DVV8 TU5JP4(301).png'],
        descripcion: 'Metales de biela y bancada para múltiples motores Peugeot.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Motor de Arranque',
        modelo: ['tud5', 'tu5jp4'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Motor Aranque TUD5 TU5JP4(301).png'],
        descripcion: 'Motor de arranque para motores TUD5 y TU5JP4.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Motor de Arranque',
        modelo: ['xud7', 'xud9', 'dvv8'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Motor Aranque XUD9 DVV8 XUD7.png'],
        descripcion: 'Motor de arranque para motores XUD7, XUD9 y DVV8.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Pistones Aros Pasador',
        modelo: ['tud5', 'dvv8', 'xud9'],
        precio: 1.00,
        imagenes: [
            'Piezas/Peugeot/Piston Aros Pasador TUD5 DVV8 XUD9 (foto1).png',
            'Piezas/Peugeot/Piston Aros Pasador TUD5 DVV8 XUD9 (foto2).png'
        ],
        descripcion: 'Kit de pistones, aros y pasadores para motores TUD5, DVV8 y XUD9.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Pulmón Presión Aceite',
        modelo: ['universal'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Pulmon Pesion Aceite (peugeot).png'],
        descripcion: 'Pulmón de presión de aceite para motores Peugeot.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Radiador',
        modelo: ['301'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Radiador 301.png'],
        descripcion: 'Radiador refrigerante para motor 301.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Retenes de Bastón',
        modelo: ['xud9', 'dvv8'],
        precio: 1.00,
        imagenes: [
            'Piezas/Peugeot/Retenes de Baston XUD9 DVV8 (foto1).png',
            'Piezas/Peugeot/Retenes de Baston XUD9 DVV8 (foto2).png'
        ],
        descripcion: 'Retenes de bastón para motores XUD9 y DVV8.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Tornillos Block',
        modelo: ['xud9', 'dvv8'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Tornillos Block XUD9 DVV8.PNG'],
        descripcion: 'Set de tornillos de block para motores XUD9 y DVV8.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Aceite Caja Automática',
        modelo: ['otras'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Aceite Caja Automatica.PNG'],
        descripcion: 'Aceite para cajas de cambio automáticas.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Aceite Caja Mecánica 4L',
        modelo: ['otras'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Aceite Caja Mecanica (4 litros).PNG'],
        descripcion: 'Aceite para cajas de cambio mecánicas, 4 litros.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Aceite Motor 10W-40',
        modelo: ['otras'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Aceite Motor 10W-40 (1 litro).PNG'],
        descripcion: 'Aceite motor 10W-40, 1 litro.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Aceite Motor 15W-40',
        modelo: ['otras'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Aceite Motor 15W-40 (5 litros).PNG'],
        descripcion: 'Aceite motor 15W-40, 5 litros.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Aceite Motor 20W-50 1L',
        modelo: ['otras'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Aceite Motor 20W-50 (1 litro).PNG'],
        descripcion: 'Aceite motor 20W-50, 1 litro.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Aceite Motor 20W-50 5L',
        modelo: ['otras'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Aceite Motor 20W-50 (5 litros).PNG'],
        descripcion: 'Aceite motor 20W-50, 5 litros.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Arandelas de Traslado',
        modelo: ['tud5', 'xud9', 'dvv8'],
        precio: 1.00,
        imagenes: [
            'Piezas/Peugeot/Arandelas de Traslado TUD5 XUD9 DVV8 XUD9turbo (foto1).png',
            'Piezas/Peugeot/Arandelas de Traslado TUD5 XUD9 DVV8 XUD9turbo (foto2).png'
        ],
        descripcion: 'Arandelas de traslado para motores TUD5, XUD9 y DVV8.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Árbol de Levas',
        modelo: ['xud7', 'xud9', 'dvv8'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Arbol Levas XUD7 XUD9 DVV8.png'],
        descripcion: 'Árbol de levas para motores XUD7, XUD9 y DVV8.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Bobina Encendida',
        modelo: ['301'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Bobina Encendida 301.png'],
        descripcion: 'Bobina de encendido para motor 301.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Aros de Pistón',
        modelo: ['tud5', 'xud9', 'dvv8', 'tu5jp4'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Aros de Piston  TUD5 XUD9 XUD9Turbo DVV8 TU5JP4(301).png'],
        descripcion: 'Aros de pistón para múltiples motores Peugeot.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Bomba de Agua',
        modelo: ['t1', 'tu3'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Bomba Agua T1 TU3.png'],
        descripcion: 'Bomba de agua para motores T1 y TU3.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Bomba de Agua',
        modelo: ['tud5', 'tu5jp4'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Bomba Agua TUD5 TUD5JP4(301).png'],
        descripcion: 'Bomba de agua para motores TUD5 y TU5JP4.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Brazos Cremallera',
        modelo: ['301'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Brazos Cremallera 301.PNG'],
        descripcion: 'Brazos de cremallera para motor 301.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Brazos Cremallera',
        modelo: ['405'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Brazos Cremallera 405.PNG'],
        descripcion: 'Brazos de cremallera para motor 405.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Bujías de Precalentamiento',
        modelo: ['xud9'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Bujias de Precalentamiento XUD9.png'],
        descripcion: 'Bujías de precalentamiento para motor XUD9.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Camisas',
        modelo: ['tud5', 'xud9', 'dvv8'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Camisas TUD5 XUD9 DVV8.png'],
        descripcion: 'Camisas de cilindro para motores TUD5, XUD9 y DVV8.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Correa Distribución 136 140 141',
        modelo: ['otras'],
        precio: 1.00,
        imagenes: [
            'Piezas/Peugeot/Correa Distribucion 136 , 140 , 141  (foto1).png',
            'Piezas/Peugeot/Correa Distribucion 136 , 140 , 141  (foto2).png'
        ],
        descripcion: 'Correa de distribución con opciones de 136, 140 o 141 dientes.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Cubo de Rueda',
        modelo: ['205', '206', '207', '308', '306', '307', '309', '405', '406', 'partner'],
        precio: 1.00,
        imagenes: [
            'Piezas/Peugeot/Cubo de Rueda (Peugeo citroent) (foto1) 205 206 207 308 306 307 309 405 406 Partner.png',
            'Piezas/Peugeot/Cubo de Rueda (Peugeo citroent) (foto3) 205 206 207 308 306 307 309 405 406 Partner.png',
            'Piezas/Peugeot/Cubo de Rueda (Peugeo citroent) (foto4) 205 206 207 308 306 307 309 405 406 Partner.png',
            'Piezas/Peugeot/Cubo de Rueda (Peugeot Citroen) (foto2) Cubo de Rueda (Peugeo citroent) (foto1) 205 206 207 308 306 307 309 405 406 Partner.png'
        ],
        descripcion: 'Cubo de rueda compatible con múltiples modelos Peugeot y Citroën.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Dampers',
        modelo: ['dvv8'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Dampers DVV8.png'],
        descripcion: 'Amortiguadores para motor DVV8.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Dampers',
        modelo: ['tud5'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Dampers TUD5.png'],
        descripcion: 'Amortiguadores para motor TUD5.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Dampers',
        modelo: ['xud7', 'xud9'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Dampers XUD9 XUD7.png'],
        descripcion: 'Amortiguadores para motores XUD7 y XUD9.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Electroventilador',
        modelo: ['301'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Electroventilador (peugeot) 301 Citroen.png'],
        descripcion: 'Electroventilador para motor 301.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Filtro de Petróleo',
        modelo: ['tud5'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Filtro Petroleo TUD5.png'],
        descripcion: 'Filtro de petróleo para motor TUD5.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Junta Block Amianto',
        modelo: ['tud5'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Junta Block Amianto TUD5.png'],
        descripcion: 'Junta de block de amianto para motor TUD5.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Junta Block Metal',
        modelo: ['tud5'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Junta Block Metal TUD5.png'],
        descripcion: 'Junta de block de metal para motor TUD5.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Junta de Balancines',
        modelo: ['xud9'],
        precio: 1.00,
        imagenes: [
            'Piezas/Peugeot/Junta de Balancines XUD9 (foto1).png',
            'Piezas/Peugeot/Junta de Balancines XUD9 (foto2).png'
        ],
        descripcion: 'Junta de balancines para motor XUD9.',
        disponible: true
    },
    {
        marca: 'peugeot',
        nombre: 'Junta de Block Amianto',
        modelo: ['dvv8', 'xud9'],
        precio: 1.00,
        imagenes: ['Piezas/Peugeot/Junta de Block Amianto DVV8 XUD9.png'],
        descripcion: 'Junta de block de amianto para motores DVV8 y XUD9.',
        disponible: true
    }
];

// Variables globales
let modeloActivo = 'todos';
let marcaActiva = 'todos';
let productosAMostrar = productos;
const WHATSAPP_NUMBER = '+5354269053';

// Obtener todos los modelos únicos disponibles
function obtenerModelosDisponibles() {
    const modelos = new Set();
    productos.forEach(producto => {
        producto.modelo.forEach(m => modelos.add(m));
    });
    return Array.from(modelos).sort();
}

// Actualizar visibilidad de botones de modelo según marca seleccionada
function actualizarModelosVisibles(marca) {
    const tabsModelo = document.querySelectorAll('.tab-option[data-tipo="modelo"]');
    
    tabsModelo.forEach(tab => {
        const dataMarca = tab.getAttribute('data-marca');
        const esBotonTodos = tab.getAttribute('data-modelo') === 'todos';
        
        // El botón "Todos" siempre es visible
        if (esBotonTodos) {
            tab.style.display = 'inline-block';
        }
        // Si no tiene marca asignada, mostrarlo siempre
        else if (!dataMarca) {
            tab.style.display = 'inline-block';
        }
        // Si la marca seleccionada es "todos", mostrar todos los modelos
        else if (marca === 'todos') {
            tab.style.display = 'inline-block';
        }
        // Si la marca del botón coincide con la seleccionada, mostrar
        else if (dataMarca === marca) {
            tab.style.display = 'inline-block';
        }
        // Si no coincide, ocultar
        else {
            tab.style.display = 'none';
        }
    });
}

// Inicializar cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
    configurarEventos();
    configurarMenuHamburger();
    configurarBuscadorHeader();
    agregarEfectoScroll();
    configurarFiltrosSticky();
    // Inicializar modelos visibles con marca "todos"
    actualizarModelosVisibles('todos');
});

// Configurar buscador en el header y móvil
function configurarBuscadorHeader() {
    const buscadorMobile = document.getElementById('buscador-header');
    const buscadorDesktop = document.getElementById('buscador-header-desktop');
    const buscadorOriginal = document.getElementById('buscador');
    const searchToggle = document.getElementById('search-toggle');
    const searchToggleMobile = document.getElementById('search-toggle-mobile');
    const searchMobileWrapper = document.querySelector('.search-mobile-wrapper');
    const headerLogo = document.querySelector('.header-logo');
    const catalogoSection = document.getElementById('catalogo');
    
    // Función para hacer scroll a catálogo
    function scrollAlCatalogo() {
        if (catalogoSection) {
            catalogoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    // Función para expandir búsqueda móvil
    function expandirBuscadorMovil() {
        if (buscadorMobile) {
            buscadorMobile.classList.add('expanded');
            if (searchMobileWrapper) searchMobileWrapper.classList.add('expanded');
            if (headerLogo) headerLogo.classList.add('hidden');
            scrollAlCatalogo();
            buscadorMobile.focus();
        }
    }
    
    // Función para contraer búsqueda móvil
    function contraerBuscadorMovil() {
        if (buscadorMobile) {
            buscadorMobile.classList.remove('expanded');
            if (searchMobileWrapper) searchMobileWrapper.classList.remove('expanded');
            if (headerLogo) headerLogo.classList.remove('hidden');
            buscadorMobile.value = '';
            if (buscadorDesktop) buscadorDesktop.value = '';
            filtrarProductos();
        }
    }
    
    // Click en la lupa desktop para activar búsqueda y scroll
    if (searchToggle) {
        searchToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            scrollAlCatalogo();
            buscadorDesktop?.focus();
        });
    }
    
    // Click en la lupa móvil para expandir
    if (searchToggleMobile) {
        searchToggleMobile.addEventListener('click', function(e) {
            e.stopPropagation();
            expandirBuscadorMovil();
        });
    }
    
    // Focus en buscador móvil = scroll
    if (buscadorMobile) {
        buscadorMobile.addEventListener('focus', function() {
            expandirBuscadorMovil();
        });
        
        buscadorMobile.addEventListener('input', function() {
            if (buscadorDesktop) buscadorDesktop.value = this.value;
            if (buscadorOriginal) buscadorOriginal.value = this.value;
            filtrarProductos();
        });
        
        buscadorMobile.addEventListener('blur', function() {
            // Esperar 200ms antes de contraer para permitir clicks en otros elementos
            setTimeout(() => {
                if (buscadorMobile.value === '') {
                    contraerBuscadorMovil();
                }
            }, 200);
        });
        
        buscadorMobile.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                contraerBuscadorMovil();
            }
        });
    }
    
    // Focus en buscador desktop = scroll
    if (buscadorDesktop) {
        buscadorDesktop.addEventListener('focus', function() {
            scrollAlCatalogo();
        });
        
        buscadorDesktop.addEventListener('input', function() {
            if (buscadorMobile) buscadorMobile.value = this.value;
            if (buscadorOriginal) buscadorOriginal.value = this.value;
            filtrarProductos();
        });
        
        buscadorDesktop.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                this.value = '';
                if (buscadorMobile) buscadorMobile.value = '';
                if (buscadorOriginal) buscadorOriginal.value = '';
                filtrarProductos();
            }
        });
    }
}

// Configurar menú hamburger
function configurarMenuHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navMenuMobile = document.getElementById('nav-menu-mobile');
    const menuOverlay = document.getElementById('menu-overlay');
    const closeMenu = document.getElementById('close-menu');
    const navLinks = document.querySelectorAll('#nav-menu-mobile a');

    if (!hamburger || !navMenuMobile) return;

    // Abrir menú
    hamburger.addEventListener('click', function() {
        hamburger.classList.add('active');
        navMenuMobile.classList.add('open');
        menuOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        // Ocultar filtros
        document.querySelector('.filtro-tabs').style.display = 'none';
        document.querySelector('.filtro-tabs-modelos').style.display = 'none';
    });

    // Cerrar menú con botón X
    closeMenu.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenuMobile.classList.remove('open');
        menuOverlay.classList.remove('open');
        document.body.style.overflow = 'auto';
        // Mostrar filtros
        document.querySelector('.filtro-tabs').style.display = 'block';
        document.querySelector('.filtro-tabs-modelos').style.display = 'block';
    });

    // Cerrar menú al hacer clic en overlay
    menuOverlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenuMobile.classList.remove('open');
        menuOverlay.classList.remove('open');
        document.body.style.overflow = 'auto';
        // Mostrar filtros
        document.querySelector('.filtro-tabs').style.display = 'block';
        document.querySelector('.filtro-tabs-modelos').style.display = 'block';
    });

    // Cerrar menú al hacer clic en un link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenuMobile.classList.remove('open');
            menuOverlay.classList.remove('open');
            document.body.style.overflow = 'auto';
            // Mostrar filtros
            document.querySelector('.filtro-tabs').style.display = 'block';
            document.querySelector('.filtro-tabs-modelos').style.display = 'block';
        });
    });
}

// Efecto de scroll
function agregarEfectoScroll() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('shadow-xl');
        } else {
            header.classList.remove('shadow-xl');
        }
    });
}

// Configurar filtros sticky
function configurarFiltrosSticky() {
    const filtroTabs = document.querySelector('.filtro-tabs');
    const filtroTabsModelos = document.querySelector('.filtro-tabs-modelos');
    const productosSection = document.querySelector('.productos');
    
    if (!filtroTabs || !productosSection) return;
    
    // Inicializar con fondo transparente
    filtroTabs.style.opacity = '1';
    filtroTabs.style.backgroundColor = 'transparent';
    filtroTabsModelos.style.opacity = '1';
    filtroTabsModelos.style.backgroundColor = 'transparent';
    
    let isFixed = false;
    
    window.addEventListener('scroll', function() {
        const productoRect = productosSection.getBoundingClientRect().top;
        const headerHeight = document.querySelector('header').offsetHeight;
        
        // Si la sección de productos está por encima del viewport
        if (productoRect <= headerHeight && !isFixed) {
            isFixed = true;
            filtroTabs.style.position = 'fixed';
            filtroTabs.style.top = headerHeight + 'px';
            filtroTabs.style.left = '0';
            filtroTabs.style.right = '0';
            filtroTabs.style.width = '100%';
            filtroTabs.style.zIndex = '90';
            filtroTabs.style.backgroundColor = '#ffffff';
            filtroTabs.style.boxSizing = 'border-box';
            filtroTabs.style.opacity = '1';
            filtroTabs.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            filtroTabs.classList.add('fixed-animated');
            
            filtroTabsModelos.style.position = 'fixed';
            filtroTabsModelos.style.top = (headerHeight + filtroTabs.offsetHeight) + 'px';
            filtroTabsModelos.style.left = '0';
            filtroTabsModelos.style.right = '0';
            filtroTabsModelos.style.width = '100%';
            filtroTabsModelos.style.zIndex = '90';
            filtroTabsModelos.style.backgroundColor = '#ffffff';
            filtroTabsModelos.style.boxSizing = 'border-box';
            filtroTabsModelos.style.opacity = '1';
            filtroTabsModelos.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            filtroTabsModelos.classList.add('fixed-animated');
        } else if (productoRect > headerHeight && isFixed) {
            isFixed = false;
            filtroTabs.style.position = 'static';
            filtroTabs.style.width = 'auto';
            filtroTabs.style.opacity = '1';
            filtroTabs.style.boxShadow = 'none';
            filtroTabs.style.backgroundColor = 'transparent';
            filtroTabs.classList.remove('fixed-animated');
            
            filtroTabsModelos.style.position = 'static';
            filtroTabsModelos.style.width = 'auto';
            filtroTabsModelos.style.opacity = '1';
            filtroTabsModelos.style.boxShadow = 'none';
            filtroTabsModelos.style.backgroundColor = 'transparent';
            filtroTabsModelos.classList.remove('fixed-animated');
        }
    });
}


// Cargar productos en tarjetas
function cargarProductos() {
    const grid = document.getElementById('productos-grid');
    const sinResultados = document.getElementById('sin-resultados');
    
    grid.innerHTML = '';
    
    if (productosAMostrar.length === 0) {
        sinResultados.classList.remove('hidden');
        return;
    }
    
    sinResultados.classList.add('hidden');
    
    productosAMostrar.forEach((producto, index) => {
        const card = document.createElement('div');
        const disponible = producto.disponible !== false;
        card.className = `producto-card ${!disponible ? 'no-disponible' : ''}`;
        const modelosTexto = Array.isArray(producto.modelo) ? producto.modelo.map(m => m.toUpperCase()).join('      ') : producto.modelo.toUpperCase();
        
        // Soportar tanto imagen (string) como imagenes (array)
        const imagenes = Array.isArray(producto.imagenes) ? producto.imagenes : [producto.imagen];
        const primerImagen = imagenes[0];
        const tieneMultiplesImagenes = imagenes.length > 1;
        
        // Crear HTML del carrusel
        let carouselHTML = '';
        if (tieneMultiplesImagenes) {
            carouselHTML = `
                <div class="carousel-container" data-carousel="${index}">
                    <div class="carousel-inner">
                        ${imagenes.map((img, i) => `
                            <div class="carousel-item ${i === 0 ? 'active' : ''}" style="background-image: url('${img}'); background-size: cover; background-position: center;">
                                <img src="${img}" alt="${producto.nombre}" style="width: 100%; height: 100%; object-fit: cover;">
                            </div>
                        `).join('')}
                    </div>
                    <div class="carousel-dots">
                        ${imagenes.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}" data-slide="${i}"></span>`).join('')}
                    </div>
                </div>
            `;
        } else {
            carouselHTML = `
                <div class="producto-imagen" style="background-image: url('${primerImagen}'); background-size: cover; background-position: center;">
                    <img src="${primerImagen}" alt="${producto.nombre}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            `;
        }
        
        card.innerHTML = `
            <div class="imagen-wrapper">
                ${carouselHTML}
            </div>
            ${producto.oferta ? '<div class="oferta-badge">OFERTA</div>' : ''}
            <div class="producto-body">
                <h3 class="producto-nombre">${producto.nombre}</h3>
                <span class="producto-modelo">${modelosTexto}</span>
                <div class="py-3 border-t border-slate-200"></div>
                <div class="flex justify-between items-center">
                    <div class="producto-precio">$${producto.precio.toFixed(2)}</div>
                    <div class="producto-disponibilidad-badge ${disponible ? 'disponible' : 'no-disponible'}">
                        ${disponible ? 'Disponible' : 'No disponible'}
                    </div>
                </div>
            </div>
        `;
        
        // Configurar carrusel si tiene múltiples imágenes
        if (tieneMultiplesImagenes) {
            const carousel = card.querySelector('.carousel-container');
            configurarCarrusel(carousel, imagenes);
        }
        
        card.addEventListener('click', () => abrirModal(producto));
        grid.appendChild(card);
    });
}

// Configurar carrusel con soporte para swipe
function configurarCarrusel(container, imagenes) {
    const inner = container.querySelector('.carousel-inner');
    const dots = container.querySelectorAll('.dot');
    let currentIndex = 0;
    let startX = 0;
    let endX = 0;
    
    // Click en dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            irASlide(index);
        });
    });
    
    // Touch swipe
    container.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].screenX;
    }, false);
    
    container.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].screenX;
        detectarSwipe();
    }, false);
    
    function detectarSwipe() {
        const diff = startX - endX;
        if (Math.abs(diff) > 50) { // Umbral de 50px para considerar swipe
            if (diff > 0) {
                // Swipe a la izquierda -> siguiente imagen
                irASlide((currentIndex + 1) % imagenes.length);
            } else {
                // Swipe a la derecha -> imagen anterior
                irASlide((currentIndex - 1 + imagenes.length) % imagenes.length);
            }
        }
    }
    
    function irASlide(index) {
        currentIndex = index;
        inner.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        dots.forEach((d, i) => {
            d.classList.toggle('active', i === currentIndex);
        });
    }
}

// Configurar eventos principales
function configurarEventos() {
    // Tabs (marca y modelo)
    document.querySelectorAll('.tab-option').forEach(tab => {
        tab.addEventListener('click', function() {
            const tipo = this.getAttribute('data-tipo');
            
            if (tipo === 'marca') {
                // Actualizar marca
                document.querySelectorAll('.tab-option[data-tipo="marca"]').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                marcaActiva = this.getAttribute('data-marca');
                
                // Resetear modelo al cambiar marca
                modeloActivo = 'todos';
                document.querySelectorAll('.tab-option[data-tipo="modelo"]').forEach(t => {
                    t.classList.remove('active-modelo');
                    if (t.getAttribute('data-modelo') === 'todos') t.classList.add('active-modelo');
                });
                
                // Mostrar/ocultar modelos según marca
                actualizarModelosVisibles(marcaActiva);
                filtrarProductos();
            }
            else if (tipo === 'modelo') {
                // Actualizar modelo
                document.querySelectorAll('.tab-option[data-tipo="modelo"]').forEach(t => t.classList.remove('active-modelo'));
                this.classList.add('active-modelo');
                modeloActivo = this.getAttribute('data-modelo');
                filtrarProductos();
            }
        });
    });
    
    // Buscador
    const buscador = document.getElementById('buscador');
    if (buscador) {
        buscador.addEventListener('input', filtrarProductos);
    }
    
    // Modal
    const modalClose = document.querySelector('.modal-close');
    const modal = document.getElementById('modal-producto');
    
    if (modalClose) {
        modalClose.addEventListener('click', cerrarModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                cerrarModal();
            }
        });
    }
}

// Función para calcular similitud (Levenshtein)
function calcularSimilitud(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = getEditDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
}

function getEditDistance(s1, s2) {
    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0) {
                costs[j] = j;
            } else if (j > 0) {
                let newValue = costs[j - 1];
                if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                    newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                }
                costs[j - 1] = lastValue;
                lastValue = newValue;
            }
        }
        if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

// Filtrar productos con búsqueda fuzzy
function filtrarProductos() {
    const terminoBusqueda = (document.getElementById('buscador')?.value || '').toLowerCase().trim();
    
    if (terminoBusqueda === '') {
        productosAMostrar = productos.filter(producto => 
            (marcaActiva === 'todos' || producto.marca === marcaActiva) &&
            (modeloActivo === 'todos' || producto.modelo.includes(modeloActivo))
        );
    } else {
        const palabrasBusqueda = terminoBusqueda.split(' ').filter(p => p.length > 0);
        
        const productosConPuntuacion = productos.map(producto => {
            const matchMarca = marcaActiva === 'todos' || producto.marca === marcaActiva;
            const matchModelo = modeloActivo === 'todos' || producto.modelo.includes(modeloActivo);
            if (!matchMarca || !matchModelo) return { producto, puntuacion: -1 };
            
            const textoProducto = `${producto.nombre}`.toLowerCase();
            const palabrasProducto = textoProducto.split(' ');
            let puntuacion = 0;
            
            // Búsqueda exacta exacta
            if (textoProducto.includes(terminoBusqueda)) {
                puntuacion = 10000;
            } else {
                // Búsqueda por palabras individuales con fuzzy matching
                palabrasBusqueda.forEach(palabra => {
                    // Búsqueda exacta de palabra
                    if (textoProducto.includes(palabra)) {
                        puntuacion += 1000;
                    } else {
                        // Búsqueda fuzzy: comparar con cada palabra del producto
                        let maxSimilitud = 0;
                        palabrasProducto.forEach(palabraProducto => {
                            const similitud = calcularSimilitud(palabraProducto, palabra);
                            if (similitud > maxSimilitud) {
                                maxSimilitud = similitud;
                            }
                        });
                        // Bonus si la similitud es mayor a 0.4 (40%)
                        if (maxSimilitud > 0.4) {
                            puntuacion += maxSimilitud * 500;
                        }
                    }
                });
                
                // Bonus general por similitud del nombre completo
                const similitudCompleta = calcularSimilitud(textoProducto, terminoBusqueda);
                if (similitudCompleta > 0.3) {
                    puntuacion += similitudCompleta * 200;
                }
            }
            
            return { producto, puntuacion };
        }).sort((a, b) => b.puntuacion - a.puntuacion)
         .filter(item => item.puntuacion > 0);
        
        // Si no hay resultados, mostrar todos (fallback)
        if (productosConPuntuacion.length === 0) {
            productosAMostrar = productos.filter(producto => 
                (marcaActiva === 'todos' || producto.marca === marcaActiva) &&
                (modeloActivo === 'todos' || producto.modelo.includes(modeloActivo))
            );
        } else {
            productosAMostrar = productosConPuntuacion.map(item => item.producto);
        }
    }
    
    cargarProductos();
}

// Abrir modal con detalles
function abrirModal(producto) {
    const modelosTexto = Array.isArray(producto.modelo) ? producto.modelo.map(m => m.toUpperCase()).join('      ') : producto.modelo.toUpperCase();
    const disponible = producto.disponible !== false;
    const imagenes = Array.isArray(producto.imagenes) ? producto.imagenes : [producto.imagen];
    const tieneMultiplesImagenes = imagenes.length > 1;
    
    // Ocultar filtros
    document.querySelector('.filtro-tabs').style.display = 'none';
    document.querySelector('.filtro-tabs-modelos').style.display = 'none';
    
    // Actualizar información del producto
    document.getElementById('modal-nombre').textContent = producto.nombre;
    document.getElementById('modal-modelo').textContent = modelosTexto;
    document.getElementById('modal-precio').textContent = `$${producto.precio.toFixed(2)}`;
    document.getElementById('modal-descripcion').textContent = producto.descripcion;
    
    const disponibilidadBadge = document.getElementById('modal-disponibilidad-badge');
    disponibilidadBadge.textContent = disponible ? 'Disponible' : 'No disponible';
    disponibilidadBadge.className = `producto-disponibilidad-badge ${disponible ? 'disponible' : 'no-disponible'}`;
    
    // Crear carrusel o imagen simple
    const imageContainer = document.getElementById('modal-imagen-container');
    imageContainer.innerHTML = '';
    
    if (tieneMultiplesImagenes) {
        // Crear carrusel
        const carouselHTML = `
            <div class="carousel-container modal-carousel">
                <div class="carousel-inner">
                    ${imagenes.map((img, i) => `
                        <div class="carousel-item ${i === 0 ? 'active' : ''}" style="background-image: url('${img}'); background-size: cover; background-position: center;">
                            <img src="${img}" alt="${producto.nombre}" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                    `).join('')}
                </div>
                <div class="carousel-dots">
                    ${imagenes.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}" data-slide="${i}"></span>`).join('')}
                </div>
            </div>
        `;
        imageContainer.innerHTML = carouselHTML;
        
        // Configurar el carrusel del modal
        const carousel = imageContainer.querySelector('.carousel-container');
        configurarCarruselModal(carousel, imagenes);
    } else {
        // Imagen simple
        const img = document.createElement('img');
        img.id = 'modal-img';
        img.src = imagenes[0] || '';
        img.alt = producto.nombre;
        imageContainer.appendChild(img);
    }
    
    const whatsappBtn = document.getElementById('btn-whatsapp');
    if (disponible) {
        const mensaje = `Hola, estoy interesado en: ${producto.nombre} (${modelosTexto}) - $${producto.precio.toFixed(2)}. ¿Tiene disponibilidad?`;
        whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
        whatsappBtn.classList.remove('hidden');
    } else {
        whatsappBtn.classList.add('hidden');
    }
    
    document.getElementById('modal-producto').classList.remove('hidden');
    document.getElementById('modal-producto').classList.add('flex');
}

// Configurar carrusel en el modal con soporte para swipe
function configurarCarruselModal(container, imagenes) {
    const inner = container.querySelector('.carousel-inner');
    const dots = container.querySelectorAll('.dot');
    let currentIndex = 0;
    let startX = 0;
    let endX = 0;
    
    // Click en dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            irASlideModal(index);
        });
    });
    
    // Touch swipe
    container.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].screenX;
    }, false);
    
    container.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].screenX;
        detectarSwipeModal();
    }, false);
    
    function detectarSwipeModal() {
        const diff = startX - endX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                irASlideModal((currentIndex + 1) % imagenes.length);
            } else {
                irASlideModal((currentIndex - 1 + imagenes.length) % imagenes.length);
            }
        }
    }
    
    function irASlideModal(index) {
        currentIndex = index;
        inner.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        dots.forEach((d, i) => {
            d.classList.toggle('active', i === currentIndex);
        });
    }
}

// Cerrar modal
function cerrarModal() {
    document.getElementById('modal-producto').classList.add('hidden');
    document.getElementById('modal-producto').classList.remove('flex');
    
    // Mostrar filtros nuevamente
    document.querySelector('.filtro-tabs').style.display = 'block';
    document.querySelector('.filtro-tabs-modelos').style.display = 'block';
}

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
