/**
 * @file QR.js
 */
import * as React from 'react';
import * as THREE from 'three';
import PropTypes from 'prop-types';
import QRCode from 'qrcode';
import { useFrame } from '@react-three/fiber';

import styles from './QR3D.module.css';

const QR3D = ({
  tagName: Tag = 'div',
  className = 'fixed inset-0 flex items-center justify-center',
  variant,
  text = 'Lorem ipsum',
}) => {
  const ref = React.useRef();
  const meshRef = React.useRef();
  const [canvas, setCanvas] = React.useState();

  React.useEffect(() => {
    QRCode.toCanvas(text, { errorCorrectionLevel: 'H' }, (err, _canvas) => {
      if (err) throw err;
      setCanvas(_canvas);
    });
  }, [text, ref]);

  useFrame(({ clock }, delta) => {
    meshRef.current.rotation.set(delta, meshRef.current.rotation.y + delta, 0);
    // ref.current.needsUpdate = true
  });

  return (
    <mesh ref={meshRef} position={[0, 2, 0]}>
      <planeBufferGeometry args={[2, 2]} />
      <meshBasicMaterial side={THREE.DoubleSide}>
        <canvasTexture ref={ref} image={canvas} attach="map" />
      </meshBasicMaterial>
    </mesh>
  );
};

QR3D.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default QR3D;
