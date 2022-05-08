import "./public-path";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function render(props: any) {
  const { container } = props;
  //   const rootdom = container
  //   ? container.querySelector("#root")
  //   : document.querySelector("#root");
  // const root = ReactDOM.createRoot(rootdom);
  // root.render(<App />);
  ReactDOM.render(
    <App />,
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export let qiankunGlobalProps:any = null;

export async function mount(props: any) {
  qiankunGlobalProps = props;
  console.log("[react16] props from main framework", props);
  props.onGlobalStateChange((state: any, prev: any) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log("监听到父组件变化");

    console.log(state, prev);
  });
  render(props);
}

export async function unmount(props: any) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}
