(() => {
    // compose functions
    const $ = selector =>  document.querySelector(selector)
        
    const elementCreator = (parent, tagName, content) => {
        parent.innerHTML = `<${tagName}> ${content} </${tagName}>`
    }
    const compose = (select, add) => function (tagParen, tagInsert, content) {
        add(select(tagParen), tagInsert, content)
    }
    const selectAndAdd = compose($, elementCreator)


    const list = "hola mundo asd asdasd as dasd as".split(" ")

    const pipeCompose = (...arrFnc) => (data) =>  arrFnc.reduce((acumulado, fnc)=> fnc(acumulado),data)

    // Funciones
    const uppercase = data => data.map(e=> e.toUpperCase())
    const concat = data => data.reduce((ac, e)=> ac + e)
    const log =  data => data.map(e=> {console.log(e); return e})
    const addElement =  data => data.map(e=> `<li>${e}</li>`)

    // ComposeCaller
    const addStyles = pipeCompose(uppercase,log, addElement, concat)

    $("header").innerHTML = addStyles(list)
    


})()