import React from 'react';
import { PDFViewer, Page, Text, View, Document, StyleSheet, Image as Png } from '@react-pdf/renderer';

import "./App.css";
import { data } from './data/data';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  head: {
    flexDirection: "row",
    flexGrow: 1,
    backgroundColor: "green",
  },
  body: {
    flexDirection: "row",
    flexGrow: 8,
  },
  left: {
    flexGrow: 1,
    width: "30%",
    backgroundColor: "red",
  },
  right: {
    flexGrow: 3,
    width: "70%",
    backgroundColor: "blue",
  },
  image: {
    width: "90px",
    height: "90px"
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.head}>
        <View style={styles.left}>
          <Png
            style={styles.image}
            source={"./data/image.png"}
          />
        </View>
        <View style={styles.right}>
          <Text>Lebenslauf</Text>
          <Text>{data.name}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.left}>
          <Text>Geburtsdaten:</Text>
          <Text>{data.birth}</Text>
          <Text>Adresse:</Text>
          <Text>{data.address}</Text>
          <Text>Telefonnummer:</Text>
          <Text>{data.phone}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.text}>RIGHT</Text>
        </View>
      </View>
    </Page>
  </Document>
);

function App() {
  return (
    <div className="App">
      <PDFViewer
        style={{
          width:"100%",
          height:"100%"
        }}
      >
        <MyDocument/>
      </PDFViewer>
    </div>
  );
}

export default App;
