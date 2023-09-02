// 'use client'


// import { useState } from "react";

const PdfForm = ({ setPdfError, setPdfFile }) => {

    // const [test, setTest] = useState('')

    const handleFile = (e) => {
        const cvFile = e.target.files[0];
        if (cvFile.type !== 'application/pdf') {
            setPdfError('Pdf file is required');
        } else {
            const formData = new FormData();
            formData.append('cvFile', cvFile)
     
            const reader = new FileReader();
            reader.readAsDataURL(cvFile);
            reader.onload = (e) => {
                setPdfError('');
                setPdfFile(e.target.result);
            };
        }
    };



    return (
        <form className=' w-1/2 flex justify-center text-sm items-center mx-auto py-4 border border-cyan-400'>

            <label >Upload here your PDF file:</label>
            &nbsp; &nbsp;
            <input type="file" 
                onChange={handleFile} />
            {/* <button onClick={handleFile}>aaaa</button> */}
        </form>
    );
};

export default PdfForm;