import React from 'react'
import styles from './FeedPhotosItem.module.css'

const FeedPhotosItem = ({ photo, setModalPhotos }) => {
  function handleClick() {
    setModalPhotos(photo)
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem