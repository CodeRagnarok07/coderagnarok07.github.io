
(() => {
    const container = document.getElementsByTagName('html')[0];
    

    if(window.matchMedia('(max-width: 1000px)').matches){
        container.setAttribute('data-theme', "dark");

    }else{
        container.setAttribute('data-theme', "light");

    }



})();