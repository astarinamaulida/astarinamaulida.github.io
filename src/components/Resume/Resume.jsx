import React from "react";
import { Document } from "react-pdf";
import { Page } from "react-pdf";
import "./Resume.css";

export default function Resume() {
  return (
    <div>
      <Document file="/../public/Resume-AstarinaMaulida.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
