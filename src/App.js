import { useState } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

function App() {
  const [copy, setcopy] = useState();
  const [isCopied, setCopied] = useClipboard(copy);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="App">
      <div
        className="container"
      >
        <div className="container-header">Speach To Text Converter</div>
        <div className="container-sub-header">
          <p style={listening ? { color: "green" } : { color: "red" }}>
            Microphone: {listening ? "on" : "off"}
          </p>
        </div>
        <div className="container-body">
          <p>{transcript}</p>
        </div>
        <div className="container-footer">
          <button onClick={SpeechRecognition.startListening}>Start</button>
          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
