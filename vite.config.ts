import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import { resolve } from 'path'
import autoprefixer from 'autoprefixer'
import postcssPxToViewport from 'postcss-px-to-viewport'

// console.log(import.meta.env)

// 压缩配置参数
const viteCompressionOptions = {
  filter: /\.(js|css|json|txt|html|svg)(\?.*)?$/i, // 需要压缩的文件
  threshold: 1024, // 文件容量大于这个值就压缩
  algorithm: 'gzip', // 压缩方式
  ext: 'gz', // 后缀名
  deleteOriginFile: false, // 验收是否删除源文件
}

/**
 * 读取环境变量的值
 * @param mode 模式
 * @param target key值
 * @returns value
 */
 const getEnvFn = (mode: any, target: any) => {
  return loadEnv(mode, process.cwd())[target]
}

// https://vitejs.dev/config/
export default ({ mode }) => {

  const isProd = getEnvFn(mode, 'VITE_APP_ENV') === 'production'
  const cdnHost = getEnvFn(mode, 'VITE_APP_CDN_HOST')
  console.log(isProd, cdnHost)

  return defineConfig({
    plugins: [
      vue(),
      viteCompression(<Object>viteCompressionOptions)
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@assets': resolve(__dirname, 'src/assets'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@components': resolve(__dirname, 'src/components')
      }
    },
    base: cdnHost,
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          postcssPxToViewport({
            viewportWidth: 750,             // (Number) The width of the viewport. 视窗的宽度，对应的是我们设计稿的宽度，一般是750
            viewportHeight: 1334,           // (Number) The height of the viewport. 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
            unitPrecision: 3,               // (Number) The decimal numbers to allow the REM units to grow to. 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
            virwportUnit: 'vw',             // (String) Expected units. 指定需要转换成的视窗单位，建议使用vw
            selectorBlackList: ['.ignore'], // (Array) The selectors to ignore and leave as px. 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
            minPixelVlaue: 1,               // (Number) Set the minimum pixel value to replace. 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
            mediaQuery: false,              // (Boolean) Allow px to be converted in media queries. 允许在媒体查询中转换`px`
          })
        ]
      }
    },
    build: {
      // target: 'es2015', // 默认modules
      rollupOptions: {
        output: {
          dir: 'dist',
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        }
      },
      // 生产环境移除console
      terserOptions: {
        compress: {
          drop_console: isProd,
          drop_debugger: true
        }
      }
    },
    server: {
      port: 9800,
      open: false,
      cors: true,
      // proxy: {
      //   '/api': {
      //     target: '',
      //     changeOrigin: true,
      //     secure: false,
      //     rewrite: path => path.replace('/api', '/')
      //   }
      // }
    }
  })
}
