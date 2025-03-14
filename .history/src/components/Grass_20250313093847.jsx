// Based on https://codepen.io/al-ro/pen/jJJygQ by al-ro, but rewritten in react-three-fiber
import React, { useRef, useMemo } from "react";

import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { getVertexSource, fragmentSource } from "./shaders";

//These have been taken from "Realistic real-time grass rendering" by Eddie Lee, 2010
import bladeDiffuse from "./resources/blade_diffuse.jpg";
import bladeAlpha from "./resources/blade_alpha.jpg";
import { createNoise3D } from "simplex-noise"; 

const simplex = new createNoise2D(Math.random);

const defaultBladeOptions = {
    width: 0.12,
    height: 1,
    joints: 5
};

export default function Grass({
    bladeOptions = defaultBladeOptions,
    width = 100,
    instances = 50000
}) {
    const materialRef = useRef();
    const groundRef = useRef();
    const [texture, alphaMap] = useLoader(THREE.TextureLoader, [
        bladeDiffuse,
        bladeAlpha
    ]);

    const attributeData = useMemo(() => getAttributeData(instances, width), [
        instances,
        width
    ]);

    const baseGeometry = useMemo(() => {
        const geo = new THREE.PlaneGeometry(
            bladeOptions.width,
            bladeOptions.height,
            1,
            bladeOptions.joints
        );
        geo.translate(0, bladeOptions.height / 2, 0);
        return geo;
    }, [bladeOptions]);

    const groundGeo = useMemo(() => {
        var groundGeometry = new THREE.PlaneGeometry(width, width, 32, 32);
        groundGeometry.verticesNeedUpdate = true;
        groundGeometry.lookAt(new THREE.Vector3(0, 1, 0));

        for (var i = 0; i < groundGeometry.vertices.length; i++) {
            var v = groundGeometry.vertices[i];
            v.y = getYPosition(v.x, v.z);
        }
        groundGeometry.computeVertexNormals();

        return groundGeometry;
    }, [width]);

    useFrame(state => {
        materialRef.current.uniforms.time.value = state.clock.elapsedTime / 4;
    });

    return (
        <group>
            <mesh>
                <instancedBufferGeometry
                    attach="geometry"
                    index={baseGeometry.index}
                    attributes-position={baseGeometry.attributes.position}
                    attributes-uv={baseGeometry.attributes.uv}
                >
                    <instancedBufferAttribute
                        attachObject={["attributes", "offset"]}
                        args={[new Float32Array(attributeData.offsets), 3]}
                    />
                    <instancedBufferAttribute
                        attachObject={["attributes", "orientation"]}
                        args={[new Float32Array(attributeData.orientations), 4]}
                    />
                    <instancedBufferAttribute
                        attachObject={["attributes", "stretch"]}
                        args={[new Float32Array(attributeData.stretches), 1]}
                    />
                    <instancedBufferAttribute
                        attachObject={["attributes", "halfRootAngleSin"]}
                        args={[new Float32Array(attributeData.halfRootAngleSin), 1]}
                    />
                    <instancedBufferAttribute
                        attachObject={["attributes", "halfRootAngleCos"]}
                        args={[new Float32Array(attributeData.halfRootAngleCos), 1]}
                    />
                </instancedBufferGeometry>
                <rawShaderMaterial
                    attach="material"
                    ref={materialRef}
                    args={{
                        uniforms: {
                            map: { value: texture },
                            alphaMap: { value: alphaMap },
                            time: { type: "float", value: 0 }
                        },
                        vertexShader: getVertexSource(bladeOptions.height),
                        fragmentShader: fragmentSource,
                        side: THREE.DoubleSide
                    }}
                />
            </mesh>
            <mesh position={[0, 0, 0]} geometry={groundGeo} ref={groundRef}>
                <meshStandardMaterial attach="material" color="#000f00" />
            </mesh>
        </group>
    );
}

function getAttributeData(instances, width) {
    const offsets = [];
    const orientations = [];
    const stretches = [];
    const halfRootAngleSin = [];
    const halfRootAngleCos = [];

    let quaternion_0 = new THREE.Vector4();
    let quaternion_1 = new THREE.Vector4();

    //The min and max angle for the growth direction (in radians)
    const min = -0.25;
    const max = 0.25;

    //For each instance of the grass blade
    for (let i = 0; i < instances; i++) {
        //Offset of the roots
        const offsetX = Math.random() * width - width / 2;
        const offsetZ = Math.random() * width - width / 2;
        const offsetY = getYPosition(offsetX, offsetZ);
        offsets.push(offsetX, offsetY, offsetZ);

        //Define random growth directions
        //Rotate around Y
        let angle = Math.PI - Math.random() * (2 * Math.PI);
        halfRootAngleSin.push(Math.sin(0.5 * angle));
        halfRootAngleCos.push(Math.cos(0.5 * angle));

        let RotationAxis = new THREE.Vector3(0, 1, 0);
        let x = RotationAxis.x * Math.sin(angle / 2.0);
        let y = RotationAxis.y * Math.sin(angle / 2.0);
        let z = RotationAxis.z * Math.sin(angle / 2.0);
        let w = Math.cos(angle / 2.0);
        quaternion_0.set(x, y, z, w).normalize();

        //Rotate around X
        angle = Math.random() * (max - min) + min;
        RotationAxis = new THREE.Vector3(1, 0, 0);
        x = RotationAxis.x * Math.sin(angle / 2.0);
        y = RotationAxis.y * Math.sin(angle / 2.0);
        z = RotationAxis.z * Math.sin(angle / 2.0);
        w = Math.cos(angle / 2.0);
        quaternion_1.set(x, y, z, w).normalize();

        //Combine rotations to a single quaternion
        quaternion_0 = multiplyQuaternions(quaternion_0, quaternion_1);

        //Rotate around Z
        angle = Math.random() * (max - min) + min;
        RotationAxis = new THREE.Vector3(0, 0, 1);
        x = RotationAxis.x * Math.sin(angle / 2.0);
        y = RotationAxis.y * Math.sin(angle / 2.0);
        z = RotationAxis.z * Math.sin(angle / 2.0);
        w = Math.cos(angle / 2.0);
        quaternion_1.set(x, y, z, w).normalize();

        //Combine rotations to a single quaternion
        quaternion_0 = multiplyQuaternions(quaternion_0, quaternion_1);

        orientations.push(
            quaternion_0.x,
            quaternion_0.y,
            quaternion_0.z,
            quaternion_0.w
        );

        //Define variety in height
        if (i < instances / 3) {
            stretches.push(Math.random() * 1.8);
        } else {
            stretches.push(Math.random());
        }
    }

    return {
        offsets,
        orientations,
        stretches,
        halfRootAngleCos,
        halfRootAngleSin
    };
}

function multiplyQuaternions(q1, q2) {
    const x = q1.x * q2.w + q1.y * q2.z - q1.z * q2.y + q1.w * q2.x;
    const y = -q1.x * q2.z + q1.y * q2.w + q1.z * q2.x + q1.w * q2.y;
    const z = q1.x * q2.y - q1.y * q2.x + q1.z * q2.w + q1.w * q2.z;
    const w = -q1.x * q2.x - q1.y * q2.y - q1.z * q2.z + q1.w * q2.w;
    return new THREE.Vector4(x, y, z, w);
}

function getYPosition(x, z) {
    var y = 2 * simplex.noise2D(x / 50, z / 50);
    y += 4 * simplex.noise2D(x / 100, z / 100);
    y += 0.2 * simplex.noise2D(x / 10, z / 10);
    return y;
}
