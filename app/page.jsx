'use client'

import { useState } from "react";
import CvList from "./components/CvList";
import FileForm from "./components/FileForm";
import ErrorMsg from "./components/ErrorMsg";
import CvfInfo from "./components/CvInfo";
import BtnsPanel from "./components/BtnsPanel";
import Viewer from "./components/Viewer";

export default function Home() {

  const [pdfFile, setPdfFile] = useState('');
  const [pdfError, setPdfError] = useState('');
  return (
    <main className='w-4/5 mx-auto'>
      <FileForm setPdfFile={setPdfFile} setPdfError={setPdfError} />
      {pdfError && <ErrorMsg>{pdfError}</ErrorMsg>}
      {pdfFile && (
        <>
          <CvfInfo pdfError={pdfError} pdfFile={pdfFile} />
          <BtnsPanel />
          <Viewer pdfFile={pdfFile} />
        </>
      )}
      <CvList />
    </main>
  )
}
