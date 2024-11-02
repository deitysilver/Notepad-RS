import { createSignal } from "solid-js";
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = createSignal("");
  const [name, setName] = createSignal("");  

  return (
    <div>
      <div class="flex flex-row gap-4 w-full px-2 py-1 bg-zinc-700">
        <div class="text-red-500 hover:text-white cursor-pointer font-semibold opacity-50">File</div>
        <div class="text-red-500 hover:text-white cursor-pointer font-semibold opacity-50">Edit</div>
        <div class="text-red-500 hover:text-white cursor-pointer font-semibold opacity-50">Settings</div>
        <div class="text-red-500 hover:text-white cursor-pointer font-semibold opacity-50">Help</div>
      </div>
    </div>
  );
}

export default App;
