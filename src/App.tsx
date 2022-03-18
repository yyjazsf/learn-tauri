import { useState, useLayoutEffect } from 'react'
// 导入 invoke 方法
import { invoke } from '@tauri-apps/api/tauri'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useLayoutEffect(() => {
    // 添加监听函数，监听 DOM 内容加载完成事件
    window.document.addEventListener('DOMContentLoaded', () => {
    // DOM 内容加载完成之后，通过 invoke 调用 在 Rust 中已经注册的命令
      invoke('close_splashscreen')
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
