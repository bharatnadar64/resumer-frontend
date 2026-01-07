// @ts-nocheck
// resumeController.js

export const analyzeResume = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
        const res = await fetch("http://localhost:8080/api/v1/resume/analyze", {
            method: "POST",
            body: formData,
        });
        console.log(res)
        const data = await res.json()
        return { ...data, success: true };
    } catch (error) {
        return { success: false, message: error.message }
    }
};
