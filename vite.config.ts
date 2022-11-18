/*
 * @Author: Gavin 850680822@qq.com
 * @Date: 2022-11-17 19:38:23
 * @LastEditors: Gavin 850680822@qq.com
 * @LastEditTime: 2022-11-17 21:40:25
 * @FilePath: \workspace\three-learning\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
// https://vitejs.dev/config/



export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd())
  return {
    base: './', //绝对路径配置根据ngxin
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },

    // server: {

    //   open: true,

    //   proxy: {

  
    //     [env.VITE_BASE_API]: {
    //       target: env.VITE_BASE_PROXY,
    //       changeOrigin: true,
    //     },
    //     '/upload':{
    //       target: 'https://smms.app/api/v2',
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/upload/, '')


    //     }
           
    //   },
    // },
    plugins: [vue(),
 
      
    ]

  }



})
