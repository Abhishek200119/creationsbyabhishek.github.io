import React from 'react';
import PdfViewer from './PdfViewer';
import './CaseStudyPage.css';

function ProductDesign() {
  return (
    <div className="case-study-container">
      {/* PDF Viewer */}
      <div className="pdf-viewer-wrapper">
        <PdfViewer fileUrl="/Product-design.pdf" />
      </div>

      {/* Figma Prototype Button */}
      <div className="figma-button-fixed">
        <a
          href="https://www.figma.com/proto/ZXesmoX7OXk7gfrp2BwqKW/Untitled?node-id=7-11&starting-point-node-id=5%3A4&t=UpRCb83oOKrUaRhP-1"
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

export default ProductDesign;