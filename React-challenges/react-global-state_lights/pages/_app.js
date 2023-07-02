import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  //In the App component (pages/_app.js), initialize a state variable to hold the lights' state:

  const [lights, setLights] = useState([
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: true },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: true },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: true },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: true },
  ]);

  const toggleLight = (lightId) => {
    setLights((prevLights) =>
      prevLights.map((light) =>
        light.id === lightId ? { ...light, isOn: !light.isOn } : light
      )
    );
  };

  return (
    <Layout>
      <GlobalStyle />
      <Component lights={lights} toggleLight={toggleLight} {...pageProps} />
    </Layout>
  );
}
