import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
// src/index.js

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error('组件错误:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return null;
      // Note: 也可以在出错的component处展示出错信息，返回自定义的结果。
    }
    return this.props.children;
  }
}
// eslint-disable-next-line no-undef
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ErrorBoundary>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </ErrorBoundary>,
  );
} else {
  // eslint-disable-next-line no-undef
  console.error('未找到 ID 为 "root" 的元素');
}
