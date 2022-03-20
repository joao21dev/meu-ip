import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import logo from "./assets/logo1.png";

export default function App() {
  const [data, setData] = useState("");
  const findIp = async () => {
    setData("DESCOBRINDO IP...");
    setTimeout(async() => {
      const ip = await fetch("http:/httpbin.org/ip");
      const data = await ip.json();
      setData(data.origin);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image style={styles.image} source={logo} />
        <Text style={styles.ip}>{data}</Text>
        <Button title="Descobrir meu Ip" onPress={findIp}></Button>
      </View>
      <View style={styles.footer}>
        <Text style={styles.made}>Feito por joao21dev</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f2336",
    alignItems: "stretch",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ip: {
    color: "white",
    paddingTop: 20,
    paddingBottom: 20,
  },
  image: {
    height: 100,
  },
  footer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  made: {
    color: "white",
    textAlign: "center",
  },
});
