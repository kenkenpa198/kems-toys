'use client';

import { Html, OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/Addons';

/**
 * モデルの読み込みを行う関数
 */
const Model = () => {
  // GLTFLoaderを使用してモデルを読み込む
  const result = useLoader(GLTFLoader, '/assets/modane.glb');

  // ロードされたモデルを表示する
  return <primitive object={result.scene} />;
};

/**
 * モデルのロード中に表示する関数
 */
const FallbackComponent = () => (
  <Html>
    <div>Loading...</div>
  </Html>
);

const ModaneThree = () => (
  <div className="flex justify-center">
    {/* シーンの設定 */}
    <Canvas
      camera={{ fov: 30, near: 0.1, far: 2000, position: [40, 20, 0] }}
      style={{ width: '90vw', height: '80vh' }}
      className="border"
    >
      {/* 半球光源 (環境光) */}
      <ambientLight intensity={1} />
      {/* 平行光源 */}
      <directionalLight color="white" position={[0, 0, 5]} />
      {/* モデルを非同期で読み込む */}
      <Suspense fallback={<FallbackComponent />}>
        <Model />
      </Suspense>
      {/* カメラ制御 */}
      <OrbitControls
        enableZoom
        enableRotate
        minPolarAngle={Math.PI / 6} // 最小の緯度角 (ラジアン単位)
        maxPolarAngle={Math.PI / 1} // 最大の緯度角 (ラジアン単位)
        minDistance={0.5} // カメラとターゲットの最小距離
        maxDistance={4} // カメラとターゲットの最大距離
        target={[0, 0.4, 0]} // カメラの注視点
      />
    </Canvas>
  </div>
);

export { ModaneThree };
