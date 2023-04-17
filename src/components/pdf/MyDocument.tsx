import React from "react";
import { Document, Page, Text, StyleSheet, Font } from "@react-pdf/renderer";
//http://fonts.gstatic.com/s/notosanssc/v26/k3kJo84MPvpLmixcA63oeALZTYKL2wv287Sb.otf
Font.register({
  family: "Noto Sans SC",
  src: "http://fonts.gstatic.com/s/notosanssc/v26/k3kIo84MPvpLmixcA63oeALZhaCt9yX6-q2CGg.otf",
});
// Font.register({
//   family: "Roboto",
//   src: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf",
// });
//Font.register('https://github.com/chenqing/ng-mini/blob/master/font/msyh.ttf', { family: 'Microsoft Yahei' });

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 40,
  },
  section: {
    fontSize: 12,
    fontFamily: "Noto Sans SC",
    marginBottom: 20,
    lineHeight: 1.5,
  },
});

interface MyDocumentProps {
  content: string;
}

const MyDocument: React.FC<MyDocumentProps> = ({ content }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.section}>{content}</Text>
    </Page>
  </Document>
);

export default MyDocument;
