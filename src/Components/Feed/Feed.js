import React from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

const Feed = () => {
  const [modalPhoto, setModalPhotos] = React.useState(null)

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhotos={setModalPhotos} />
      )}
      <FeedPhotos setModalPhotos={setModalPhotos} />
    </div>
  )
}

export default Feed
