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
    subsections: ['highlight-section', 'news1', 'news2', 'news3', 'announcement1', 'announcement2', 'announcement3', 'announcement4'],
  },
  {
    name: 'Jeeyar',
    subsections: ['year', '2023', '2022', 'Jeeyar article 1', 'Jeeyar article 2', 'Jeeyar article 3', 'Event 1', 'Event 2', 'Event 3'],
  },
];

const AdminPage = ({
  highlightSectionContent,
  highlightSectionImage,
  news1Content,
  news1Image,
  news2Content,
  news2Image,
  news3Content,
  news3Image,
  serverUrl,
  announcement1Content,
  announcement1Image,
  announcement2Content,
  announcement2Image,
  announcement3Content,
  announcement3Image,
  announcement4Content,
  announcement4Image,
  imageUrl,
  yearContent,
  year1Content,
  year2Content,
  yearImage,
  year1Image,
  year2Image,
  imageUrl1,
  imageUrl2,
  imageUrl3,
  imageUrl4,
  content1,
  content2,
  content3,
  content4,
  event1Paragraph,
  event2Paragraph,
  event3Paragraph,
  event4Paragraph,
  EventImage,
  EventImage2,
  EventImage3,
  EventImage4,


  
}) => {
    const location = useLocation(); // Get location data
    const adminName = location.state?.adminName || 'Admin'; // Default to 'Admin' if no name provided
    const [activeSection, setActiveSection] = useState(null);
    const [lastSaved, setLastSaved] = useState('');
    const [activeSubSection, setActiveSubSection] = useState(null);

    const [highlightSectionData, setHighlightSectionData] = useState(null);
    const [error, setError] = useState(null);
    
    
    const [editedHeader, setEditedHeader] = useState('');
    const [editedParagraph, setEditedParagraph] = useState('');
    const [editedArticle, setEditedArticle] = useState('');
    const [editedImage, setEditedImage] = useState(null);
    const [editedArticleImage, setEditedArticleImage] = useState(null);
    const [isEditing, setIsEditing] = useState(false); // Editing mode state
    
    const [editednews1Header, setEditednews1Header] = useState('');
    const [editednews1Paragraph, setEditednews1Paragraph] = useState('');
    const [editednews1Image, setEditednews1Image] = useState(null);
    
    const [editednews2Header, setEditednews2Header] = useState('');
    const [editednews2Paragraph, setEditednews2Paragraph] = useState('');
    const [editednews2Image, setEditednews2Image] = useState(null);
    
    const [editednews3Header, setEditednews3Header] = useState('');
    const [editednews3Paragraph, setEditednews3Paragraph] = useState('');
    const [editednews3Image, setEditednews3Image] = useState(null);

    const [editedannouncement1Paragraph, setEditedannouncement1Paragraph] = useState('');
    const [editedannouncement1Image, setEditedannouncement1Image] = useState(null);

    const [editedannouncement2Paragraph, setEditedannouncement2Paragraph] = useState('');
    const [editedannouncement2Image, setEditedannouncement2Image] = useState(null);

    const [editedannouncement3Paragraph, setEditedannouncement3Paragraph] = useState('');
    const [editedannouncement3Image, setEditedannouncement3Image] = useState(null);

    const [editedannouncement4Paragraph, setEditedannouncement4Paragraph] = useState('');
    const [editedannouncement4Image, setEditedannouncement4Image] = useState(null);

    const [editedyearParagraph, setEditedyearParagraph] = useState('');
    const [editedyearImage, setEditedyearImage] = useState(null);

    const [editedyear1Paragraph, setEditedyear1Paragraph] = useState('');
    const [editedyear1Image, setEditedyear1Image] = useState(null);

    const [editedyear2Paragraph, setEditedyear2Paragraph] = useState('');
    const [editedyear2Image, setEditedyear2Image] = useState(null);

    const [editedcontent1Header, setEditedcontent1Header] = useState('');
    const [editedcontent1Paragraph, setEditedcontent1Paragraph] = useState('');
    const [editedimageUrl1, setEditedimageUrl1] = useState(null);

    const [editedcontent2Header, setEditedcontent2Header] = useState('');
    const [editedcontent2Paragraph, setEditedcontent2Paragraph] = useState('');
    const [editedimageUrl2, setEditedimageUrl2] = useState(null);

    const [editedcontent3Header, setEditedcontent3Header] = useState('');
    const [editedcontent3Paragraph, setEditedcontent3Paragraph] = useState('');
    const [editedimageUrl3, setEditedimageUrl3] = useState(null);

    const [editedcontent4Header, setEditedcontent4Header] = useState('');
    const [editedcontent4Paragraph, setEditedcontent4Paragraph] = useState('');
    const [editedimageUrl4, setEditedimageUrl4] = useState(null);

    const [editedevent1Paragraph, setEditedevent1Paragraph] = useState('');
    const [editedEventImage, setEditedEventImage] = useState(null);

    const [editedevent2Paragraph, setEditedevent2Paragraph] = useState('');
    const [editedEventImage2, setEditedEventImage2] = useState(null);

    const [editedevent3Paragraph, setEditedevent3Paragraph] = useState('');
    const [editedEventImage3, setEditedEventImage3] = useState(null);

    const [editedevent4Paragraph, setEditedevent4Paragraph] = useState('');
    const [editedEventImage4, setEditedEventImage4] = useState(null);

    const formatDate = (date) => {
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return new Date(date).toLocaleDateString('en-GB', options);
    };
    
    
    useEffect(() => {
      const fetchHighlightSectionData = async () => {
        try {
          const response = await axios.get('https://andaal.in/gbm/api/articles/highlight_section');
          setHighlightSectionData(response.data); // Store fetched data
    
          // Populate editing states with fetched data to allow editing
          setEditedHeader(response.data.header);
          setEditedParagraph(response.data.preview_text);
          setEditedArticle(response.data.article_text);
          setEditedImage(response.data.preview_image);
          setEditedArticleImage(response.data.articleImage);
        } catch (err) {
          setError('Failed to fetch data from API.');
          console.error('Error fetching highlight section data:', err);
        }
      };
    
      fetchHighlightSectionData();
    }, []);

    const handlePublish = () => {
      // Logic to publish the content
      console.log('Publish button clicked');
      setLastSaved(new Date()); 
      // Add your publish logic here
    };
    
    const handleDraft = () => {
      // Logic to save content as draft
      console.log('Draft button clicked');
      setLastSaved(new Date()); 
      // Add your draft logic here
    };


    
    const handleEdit = (e) => {
      setIsEditing(true);
      // Ensure editable fields are populated with current data
      setEditedHeader(highlightSectionData?.heading || '');
      setEditedParagraph(highlightSectionData?.preview_text || '');
      setEditedArticle(highlightSectionData?.article_text || '');
      setEditedImage(highlightSectionData?.preview_image || null);
      setEditedArticleImage(highlightSectionData?.articleImage || null);
        
        setEditednews1Header(news1Content.header);
        setEditednews1Paragraph(news1Content.paragraph);
        setEditednews1Image(news1Image);
        
        setEditednews2Header(news2Content.header);
        setEditednews2Paragraph(news2Content.paragraph);
        setEditednews2Image(news2Image);
        
        setEditednews3Header(news3Content.header);
        setEditednews3Paragraph(news3Content.paragraph);
        setEditednews3Image(news3Image);

        setEditedannouncement1Paragraph(announcement1Content.paragraph);
        setEditedannouncement1Image(announcement1Image);

        setEditedannouncement2Paragraph(announcement2Content.paragraph);
        setEditedannouncement2Image(announcement2Image);

        setEditedannouncement3Paragraph(announcement3Content.paragraph);
        setEditedannouncement3Image(announcement3Image);

        setEditedannouncement4Paragraph(announcement4Content.paragraph);
        setEditedannouncement4Image(announcement4Image);

        setEditedyearParagraph(yearContent.paragraph);
        setEditedyearImage(yearImage);

        setEditedyear1Paragraph(year1Content.paragraph);
        setEditedyear1Image(year1Image);

        setEditedyear2Paragraph(year2Content.paragraph);
        setEditedyear2Image(year2Image);

        setEditedcontent1Header(content1.header);
        setEditedcontent1Paragraph(content1.paragraph);
        setEditedimageUrl1(imageUrl1);
        
        setEditedcontent2Header(content2.header);
        setEditedcontent2Paragraph(content2.paragraph);
        setEditedimageUrl2(imageUrl2);

        setEditedcontent3Header(content3.header);
        setEditedcontent3Paragraph(content3.paragraph);
        setEditedimageUrl3(imageUrl3);

        setEditedcontent4Header(content4.header);
        setEditedcontent4Paragraph(content4.paragraph);
        setEditedimageUrl4(imageUrl4);

        setEditedevent1Paragraph(event1Paragraph);
        setEditedEventImage(EventImage);

        setEditedevent2Paragraph(event2Paragraph);
        setEditedEventImage2(EventImage2);

        setEditedevent3Paragraph(event3Paragraph);
        setEditedEventImage3(EventImage3);

        setEditedevent4Paragraph(event4Paragraph);
        setEditedEventImage4(EventImage4);
    };

    const handleImageChange = (e) => {
      if (e.target.files[0]) {
         setEditedImage(e.target.files[0]); // Set the file itself
      }
   };

    const handleArticleImageChange = (e) => {
      setEditedArticleImage(URL.createObjectURL(e.target.files[0]));  // Preview the uploaded article image
  };
    const handlenews1ImageChange = (e) => {
        setEditednews1Image(URL.createObjectURL(e.target.files[0])); 
    };
    const handlenews2ImageChange = (e) => {
        setEditednews1Image(URL.createObjectURL(e.target.files[0])); 
    };
    const handlenews3ImageChange = (e) => {
        setEditednews1Image(URL.createObjectURL(e.target.files[0])); 
    };

    const handleannouncement1ImageChange = (e) => {
      setEditedannouncement1Image(URL.createObjectURL(e.target.files[0])); 
  };

  const handleannouncement2ImageChange = (e) => {
    setEditedannouncement2Image(URL.createObjectURL(e.target.files[0])); 
};

const handleannouncement3ImageChange = (e) => {
  setEditedannouncement3Image(URL.createObjectURL(e.target.files[0])); 
};

const handleannouncement4ImageChange = (e) => {
  setEditedannouncement4Image(URL.createObjectURL(e.target.files[0])); 
};

const handleyearImageChange = (e) => {
  setEditedyearImage(URL.createObjectURL(e.target.files[0])); 
};

const handleyear1ImageChange = (e) => {
  setEditedyear1Image(URL.createObjectURL(e.target.files[0])); 
};

const handleyear2ImageChange = (e) => {
  setEditedyear2Image(URL.createObjectURL(e.target.files[0])); 
};

 const handleimageUrl1Change = (e) => {
        setEditedimageUrl1(URL.createObjectURL(e.target.files[0])); 
    };

    const handleimageUrl2Change = (e) => {
      setEditedimageUrl2(URL.createObjectURL(e.target.files[0])); 
  };

  const handleimageUrl3Change = (e) => {
    setEditedimageUrl3(URL.createObjectURL(e.target.files[0])); 
};

const handleimageUrl4Change = (e) => {
  setEditedimageUrl4(URL.createObjectURL(e.target.files[0])); 
};

const handleEventImageChange = (e) => {
  setEditedEventImage(URL.createObjectURL(e.target.files[0])); 
};

const handleEventImage2Change = (e) => {
  setEditedEventImage2(URL.createObjectURL(e.target.files[0])); 
};

const handleEventImage3Change = (e) => {
  setEditedEventImage3(URL.createObjectURL(e.target.files[0])); 
};

const handleEventImage4Change = (e) => {
  setEditedEventImage4(URL.createObjectURL(e.target.files[0])); 
};

    const handleSave = async () => {
      const formData = new FormData();
      formData.append('section_id', 'highlight_section');
      formData.append('heading', editedHeader);
      formData.append('preview_text', editedParagraph);
      formData.append('article_text', editedArticle);
      if (editedImage) formData.append('preview_image', editedImage);
      if (editedArticleImage) formData.append('articleImage', editedArticleImage);

//         if (editednews1Image) {
//             formData.append('image', editednews1Image);
//         }
//         formData.append('header', editednews1Header);
//         formData.append('paragraph', editednews1Paragraph);

//         if (editednews2Image) {
//             formData.append('image', editednews2Image);
//         }
//         formData.append('header', editednews2Header);
//         formData.append('paragraph', editednews2Paragraph);

//         if (editednews3Image) {
//             formData.append('image', editednews3Image);
//         }
//         formData.append('header', editednews3Header);
//         formData.append('paragraph', editednews3Paragraph);

//         if (editedannouncement1Image) {
//           formData.append('image', editedannouncement1Image);
//       }
//       formData.append('paragraph', editedannouncement1Paragraph);

//       if (editedannouncement2Image) {
//         formData.append('image', editedannouncement2Image);
//     }
//     formData.append('paragraph', editedannouncement2Paragraph);

//     if (editedannouncement3Image) {
//       formData.append('image', editedannouncement3Image);
//   }
//   formData.append('paragraph', editedannouncement3Paragraph);

//   if (editedannouncement4Image) {
//     formData.append('image', editedannouncement4Image);
// }
// formData.append('paragraph', editedannouncement4Paragraph);

// if (editedyearImage) {
//   formData.append('image', editedyearImage);
// }
// formData.append('paragraph', editedyearParagraph);

// if (editedyear1Image) {
//   formData.append('image', editedyear1Image);
// }
// formData.append('paragraph', editedyear1Paragraph);

// if (editedyear2Image) {
//   formData.append('image', editedyear2Image);
// }
// formData.append('paragraph', editedyear2Paragraph);

// if (editedimageUrl1) {
//   formData.append('image', editedimageUrl1);
// }
// formData.append('header', editedcontent1Header);
// formData.append('paragraph', editedcontent1Paragraph);

// if (editedimageUrl2) {
//   formData.append('image', editedimageUrl2);
// }
// formData.append('header', editedcontent2Header);
// formData.append('paragraph', editedcontent2Paragraph);

// if (editedimageUrl3) {
//   formData.append('image', editedimageUrl3);
// }
// formData.append('header', editedcontent3Header);
// formData.append('paragraph', editedcontent3Paragraph);

// if (editedimageUrl4) {
//   formData.append('image', editedimageUrl4);
// }
// formData.append('header', editedcontent4Header);
// formData.append('paragraph', editedcontent4Paragraph);

// if (editedEventImage) {
//   formData.append('image', editedEventImage);
// }
// formData.append('paragraph', editedevent1Paragraph);

// if (editedEventImage2) {
//   formData.append('image', editedEventImage2);
// }
// formData.append('paragraph', editedevent2Paragraph);

// if (editedEventImage3) {
//   formData.append('image', editedEventImage3);
// }
// formData.append('paragraph', editedevent3Paragraph);

// if (editedEventImage4) {
//   formData.append('image', editedEventImage4);
// }
// formData.append('paragraph', editedevent4Paragraph);

try {
  // Save the updated content to the server
  console.log(formData)
  await axios.post('https://andaal.in/gbm/api/articles', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  setIsEditing(false);
  setHighlightSectionData({
    header: editedHeader,
    preview_text: editedParagraph,
    article_text: editedArticle,
    preview_image: editedImage,
    articleImage: editedArticleImage,
  });
  alert('Content saved successfully!');
} catch (error) {
  console.error('Error saving content:', error);
  console.log(formData)
  alert('Failed to save content.');
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
              <button onClick={handleSave}>Save</button>
              <button onClick={handlePublish}>Publish</button>
              <button onClick={handleDraft}>Draft</button>
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
    setActiveSubSection(subsection);

    // Send message to iframe to highlight the section
    const iframe = document.getElementById('website-preview');
    iframe.contentWindow.postMessage({ section: subsection }, '*');
  };


  const renderContent = () => {
    if (!activeSubSection) {
      return <p>Please select a subsection to display content.</p>;
    }
  
    // Render content based on the active subsection
    return (
      <div className="content-display-section">
        {renderButtons()}
        {activeSubSection === 'highlight-section' && (
          <div className="highlight-container" style={{ textAlign: 'center', marginTop: '20px' }}>
            {isEditing ? (
              <>
                {/* Image Upload Button for the Highlight Section Image */}
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
  
                {/* Highlight Image Preview */}
                {editedImage && (
                  <img
                    src={editedImage}
                    alt="Preview"
                    style={{ maxWidth: '100%', height: '300px', marginTop: '20px' }}
                  />
                )}
  
                {/* Header Input */}
                <input
                  type="text"
                  value={editedHeader}
                  onChange={(e) => setEditedHeader(e.target.value)}
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: '100%',
                    marginBottom: '10px',
                    marginTop: '20px',
                  }}
                  placeholder="Edit Header"
                />
  
                {/* Paragraph Textarea (Preview Text) */}
                <textarea
                  value={editedParagraph}
                  onChange={(e) => setEditedParagraph(e.target.value)}
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
  
                {/* Article Textarea */}
                <textarea
                  value={editedArticle}
                  onChange={(e) => setEditedArticle(e.target.value)}
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
  
                {/* New Section: Upload Article Image */}
                <button
                  className="replace-button"
                  onClick={() => document.getElementById('articleImageInput').click()}
                >
                  Replace Article Image
                </button>
                <input
                  id="articleImageInput"
                  type="file"
                  onChange={(e) => handleArticleImageChange(e)}
                  style={{ display: 'none' }}
                />
  
                {/* Article Image Preview */}
                {editedArticleImage && (
                  <img
                    src={editedArticleImage || highlightSectionContent.articleImage}
                    alt="Article Image"
                    style={{ maxWidth: '100%', height: '300px', marginTop: '20px' }}
                  />
                )}
              </>
            ) : (
              <>
                {error ? (
                  <p>{error}</p>
                ) : !highlightSectionData ? (
                  <p>Loading...</p>
                ) : (
                  <>
                    {/* Display Highlight Image */}
                    <img
                      src={editedImage || highlightSectionData.preview_image}
                      alt="Content Section"
                      style={{
                        maxWidth: '100%',
                        height: '300px',
                        display: 'block',
                        margin: '0 auto',
                      }}
                    />
  
                    {/* Display Header */}
                    <div
                      className="highlight-content"
                      style={{ textAlign: 'center', marginTop: '20px' }}
                    >
                      <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
                        {editedHeader || highlightSectionData.heading}
                      </h2>
  
                      {/* Display Preview Text */}
                      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
                        {editedParagraph || highlightSectionData.preview_text}
                      </p>
  
                      {/* Display Article Text */}
                      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
                        {editedArticle || highlightSectionData.article_text}
                      </p>
  
                      {/* Display Article Image */}
                      <img
                        src={editedArticleImage || highlightSectionData.articleImage}
                        alt="Article Image"
                        style={{ maxWidth: '100%', height: '300px', marginTop: '20px' }}
                      />
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        )}

      
    {activeSubSection === 'news2' &&(
      <div className="news-container" style={{ textAlign: 'center', marginTop: '20px' }}>
        {/* Image always at the top */}
        {isEditing ? (
          <>
            {/* Custom Replace Button */}
            <button
            
            className="replace-button"
            onClick={() => document.getElementById('fileInput').click()} // Click hidden file input
            >
            Replace Image
            </button>
            <input
              id="fileInput"
              type="file"
              onChange={handlenews2ImageChange}
              style={{ display: 'none' }} // Hide the file input
            />
            {editednews2Image && (
              <img
                src={editednews2Image}
                alt="Preview"
                style={{ maxWidth: '100%', height: '400px', marginTop: '20px' }}
              />
            )}

            {/* Header Input */}
            <input
              type="text"
              value={editednews2Header}
              onChange={(e) => setEditednews2Header(e.target.value)}
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '100%',
                marginBottom: '10px',
                marginTop: '20px', // Add margin for spacing
              }}
            />
            {/* Paragraph Textarea */}
            <textarea
              value={editednews2Paragraph}
              onChange={(e) => setEditednews2Paragraph(e.target.value)}
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                textAlign: 'justify',
                width: '100%',
                height: '150px',
                marginBottom: '10px',
              }}
            />
          </>
        ) : (
          <>
            <img
              src={editednews2Image || news2Image}
              alt="News2"
              style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }}
            />
            <div className="news-content" style={{ textAlign: 'center', marginTop: '20px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
                {editednews2Header || news2Content.header}
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
                {editednews2Paragraph || news2Content.paragraph}
              </p>
            </div>
          </>
        )}
      </div>
      )}

      {activeSubSection === 'news3' && (
        <div className="news-container">
          <img src={news3Image} alt="News3" style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }} />
          <div className="news-content" style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>{news3Content.header}</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{news3Content.paragraph}</p>
          </div>
        </div>
      )}

        {activeSubSection === 'container' && (
        <div className="image-container">
          <img src={imageUrl} alt="Description of the image" style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }} />
          <div className="image-container" style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>{news3Content.header}</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{news3Content.paragraph}</p>
          </div>
        </div>
      )}

      {/* Announcement Sections */}
      {activeSubSection === 'announcement1' &&(
      <div className="announcement-item" style={{ textAlign: 'center', marginTop: '20px' }}>
        {isEditing ? (
          <>
            <button
            
            className="replace-button"
            onClick={() => document.getElementById('fileInput').click()} // Click hidden file input
            >
            Replace Image
            </button>
            <input
              id="fileInput"
              type="file"
              onChange={handleannouncement1ImageChange}
              style={{ display: 'none' }} 
            />
            {editedannouncement1Image && (
              <img
                src={editedannouncement1Image}
                alt="Preview"
                style={{ maxWidth: '100%', height: '400px', marginTop: '20px' }}
              />
            )}
            <textarea
              value={editedannouncement1Paragraph}
              onChange={(e) => setEditedannouncement1Paragraph(e.target.value)}
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                textAlign: 'justify',
                width: '100%',
                height: '150px',
                marginBottom: '10px',
              }}
            />
          </>
        ) : (
          <>
            <img
              src={editedannouncement1Image || announcement1Image}
              alt="Announcement1"
              style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }}
            />
            <div className="announcement-item" style={{ textAlign: 'center', marginTop: '20px' }}>
              <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
                {editedannouncement1Paragraph || announcement1Content.paragraph}
              </p>
            </div>
          </>
        )}
      </div>
      )}
{/* #Announcement2 */}
{activeSubSection === 'announcement2' &&(
      <div className="announcement-item" style={{ textAlign: 'center', marginTop: '20px' }}>
        {isEditing ? (
          <>
            <button
            
            className="replace-button"
            onClick={() => document.getElementById('fileInput').click()} // Click hidden file input
            >
            Replace Image
            </button>
            <input
              id="fileInput"
              type="file"
              onChange={handleannouncement2ImageChange}
              style={{ display: 'none' }} 
            />
            {editedannouncement2Image && (
              <img
                src={editedannouncement2Image}
                alt="Preview"
                style={{ maxWidth: '100%', height: '400px', marginTop: '20px' }}
              />
            )}
            <textarea
              value={editedannouncement2Paragraph}
              onChange={(e) => setEditedannouncement2Paragraph(e.target.value)}
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                textAlign: 'justify',
                width: '100%',
                height: '150px',
                marginBottom: '10px',
              }}
            />
          </>
        ) : (
          <>
            <img
              src={editedannouncement2Image || announcement2Image}
              alt="Announcement2"
              style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }}
            />
            <div className="announcement-item" style={{ textAlign: 'center', marginTop: '20px' }}>
              <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
                {editedannouncement2Paragraph || announcement2Content.paragraph}
              </p>
            </div>
          </>
        )}
      </div>
      )}

      {/* #Announcement3 */}
{activeSubSection === 'announcement3' &&(
      <div className="announcement-item" style={{ textAlign: 'center', marginTop: '20px' }}>
        {isEditing ? (
          <>
            <button
            
            className="replace-button"
            onClick={() => document.getElementById('fileInput').click()} // Click hidden file input
            >
            Replace Image
            </button>
            <input
              id="fileInput"
              type="file"
              onChange={handleannouncement3ImageChange}
              style={{ display: 'none' }} 
            />
            {editedannouncement3Image && (
              <img
                src={editedannouncement3Image}
                alt="Preview"
                style={{ maxWidth: '100%', height: '400px', marginTop: '20px' }}
              />
            )}
            <textarea
              value={editedannouncement3Paragraph}
              onChange={(e) => setEditedannouncement2Paragraph(e.target.value)}
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                textAlign: 'justify',
                width: '100%',
                height: '150px',
                marginBottom: '10px',
              }}
            />
          </>
        ) : (
          <>
            <img
              src={editedannouncement3Image || announcement3Image}
              alt="Announcement3"
              style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }}
            />
            <div className="announcement-item" style={{ textAlign: 'center', marginTop: '20px' }}>
              <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
                {editedannouncement3Paragraph || announcement3Content.paragraph}
              </p>
            </div>
          </>
        )}
      </div>
      )}

 {/* #Announcement4 */}
{activeSubSection === 'announcement4' &&(
      <div className="announcement-item" style={{ textAlign: 'center', marginTop: '20px' }}>
        {isEditing ? (
          <>
            <button
            
            className="replace-button"
            onClick={() => document.getElementById('fileInput').click()} // Click hidden file input
            >
            Replace Image
            </button>
            <input
              id="fileInput"
              type="file"
              onChange={handleannouncement4ImageChange}
              style={{ display: 'none' }} 
            />
            {editedannouncement4Image && (
              <img
                src={editedannouncement4Image}
                alt="Preview"
                style={{ maxWidth: '100%', height: '400px', marginTop: '20px' }}
              />
            )}
            <textarea
              value={editedannouncement4Paragraph}
              onChange={(e) => setEditedannouncement4Paragraph(e.target.value)}
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                textAlign: 'justify',
                width: '100%',
                height: '150px',
                marginBottom: '10px',
              }}
            />
          </>
        ) : (
          <>
            <img
              src={editedannouncement4Image || announcement4Image}
              alt="Announcement4"
              style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }}
            />
            <div className="announcement-item" style={{ textAlign: 'center', marginTop: '20px' }}>
              <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
                {editedannouncement4Paragraph || announcement4Content.paragraph}
              </p>
            </div>
          </>
        )}
      </div>
      )}
 {/* year Sections */}
 {activeSubSection === 'year' &&(
  <div className="year-section" style={{ textAlign: 'center', marginTop: '20px' }}>
    {isEditing ? (
      <>
        <button
        
        className="replace-button"
        onClick={() => document.getElementById('fileInput').click()} // Click hidden file input
        >
        Replace Image
        </button>
        <input
          id="fileInput"
          type="file"
          onChange={handleyearImageChange}
          style={{ display: 'none' }} 
        />
        {editedyearImage && (
          <img
            src={editedyearImage}
            alt="Preview"
            style={{ maxWidth: '100%', height: '400px', marginTop: '20px' }}
          />
        )}
        <textarea
          value={editedyearParagraph}
          onChange={(e) => setEditedyearParagraph(e.target.value)}
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
            textAlign: 'justify',
            width: '100%',
            height: '150px',
            marginBottom: '10px',
          }}
        />
      </>
    ) : (
      <>
        <img
          src={editedyearImage || yearImage}
          alt="Year Image"
          style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }}
        />
        <div className="year-section" style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
            {editedyearParagraph || yearContent.paragraph}
          </p>
        </div>
      </>
    )}
    
  </div>
  
  )}

  {/* year1 Sections */}
 {activeSubSection === '2023' &&(
  <div className="year1-section" style={{ textAlign: 'center', marginTop: '20px' }}>
    {isEditing ? (
      <>
        <button
        
        className="replace-button"
        onClick={() => document.getElementById('fileInput').click()} // Click hidden file input
        >
        Replace Image
        </button>
        <input
          id="fileInput"
          type="file"
          onChange={handleyear1ImageChange}
          style={{ display: 'none' }} 
        />
        {editedyearImage && (
          <img
            src={editedyear1Image}
            alt="Preview"
            style={{ maxWidth: '100%', height: '400px', marginTop: '20px' }}
          />
        )}
        <textarea
          value={editedyear1Paragraph}
          onChange={(e) => setEditedyear1Paragraph(e.target.value)}
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
            textAlign: 'justify',
            width: '100%',
            height: '150px',
            marginBottom: '10px',
          }}
        />
      </>
    ) : (
      <>
        <img
          src={editedyear1Image || year1Image}
          alt="Year1 Image"
          style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }}
        />
        <div className="year1-section" style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
            {editedyear1Paragraph || year1Content.paragraph}
          </p>
        </div>
      </>
    )}
    
  </div>
  
  )}

  {/* year2 Sections */}
 {activeSubSection === '2022' &&(
  <div className="year2-section" style={{ textAlign: 'center', marginTop: '20px' }}>
    {isEditing ? (
      <>
        <button
        
        className="replace-button"
        onClick={() => document.getElementById('fileInput').click()} // Click hidden file input
        >
        Replace Image
        </button>
        <input
          id="fileInput"
          type="file"
          onChange={handleyear2ImageChange}
          style={{ display: 'none' }} 
        />
        {editedyear2Image && (
          <img
            src={editedyear2Image}
            alt="Preview"
            style={{ maxWidth: '100%', height: '400px', marginTop: '20px' }}
          />
        )}
        <textarea
          value={editedyear2Paragraph}
          onChange={(e) => setEditedyear2Paragraph(e.target.value)}
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
            textAlign: 'justify',
            width: '100%',
            height: '150px',
            marginBottom: '10px',
          }}
        />
      </>
    ) : (
      <>
        <img
          src={editedyear2Image || year2Image}
          alt="Year2 Image"
          style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }}
        />
        <div className="year2-section" style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
            {editedyear2Paragraph || year2Content.paragraph}
          </p>
        </div>
      </>
    )}
    
  </div>
  
  )}
{/* jeeyar artical 1 */}
{activeSubSection === 'Jeeyar article 1' &&(
      <div className="image-container" style={{ textAlign: 'center', marginTop: '20px' }}>
        {/* Image always at the top */}
        {isEditing ? (
          <>
            {/* Custom Replace Button */}
            <button
            
            className="replace-button"
            onClick={() => document.getElementById('fileInput').click()} // Click hidden file input
            >
            Replace Image
            </button>
            <input
              id="fileInput"
              type="file"
              onChange={handleimageUrl1Change}
              style={{ display: 'none' }} // Hide the file input
            />
            {editedimageUrl1 && (
              <img
                src={editedimageUrl1}
                alt="Preview"
                style={{ maxWidth: '100%', height: '400px', marginTop: '20px' }}
              />
            )}

            {/* Header Input */}
            <input
              type="text"
              value={editedcontent1Header}
              onChange={(e) => setEditedcontent1Header(e.target.value)}
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '100%',
                marginBottom: '10px',
                marginTop: '20px', // Add margin for spacing
              }}
            />
            {/* Paragraph Textarea */}
            <textarea
              value={editedcontent1Paragraph}
              onChange={(e) => setEditedcontent1Paragraph(e.target.value)}
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                textAlign: 'justify',
                width: '100%',
                height: '150px',
                marginBottom: '10px',
              }}
            />
          </>
        ) : (
          <>
            <img
              src={editedimageUrl1|| imageUrl1}
              alt="Sri Vanamamalai Mutt" 
              style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }}
            />
            <div className="image-container" style={{ textAlign: 'center', marginTop: '20px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
                {editedcontent1Header || content1.header}
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
                {editedcontent1Paragraph || content1.paragraph}
              </p>
            </div>
          </>
        )}
      </div>
      )}

      {/* jeeyar artical 2 */}
{activeSubSection === 'Jeeyar article 2' &&(
      <div className="image-container" style={{ textAlign: 'center', marginTop: '20px' }}>
        {/* Image always at the top */}
        {isEditing ? (
          <>
            {/* Custom Replace Button */}
            <button
            
            className="replace-button"
            onClick={() => document.getElementById('fileInput').click()} // Click hidden file input
            >
            Replace Image
            </button>
            <input
              id="fileInput"
              type="file"
              onChange={handleimageUrl2Change}
              style={{ display: 'none' }} // Hide the file input
            />
            {editedimageUrl2 && (
              <img
                src={editedimageUrl2}
                alt="Divya Desam Temples"
                style={{ maxWidth: '100%', height: '400px', marginTop: '20px' }}
              />
            )}

            {/* Header Input */}
            <input
              type="text"
              value={editedcontent2Header}
              onChange={(e) => setEditedcontent2Header(e.target.value)}
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '100%',
                marginBottom: '10px',
                marginTop: '20px', // Add margin for spacing
              }}
            />
            {/* Paragraph Textarea */}
            <textarea
              value={editedcontent2Paragraph}
              onChange={(e) => setEditedcontent2Paragraph(e.target.value)}
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                textAlign: 'justify',
                width: '100%',
                height: '150px',
                marginBottom: '10px',
              }}
            />
          </>
        ) : (
          <>
            <img
              src={editedimageUrl2|| imageUrl2}
              alt="Divya Desam Temples" 
              style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }}
            />
            <div className="image-container" style={{ textAlign: 'center', marginTop: '20px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
                {editedcontent2Header || content2.header}
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
                {editedcontent2Paragraph || content2.paragraph}
              </p>
            </div>
          </>
        )}
      </div>
      )}

      {/* jeeyar artical 3 */}
{activeSubSection === 'Jeeyar article 3' &&(
      <div className="image-container" style={{ textAlign: 'center', marginTop: '20px' }}>
        {/* Image always at the top */}
        {isEditing ? (
          <>
            {/* Custom Replace Button */}
            <button
            
            className="replace-button"
            onClick={() => document.getElementById('fileInput').click()} // Click hidden file input
            >
            Replace Image
            </button>
            <input
              id="fileInput"
              type="file"
              onChange={handleimageUrl3Change}
              style={{ display: 'none' }} // Hide the file input
            />
            {editedimageUrl3 && (
              <img
                src={editedimageUrl3}
                alt="Spiritual Leader"
                style={{ maxWidth: '100%', height: '400px', marginTop: '20px' }}
              />
            )}

            {/* Header Input */}
            <input
              type="text"
              value={editedcontent3Header}
              onChange={(e) => setEditedcontent3Header(e.target.value)}
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '100%',
                marginBottom: '10px',
                marginTop: '20px', // Add margin for spacing
              }}
            />
            {/* Paragraph Textarea */}
            <textarea
              value={editedcontent3Paragraph}
              onChange={(e) => setEditedcontent3Paragraph(e.target.value)}
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                textAlign: 'justify',
                width: '100%',
                height: '150px',
                marginBottom: '10px',
              }}
            />
          </>
        ) : (
          <>
            <img
              src={editedimageUrl3|| imageUrl3}
              alt="Spiritual Leader" 
              style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }}
            />
            <div className="image-container" style={{ textAlign: 'center', marginTop: '20px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
                {editedcontent3Header || content3.header}
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
                {editedcontent3Paragraph || content3.paragraph}
              </p>
            </div>
          </>
        )}
      </div>
      )}

      {/* jeeyar artical 4 */}
{activeSubSection === 'Jeeyar article 4' &&(
      <div className="image-container" style={{ textAlign: 'center', marginTop: '20px' }}>
        {/* Image always at the top */}
        {isEditing ? (
          <>
            {/* Custom Replace Button */}
            <button
            
            className="replace-button"
            onClick={() => document.getElementById('fileInput').click()} // Click hidden file input
            >
            Replace Image
            </button>
            <input
              id="fileInput"
              type="file"
              onChange={handleimageUrl4Change}
              style={{ display: 'none' }} // Hide the file input
            />
            {editedimageUrl4 && (
              <img
                src={editedimageUrl4}
                alt="Rich History"
                style={{ maxWidth: '100%', height: '400px', marginTop: '20px' }}
              />
            )}

            {/* Header Input */}
            <input
              type="text"
              value={editedcontent4Header}
              onChange={(e) => setEditedcontent4Header(e.target.value)}
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '100%',
                marginBottom: '10px',
                marginTop: '20px', // Add margin for spacing
              }}
            />
            {/* Paragraph Textarea */}
            <textarea
              value={editedcontent4Paragraph}
              onChange={(e) => setEditedcontent4Paragraph(e.target.value)}
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                textAlign: 'justify',
                width: '100%',
                height: '150px',
                marginBottom: '10px',
              }}
            />
          </>
        ) : (
          <>
            <img
              src={editedimageUrl4|| imageUrl4}
              alt="Rich History" 
              style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }}
            />
            <div className="image-container" style={{ textAlign: 'center', marginTop: '20px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
                {editedcontent4Header || content4.header}
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
                {editedcontent4Paragraph || content4.paragraph}
              </p>
            </div>
          </>
        )}
      </div>
      )}

       {/* Event1 Sections */}
       {activeSubSection === 'Event 1' &&(
      <div className="event-item" style={{ textAlign: 'center', marginTop: '20px' }}>
        {isEditing ? (
          <>
            <button
            
            className="replace-button"
            onClick={() => document.getElementById('fileInput').click()} // Click hidden file input
            >
            Replace Image
            </button>
            <input
              id="fileInput"
              type="file"
              onChange={handleEventImageChange}
              style={{ display: 'none' }} 
            />
            {editedEventImage && (
              <img
                src={editedEventImage}
                alt="Preview"
                style={{ maxWidth: '100%', height: '400px', marginTop: '20px' }}
              />
            )}
            <textarea
              value={editedevent1Paragraph}
              onChange={(e) => setEditedevent1Paragraph(e.target.value)}
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                textAlign: 'justify',
                width: '100%',
                height: '150px',
                marginBottom: '10px',
              }}
            />
          </>
        ) : (
          <>
            <img
              src={editedEventImage || EventImage}
              alt="Event 1"
              style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }}
            />
            <div className="event-item" style={{ textAlign: 'center', marginTop: '20px' }}>
              <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
                {editedevent1Paragraph|| event1Paragraph}
              </p>
            </div>
          </>
        )}
      </div>
      )}

       {/* Event2 Sections */}
       {activeSubSection === 'Event 2' &&(
      <div className="event-item2" style={{ textAlign: 'center', marginTop: '20px' }}>
        {isEditing ? (
          <>
            <button
            
            className="replace-button"
            onClick={() => document.getElementById('fileInput').click()} // Click hidden file input
            >
            Replace Image
            </button>
            <input
              id="fileInput"
              type="file"
              onChange={handleEventImage2Change}
              style={{ display: 'none' }} 
            />
            {editedEventImage2 && (
              <img
                src={editedEventImage2}
                alt="Preview"
                style={{ maxWidth: '100%', height: '400px', marginTop: '20px' }}
              />
            )}
            <textarea
              value={editedevent2Paragraph}
              onChange={(e) => setEditedevent2Paragraph(e.target.value)}
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                textAlign: 'justify',
                width: '100%',
                height: '150px',
                marginBottom: '10px',
              }}
            />
          </>
        ) : (
          <>
            <img
              src={editedEventImage2 || EventImage2}
              alt="Event 2"
              style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }}
            />
            <div className="event-item2" style={{ textAlign: 'center', marginTop: '20px' }}>
              <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
                {editedevent2Paragraph|| event2Paragraph}
              </p>
            </div>
          </>
        )}
      </div>
      )}

       {/* Event3 Sections */}
       {activeSubSection === 'Event 3' &&(
      <div className="event-item3" style={{ textAlign: 'center', marginTop: '20px' }}>
        {isEditing ? (
          <>
            <button
            
            className="replace-button"
            onClick={() => document.getElementById('fileInput').click()} // Click hidden file input
            >
            Replace Image
            </button>
            <input
              id="fileInput"
              type="file"
              onChange={handleEventImage3Change}
              style={{ display: 'none' }} 
            />
            {editedEventImage3 && (
              <img
                src={editedEventImage3}
                alt="Preview"
                style={{ maxWidth: '100%', height: '400px', marginTop: '20px' }}
              />
            )}
            <textarea
              value={editedevent3Paragraph}
              onChange={(e) => setEditedevent3Paragraph(e.target.value)}
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                textAlign: 'justify',
                width: '100%',
                height: '150px',
                marginBottom: '10px',
              }}
            />
          </>
        ) : (
          <>
            <img
              src={editedEventImage3 || EventImage3}
              alt="Event 3"
              style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }}
            />
            <div className="event-item3" style={{ textAlign: 'center', marginTop: '20px' }}>
              <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
                {editedevent3Paragraph|| event3Paragraph}
              </p>
            </div>
          </>
        )}
      </div>
      )}

       {/* Event4 Sections  */}
       {activeSubSection === 'Event 4' &&(
      <div className="event-item4" style={{ textAlign: 'center', marginTop: '20px' }}>
        {isEditing ? (
          <>
            <button
            
            className="replace-button"
            onClick={() => document.getElementById('fileInput').click()} // Click hidden file input
            >
            Replace Image
            </button>
            <input
              id="fileInput"
              type="file"
              onChange={handleEventImage4Change}
              style={{ display: 'none' }} 
            />
            {editedEventImage4 && (
              <img
                src={editedEventImage4}
                alt="Preview"
                style={{ maxWidth: '100%', height: '400px', marginTop: '20px' }}
              />
            )}
            <textarea
              value={editedevent4Paragraph}
              onChange={(e) => setEditedevent4Paragraph(e.target.value)}
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                textAlign: 'justify',
                width: '100%',
                height: '150px',
                marginBottom: '10px',
              }}
            />
          </>
        ) : (
          <>
            <img
              src={editedEventImage4 || EventImage4}
              alt="Event 4"
              style={{ maxWidth: '100%', height: '400px', display: 'block', margin: '0 auto' }}
            />
            <div className="event-item4" style={{ textAlign: 'center', marginTop: '20px' }}>
              <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
                {editedevent4Paragraph|| event4Paragraph}
              </p>
            </div>
          </>
        )}
      </div>
      )}

      {!activeSubSection && <p>Please select a subsection to display content.</p>}
    </div>
  );
 }
  
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

      {/* Third Column: History Section */}
      <div className="admin-history">
        <div className='history'>
        <h2>History</h2>
        <p>Article 1</p>
        <p>Article 2</p>
        </div>
        <div className="iframe-container">
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

