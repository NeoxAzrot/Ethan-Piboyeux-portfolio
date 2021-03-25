// Importation des fichiers
import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Project3.module.sass'
import Header from 'components/Header'
import HeaderProject from 'components/HeaderProject'
import LinkNextProject from 'components/LinkNextProject'
import Credits from 'components/Credits'
import ModalImage from 'components/ModalImage'

const Project3 = () => {

  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Les variables pour le modal des images
  const [imageModal, setImageModal] = useState()
  const [altModal, setAltModal] = useState()
  const [displayModal, setDisplayModal] = useState(false)

  // Fonction pour changer l'image en fonction de l'image sur laquelle on clique
  const handleImage = (x) => {
    // On affiche le modal uniquement si l'écran est supérieur à 900px --> quand on est en row
    if(window.innerWidth > 900) {
      setImageModal(x.target.src)
      setAltModal(x.target.alt)
      setDisplayModal(true)
    }
  }

  // Fonction pour cacher l'image au clique
  useEffect(() => {
    // On désactive l'image si et seulement si l'image est déjà activé
    const clickHandler = () => {
      if(displayModal) {
        setDisplayModal(false)
      }
    }

    // On utilie un listener pour chaque clique
    window.addEventListener("click", clickHandler, false)

    return () => {
      window.removeEventListener("click", clickHandler, false)
    }
  })
  
  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Ethan Piboyeux | Youv Dee</title>
        <meta name="description" content="Re-Design Graphique de la pochette d'album (cover) « La Vie De Luxe » de l'artiste Youv Dee, réalisé par Ethan Piboyeux." />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal}/>
      
      <Header url='/youv-dee'/>
      <div className={styles.container}>
        <HeaderProject 
        title="Youv Dee"
        index={3}
        titleLink="Écouter l'album"
        link="https://open.spotify.com/playlist/3t4yLWMNFch9wLMoTRRt1S?si=50838cba63824015"
        year={2021}
        services={['Direction artistique', 'Design graphique']}
        />

        <div className={styles.images__container}>
          <img className={styles.animation__transform_top} src="images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-1.jpg" alt="Re-Design Graphique de la pochette d'album (cover) 'La Vie De Luxe' de l'artiste Youv Dee, réalisé par Ethan Piboyeux." onClick={handleImage} />
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-2.jpg" alt="Re-Design Graphique de la pochette d'album (cover) 'La Vie De Luxe' de l'artiste Youv Dee, réalisé par Ethan Piboyeux." onClick={handleImage} />
            <img src="images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-3.jpg"alt="Re-Design Graphique de la pochette d'album (cover) 'La Vie De Luxe' de l'artiste Youv Dee, réalisé par Ethan Piboyeux." onClick={handleImage} />
          </div>
          <img className={styles.animation__transform_top} src="images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-4.jpg" alt="Re-Design Graphique de la pochette d'album (cover) 'La Vie De Luxe' de l'artiste Youv Dee, réalisé par Ethan Piboyeux." onClick={handleImage} />
        </div>

        <div className={styles.footer__project}>
          <div>
            <Credits credits={[
              {
                name: 'Ashwin Cazal',
                role: 'Images'
              },
              {
                name: 'Youv Dee',
                role: 'Artiste'
              }
            ]}/>

            <div className={styles.animation__background}>
              <LinkNextProject text="Trieste" link="/trieste"/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project3
