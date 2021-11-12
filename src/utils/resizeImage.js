import Resizer from 'react-image-file-resizer'

export const resizeImage = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      'JPEG',
      85,
      0,
      (uri) => {
        resolve(uri)
      },
      'file'
    )
  })
