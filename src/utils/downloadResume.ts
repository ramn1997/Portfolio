import resumePdf from "../assets/Ram_Narayan_Resume.pdf";

export const downloadResumePDF = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.setAttribute("download", "Ram_Narayan_Resume.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
