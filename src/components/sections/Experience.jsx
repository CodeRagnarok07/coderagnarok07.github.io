import { useRef, useState } from 'react'
import styles from './styles.module.scss'
import dataExp from '@/content/i18n/es/exp.json'

const Experience = () => {
    const [exp, setExp] = useState(dataExp)

    // useState(async () => {
    //     fetch(`/api/notion/getDB/exp`)
    //         .then((res) => res.status == 200 ? res.json() :  setExp(false) )
    //         .then((res) => setExp(res))
    //     // setExp(dataExp)
    // }, [])

    const expContRef = useRef()

    const handleClicks = (key) => {
        const card = expContRef.current.children[key].children[0]
        const svg = card.children[0].children[1]
        svg.classList.toggle(styles.arrow_togle_active)
        const text = card.children[1]
        card.classList.toggle(styles.text_hidden)
        // event.target.parentNode.children[1]?.classList.toggle(styles.hidden_scale)
    }

    return <section id='exp'>
        <div className="box-title">
            <h1>Experiencia</h1>
        </div>
        <div className="container">
            <div ref={expContRef} className={styles.exp}>



                {exp ? exp.map((v, k) => (
                    <div key={k} className={styles.exp_cont}>
                        <div className={styles.exp_card} >
                            <div className={styles.exp_title} onClick={(e) => handleClicks(k)}>
                                <h5> {v.name[0]?.plain_text}</h5>
                                <p > {v.cargo.name}</p>
                                <div className={styles.arrow_togle}>
                                    <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.2356 19.6073L20.8606 13.9823L19.0793 12.2323L15.2356 16.076L11.3918 12.2323L9.6106 13.9823L15.2356 19.6073ZM15.2356 27.7323C13.5064 27.7323 11.8814 27.404 10.3606 26.7473C8.83976 26.0915 7.51685 25.201 6.39185 24.076C5.26685 22.9511 4.37643 21.6281 3.7206 20.1073C3.06393 18.5865 2.7356 16.9615 2.7356 15.2323C2.7356 13.5031 3.06393 11.8781 3.7206 10.3573C4.37643 8.83647 5.26685 7.51355 6.39185 6.38855C7.51685 5.26355 8.83976 4.37272 10.3606 3.71605C11.8814 3.06022 13.5064 2.7323 15.2356 2.7323C16.9648 2.7323 18.5898 3.06022 20.1106 3.71605C21.6314 4.37272 22.9543 5.26355 24.0793 6.38855C25.2043 7.51355 26.0948 8.83647 26.7506 10.3573C27.4073 11.8781 27.7356 13.5031 27.7356 15.2323C27.7356 16.9615 27.4073 18.5865 26.7506 20.1073C26.0948 21.6281 25.2043 22.9511 24.0793 24.076C22.9543 25.201 21.6314 26.0915 20.1106 26.7473C18.5898 27.404 16.9648 27.7323 15.2356 27.7323ZM15.2356 25.2323C18.0273 25.2323 20.3918 24.2635 22.3293 22.326C24.2668 20.3885 25.2356 18.024 25.2356 15.2323C25.2356 12.4406 24.2668 10.076 22.3293 8.13855C20.3918 6.20105 18.0273 5.2323 15.2356 5.2323C12.4439 5.2323 10.0793 6.20105 8.14185 8.13855C6.20435 10.076 5.2356 12.4406 5.2356 15.2323C5.2356 18.024 6.20435 20.3885 8.14185 22.326C10.0793 24.2635 12.4439 25.2323 15.2356 25.2323Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.exp_descripcion + " " + styles.text_hidden}>
                                {/* {v.cont[0] ?
                                    <>
                                        Actividades desempeñadas: <br />
                                        <Article data={v.cont} />
                                    </>
                                    :
                                    v["description-empresa"][0]?.plain_text
                                } */}
                                {v["description-empresa"][0]?.plain_text}


                            </div>
                        </div>
                        <div className="arrow"></div>
                        <div className={styles.exp_date}>
                            <p>{v.date.start}</p>
                            <p>{v.date.end ? v.date.end : "Actual"}</p>
                        </div>
                    </div>
                )) : <>Loading ... </>}



            </div>
        </div>


    </section>
}

export default Experience;

