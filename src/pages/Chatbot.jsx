import React from "react";
import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";

const { theme, style } = buildTheme({
  theme: "prism",
  themeColor: "#ff6a00",
});
console.log({ theme });
const clientId = "ce2d56ee-d7e6-4821-bb60-e025940ff721";
const config = {
  botName: "Career Cousellor",
  botDescription: "Your personal AI career cousellor. Try saying hi!",
};
export default function Chatbot() {
  const client = getClient({ clientId });
  const isWebchatOpen = true;
  return (
    <div
      style={{
        background: "#fff4e6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "65vw",
          height: "auto",
          padding: "40px",
        }}
      >
        <style>{`
    ${style}
    .\\#1pvih51 {
        --sc6ze8: #ff6a00;
        --z5bexf: rgba(130, 130, 128, 0);
        --wt1r4o: var(--sc6ze8), #fff4e6;
    }
        
        button, [type='button'], [type='reset'], [type='submit'] {
        -webkit-appearance: button;
        background-color: #ff8c33;
        background-image: none;
    }

        .\\#l8gsx0 {
    color:#d3d3d3;
    font-size: 20px;
    font-weight: bold;
}
    .\\#1aabpnr {
    color: black;
    }

    .\\#1sxpzkv {
    background-color:#ff8c33; 
}

.\\#1bk5mm5[data-direction=incoming] .\\#ytgwdc {
    background-color: #fff4e6;
}

.\\#3gv41o {
    background-color: #fff4e6;
    border-color: #fff;
    border-width: 4px;
}
    .\\#f1ylyf {
    color: #fff;
    font-size: 18px;
}

.\\#pph7p8[data-direction=system] {
    color: #ff6a00;
}

`}</style>

        <WebchatProvider theme={theme} client={client} configuration={config}>
          <div
            style={{
              display: isWebchatOpen ? "block" : "none",
              background: "#ff6a00",
            }}
          >
            <Webchat />
          </div>
        </WebchatProvider>
      </div>
    </div>
  );
}
