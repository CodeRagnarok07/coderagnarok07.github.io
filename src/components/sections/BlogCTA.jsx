'use client'
import Carusel3Dcss from '@/lib/Css3D'
import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import data from '@/content/i18n/es/hardSkills'
const BlogCTA = () => {

    const [current, setCurrent] = useState(0)

   


    return <section className="container" id='skills'>

        <div className="box-title">
            <h1>Skills</h1>
        </div>



        <div className={styles.blog_cta}>
            <div className={styles.carousel_cont}>
                {data &&
                    <Carusel3Dcss current={current} setCurrent={setCurrent} data={data} />
                 
                }
            </div>
            {data ?
                <div className={styles.text_cont}>
                    <h3>{data[current].name[0].plain_text}</h3>

                    <p>
                        {childData ? childData.length > 0 && childData.map((child, k) =>(
                          <span key={k}> {child.name}, </span>
                            
                        ))
                        :
                        <>
                        ...
                        </>
                    }
                    </p>

                    <div className='w-full flex justify-center'>
                        <div className="btn btn-primary">ver mas</div>
                    </div>
                </div>
                :
                <Loading />
            }


        </div>



    </section>
}
export default BlogCTA