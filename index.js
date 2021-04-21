/*
license:
THREE.js is licensed under the MIT license. Further reading: https://github.com/mrdoob/three.js/blob/dev/LICENSE
*/

//this portion of the code fetches the div width and height. It's necessary to get this data in order to render correct scene dimensions for the site (and the 3D scene) to be responsive
//variables need to be defined globally, so the code can access the values assigned to them later on. They get the original div size assigned to them, because not everyone resizes their window (especially on mobile)
let animationDivHeight = document.getElementsByClassName("deform_landing_animation")[0].clientHeight;
let animationDivWidth = document.getElementsByClassName("deform_landing_animation")[0].clientWidth;

//this function is defined in order to access it when the window changes its dimensions
let animationDimensions = () => {
    animationDivHeight = document.getElementsByClassName("deform_landing_animation")[0].clientHeight;
    animationDivWidth = document.getElementsByClassName("deform_landing_animation")[0].clientWidth;
}

//this portion of the code listens to events tied with resizing the window. This is what makes the site responsive.
window.addEventListener("resize", animationDimensions);

//Sizes are set with every refresh, making the site responsive
const sizes = {
    width: animationDivWidth,
    height: animationDivHeight
}

//this part of the file is dedidated to THREE.js

//scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.OrthographicCamera( animationDivWidth / - 5, animationDivWidth / 5, animationDivHeight / 5, animationDivHeight / - 5, 0, 5000 );
camera.position.z = 300;
camera.lookAt(scene.position);

//light
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(1, 1, 5).normalize();
scene.add(directionalLight);

// model
let logo_opened_purple = null; //global variables
let logo_opened_teal = null;
let logo_opened_yellow = null;
let logo_opened_rose = null;
let logo_opened_red = null;
let logo_big = null;
let logo_closed_anim = null;
let logo_closed_rose = null;
let logo_closed_orange = null;
let logo_closed_red = null;
let logo_closed_yellow = null;

const mtlLoader = new THREE.MTLLoader();

mtlLoader.load('./3D/3d_logo_closed.mtl', function(materials) {

  materials.preload();

  const objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load('./3D/3d_logo_opened.obj', function(object) {

    logo_opened_purple = object; //accessing the global variable
    logo_opened_purple.position.x = -10;
    logo_opened_purple.position.y = 0;
    logo_opened_purple.position.z = 0;
    logo_opened_purple.scale.x = 10;
    logo_opened_purple.scale.y = 10;
    logo_opened_purple.scale.z = 10;
    logo_opened_purple.rotation.x = Math.PI * 0.25;
    logo_opened_purple.rotation.y = Math.PI * -0.25;

  });

});

mtlLoader.load('./3D/3d_logo_opened_teal.mtl', function(materials) {

  materials.preload();

  const objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load('./3D/3d_logo_opened.obj', function(object) {

    logo_opened_teal = object; //accessing the global variable
    logo_opened_teal.position.x = 90;
    logo_opened_teal.position.y = -100;
    logo_opened_teal.position.z = -300;
    logo_opened_teal.scale.x = 10;
    logo_opened_teal.scale.y = 10;
    logo_opened_teal.scale.z = 10;
    logo_opened_teal.rotation.x = Math.PI * -0.75;
    logo_opened_teal.rotation.y = Math.PI * 0.25;

  });

});

mtlLoader.load('./3D/3d_logo_opened_rose.mtl', function(materials) {

  materials.preload();

  const objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load('./3D/3d_logo_opened.obj', function(object) {

    logo_opened_rose = object; //accessing the global variable
    logo_opened_rose.position.x = 180;
    logo_opened_rose.position.y = 100;
    logo_opened_rose.position.z = -900;
    logo_opened_rose.scale.x = 10;
    logo_opened_rose.scale.y = 10;
    logo_opened_rose.scale.z = 10;
    logo_opened_rose.rotation.x = Math.PI * 0.25;
    logo_opened_rose.rotation.y = Math.PI * 0.25;

  });

});

