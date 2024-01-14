

function render( id, element ){
    const domContainer = document.querySelector(id);
    const root = ReactDOM.createRoot(domContainer);
    root.render(element);
}