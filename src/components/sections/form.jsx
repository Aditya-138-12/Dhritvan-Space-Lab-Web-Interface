import React, { useState } from "react";
import { motion } from "framer-motion";
import { PDFDocument, rgb } from "pdf-lib";
import { saveAs } from "file-saver";
import fontkit from "@pdf-lib/fontkit";

const Form = () => {

    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [lengthOfName, setLengthOfName] = useState("");

    const handleGeneratePDF = async () => {
        const existingPdfBytes = await fetch("src/components/sections/cert.pdf").then(res =>
            res.arrayBuffer()
        );

        const fontBytes = await fetch("src/components/sections/Silentha OT.ttf").then(res =>
            res.arrayBuffer()
        );



        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        pdfDoc.registerFontkit(fontkit);
        const customFont = await pdfDoc.embedFont(fontBytes);
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];

        console.log("This is the Length of the Name " + lengthOfName);

        const nameWidth = customFont.widthOfTextAtSize(name, 34);
        const designationWidth = customFont.widthOfTextAtSize(designation, 34);

        const baseX = 280;
        const baseY = 260;

        const spacing = 20;
        const designationX = baseX + nameWidth + spacing;

        // Add text to the certificate
        firstPage.drawText(name, {
            x: baseX, // Adjust X-coordinate
            y: baseY, // Adjust Y-coordinate
            size: 34,
            font: customFont,
            color: rgb(0, 0, 0),
        });



        firstPage.drawText(designation, {
            x: designationX, // Adjust X-coordinate
            y: baseY, // Adjust Y-coordinate
            size: 30,
            font: customFont,
            color: rgb(0, 0, 0),
        });

        // Save the PDF
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        saveAs(blob, "Dhritvan-Lab-Certificate.pdf");
    }

    return (
        <motion.div
            className="max-w-3xl mx-auto mt-5 p-5 h-[35vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4 text-center"
            >
                Get Your Certificate
            </motion.h2>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center space-y-4 mt-5"
            >
                <div className="w-full max-w-md">
                    <div className="grid grid-cols-3 gap-4 items-center mb-4">
                        <label className="text-right">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => { setName(e.target.value); setLengthOfName(e.target.value.length) }}
                            className="col-span-2 p-2 border rounded-md w-full"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-4 items-center mb-4">
                        <label className="text-right">Designation:</label>
                        <input
                            type="text"
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            className="col-span-2 p-2 border rounded-md w-full"
                        />
                    </div>
                </div>

                <motion.button
                    onClick={handleGeneratePDF}
                    className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 mt-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Generate Certificate
                </motion.button>
            </motion.div>
        </motion.div>
    );
}

export default Form;