mtlLoader.load('./3D/3d_logo_opened_red.mtl', function(materials) {

  materials.preload();

  const objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load('./3D/3d_logo_opened.obj', function(object) {

    logo_opened_red = object; //accessing the global variable
    logo_opened_red.position.x = -90;
    logo_opened_red.position.y = -100;
    logo_opened_red.position.z = -300;
    logo_opened_red.scale.x = 10;
    logo_opened_red.scale.y = 10;
    logo_opened_red.scale.z = 10;
    logo_opened_red.rotation.x = Math.PI * 0.75;
    logo_opened_red.rotation.y = Math.PI * 0.25;

  });

});

mtlLoader.load('./3D/3d_logo_opened_yellow.mtl', function(materials) {

  materials.preload();

  const objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load('./3D/3d_logo_opened.obj', function(object) {

    logo_opened_yellow = object; //accessing the global variable
    logo_opened_yellow.position.x = -180;
    logo_opened_yellow.position.y = 100;
    logo_opened_yellow.position.z = -600;
    logo_opened_yellow.scale.x = 10;
    logo_opened_yellow.scale.y = 10;
    logo_opened_yellow.scale.z = 10;
    logo_opened_yellow.rotation.x = Math.PI * 0.25;
    logo_opened_yellow.rotation.y = Math.PI * 0.25;

  });

});

mtlLoader.load('./3D/3d_logo_opened_teal.mtl', function(materials) {

  materials.preload();

  const objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load('./3D/3d_logo_opened_detailed.obj', function(object) {

    logo_big = object;
    logo_big.position.x = 0;
    logo_big.position.y = 30;
    logo_big.position.z = -1000;
    logo_big.scale.x = 50;
    logo_big.scale.y = 200;
    logo_big.scale.z = 50;
    logo_big.rotation.x = Math.PI * 0.25;
    logo_big.rotation.y = Math.PI * 0.75;

  });

});

mtlLoader.load('./3D/3d_logo_closed.mtl', function(materials) {

  materials.preload();

  const objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load('./3D/3d_logo_closed.obj', function(object) {

    logo_closed_anim = object; //accessing the global variable
    logo_closed_anim.position.y = 0;
    logo_closed_anim.position.x = 0;
    logo_closed_anim.position.z = 0;
    logo_closed_anim.scale.x = 75;
    logo_closed_anim.scale.y = 705;
    logo_closed_anim.scale.z = 75;
    logo_closed_anim.rotation.x = Math.PI * 0.25;
    logo_closed_anim.rotation.y = Math.PI * 0.75;

  });

});

mtlLoader.load('./3D/3d_logo_closed_rose.mtl', function(materials) {

  materials.preload();

  const objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load('./3D/3d_logo_closed_rose.obj', function(object) {

    logo_closed_rose = object; //accessing the global variable
    logo_closed_rose.position.y = 0;
    logo_closed_rose.position.x = 0;
    logo_closed_rose.position.z = 0;
    logo_closed_rose.scale.x = 50;
    logo_closed_rose.scale.y = 500;
    logo_closed_rose.scale.z = 50;
    logo_closed_rose.rotation.x = Math.PI * 0.25;
    logo_closed_rose.rotation.y = Math.PI * 0.75;

  });

});

mtlLoader.load('./3D/3d_logo_closed_orange.mtl', function(materials) {

  materials.preload();

  const objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load('./3D/3d_logo_closed_orange.obj', function(object) {

    logo_closed_orange = object; //accessing the global variable
    logo_closed_orange.position.y = 0;
    logo_closed_orange.position.x = 0;
    logo_closed_orange.position.z = 0;
    logo_closed_orange.scale.x = 45;
    logo_closed_orange.scale.y = 405;
    logo_closed_orange.scale.z = 45;
    logo_closed_orange.rotation.x = Math.PI * 0.25;
    logo_closed_orange.rotation.y = Math.PI * 0.75;

  });

});

