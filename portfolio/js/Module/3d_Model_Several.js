// Three.js에서 필요한 모듈을 가져옵니다.
import { GLTFLoader } from 'GLTFLoader';  // GLTFLoader: GLTF 모델을 로드하기 위한 클래스
import * as THREE from 'three';          // THREE: Three.js의 핵심 모듈

// 씬을 생성하고 렌더러를 초기화하는 함수
function createSceneRenderer(canvasId, modelPaths, rotationSpeedX, rotationSpeedY, lightPosition, objectScale, backgroundColor) {
    // 새로운 씬 생성
    const scene = new THREE.Scene();

    // WebGLRenderer를 생성하고 지정한 캔버스 요소와 연결합니다.
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector(`#${canvasId}`),  // canvasId에 해당하는 요소를 렌더러에 연결
        antialias: true  // 안티앨리어싱을 적용하여 부드럽게 렌더링
    });
    renderer.outputEncoding = THREE.sRGBEncoding;  // 렌더링 결과의 컬러 출력 방식 설정

    // 원근 투영 카메라를 생성하고 초기 위치 설정
    const camera = new THREE.PerspectiveCamera(10, 1);  // 시야각 39도로 원근 투영 카메라 생성
    camera.position.set(0, 0, 20);  // 카메라의 초기 위치 설정

    // 씬의 배경색을 지정한 색상으로 설정합니다.
    scene.background = new THREE.Color(backgroundColor);

    // 조명 생성: 흰색의 강한 방향성 조명 생성하고 초기 위치 설정
    const light = new THREE.DirectionalLight(0xffffff, 1.2);  // 흰색 조명 생성, 세기는 1.2
    light.position.set(0, 1, 0);  // 조명의 초기 위치 설정
    scene.add(light);  // 씬에 조명을 추가합니다.

    // GLTFLoader를 사용하여 모델 로드
    const loader = new GLTFLoader();  // GLTFLoader 인스턴스 생성
    let gltfObject = null;  // 로드한 GLTF 모델을 저장할 변수
    let currentModelIndex = 0;  // 현재 로드 중인 모델의 인덱스

    // 모델 초기 위치 설정
    const initialPosition = new THREE.Vector3(0, 0, 0);

    // 모델 로드 및 초기 설정
    loader.load(modelPaths[currentModelIndex], function (gltf) {
        gltfObject = gltf.scene.clone();  // 로드한 모델을 복제하여 사용
        gltfObject.scale.set(objectScale, objectScale, objectScale);  // 모델 크기 조정

        // 모델의 크기와 위치를 설정한 후 가운데 정렬을 위한 변환 작업 수행
        const boundingBox = new THREE.Box3().setFromObject(gltfObject);
        const center = boundingBox.getCenter(new THREE.Vector3());
        gltfObject.position.copy(center.negate());

        scene.add(gltfObject);  // 씬에 모델을 추가합니다.

        animate();  // 애니메이션 시작
    });

    // 애니메이션을 처리하는 함수
    function animate() {
        requestAnimationFrame(animate);  // 다음 애니메이션 프레임 요청

        if (gltfObject) {
            // x축, y축 회전 속도를 적용하여 모델 회전
            gltfObject.rotation.x += rotationSpeedX;
            gltfObject.rotation.y += rotationSpeedY;
        }

        // 조명의 위치를 설정합니다.
        light.position.set(lightPosition.x, lightPosition.y, lightPosition.z);

        // 씬을 카메라로 렌더링합니다.
        renderer.render(scene, camera);
    }
}

// 각 캔버스에 함수 호출하여 모델 로드 및 애니메이션 시작
createSceneRenderer('canvas1', ['3D_Model/d_letter/scene.gltf'], 0.003, 0.005, new THREE.Vector3(-9, 6.5, 10), 3, '#202020');
createSceneRenderer('canvas2', ['3D_Model/m_letter/scene.gltf'], 0.005, 0.003, new THREE.Vector3(9, 6.5, 0), 3, '#202020');
createSceneRenderer('canvas3', ['3D_Model/s_letter/scene.gltf'], 0.003, -0.005, new THREE.Vector3(-9, 6.5, 10), 3, '#202020');

/* 
주요함수 설명

createSceneRenderer 함수: 이 함수는 캔버스 ID, 모델 경로, 회전 속도 (x축 및 y축), 조명 위치, 객체 크기 및 배경색을 인수로 받습니다. 이 함수는 Three.js를 사용하여 씬을 생성하고 설정하며, 모델을 로드하고 애니메이션을 적용하는 역할을 합니다.

씬, 렌더러, 카메라 설정: 씬과 WebGLRenderer를 생성하고 초기화하며, 카메라의 초기 위치를 설정합니다.

조명 추가: DirectionalLight를 생성하여 조명을 설정하고 씬에 추가합니다.

GLTF 모델 로드: GLTFLoader를 사용하여 주어진 모델 경로로부터 3D 모델을 로드하고, 객체의 크기와 위치를 설정한 후 씬에 추가합니다.

애니메이션 함수: animate 함수는 requestAnimationFrame을 사용하여 애니메이션을 수행합니다. 로드한 3D 객체를 회전시키고 조명의 위치를 업데이트한 후 씬을 렌더링합니다.

객체 설정: createSceneRenderer 함수를 호출하여 세 개의 캔버스 (canvas1, canvas2, canvas3)에 각각 다른 모델을 로드하고 애니메이션을 적용합니다. 객체의 초기 위치와 회전 속도를 설정하여 다양한 결과를 얻을 수 있습니다. 
*/



/* 
주요함수 설명

createSceneRenderer 함수: 이 함수는 캔버스 ID, 모델 경로, 회전 속도 (x축 및 y축), 조명 위치, 객체 크기 및 배경색을 인수로 받습니다. 이 함수는 Three.js를 사용하여 씬을 생성하고 설정하며, 모델을 로드하고 애니메이션을 적용하는 역할을 합니다.

씬, 렌더러, 카메라 설정: 씬과 WebGLRenderer를 생성하고 초기화하며, 카메라의 초기 위치를 설정합니다.

조명 추가: DirectionalLight를 생성하여 조명을 설정하고 씬에 추가합니다.

GLTF 모델 로드: GLTFLoader를 사용하여 주어진 모델 경로로부터 3D 모델을 로드하고, 객체의 크기와 위치를 설정한 후 씬에 추가합니다.

애니메이션 함수: animate 함수는 requestAnimationFrame을 사용하여 애니메이션을 수행합니다. 로드한 3D 객체를 회전시키고 조명의 위치를 업데이트한 후 씬을 렌더링합니다.

객체 설정: createSceneRenderer 함수를 호출하여 세 개의 캔버스 (canvas1, canvas2, canvas3)에 각각 다른 모델을 로드하고 애니메이션을 적용합니다. 객체의 초기 위치와 회전 속도를 설정하여 다양한 결과를 얻을 수 있습니다. 
*/