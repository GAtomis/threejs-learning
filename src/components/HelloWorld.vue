<!--
 * @Author: Gavin 850680822@qq.com
 * @Date: 2022-11-17 19:38:23
 * @LastEditors: Gavin 850680822@qq.com
 * @LastEditTime: 2022-11-18 20:20:50
 * @FilePath: \workspace\three-learning\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
<div ref="body" class="body">


</div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as THREE from "three"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
const body =ref<HTMLElement>()
onMounted(()=>{
  /* 初始化部分 */
  const winWidth=window.innerWidth,
  winHeigh=window.innerHeight
  //构建场景
  const scene=new THREE.Scene()
  //创建相机
  const camera=new THREE.PerspectiveCamera(75,winWidth/winHeigh,0.1,1000 )
  //调整相机位置 
  camera.position.set(0,0,10)
  //场景中添加相机
  scene.add(camera)
  //创建几何体 长宽深
  const cubeGeometry=new THREE.BoxGeometry(1,1,1)
  //基础材质
  const cubeMaterial= new THREE.MeshBasicMaterial({color:0x00ff00})
  //根据几何体和材质创建物体
  const cube=new THREE.Mesh(cubeGeometry,cubeMaterial)
  //将几何体渲染到场景中 
  scene.add(cube)
  //初始化渲染器
  const renderer=new THREE.WebGLRenderer()
  //设置渲染尺寸
  renderer.setSize(winWidth,winHeigh)
  console.log(renderer,body.value);
  body.value?.appendChild(renderer.domElement)
  renderer.render(scene,camera) 
  /****初始化结束 */
//创建轨道控制器
  const controls=new OrbitControls(camera,renderer.domElement)

})


</script>


<style scoped>
.read-the-docs {
  color: #888;
}
.body{
  /* width: 100vw;
  height: 100vh; */
}
</style>
