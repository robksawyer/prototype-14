/**
 * @file QR.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'
import QRCode from 'qrcode'

import styles from './QR.module.css'

const QR = ({
  tagName: Tag = 'div',
  className = 'fixed inset-0 flex items-center justify-center',
  variant,
  text = 'Lorem ipsum',
}) => {
  const ref = React.useRef()
  const [canvas, setCanvas] = React.useState()

  React.useEffect(() => {
    QRCode.toCanvas(text, { errorCorrectionLevel: 'H' }, (err, _canvas) => {
      if (err) throw err
      ref.current.appendChild(_canvas)
      setCanvas(_canvas)
    })
  }, [text, ref])

  return (
    <Tag
      id="qr-container"
      ref={ref}
      className={`${styles.q_r} ${styles[`q_r__${variant}`]} ${className}`}
    />
  )
}

QR.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default QR
