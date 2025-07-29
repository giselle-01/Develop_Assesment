
export function notFound() {
    document.getElementById('app').innerHTML = `
    <div class="container">
    <h1>404</h1>
    <p>Página no encontrada</p>
    <a href="/">Volver al inicio</a>
    </div>`;
};