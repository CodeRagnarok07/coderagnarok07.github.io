import { useState, useEffect, useRef } from 'react';
import styles from "./Modals.module.scss";


export default function useModal() {

  const [active, setActive] = useState(false)
  const cardRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setActive(false)
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [cardRef]);



  const ModalComponent = () => {
    return (
      <Link className={styles.modalbg} >
        <Link className={styles.card} ref={cardRef} >
          <Link className={styles.header} >
            header
            <button onClick={() => setActive(false)}>boton cerrarme</button>
          </Link>
          <Link className={styles.body} >
            body
          </Link>
          <Link className={styles.footer} >
            footer
          </Link>
        </Link>
      </Link>
    )
  }
  return { ModalComponent, active, setActive }
}
