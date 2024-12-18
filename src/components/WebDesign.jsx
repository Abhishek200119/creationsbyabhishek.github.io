import React from 'react';
import PdfViewer from './PdfViewer';
import './CaseStudyPage.css'; // Reusable CSS for styling

function WebDesign() {
  return (
    <div className="case-study-container">
      <div className="pdf-viewer-wrapper">
        <PdfViewer fileUrl="/Web-Design.pdf" />
      </div>
      <div className="figma-button-container">
        <a
          href="https://www.figma.com/proto/frww8B7FjwQy55kzbxVb9C/Untitled?node-id=2-2&t=H19tC4vnkehTW4ml-1"
          target="_blank"
          rel="noopener noreferrer"
          className="figma-button"
        >
          View Figma Prototype
        </a>
      </div>
    </div>
  );
}

export default WebDesign;