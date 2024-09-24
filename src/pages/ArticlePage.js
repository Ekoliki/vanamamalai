import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import templeImage from '../assets/temple-image.jpg';
import templeImage2 from '../assets/temple-image2.jpg';
import announcement4ImageDefault from '../assets/announcement-image4.jpg';
import HeaderNavbar from '../components/HeaderNavbar'; // Make sure path is correct


function ArticlePage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  // Inline styles for the back button
  // Inline styles for the back button
  const styles = {
    backButtonContainer: {
      display: 'flex',
      justifyContent: 'flex-start', // Align to the left side
      marginTop: '20px',
      marginBottom: '20px',
    },
    backButton: {
      background: 'black',
      border: 'none',
      cursor: 'pointer',
      color: '#white',
      padding: '10px 20px',
      fontSize: '10px',
    },
    h1: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '20px',
    
    },
  };
  return (
    <div className="article-page" style={{ padding: '20px' }}>
      <HeaderNavbar /> {/* Navbar and heading at the top */}

      {/* Back button below the navbar */}
      <div style={styles.backButtonContainer}>
        <button 
          onClick={handleBackClick} 
          style={styles.backButton}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="1x" /> Back
        </button>
      </div>

      <h1>Our Sri Vanamamalai Mutt</h1>
      
      {/* First section: Text left, Image right */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <p style={{ fontSize: '22px', lineHeight: '1.6', textAlign: 'justify' }}>
            This is a detailed article about the Sri Vanamamalai Mutt, describing its rich history and significance. The Mutt is an ancient spiritual center, preserving a long-standing tradition of devotion.
            A mutt is a spiritual center where ancient knowledge strives and blossoms through regular discourses and education by learned scholars
            To perpetuate the ancient knowledge, Our 30th and periya (previous) Jeeyar Swamy, SrImath paramahamsaithyAdhi Kaliyan vAnamAmalai rAmAnuja Jeeyar swamy who is a renowned scholar in our sath sampradhAyam, initiated the task of setting up of the patasala to coincide with the celebrations of Ramanuja 1000, by providing His SriMukham “Shubhameva Bhooya Sarvada Sarvatha Sarvatra”.
            Continuing the initiative, our 31st Jeeyar SrImath ParamahamsaithyAdhi Madhurakavi vAnamAmalai rAmAnuja Jeeyar swamy leads us with strong guidance in furthering the task and periodically reviewing the progress.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img src={templeImage} alt="Sri Vanamamalai Mutt" style={{ width: '50%', height: '50%' }} />
        </div>
      </div>

      {/* Second section: Image left, Text right */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ flex: 1 }}>
          <img src={templeImage2} alt="Another aspect of the Mutt" style={{ width: '50%', height: '20%' }} />
        </div>
        <div style={{ flex: 1, paddingLeft: '20px' }}>
          <p style={{ fontSize: '22px', lineHeight: '1.6', textAlign: 'justify' }}>
            The Mutt has been a beacon of spirituality for centuries, offering guidance and wisdom to countless devotees. Its architecture, art, and rituals are a testament to the deep-rooted traditions.
            In India today, education has attained a very high standard with many higher education institutions – which promote and guide materialistic goals. In this punya bhoomi which has nurtured great saints and preserved the tradition, there is a severe shortage of spiritual centres of learning, promoting traditions of our ancient knowledge.
            The Patasala will have structured classes in ancient tradition disseminating knowledge on vedas, agamas, prabandhams, and related sciences, and would also include curriculum to ensure students gain knowledge of the material subjects. The objective is to create vedic scholars who can be powerful speakers spreading Our Sampradayam to our future Generations and also take up kainkaryam in temples as priests, archakas, and well versed in conduct of rituals.
          </p>
        </div>
      </div>

            {/* thired section: Text left, Image right */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <p style={{ fontSize: '22px', lineHeight: '1.6', textAlign: 'justify' }}>
          Manavala Mamunigal in his work ‘Upadesa Rathnamalai’ in 62nd poem ‘Uyya Ninaivu Pasuram” elaborates in great detail about how one has to serve his Spiritual Master. Swamy highlights saying ‘The utmost duty of a Sishya is to Serve by all his means to fulfill the desires of his Spiritual Master’ and the Spiritual Master alone will liberate the Sishya from Samsara and helps sishya to come out of all his obstacles.
          It is a wonderful opportunity to be part of the founding bricks of the great initiative of our Mutt. The project is located in Srirangam near amma mandapam and the foundation stone was laid by none other than our Periya Jeeyar Swami (30 th ). The Construction Project Costs is estimated around to Rs. 1 crore and thanks to the initial outlay provided by Mutt and valuable contributions from various sources, there has been a good progress in construction without a break.
          To complete this and also to provide an opportunity to all shishyas to engage in this holy enterprise, we invite your contributions as possible. Come, be part of this great enterprise, which is perhaps a one-time opportunity in the history of the mutt.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img src={announcement4ImageDefault} alt="Sri Vanamamalai Mutt" style={{ width: '50%', height: '50%' }} />
        </div>
      </div>

      

      {/* Add more sections if needed */}
    </div>
  );
}

export default ArticlePage;
