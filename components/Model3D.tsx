"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";
import { GLTFLoader, TGALoader } from "three-stdlib";
import * as THREE from "three";
import { FBXLoader } from "three-stdlib";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function BirdModel() {
    const fbx = useLoader(
        FBXLoader,
        "/phoenix-bird/source/fly.fbx",
        (loader) => {
            loader.manager.addHandler(/\.tga$/i, new TGALoader());
        }
    );

    const mixer = useRef<THREE.AnimationMixer>(null);

    useEffect(() => {
        if (fbx.animations.length) {
            mixer.current = new THREE.AnimationMixer(fbx);
            const action = mixer.current.clipAction(fbx.animations[0]);
            action.play();
            action.setEffectiveTimeScale(0.5);
            console.log(
                "Animation loaded and playing:",
                fbx.animations[0].name
            );
        } else {
            console.error("No animations found in the FBX file.");
        }

        fbx.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.material.transparent = false;
                child.material.depthWrite = true; // Ensure depth buffer is written
                child.material.alphaTest = 0.5; // Adjust alpha test if necessary
                child.material.side = THREE.DoubleSide; // Render both sides
            }
        });

        return () => {
            mixer.current?.stopAllAction();
        };
    }, [fbx]);

    useFrame((state, delta) => {
        mixer.current?.update(delta);
    });

    // Center the model
    fbx.position.set(0, -1.5, 0);
    fbx.rotation.set(0, (-2 * Math.PI) / 3, -Math.PI / 10);
    fbx.scale.set(0.0055, 0.0055, 0.0055); // Adjust the scale if necessary

    return <primitive object={fbx} />;
}

export default function Model3D() {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight intensity={1} />
                    <directionalLight position={[5, 5, 5]} intensity={15} />
                    <directionalLight position={[-5, -5, -5]} intensity={15} />
                    <BirdModel />
                    <EffectComposer>
                        <Bloom
                            luminanceThreshold={0.3}
                            luminanceSmoothing={0.9}
                            height={300}
                        />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    );
}
