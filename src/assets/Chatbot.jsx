import React from "react";
import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#634433",
});

const clientId = "ce2d56ee-d7e6-4821-bb60-e025940ff721";
const config ={
  botName:'Career Cousellor',
  botDescription:
    "Your personal AI career cousellor. Try saying hi!",
}
export default function Chatbot() {
  const client = getClient({ clientId });
  const isWebchatOpen = true;
  
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <style>{style}</style>
      <WebchatProvider
        theme={theme}
        client={client}
        configuration={config}
      >
        
        <div
          style={{
            display: isWebchatOpen ? "block" : "none",
          }}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}