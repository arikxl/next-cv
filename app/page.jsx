'use client'

import { useState } from "react";
import CvList from "./components/CvList";
import AppHeader from "./components/AppHeader";

export default function Home() {

  const [pdfFile, setPdfFile] = useState('');
  const [pdfError, setPdfError] = useState('');
  return (
    <main className="">
      <CvList />
    </main>
  )
}
