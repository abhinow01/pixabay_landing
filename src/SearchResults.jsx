
// SearchResults.js
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import ImageModal from './ImageModal.jsx';
import './SearchResults.css';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const SearchResults = ({ searchTerm, results }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  // Render nothing if there are no results
  if (!searchTerm || results.length === 0) {
    return null;
  }

  return (
    <div className="search-results">
      <h3 className="results-heading">Results: {searchTerm}</h3>
      <div className="category-row">
        {results.length > 0 &&
          results[0].tags.split(',').map((category, index) => (
            <div key={index} className="category-box">
              {category.trim()}
            </div>
          ))}
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="image-grid"
        columnClassName="masonry-column"
      >
        {results.map((result) => (
          <div key={result.id} className="image-item" onClick={() => openModal(result)}>
            <img src={result.previewURL} alt={result.tags} />
            <div className="image-details">
              {/* Additional details can be added here if needed */}
            </div>
          </div>
        ))}
      </Masonry>
      {modalOpen && selectedImage && (
        <ImageModal closeModal={closeModal} imageDetails={selectedImage} />
      )}
    </div>
  );
};
export default SearchResults;
