import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import logoImage from './assets/logo-image.png';
import { useLocation } from 'react-router-dom'; // Import the useLocation hook
import './AdminPage.css';
import axios from 'axios';


const sections = [
  {
    name: 'Home',
    subsections: ['highlight-section', 'news1', 'news2', 'news3', 'news4','announcement1', 'announcement2', 'announcement3', 'announcement4'],
  },
  {
    name: 'Jeeyar',
    subsections: ['year', '2023', '2022', 'Jeeyar article 1', 'Jeeyar article 2', 'Jeeyar article 3','Jeeyar article 4', 'Event 1', 'Event 2', 'Event 3','Event 4'],
  },

  {
    name: 'Temple',
    subsections: ['Temple article 1','Temple article 2','Temple article 3','Temple article 4','Temple article 5','Temple article 6'],
  },

  {
    name: 'Patasala',
    subsections: ['Course','Admission','Events', 'Patasala Gallery1','Patasala Gallery2','Patasala Gallery3','Patasala Gallery4',],
  },

  {
    name: 'Gallery',
    subsections: ['Gallery1','Gallery2','Gallery3','Gallery4','Gallery5','Gallery6','Gallery7','Gallery8',],
  },
  
];

const AdminPage = ({
  
}) => {
    const location = useLocation(); // Get location data
    const adminName = location.state?.adminName || 'Admin'; // Default to 'Admin' if no name provided
    const [activeSection, setActiveSection] = useState(null);
    const [lastSaved, setLastSaved] = useState('');
    const [activeSubSection, setActiveSubSection] = useState(null);

    const [highlightSectionData, setHighlightSectionData] = useState(null);
    const [error, setError] = useState(null);

    const [drafts, setDrafts] = useState([]); // Initialize drafts state as an empty array
    const [isViewingDrafts, setIsViewingDrafts] = useState(false);

    // Add these states at the top of your component
    const [isEditing, setIsEditing] = useState(false);  // To toggle editing mode
    
   // AFTER: Dynamic state to handle all sections
    const [sectionData, setSectionData] = useState({
      header: '',
      preview_text: '',
      article_text: '',
      preview_image: null,
      article_image: null
   });

    const formatDate = (date) => {
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return new Date(date).toLocaleDateString('en-GB', options);
    };
    
    
    useEffect(() => {
      if (activeSubSection) {
        fetchSectionData(activeSubSection);
      }
    }, [activeSubSection]);
    
    const fetchSectionData = async (subsection) => {
      try {
        subsection=subsection.replace(/-/g,"_")
        const response = await axios.get(`https://andaal.in/gbm/api/articles/${subsection}`);
        setSectionData({
          header: response.data.heading || '',
          preview_text: response.data.preview_text || '',
          article_text: response.data.article_text || '',
          preview_image: response.data.preview_image || null,
          article_image: response.data.article_media1 || null
        });
      } catch (err) {
        setError(`Failed to fetch data for ${subsection}`);
        console.error(`Error fetching data for ${subsection}:`, err);
      }
    }; 


    const fetchPublishedHistory = async (subsection) => {
      try {
        subsection = subsection.replace(/-/g, "_");
        const response = await axios.get(`https://andaal.in/gbm/api/articles_history/${subsection}`);
        setPublishedHistory(response.data);  // Store the fetched published data
        console.log(`History data for ${subsection} has been fetched:`, response.data);
      } catch (error) {
        console.error(`Error fetching published history for ${subsection}:`, error);
      }
    };

    useEffect(() => {
      if (activeSubSection) {
        fetchPublishedHistory(activeSubSection);  // Fetch history dynamically based on subsection
      }
    }, [activeSubSection]);


    const handlePublish = async (subsection) => {
      const formData = new FormData();
      subsection=subsection.replace(/-/g,"_")
      formData.append('section_id', subsection);  // Pass the subsection dynamically
      formData.append('heading', sectionData.header);
      formData.append('preview_text', sectionData.preview_text);
      formData.append('article_text', sectionData.article_text);
      formData.append('status', 'published');
    
      if (sectionData.preview_image) formData.append('preview_image', sectionData.preview_image);
      if (sectionData.article_image) formData.append('article_media1', sectionData.article_image);
    
      try {
        await axios.post(`https://andaal.in/gbm/api/articles`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('Content published successfully!');
      } catch (error) {
        console.error('Error publishing content:', error);
        alert('Failed to publish content.');
      }
    };

    const fetchDrafts = async (subsection) => {
      try {
        subsection=subsection.replace(/-/g,"_")
        const response = await axios.get(`https://andaal.in/gbm/api/drafts/${subsection}`);
        setDrafts(response.data);
        setIsViewingDrafts(true);
        console.log(`Drafts for ${subsection} fetched successfully:`, response.data);
        loadDraft(response.data);
      } catch (error) {
        console.error(`Error fetching drafts for ${subsection}:`, error);
        alert(`Failed to fetch drafts for ${subsection}.`);
      }
    };

  const loadDraft = (draft) => {
  console.log('Loaded draft:', draft);  // Debugging log
  
  // Populate the respective fields with the draft data dynamically
  setSectionData({
    header: draft.heading || '',            // Load header
    preview_text: draft.preview_text || '', // Load preview text
    article_text: draft.article_text || '', // Load article text
    preview_image: draft.preview_image || null, // Load preview image
    article_image: draft.article_media1 || null  // Load article image
  });

  setIsEditing(true);  // Switch to editing mode
};
    
const handleCancel = () => {
  // Exit editing mode without saving changes
  setIsEditing(false);
};


    
// AFTER: Dynamic editing for any subsection
const handleEdit = () => {
  setIsEditing(true);
  setSectionData({
    header: sectionData.header || '',
    preview_text: sectionData.preview_text || '',
    article_text: sectionData.article_text || '',
    preview_image: sectionData.preview_image || null,
    article_image: sectionData.article_image || null
  });
};
    const [imagePreview, setImagePreview] = useState(null); // New state for image preview URL
    const [articleImagePreview, setArticleImagePreview] = useState(null);  // State for article image preview URL
    const [publishedHistory, setPublishedHistory] = useState([]);  // State to store published articles


// Handle preview image change
const handleImageChange = (e) => {
  if (e.target.files && e.target.files[0]) {
    const file = e.target.files[0];
    setSectionData({ ...sectionData, preview_image: file });
    setImagePreview(URL.createObjectURL(file));  // Create and store the preview URL
  }
};

// Handle article image change
const handleArticleImageChange = (e) => {
  if (e.target.files && e.target.files[0]) {
    const file = e.target.files[0];
    setSectionData({ ...sectionData, article_image: file });
    setArticleImagePreview(URL.createObjectURL(file));  // Create and store the preview URL
  }
};

const handleSave = async (subsection) => {
  const formData = new FormData();
  
  // Dynamically set the section_id based on the activeSubSection
  subsection=subsection.replace(/-/g,"_")
  formData.append('section_id', subsection);

  // Append the section data dynamically
  formData.append('heading', sectionData.header);
  formData.append('preview_text', sectionData.preview_text);
  formData.append('article_text', sectionData.article_text);
  formData.append('status', 'draft');  // Set status to draft
  
  // Conditionally append images if they exist
  if (sectionData.preview_image) {
    formData.append('preview_image', sectionData.preview_image);
  }
  if (sectionData.article_image) {
    formData.append('article_media1', sectionData.article_image);
  }

try {
  // Save the draft via the API
  await axios.post('https://andaal.in/gbm/api/save_drafts', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  alert('Draft saved successfully!');

  // Fetch updated drafts after saving
  await fetchDrafts();

} catch (error) {
  console.error('Error saving draft:', error);
  alert('Failed to save draft.');
}
};

    const renderButtons = () => (
      <div className="button-containers" style={{ textAlign: 'center' }}>
        {/* Button Section */}
        <div className="edit-publish">
          {!isEditing ? (
            <button onClick={handleEdit}>Edit</button>
          ) : (
            <>
              <button onClick={() =>handleSave(activeSubSection)}>Save</button>
              <button onClick={() => fetchDrafts(activeSubSection)}>View Drafts</button>
              <button onClick={() => handlePublish(activeSubSection)}>Publish</button>
              <button onClick={handleCancel}>Cancel</button>  {/* Cancel Button */}
            </>
          )}
       </div>
    
        {/* Created By and Date Section */}
        <div className="name-date">
          <div className="created-by">Created by: {adminName}</div>
          {lastSaved && <div className="date">Date: {formatDate(lastSaved)}</div>}
        </div>
      </div>
    );
    
  const handleSectionClick = (section) => {
    // Toggle the section's active state
    if (activeSection === section) {
      setActiveSection(null); // Close the section if it's already open
    } else {
      setActiveSection(section);
      setActiveSubSection(null); // Reset subsection on section click
    }
  };

  const handleSubSectionClick = (subsection) => {
    if (activeSubSection !== subsection) {
      setActiveSubSection(subsection); // Only update if subsection changes
      setIsEditing(false); // Exit edit mode when switching subsections
      console.log(`Subsection clicked: ${subsection}`);
  
      // Post message to iframe to highlight the section
      const iframe = document.getElementById('website-preview');
      iframe.contentWindow.postMessage({ section: subsection }, '*');
  
      setIsViewingDrafts(false); // Reset draft view when switching subsections
    }
  };

  


  const renderContent = () => {
    if (!activeSubSection) {
      return <p>Please select a subsection to display content.</p>;
    }
  
    return (
      <div className="content-display-section">
        {renderButtons()}
  
        {/* View Drafts Section */}
        {isViewingDrafts && drafts.length > 0 && (
          <div className="draft-list">
            <h3>Drafts</h3>
            {drafts.map((draft, index) => (
              <div key={index} className="draft-item">
                <h4>{draft.heading}</h4>
                <p>{draft.preview_text}</p>
                <p>{draft.article_text}</p>
                <button onClick={() => loadDraft(draft)}>View Draft</button>
              </div>
            ))}
          </div>
        )}
  
        {/* Dynamic Subsection Handling */}
        {activeSubSection && (
          <div className="section-container" style={{ textAlign: 'center', marginTop: '20px' }}>
            {isEditing ? (
              <>
                <button
                  className="replace-button"
                  onClick={() => document.getElementById('fileInput').click()}
                >
                  Replace Image
                </button>
                <input
                  id="fileInput"
                  type="file"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
  
                <img
                  src={imagePreview || sectionData.preview_image}
                  alt="Preview"
                  style={{ maxWidth: '100%', height: '300px', marginTop: '20px' }}
                />
  
                <div className="admin-page-container">
                  <h3>Heading</h3>
                  <input
                    type="text"
                    value={sectionData.header}
                    onChange={(e) =>
                      setSectionData({ ...sectionData, header: e.target.value })
                    }
                    style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      width: '100%',
                      marginBottom: '10px',
                      marginTop: '10px',
                    }}
                    placeholder="Edit Header"
                  />
  
                  <h3>Preview</h3>
                  <textarea
                    value={sectionData.preview_text}
                    onChange={(e) =>
                      setSectionData({ ...sectionData, preview_text: e.target.value })
                    }
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.6',
                      textAlign: 'justify',
                      width: '100%',
                      height: '150px',
                      marginBottom: '10px',
                    }}
                    placeholder="Edit Preview Text"
                  />
  
                  <button
                    className="articlereplace-button"
                    onClick={() => document.getElementById('articleImageInput').click()}
                  >
                    Replace Article Image
                  </button>
                  <input
                    id="articleImageInput"
                    type="file"
                    onChange={handleArticleImageChange}
                    style={{ display: 'none' }}
                  />
  
                  <img
                    src={articleImagePreview || sectionData.article_image}
                    alt="Article Image"
                    style={{ maxWidth: '100%', height: '300px', marginTop: '20px' }}
                  />
  
                  <h3>Article</h3>
                  <textarea
                    value={sectionData.article_text}
                    onChange={(e) =>
                      setSectionData({ ...sectionData, article_text: e.target.value })
                    }
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.6',
                      textAlign: 'justify',
                      width: '100%',
                      height: '300px',
                      marginBottom: '10px',
                    }}
                    placeholder="Edit Full Article"
                  />
                </div>
              </>
            ) : (
              <>
                {error ? (
                  <p>{error}</p>
                ) : !sectionData ? (
                  <p>Loading...</p>
                ) : (
                  <>
                    <img
                      src={imagePreview || sectionData.preview_image}
                      alt="Content Section"
                      style={{
                        maxWidth: '100%',
                        height: '300px',
                        display: 'block',
                        margin: '0 auto',
                      }}
                    />
  
                    <div
                      className="highlight-content"
                      style={{ textAlign: 'center', marginTop: '20px' }}
                    >
                      <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
                        {sectionData.header}
                      </h2>
  
                      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
                        {sectionData.preview_text}
                      </p>
  
                      <img
                        src={articleImagePreview || sectionData.article_image}
                        alt="Article Image"
                        style={{ maxWidth: '100%', height: '300px', marginTop: '20px' }}
                      />
  
                      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
                        {sectionData.article_text}
                      </p>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>
    );
  };
  
  
  useEffect(() => {
    // Apply scaling to the content after the iframe loads
    const iframe = document.getElementById('website-preview');
    iframe.onload = () => {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      const iframeBody = iframeDocument.body;

      // Apply scaling to the content inside the iframe
      iframeBody.style.transform = 'scale(0.50)';  // Shrink content to 25% of original size
      iframeBody.style.transformOrigin = '0 0';    // Keep scaling frm the top-left
      iframeBody.style.width = '200%';             // Compensate for the smaller scale
    };
  }, []);
  

  return (
    <div className="admin-page">
      {/* Logo Container */}
      <div className="logo-container">
    <header className="header-flex">
      <div className="Header-text">VANAMAMALAI MUTT</div>
      <img src={logoImage} alt="Vanamamalai Mutt Logo" className="logo" />
      <div className="logologo">
        <Link to="/login" className="login-icon">
          <FaUserCircle size={25} />
        </Link>
      </div>
    </header>
  </div>
      {/* First Column: Sections */}
      <div className="admin-section">
        <h2>Sections</h2>
        {sections.map((section, index) => (
          <div key={index}>
            <button
              className="section-button"
              onClick={() => handleSectionClick(section.name)}
            >
              {section.name}
              {/* Triangular Arrow */}
              <span className={`arrow ${activeSection === section.name ? 'open' : ''}`}></span>
            </button>
            {activeSection === section.name && (
              <div className="subsections">
                {section.subsections.map((subsection, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSubSectionClick(subsection)}
                    className="subsection-button"
                  >
                    {subsection}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Second Column: Selected Section Content */}
      <div className="admin-content">
        {renderContent()}
      </div>

{/* Third Column: Swapped Preview and History Section */}
<div className="admin-history">
  {/* Preview Section */}
  <div className="iframe-container" style={{ marginTop: '-40px' }}>
    <h2>Preview</h2>
    <iframe
      id="website-preview"
      src="/"  // Ensure this points to the correct URL of your website
      style={{
        width: '100%',  // Full width of the parent container
        height: '450px',  // Height of the iframe container
        border: '1px solid #ccc',
      }}
    ></iframe>
  </div>

  {/* History Section */}
  <div className="history">
    <h2>History</h2>
    {publishedHistory.length === 0 ? (
      <p>No published articles yet.</p>
    ) : (
      <ul>
        {publishedHistory.map((article, index) => (
          <li key={index}>
            <h4>{article.heading}</h4>
            <p>{article.preview_text}</p>
            {article.preview_image && (
              <img
                src={article.preview_image}
                alt="Preview"
                style={{ maxWidth: '100%', height: '100px', marginTop: '10px' }}
              />
            )}
            <p>Updated on: {new Date(article.updated_at).toLocaleString()}</p> {/* Assuming the `date` field exists */}
          </li>
        ))}
      </ul>
    )}
  </div>

  {/* Replace static list with dynamic list */}
  <ul>
    {[''].map((section) => (
      <li key={section} onClick={() => handleSubSectionClick(section)}>
        {section.replace(/-/g, ' ')}
      </li>
    ))}
  </ul>
</div>
    </div>
  );
};

export default AdminPage;

