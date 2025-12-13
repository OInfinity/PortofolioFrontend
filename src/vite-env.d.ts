import "@react-three/fiber";
import "@react-three/drei";
import "vite/client";

import * as THREE from "three";
import { ReactThreeFiber } from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: ReactThreeFiber.Object3DNode<THREE.Object3D, typeof THREE.Object3D>;
      points: ReactThreeFiber.Object3DNode<THREE.Points, typeof THREE.Points>;
      lineSegments: ReactThreeFiber.Object3DNode<
        THREE.LineSegments,
        typeof THREE.LineSegments
      >;
      lineBasicMaterial: ReactThreeFiber.MaterialNode<
        THREE.LineBasicMaterial,
        [THREE.LineBasicMaterialParameters]
      >;
      pointsMaterial: ReactThreeFiber.MaterialNode<
        THREE.PointsMaterial,
        [THREE.PointsMaterialParameters]
      >;
      bufferGeometry: ReactThreeFiber.BufferGeometryNode<
        THREE.BufferGeometry,
        typeof THREE.BufferGeometry
      >;
      bufferAttribute: ReactThreeFiber.Node<
        THREE.BufferAttribute,
        typeof THREE.BufferAttribute
      >;
      ambientLight: ReactThreeFiber.Object3DNode<
        THREE.AmbientLight,
        typeof THREE.AmbientLight
      >;
    }
  }
}

export {};
