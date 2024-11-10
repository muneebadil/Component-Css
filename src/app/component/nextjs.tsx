import React from "react";

const NextJSBenefits = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        border: "2px solid #0070f3",
        borderRadius: "8px",
        backgroundColor: "#e0f4ff",
        textAlign: "center",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ color: "#0070f3", fontSize: "2rem", marginBottom: "10px" }}>Benefits of Next.js</h1>
      <p style={{ color: "#333", fontSize: "1rem", lineHeight: "1.5" }}>
        Next.js enables server-side rendering, improving page load times and SEO.
        It offers a powerful routing system with dynamic routing capabilities.
        Built-in support for CSS and JavaScript libraries streamlines development.
        Next.js optimizes performance with features like automatic code splitting.
        It is backed by Vercel, providing a seamless deployment and hosting experience.
      </p>
    </div>
  );
};

export default NextJSBenefits;
