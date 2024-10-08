import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams for URL parameters
import axios from 'axios'; // Add axios for API requests
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import HeaderNavbar from '../components/HeaderNavbar'; // Ensure the path is correct

function ArticlePage() {
  const [article, setArticle] = useState(null);
  const { id } = useParams(); // Get the ID from the URL parameters
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://andaal.in/gbm/api/articles/${id}`); // Use the ID in the API call
        setArticle(response.data); // Update the state with fetched article data
      } catch (error) {
        console.error('Error fetching the article:', error);
      }
    };

    fetchArticle(); // Call the function to fetch the article
  }, [id]); // Add id as a dependency to refetch when ID changes

  const handleBackClick = () => {
    navigate('/');
  };

  const styles = {
    backButtonContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginTop: '50px',
      marginBottom: '-30px',
    },
    backButton: {
      background: 'black',
      border: 'none',
      cursor: 'pointer',
      color: 'white',
      padding: '10px 20px',
      fontSize: '10px',
    },
    h1: {
      textAlign: 'center', // Center the heading
      marginTop: '20px',
      marginBottom: '20px',
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center', // Center the image
      marginTop: '20px',
      marginBottom: '40px',
    },
    image: {
      width: '30%', // Reduced width for smaller image
      height: '30%', // Maintain aspect ratio
    },
    content: {
      fontSize: '22px',
      lineHeight: '1.6',
      textAlign: 'justify',
    },
  };

  if (!article) {
    return <p>Loading...</p>; // Display loading state while fetching data
  }

  return (
    <div className="article-page" style={{ padding: '20px' }}>
      <HeaderNavbar /> {/* Navbar and heading at the top */}

      {/* Back button */}
      <div style={styles.backButtonContainer}>
        <button onClick={handleBackClick} style={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} size="1x" /> Back
        </button>
      </div>

      <h1 style={styles.h1}>{article.heading || 'Article Title'}</h1>

      {/* Main Image at the top */}
      <div style={styles.imageContainer}>
        <img src={article.article_media1 || 'default-image.jpg'} alt="Article" style={styles.image} />
      </div>

      {/* Text content below the image */}
      <div>
        <p style={styles.content}>{article.article_text}</p>
      </div>
    </div>
  );
}

export default ArticlePage;
