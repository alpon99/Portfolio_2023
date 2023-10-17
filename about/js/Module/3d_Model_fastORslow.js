// main.js

// Three.js 모듈 가져오기
import { GLTFLoader } from 'GLTFLoader';
import * as THREE from 'three';

// 장면(scene) 생성
let scene = new THREE.Scene();

// WebGL 렌더러(renderer) 생성 및 설정
let renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas'),
    antialias: true
});
renderer.outputEncoding = THREE.sRGBEncoding;

// 카메라(camera) 생성 및 위치 설정
let camera = new THREE.PerspectiveCamera(15, 1);
camera.position.set(0, 0, 8);

// 장면 배경색 설정
scene.background = new THREE.Color('#202020');

// 방향성 조명(DirectionalLight) 생성 및 설정
let light = new THREE.DirectionalLight(0xead29f, 1.32);
light.position.set(0, -31, 0);
scene.add(light);

// GLTF 로더 생성 및 모델 로드
let loader = new GLTFLoader();
let gltfObject = null;

loader.load('3D_Model/ball/scene.gltf', function (gltf) {
    gltfObject = gltf.scene;

    scene.add(gltfObject);
    animate();
});

// 버튼 클릭 시의 이벤트 처리
const speedButton = document.getElementById('speedButton');
const resetButton = document.getElementById('resetButton'); // 새로 추가한 코드
let rotationSpeed = 0.003; // 초기 회전 속도
const rotationSpeedIncrement = 0.008; // 회전 속도 증가량

speedButton.addEventListener('click', () => {
    rotationSpeed += rotationSpeedIncrement; // 회전 속도를 증가량만큼 증가
});

resetButton.addEventListener('click', () => {
    rotationSpeed = 0.003; // 회전 속도를 초기 값으로 재설정
});


// 애니메이션 함수
function animate() {
    requestAnimationFrame(animate);

    // 모델 회전 애니메이션
    gltfObject.rotation.y += rotationSpeed;
    gltfObject.rotation.x += rotationSpeed * 0.08; // x축 회전을 느리게

    // 조명 방향 변경
    light.position.set(-9, 6.5, 10);

    // 장면 렌더링
    renderer.render(scene, camera);
}