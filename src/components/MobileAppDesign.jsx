import React from 'react';
import PdfViewer from './PdfViewer';
import './CaseStudyPage.css'; // Make sure this CSS file is imported

function MobileAppDesign() {
  return (
    <div className="case-study-container">
      {/* PDF Viewer */}
      <div className="pdf-viewer-wrapper">
        <PdfViewer fileUrl="/mobile-app-design.pdf" />
      </div>

      {/* Figma Button */}
      <div className="figma-button-container">
        <a
          href="https://www.figma.com/proto/AeEdcfCe7xdUktQa6gIvUP/AirConnect?node-id=4-637&t=aBpWkBoG23cbXb9A-1"
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

export default MobileAppDesign;