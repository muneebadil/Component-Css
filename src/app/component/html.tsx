import React from "react";

const HTMLInfo = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        border: "2px solid #2563eb",
        borderRadius: "8px",
        backgroundColor: "#f0f8ff",
        textAlign: "center",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ color: "#2563eb", fontSize: "2rem", marginBottom: "10px" }}>What is HTML?</h1>
      <p style={{ color: "#333", fontSize: "1rem", lineHeight: "1.5" }}>
        HTML (HyperText Markup Language) is the foundational language for creating webpages.
        It structures content on the web using a series of elements like headings, paragraphs, and images.
        HTML forms the basic layout of a page, which can then be styled with CSS and made dynamic with JavaScript.
        It is easy to learn and essential for web development.
        Every webpage on the internet relies on HTML for its structure.
      </p>
    </div>
  );
};

export default HTMLInfo;
