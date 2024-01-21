// ImageModal.js
import React from 'react';
import './ImageModal.css';

const ImageModal = ({ closeModal, imageDetails }) => {
  const {
    id,
    user,
    userId,
    type,
    views,
    downloads,
    likes,
    tags,
    previewURL,
    webformatURL,
    fullHDURL,
  } = imageDetails;

  return (
    <div className="image-modal-overlay" onClick={closeModal}>
      <div className="image-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-close" onClick={closeModal}>
            X
          </span>
          <span className="modal-title">Preview ID: {id}</span>
        </div>
        <div className="modal-content">
          <div className="image-preview">
            <img src={previewURL} alt={tags} />
          </div>
          <div className="image-details">
            <table>
              <tbody>
                <tr>
                  <td>User:</td>
                  <td>{user}</td>
                </tr>
                <tr>
                  <td>User ID:</td>
                  <td>{userId}</td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td>{type}</td>
                </tr>
                <tr>
                  <td>Views:</td>
                  <td>{views}</td>
                </tr>
                <tr>
                  <td>Downloads:</td>
                  <td>{downloads}</td>
                </tr>
                <tr>
                  <td>Likes:</td>
                  <td>{likes}</td>
                </tr>
              </tbody>
            </table>
            <div className="download-section">
              <h4>Download</h4>
              <p>Choose a size:</p>
              <select>
                <option value={webformatURL}>Web Format</option>
                <option value={fullHDURL}>Full HD</option>
              </select>
              <button>Download</button>
            </div>
            <div className="information-section">
  <h4>Information</h4>
  <div className="attribute-row">
    <div>
      <strong>User:</strong> {user}
    </div>
    <div>
      <strong>User ID:</strong> {userId}
    </div>
    <div>
      <strong>Type:</strong> {type}
    </div>
  </div>
  <div className="attribute-row">
    <div>
      <strong>Views:</strong> {views}
    </div>
    <div>
      <strong>Downloads:</strong> {downloads}
    </div>
    <div>
      <strong>Likes:</strong> {likes}
    </div>
  </div>
</div>
          </div>
        </div>
        <div className="tags-section">
          <strong>Tags:</strong> {tags}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
