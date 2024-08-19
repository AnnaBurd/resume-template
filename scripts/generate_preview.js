import { pdfToPng } from "pdf-to-png-converter";

const pngPages = await pdfToPng(
  "./out/resume-v2_en.pdf", // The function accepts PDF file path or a Buffer
  {
    disableFontFace: true, // When `false`, fonts will be rendered using a built-in font renderer that constructs the glyphs with primitive path commands. Default value is true.
    useSystemFonts: true, // When `true`, fonts that aren't embedded in the PDF document will fallback to a system font. Default value is false.
    enableXfa: false, // Render Xfa forms if any. Default value is false.
    viewportScale: 2.0, // The desired scale of PNG viewport. Default value is 1.0.
    outputFolder: "docs/preview", // Folder to write output PNG files. If not specified, PNG output will be available only as a Buffer content, without saving to a file.
    outputFileMask: "resume", // Output filename mask. Default value is 'buffer'.
    pdfFilePassword: "pa$$word", // Password for encrypted PDF.
    pagesToProcess: [1], // Subset of pages to convert (first page = 1), other pages will be skipped if specified.
    strictPagesToProcess: false, // When `true`, will throw an error if specified page number in pagesToProcess is invalid, otherwise will skip invalid page. Default value is false.
    verbosityLevel: 0, // Verbosity level. ERRORS: 0, WARNINGS: 1, INFOS: 5. Default value is 0.
  }
);