mtlLoader.load('./3D/3d_logo_closed_yellow.mtl', function(materials) {

  materials.preload();

  const objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load('./3D/3d_logo_closed_yellow.obj', function(object) {

    logo_closed_yellow = object; //accessing the global variable
    logo_closed_yellow.position.y = 0;
    logo_closed_yellow.position.x = 0;
    logo_closed_yellow.position.z = -600;
    logo_closed_yellow.scale.x = 75;
    logo_closed_yellow.scale.y = 705;
    logo_closed_yellow.scale.z = 75;
    logo_closed_yellow.rotation.x = Math.PI * 0.25;
    logo_closed_yellow.rotation.y = Math.PI * 0.75;

  });

});

mtlLoader.load('./3D/3d_logo_closed_red.mtl', function(materials) {

  materials.preload();

  const objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load('./3D/3d_logo_closed_red.obj', function(object) {

    logo_closed_red = object; //accessing the global variable
    logo_closed_red.position.y = 0;
    logo_closed_red.position.x = 0;
    logo_closed_red.position.z = -600;
    logo_closed_red.scale.x = 90;
    logo_closed_red.scale.y = 900;
    logo_closed_red.scale.z = 90;
    logo_closed_red.rotation.x = Math.PI * 0.25;
    logo_closed_red.rotation.y = Math.PI * 0.75;

  });

});

//background color
function darkMode_backgroundChanger(argument) {
  if (argument.matches) { // If media query matches
    scene.background = new THREE.Color( 0x461661 );
  } else {
    scene.background = new THREE.Color( 0x93FAA5 );
  }
}
let darkMode_checker = window.matchMedia("(prefers-color-scheme: dark)")
darkMode_backgroundChanger(darkMode_checker) // Call listener function at run time


//renderer
let canvas = document.getElementsByClassName("deform_landing_webgl")[0];
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});

renderer.setClearColor(0x000000);
renderer.setSize(sizes.width, sizes.height);

//date
let Landing_date = new Date();
let seconds = Landing_date.getSeconds();

//clock
const clock = new THREE.Clock(); //importing the clock in order to make the animations take as much time on any refresh rate screen 

//animations
const tick = () => {

//measuring time
const elapsedTime = clock.getElapsedTime();

if (seconds % 5 === 0) { //this is a fun one; depending on the division remainder we pick different animations!
  if (logo_opened_purple !== null && logo_opened_teal !== null && logo_opened_yellow !== null && logo_opened_rose !== null && logo_opened_red !== null) {
    scene.add(logo_opened_purple);
    scene.add(logo_opened_teal);
    scene.add(logo_opened_yellow);
    scene.add(logo_opened_rose);
    scene.add(logo_opened_red);
    logo_opened_purple.scale.y = (Math.sin(elapsedTime*0.5) + (Math.PI * 0.37)) * 100;
    logo_opened_teal.scale.y = (Math.sin(elapsedTime*0.4) + (Math.PI * 0.37)) * 100;
    logo_opened_yellow.scale.y = (Math.sin(elapsedTime*0.3) + (Math.PI * 0.37)) * 100;
    logo_opened_rose.scale.y = (Math.sin(elapsedTime*0.2) + (Math.PI * 0.37)) * 100;
    logo_opened_red.scale.y = (Math.cos(elapsedTime*0.5) + (Math.PI * 0.37)) * 100;
  }
} else if (seconds % 3 === 0) {
  if (logo_closed_anim !== null && logo_closed_rose !== null && logo_closed_orange !== null && logo_closed_yellow !== null && logo_closed_red !== null) {
    scene.add(logo_closed_anim);
    scene.add(logo_closed_rose);
    scene.add(logo_closed_orange);
    scene.add(logo_closed_yellow);
    scene.add(logo_closed_red);
    logo_closed_anim.rotation.y = logo_closed_anim.rotation.y + 0.002;
    logo_closed_rose.rotation.y = logo_closed_rose.rotation.y + 0.001;
    logo_closed_orange.rotation.y = logo_closed_orange.rotation.y + 0.001;
    logo_closed_yellow.rotation.y = logo_closed_yellow.rotation.y + 0.0005;
    logo_closed_red.rotation.y = logo_closed_red.rotation.y + 0.0005;
  }
} else {
  if (logo_big !== null) {
    scene.add(logo_big);
    logo_big.rotation.y = logo_big.rotation.y + 0.001;
  }
}

  //render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick); //tick is called with every screen refresh
}
  
tick();