/**
 * 🔍 Script de Validación - Optimización WebP
 * Ejecutar en la consola del navegador (F12) para verificar que WebP está configurado correctamente
 * 
 * Uso:
 * 1. Abre la web en el navegador
 * 2. Presiona F12 para abrir DevTools
 * 3. Ve a la pestaña "Console"
 * 4. Copia y pega este código
 * 5. Presiona Enter
 */

console.clear();
console.log('%c🖼️ VALIDACIÓN DE OPTIMIZACIÓN WebP', 'font-size: 18px; font-weight: bold; color: #2563eb;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #2563eb;');

// 1. Verificar si DEVICE_INFO existe
console.log('\n%c✓ PASO 1: Verificar Detección WebP', 'font-weight: bold; color: #059669;');
if (typeof DEVICE_INFO !== 'undefined') {
    console.log(`   • DEVICE_INFO.supportsWebP: ${DEVICE_INFO.supportsWebP}`);
    console.log(`   • Navegador: ${navigator.userAgent.split(' ').pop()}`);
} else {
    console.error('   ✗ ERROR: DEVICE_INFO no definido. ¿Está cargado script.js?');
}

// 2. Verificar si existen las funciones auxiliares
console.log('\n%c✓ PASO 2: Verificar Funciones Auxiliares', 'font-weight: bold; color: #059669;');
const funciones = ['obtenerRutasImagen', 'generarSrcSet', 'generarImagenOptimizada'];
funciones.forEach(func => {
    if (typeof window[func] === 'function') {
        console.log(`   ✓ ${func}() existe`);
    } else {
        console.warn(`   ✗ ${func}() NO existe`);
    }
});

// 3. Probar conversión de rutas
console.log('\n%c✓ PASO 3: Probar Conversión de Rutas', 'font-weight: bold; color: #059669;');
const rutaTest = 'Piezas/Peugeot/Aceite Motor 20W-50.png';
const resultado = obtenerRutasImagen(rutaTest);
console.log(`   Entrada: ${rutaTest}`);
console.log(`   Salida WebP: ${resultado.webp}`);
console.log(`   Fallback: ${resultado.fallback}`);
console.log(`   Usar WebP: ${resultado.useWebP}`);

// 4. Contar imágenes en la página
console.log('\n%c✓ PASO 4: Estadísticas de Imágenes', 'font-weight: bold; color: #059669;');
const totalImgs = document.querySelectorAll('img').length;
const pictureTags = document.querySelectorAll('picture').length;
console.log(`   Total de <img> tags: ${totalImgs}`);
console.log(`   Total de <picture> tags: ${pictureTags}`);

// 5. Analizar imágenes WebP cargadas
console.log('\n%c✓ PASO 5: Imágenes WebP Cargadas', 'font-weight: bold; color: #059669;');
const webpImages = document.querySelectorAll('img[src*=".webp"]');
if (webpImages.length > 0) {
    console.log(`   ✓ Se encontraron ${webpImages.length} imágenes WebP`);
    webpImages.forEach((img, i) => {
        if (i < 5) { // Mostrar solo las primeras 5
            console.log(`      ${i + 1}. ${img.src.substring(img.src.lastIndexOf('/') + 1)}`);
        }
    });
    if (webpImages.length > 5) {
        console.log(`      ... y ${webpImages.length - 5} más`);
    }
} else {
    console.warn('   ⚠️  No se encontraron imágenes WebP. ¿Las has convertido?');
}

// 6. Verificar Network requests
console.log('\n%c✓ PASO 6: Tamaños de Descarga (Network)', 'font-weight: bold; color: #059669;');
console.log('   📌 Para ver esta información:');
console.log('      1. Abre la pestaña "Network"');
console.log('      2. Recarga la página (F5)');
console.log('      3. Busca archivos .webp vs .png/.jpg');
console.log('      4. Compara tamaños (WebP debe ser 50-60% más pequeño)');

// 7. Test de rendimiento
console.log('\n%c✓ PASO 7: Análisis de Performance', 'font-weight: bold; color: #059669;');
if (typeof performance !== 'undefined' && performance.timing) {
    const pageLoadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`   Tiempo de carga de página: ${pageLoadTime}ms`);
}
if (typeof performance !== 'undefined' && performance.getEntriesByType) {
    const imageAssets = performance.getEntriesByType('resource').filter(r => 
        r.name.includes('.png') || r.name.includes('.jpg') || r.name.includes('.webp')
    );
    const totalImageSize = imageAssets.reduce((sum, asset) => sum + (asset.transferSize || 0), 0);
    console.log(`   Tamaño total de imágenes descargadas: ${(totalImageSize / 1024).toFixed(2)} KB`);
}

// 8. Resumen y recomendaciones
console.log('\n%c════════════════════════════════════════', 'color: #2563eb;');
console.log('%c📊 RESUMEN', 'font-size: 14px; font-weight: bold; color: #2563eb;');
console.log('%c════════════════════════════════════════', 'color: #2563eb;');

console.group('%cTransparent Background', 'color: white');
if (DEVICE_INFO.supportsWebP && webpImages.length > 0) {
    console.log('%c✅ TODO CORRECTO - Optimización WebP está funcionando', 'color: #059669; font-size: 12px; font-weight: bold;');
} else if (DEVICE_INFO.supportsWebP && webpImages.length === 0) {
    console.log('%c⚠️  ADVERTENCIA - Navegador soporta WebP pero no hay imágenes convertidas', 'color: #d97706; font-size: 12px;');
    console.log('   Próximo paso: Convertir imágenes PNG/JPG a WebP');
} else {
    console.log('%c⚠️  Navegador NO soporta WebP - Usando PNG/JPG (fallback)', 'color: #d97706; font-size: 12px;');
}
console.groupEnd();

console.log('\n%c🔗 DOCUMENTACIÓN', 'font-weight: bold; color: #7c3aed;');
console.log('   • Ver: INSTRUCCIONES_CAMBIOS.md');
console.log('   • Sección: "OPTIMIZACIÓN DE IMÁGENES A WebP"');

console.log('\n%c💡 COMANDOS ÚTILES', 'font-weight: bold; color: #7c3aed;');
console.log('   DEVICE_INFO.supportsWebP            // Ver soporte WebP');
console.log('   obtenerRutasImagen("ruta.png")      // Probar conversión');
console.log('   document.querySelectorAll("picture") // Ver picture tags');

console.log('\n%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'color: #2563eb;');
