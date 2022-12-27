import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


//to use path @ starting from /src
// import path from 'path'
//resolve: {
//  alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}]
//}
// and add 
  //  "paths" : {
    //   "@/*": ["/src/*"]
    // },
    // to tsconfig.json

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{find: "@", replacement: path.resolve(__dirname, "src")}]
  }
})
