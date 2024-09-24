import React, { useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import bannerImage from './assets/banner-image.png'; 

import imageUrl from './assets/patashala-image1.jpg'
import imageUrl1 from './assets/patashala-image1.jpg'
import imageUrl2 from './assets/patashala-image1.jpg'
import imageUrl3 from './assets/patashala-image1.jpg'
import imageUrl4 from './assets/patashala-image1.jpg'
import newsImage1 from './assets/patashala-image1.jpg';
import newsImage2 from './assets/patashala-image2.jpg';
import newsImage3 from './assets/patashala-image3.jpg';
import newsImage4 from './assets/patashala-image4.jpg';

import patashalaimage from './assets/patashalaimage.jpg'

import courseImage from './assets/courseImage.jpg'
import courseImage1 from './assets/courseImage1.jpg'
import courseImage2 from './assets/courseImage2.jpg'


import templeImage from './assets/temple-image.jpg';
import templeImage2 from './assets/temple-image2.jpg';
import templeImage3 from './assets/temple-image3.jpg';
import templeImage4 from './assets/temple-image4.jpg';
import templeImage5 from './assets/temple-image5.jpg';
import templeImage6 from './assets/temple-image6.jpg';

import EventImage from './assets/event-item.jpg';
import EventImage2 from './assets/event-item2.jpg';
import EventImage3 from './assets/event-item3.jpg';
import EventImage4 from './assets/event-item4.jpg';

import galleryphoto1 from './assets/galleryphoto1.jpg'
import galleryphoto2 from './assets/galleryphoto2.jpg'
import galleryphoto3 from './assets/galleryphoto3.jpg'
import galleryphoto4 from './assets/galleryphoto4.jpg'
import galleryphoto5 from './assets/galleryphoto5.jpg'
import galleryphoto6 from './assets/galleryphoto6.jpg'
import galleryphoto7 from './assets/galleryphoto7.jpg'
import galleryphoto8 from './assets/galleryphoto8.jpg'


import news1ImageDefault from './assets/news-image1.jpg';
import news2ImageDefault from './assets/news-image2.jpg';
import news3ImageDefault from './assets/news-image3.jpg';
import news4ImageDefault from './assets/news-image4.jpg';

import announcement1ImageDefault from './assets/announcement-image1.jpg';  // Replace with actual path
import announcement2ImageDefault from './assets/announcement-image2.jpg';  // Replace with actual path
import announcement3ImageDefault from './assets/announcement-image3.jpg';  // Replace with actual path
import announcement4ImageDefault from './assets/announcement-image4.jpg';  // Replace with actual path

import yearImageDefault from './assets/map-image.jpg';
import year1ImageDefault from './assets/map-image2.jpg';
import year2ImageDefault from './assets/map-image3.jpg';


import logoImage from './assets/logo-image.png';


import { FaUserCircle } from 'react-icons/fa'; // Import icon for login

import { BrowserRouter as Router, Route, Routes, Link,useNavigate } from 'react-router-dom';
import Login from './Login'; // Import the Login component
import AdminPage from './AdminPage'; // Import your AdminPage component

import highlightSectionImage from './assets/highlight-image.jpg'; // Update the path based on your directory structure
import highlightSectionImageSrc from './assets/highlight-image.jpg'; // Update this path based on your directory structure
import ArticlePage from './pages/ArticlePage';
import HeaderNavbar from './components/HeaderNavbar'; // Correct path to HeaderNavbar

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // State to manage admin login
  const [content, setContent] = useState("Default content text"); // State for editable content
  const [originalContent, setOriginalContent] = useState("Default content text"); // Store original content
  
  const [imageSrc, setImageSrc] = useState("./assets/map-image3.jpg"); // State to store uploaded image URL

  
  const [news1Text, setNews1Text] = useState('Default text for news1');
  const [news2Text, setNews2Text] = useState('Default text for news2');
  const [news3Text, setNews3Text] = useState('Default text for news3');
  const [news4Text, setNews4Text] = useState('Default text for news4');

  const [news1Image, setNews1Image] = useState(news1ImageDefault);
  const [news2Image, setNews2Image] = useState(news2ImageDefault);
  const [news3Image, setNews3Image] = useState(news3ImageDefault);
  const [news4Image, setNews4Image] = useState(news4ImageDefault);

  const [announcement1Text, setAnnouncement1Text] = useState('Default text for announcement1');
  const [announcement2Text, setAnnouncement2Text] = useState('Default text for announcement2');
  const [announcement3Text, setAnnouncement3Text] = useState('Default text for announcement3');
  const [announcement4Text, setAnnouncement4Text] = useState('Default text for announcement4');

  const [announcement1Image, setAnnouncement1Image] = useState(announcement1ImageDefault);
  const [announcement2Image, setAnnouncement2Image] = useState(announcement2ImageDefault);
  const [announcement3Image, setAnnouncement3Image] = useState(announcement3ImageDefault);
  const [announcement4Image, setAnnouncement4Image] = useState(announcement4ImageDefault);

  const [yearText, setYearText] = useState('Default text for year');
  const [year1Text, setYear1Text] = useState('Default text for year1');
  const [year2Text, setYear2Text] = useState('Default text for year2');

  const [yearImage, setYearImage] = useState(yearImageDefault);
  const [year1Image, setYear1Image] = useState(year1ImageDefault);
  const [year2Image, setYear2Image] = useState(year2ImageDefault);
  

  const serverUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000';
  
  const [highlightSectionContent, setHighlightSectionContent] = useState({
    header: "Our Sri Vanamamalai Mutt", 
    paragraph: "One of the unique features here is that, mUlavar emperumAn is also known by the name of the dhivya dhEsam, i.e., vAnamAmalai and thOthAdhrinAthan."
  });
  

  
  // Dynamic content for each news section (header and paragraph)
  const [news1Content, setNews1Content] = useState({
    header: "News 1: A Historic Event",
    paragraph: "This is the detailed description of the first news item, which provides an insight into the history of the event."
  });

  const [news2Content, setNews2Content] = useState({
    header: "News 2: Another Major Update",
    paragraph: "This is the second news item's content, detailing a major update in the community."
  });

  const [news3Content, setNews3Content] = useState({
    header: "News 3: A Notable Milestone",
    paragraph: "The third news item highlights a key milestone in the organization's history."
  });

  const [news4Content, setNews4Content] = useState({
    header: "News 4: Looking Ahead",
    paragraph: "This news section provides insights into the future events and plans."
  });

  const [announcement1Content, setAnnouncement1Content] = useState({
    paragraph: "Default Announcement 1 Paragraph"
  });
  
  const [announcement2Content, setAnnouncement2Content] = useState({
    paragraph: "Default Announcement 2 Paragraph"
  });
  
  const [announcement3Content, setAnnouncement3Content] = useState({
    paragraph: "Default Announcement 3 Paragraph"
  });
  
  const [announcement4Content, setAnnouncement4Content] = useState({
    paragraph: "Default Announcement 4 Paragraph"
  });
  const [yearContent, setYearContent] = useState({
    paragraph: "Default Upcoming itinerary Paragraph"
  });
  
  const [year1Content, setYear1Content] = useState({
    paragraph: "Default 2023 Paragraph"
  });
  
  const [year2Content, setYear2Content] = useState({
    paragraph: "Default 2022 Paragraph"
  });
  
const [content1, setContent1] = useState({
  header: "Sri Vanamamalai Mutt",
  paragraph: "Our Sri Vanamamalai Mutt is one of the oldest mutts in Srivaishnava Sampradayam with rich culture and heritage."
});

const [content2, setContent2] = useState({
  header: "Divya Desam Temples",
  paragraph: "The Mutt is closely associated with the Divya Desam temples, preserving ancient traditions and practices."
});

const [content3, setContent3] = useState({
  header: "Our Spiritual Leader",
  paragraph: "The present leader of the Mutt continues the legacy of guiding devotees with wisdom and compassion."
});

const [content4, setContent4] = useState({
  header: "Rich History",
  paragraph: "With centuries of history, the Mutt is a symbol of the unbroken spiritual heritage of Srivaishnavism."
});

const [event1Paragraph, setEvent1Paragraph] = useState(
  "Shrimad Paramahamsethyadi Sri Madhurakavi Vanamamalai Ramanuja Jeeyar Swami's (31st Peetathipadhi) ChaturMasya Vrata Sankalpam at Sri Vanamamalai Mutt, Nanguneri."
);

const [event2Paragraph, setEvent2Paragraph] = useState(
  "Sri Aandal Nachiyar Thiruvadipoora Uthsavam day 10 at Sri Vanamamalai. Sri Varamangai Nachiyar, Sri Aandal samedha Sri Deivanayaga Perumal Purappadu."
);

const [event3Paragraph, setEvent3Paragraph] = useState(
  "Sri Aandal Nachiyar Thiruvadipoora Uthsavam day 09 at Sri Vanamamalai."
);

const [event4Paragraph, setEvent4Paragraph] = useState(
  "Aadi Friday - Sri Varamangai Nachiyar and Sri Aandal Nachiyar Purappadu at Sri Vanamamalai Dhivya Desam."
);

  
  const [highlightSectionImage, setHighlightSectionImage] = useState(highlightSectionImageSrc); // Image state
  
  // Fetch the latest content from the backend
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`${serverUrl}/content`);  // Fetch the data
        setImageSrc(response.data.imageUrl);  // Set the image URL
        setContent(response.data.textContent);  // Set the text content
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };
    fetchContent();
  }, []);
  
  
    useEffect(() => {
      // Listen for messages from the parent window (AdminPage)
      window.addEventListener('message', (event) => {
        if (event.data && event.data.section) {
          const section = document.getElementById(event.data.section);
          
          // Remove existing highlights
          document.querySelectorAll('.highlighted').forEach(el => {
            el.classList.remove('highlighted');
          });
  
          if (section) {
            // Scroll to the section and add the highlight
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            section.classList.add('highlighted');  // Add highlight class
          }
        }
      });
  
      // Cleanup listener when component unmounts
      return () => {
        window.removeEventListener('message', () => {});
      };
    }, []);
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));  // Update image source for preview
    }
  };
  
  

  const handleSave = async () => {
    const formData = new FormData();
    const fileInput = document.querySelector('input[type="file"]');
    
    if (fileInput.files.length > 0) {
      formData.append('image', fileInput.files[0]);
    }
  
    formData.append('textContent', content);
  
    try {
      const response = await axios.post(`${serverUrl}/admin/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      setImageSrc(response.data.data.imageUrl);
      setContent(response.data.data.textContent);
  
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };
  
  

useEffect(() => {
  const fetchNewsContent = async () => {
    try {
      const response = await axios.get(`${serverUrl}/news-content`);
      if (response.data) {
        setNews1Text(response.data.news1Text || 'Default text for news1');
        setNews2Text(response.data.news2Text || 'Default text for news2');
        setNews3Text(response.data.news3Text || 'Default text for news3');
        setNews4Text(response.data.news4Text || 'Default text for news4');

        setNews1Image(response.data.news1Image ? `${serverUrl}${response.data.news1Image}` : news1ImageDefault);
        setNews2Image(response.data.news2Image ? `${serverUrl}${response.data.news2Image}` : news1ImageDefault);
        setNews3Image(response.data.news3Image ? `${serverUrl}${response.data.news3Image}` : news1ImageDefault);
        setNews4Image(response.data.news4Image ? `${serverUrl}${response.data.news4Image}` : news1ImageDefault);

        }
    } catch (error) {
      console.error('Error fetching news content:', error);
    }
  };
  fetchNewsContent();
}, []);

// Handle image change for news items
const handleNewsImageChange = (event, setImage) => {
  const file = event.target.files[0];
  if (file) {
    const previewUrl = URL.createObjectURL(file);
    setImage(previewUrl);
  }
};

// Handle save for each news item
const handleSaveNews = async (newsItem, text, imageFile, setImage) => {
  const formData = new FormData();
  const fileInput = document.querySelector(`input[data-news="${newsItem}"]`);

  // Make sure the file is selected
  if (!fileInput || !fileInput.files || !fileInput.files[0]) {
    alert('Please select a file before saving.');
    return;
  }

  formData.append('image', fileInput.files[0]);  // File input
  formData.append('text', text);  // Text for the news item
  formData.append('newsItem', newsItem);  // Identifies which news item (news1, news2, etc.)

  try {
    const response = await axios.post(`${serverUrl}/admin/upload-news`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    // Update the image state with the new URL
    const imageUrl = `${serverUrl}${response.data[`${newsItem}Image`]}`;
    setImage(imageUrl);  // Call the passed setImage function to update the state
  } catch (error) {
    console.error('Error saving news content:', error);
    alert('Error saving the news content. Please try again.');
  }
};

useEffect(() => {
  const fetchAnnouncements = async () => {
    try {
      console.log('asfasf')
      const response = await axios.get(`${serverUrl}/announcement-content`);
      if (response.data) {
        setAnnouncement1Text(response.data.announcement1Text || 'Default text for announcement1');
        setAnnouncement2Text(response.data.announcement2Text || 'Default text for announcement2');
        setAnnouncement3Text(response.data.announcement3Text || 'Default text for announcement3');
        setAnnouncement4Text(response.data.announcement4Text || 'Default text for announcement4');

        setAnnouncement1Image(response.data.announcement1Image ? `${serverUrl}${response.data.announcement1Image}` : announcement1ImageDefault);
        setAnnouncement2Image(response.data.announcement2Image ? `${serverUrl}${response.data.announcement2Image}` : announcement2ImageDefault);
        setAnnouncement3Image(response.data.announcement3Image ? `${serverUrl}${response.data.announcement3Image}` : announcement3ImageDefault);
        setAnnouncement4Image(response.data.announcement4Image ? `${serverUrl}${response.data.announcement4Image}` : announcement4ImageDefault);
      }
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };
  fetchAnnouncements();
}, []);


const handleAnnouncementImageChange = (event, setImage) => {
  const file = event.target.files[0];
  if (file) {
    const previewUrl = URL.createObjectURL(file);
    setImage(previewUrl); // Show the preview
  }
};


const handleSaveAnnouncement = async () => {
  const formData = new FormData();
  
  // For announcement1
  const fileInput1 = document.querySelector(`input[name="announcement1Image"]`);
  if (fileInput1 && fileInput1.files[0]) {
    formData.append('announcement1Image', fileInput1.files[0]);
  }

  // For announcement2
  const fileInput2 = document.querySelector(`input[name="announcement2Image"]`);
  if (fileInput2 && fileInput2.files[0]) {
    formData.append('announcement2Image', fileInput2.files[0]);
  }

  // For announcement3
  const fileInput3 = document.querySelector(`input[name="announcement3Image"]`);
  if (fileInput3 && fileInput3.files[0]) {
    formData.append('announcement3Image', fileInput3.files[0]);
  }

  // For announcement4
  const fileInput4 = document.querySelector(`input[name="announcement4Image"]`);
  if (fileInput4 && fileInput4.files[0]) {
    formData.append('announcement4Image', fileInput4.files[0]);
  }

  // Append text for all announcements
  formData.append('announcement1Text', announcement1Text);
  formData.append('announcement2Text', announcement2Text);
  formData.append('announcement3Text', announcement3Text);
  formData.append('announcement4Text', announcement4Text);

  try {
    const response = await axios.post(`${serverUrl}/admin/upload-announcement`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    alert('Announcements updated successfully.');
  } catch (error) {
    console.error('Error saving announcements:', error);
  }
};

useEffect(() => {
  const fetchYearContent = async () => {
    try {
      const response = await axios.get(`${serverUrl}/year-content`);
      if (response.data) {
        // Set the fetched data in the state
        setYearText(response.data.yearText || 'Default text for year');
        setYear1Text(response.data.year1Text || 'Default text for year1');
        setYear2Text(response.data.year2Text || 'Default text for year2');

        // Set the images if they exist, otherwise use the default images
        setYearImage(response.data.yearImage ? `${serverUrl}${response.data.yearImage}` : yearImageDefault);
        setYear1Image(response.data.year1Image ? `${serverUrl}${response.data.year1Image}` : year1ImageDefault);
        setYear2Image(response.data.year2Image ? `${serverUrl}${response.data.year2Image}` : year2ImageDefault);
      }
    } catch (error) {
      console.error('Error fetching year content:', error);
    }
  };

  fetchYearContent();
}, []);  // Empty dependency array ensures it runs only once, on component mount

const handleYearImageChange = (event, setImage) => {
  const file = event.target.files[0];
  if (file) {
    const previewUrl = URL.createObjectURL(file);
    setImage(previewUrl); // Show the preview
  }
};

const handleSaveYear = async () => {
  const formData = new FormData();

  // Handle year section
  const yearFileInput = document.querySelector('input[name="yearImage"]');
  if (yearFileInput && yearFileInput.files[0]) {
    formData.append('yearImage', yearFileInput.files[0]);
  }
  formData.append('yearText', yearText);

  // Handle year1 section
  const year1FileInput = document.querySelector('input[name="year1Image"]');
  if (year1FileInput && year1FileInput.files[0]) {
    formData.append('year1Image', year1FileInput.files[0]);
  }
  formData.append('year1Text', year1Text);

  // Handle year2 section
  const year2FileInput = document.querySelector('input[name="year2Image"]');
  if (year2FileInput && year2FileInput.files[0]) {
    formData.append('year2Image', year2FileInput.files[0]);
  }
  formData.append('year2Text', year2Text);

  try {
    await axios.post(`${serverUrl}/admin/upload-year`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    alert('Year sections updated successfully.');
  } catch (error) {
    console.error('Error saving year sections:', error);
  }
};

return (
  <Router>
    <Routes>
      <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
      <Route path="/"
        element={
          <HomePage 
            isAdmin={isAdmin} 
            imageSrc={imageSrc}
            handleImageChange={handleImageChange}
            content={content} 
            setContent={setContent} 
            handleSave={handleSave} 
            originalContent={originalContent}
            news1Text={news1Text}
            news2Text={news2Text}
            news3Text={news3Text}
            news4Text={news4Text}
            news1Image={news1Image}
            news2Image={news2Image}
            news3Image={news3Image}
            news4Image={news4Image}
            setNews1Text={setNews1Text}
            setNews2Text={setNews2Text}
            setNews3Text={setNews3Text}
            setNews4Text={setNews4Text}
            setNews1Image={setNews1Image}
            setNews2Image={setNews2Image}
            setNews3Image={setNews3Image}
            setNews4Image={setNews4Image}
            handleSaveNews={handleSaveNews}
            handleNewsImageChange={handleNewsImageChange}
            announcement4Text={announcement4Text}
            announcement3Text={announcement3Text}
            announcement2Text={announcement2Text}
            announcement1Text={announcement1Text}
            setAnnouncement4Image={setAnnouncement4Image}
            setAnnouncement3Image={setAnnouncement3Image}
            setAnnouncement2Image={setAnnouncement2Image}
            setAnnouncement1Image={setAnnouncement1Image}
            handleAnnouncementImageChange={handleAnnouncementImageChange}
            setAnnouncement4Text={setAnnouncement4Text}
            setAnnouncement3Text={setAnnouncement3Text}
            setAnnouncement2Text={setAnnouncement2Text}
            setAnnouncement1Text={setAnnouncement1Text}
            announcement4ImageDefault={announcement4ImageDefault}
            announcement3ImageDefault={announcement3ImageDefault}
            announcement2ImageDefault={announcement2ImageDefault}
            announcement1ImageDefault={announcement1ImageDefault}
            handleSaveAnnouncement={handleSaveAnnouncement}
          announcement1Image={announcement1Image}
          announcement2Image={announcement2Image}
          announcement3Image={announcement3Image}
          announcement4Image={announcement4Image}
          yearText={yearText}
          year1Text={year1Text}
          year2Text={year2Text}
          handleSaveYear={handleSaveYear}
          setYearText={setYearText}
          setYear1Text={setYear1Text}
          setYear2Text={setYear2Text}
          setYearImage={setYearImage}
          setYear1Image={setYear1Image}
          setYear2Image={setYear2Image}
          handleYearImageChange={handleYearImageChange}
          yearImage={yearImage}
          year1Image={year1Image}
          year2Image={year2Image}
          imageUrl1={imageUrl1}
          imageUrl2={imageUrl2}
          imageUrl3={imageUrl3}
          imageUrl4={imageUrl4}
          content1={content1}
          content2={content2}
          content3={content3}
          content4={content4}
          event1Paragraph={event1Paragraph}
          event2Paragraph={event2Paragraph}
          event3Paragraph={event3Paragraph}
          event4Paragraph={event4Paragraph}
          EventImage={EventImage}
          EventImage2={EventImage2}
          EventImage3={EventImage3}
          EventImage4={EventImage4}


          />
        }
      />
      <Route
  path="/admin"
  element={
    <AdminPage
    highlightSectionContent={highlightSectionContent} // Passing dynamic header and paragraph content
    highlightSectionImage={highlightSectionImage} // Passing image
     news1Content={news1Content}
      news1Image={news1Image}
      news2Content={news2Content}
      news2Image={news2Image}
      news3Content={news3Content}
      news3Image={news3Image}
      news4Content={news4Content}
      news4Image={news4Image}
      announcement1Content={announcement1Content}
      announcement1Image={announcement1Image}
      announcement2Content={announcement2Content}
      announcement2Image={announcement2Image}
      announcement3Content={announcement3Content}
      announcement3Image={announcement3Image}
      announcement4Content={announcement4Content}
      announcement4Image={announcement4Image}
      yearContent={yearContent}
      year1Content={year1Content}
      year2Content={year2Content}
      yearImage={yearImage}
      year1Image={year1Image}
      year2Image={year2Image}
      imageUrl1={imageUrl1}
      imageUrl2={imageUrl2}
      imageUrl3={imageUrl3}
      imageUrl4={imageUrl4}
      content1={content1}
      content2={content2}
      content3={content3}
      content4={content4}
      event1Paragraph={event1Paragraph}
      event2Paragraph={event2Paragraph}
      event3Paragraph={event3Paragraph}
      event4Paragraph={event4Paragraph}
      EventImage={EventImage}
      EventImage2={EventImage2}
      EventImage3={EventImage3}
      EventImage4={EventImage4}

    />
  }
/>
<Route path="/" element={<>
          <HeaderNavbar /> {/* Insert header and navbar */}
          <HomePage /> {/* Your existing content */}
        </>} />
<Route path="/article" element={<ArticlePage />} />
  </Routes>
  </Router>
);
}
function HomePage({ isAdmin,year2Text,year1Text,yearText,handleSaveYear,setYear2Text,setYear1Text,setYearText,setYear2Image,setYear1Image,setYearImage,handleYearImageChange,
  year2Image,year1Image,yearImage,announcement1Content,announcement2Content,announcement3Content,announcement4Content,
  news1Image,yearContent,year1Content,year2Content,content1,content2,content3,content4,event1Paragraph,event2Paragraph,event3Paragraph,event4Paragraph,
  news2Image,EventImage,EventImage2,EventImage3,EventImage4,
  news3Image,
  imageUrl1,
  imageUrl2,
  imageUrl3,
  imageUrl4,
  

 handleAnnouncementImageChange,announcement1Image,announcement2Image,announcement3Image,announcement4Image,
  handleSaveAnnouncement,setAnnouncement1Text,setAnnouncement2Text,setAnnouncement3Text,setAnnouncement4Text,
  announcement4Text,announcement3Text,announcement2Text,announcement1Text,setAnnouncement4Image,setAnnouncement3Image,setAnnouncement2Image,setAnnouncement1Image }) {
  const navigate = useNavigate(); // Use navigate here inside Router


  return (
    
        
    <div className="container">
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

  <header>
  <div className="vanamamalai-container">
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#jeeyar">Jeeyar</a></li>
        <li><a href="#patashala">Patashala</a></li>
        <li><a href="#temple">Temple</a></li>
        <li><a href="#gallery">Gallery</a></li>
      </ul>
    </nav>
  </div>
</header>

  
      <main>
      <section id="home" className="top-section">
      <div id="highlight-section" className="highlight-container" onClick={() => navigate('/article')}>
  <img 
    src={highlightSectionImage} 
    alt="Highlight Section" 
    style={{ width: '100%', height: 'auto', maxWidth: '500px', display: 'block', margin: '0 auto' }} 
  />

  <div className="highlight-content" style={{ textAlign: 'center', marginTop: '20px' }}>
    <h2>Our Sri Vanamamalai Mutt</h2>
    <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
      {'One of the unique features here is that, mUlavar emperumAn is also known by the name of the dhivya dhEsam, i.e., vAnamAmalai and thOthAdhrinAthan.'}
    </p>
  </div>
</div>


  <div  className="news-section">
  <div id="news1" className="news-item" onClick={() => navigate('/article')}>
  <img src={news1Image} alt="News1" className="news-image-left" />
  <div className="news-text-content">
    <h2>Our Sri Vanamamalai Mutt</h2>
    <p>Our Sri Vanamamalai Mutt is one of the oldest mutts in Srivaishnava Sampradayam with rich culture and heritage.</p>
  </div>
</div>


  <div id="news2" className="news-item">
    <img src={news2Image} alt="News2" className="news-image-left" />
    <div className="news-text-content">
      <h2>Our Sri Vanamamalai Mutt</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>Our Sri Vanamamalai Mutt is one of the oldest mutts in Srivaishnava Sampradayam with rich culture and heritage.</p>
    </div>
  </div>

  <div id="news3" className="news-item">
    <img src={news3Image} alt="News3" className="news-image-left" />
    <div className="news-text-content">
      <h2>Our Sri Vanamamalai Mutt</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>Our Sri Vanamamalai Mutt is one of the oldest mutts in Srivaishnava Sampradayam with rich culture and heritage.</p>
    </div>
  </div>
</div>


 <section className='right-column'>
  
  <section className="image-container">
  <h2>Our Sri Vanamamalai Mutt</h2> {/* Add a heading */}

    <img 
      src={imageUrl} 
      alt="Description of the image" 
      width="100%" 
      height="160px" 
    /> {/* Add the image */}
    <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>Our Sri Vanamamalai Mutt is one of the oldest mutts in Srivaishnava Sampradayam with rich culture and heritage.</p> {/* Add the image description */}
  </section>

  <section className='ann'>
            <div className="announcements">
              <h3>Announcements</h3>
            
              <div className="announcement-scroller">
              {Array(1).fill().map((_, index) => (
              <>
      {/* Announcement 1 */}
          <div id="announcement1" className="announcement1-item" key="announcement1">
            <img src={announcement1Image} alt="announcement1" />
            <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{announcement1Text}</p>
          </div>

          {/* Announcement 2 */}
          <div id="announcement2" className="announcement2-item" key="announcement2">
            <img src={announcement2Image} alt="announcement2" />
            <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{announcement2Text}</p>
          </div>

          {/* Announcement 3 */}
          <div id="announcement3" className="announcement3-item" key="announcement3">
            <img src={announcement3Image} alt="announcement3" />
            <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{announcement3Text}</p>
          </div>

          {/* Announcement 4 */}
          <div id="announcement4" className="announcement4-item" key="announcement4">
            <img src={announcement4Image} alt="announcement4" />
            <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{announcement4Text}</p>
          </div>

      </>
            ))}
    </div> 
    </div>
  </section>
          </section>
        </section>
        <section id="jeeyar" className="bottom-section">
          <div className="jeeyars-travel">
            <h2>Jeeyar Travel</h2>
            <div className="itinerary-columns">
            {Array(1).fill().map((_, index) => (
  <>
    <div id="year" className="year-section">
      <h3>Upcoming itinerary</h3>
      <img style={{ width: '100%' }} src={yearImage} alt="Year Image" />
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{yearContent}</p>
    </div>

    <div id="2023" className="year1-section">
      <h3>2023</h3>
      <img style={{ width: '100%' }} src={year1Image} alt="Year1 Image" />
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{year1Content}</p>
    </div>

    <div id="2022" className="year2-section">
      <h3>2022</h3>
      <img style={{ width: '100%' }} src={year2Image} alt="Year2 Image" />
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{year2Content}</p>
    </div>
  </>
))}
{/* jeeyar artical */}
       </div>
       <div  className="videos">
  <div className="containers">
    <section id="Jeeyar article 1" className="image-container">
      <div className="content-wrapper">
        <img 
          src={imageUrl1} 
          alt="Sri Vanamamalai Mutt" 
          className="image-left" 
        />
        <div className="text-content">
          <h2>{content1.header}</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
            {content1.paragraph}
          </p>
        </div>
      </div>
    </section>

    <section id="Jeeyar article 2" className="image-container">
      <div className="content-wrapper">
        <img 
          src={imageUrl2} 
          alt="Divya Desam Temples" 
          className="image-left" 
        />
        <div className="text-content">
          <h2>{content2.header}</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
            {content2.paragraph}
          </p>
        </div>
      </div>
    </section>

    <section id="Jeeyar article 3" className="image-container">
      <div className="content-wrapper">
        <img 
          src={imageUrl3} 
          alt="Spiritual Leader" 
          className="image-left" 
        />
        <div className="text-content">
          <h2>{content3.header}</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
            {content3.paragraph}
          </p>
        </div>
      </div>
    </section>

    <section id="Jeeyar article 4" className="image-container">
      <div className="content-wrapper">
        <img 
          src={imageUrl4} 
          alt="Rich History" 
          className="image-left" 
        />
        <div className="text-content">
          <h2>{content4.header}</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
            {content4.paragraph}
          </p>
        </div>
      </div>

  </section>
</div>
</div>
</div>
          <aside className="event-calendar">
            <h2>Event Calendar</h2>
            <div className="scrollable">
            {Array(1).fill().map((_, index) => (
  <>
    <div id="Event 1" className="event-item" key={`event1-${index}`}>
      <img src={EventImage} alt="Event 1" />
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
        {event1Paragraph}
      </p>
    </div>

    <div id="Event 2" className="event-item2" key={`event2-${index}`}>
      <img src={EventImage2} alt="Event 2" />
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
        {event2Paragraph}
      </p>
    </div>

    <div id="Event 3" className="event-item3" key={`event3-${index}`}>
      <img src={EventImage3} alt="Event 3" />
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
        {event3Paragraph}
      </p>
    </div>

    <div id="Event 4" className="event-item4" key={`event4-${index}`}>
      <img src={EventImage4} alt="Event 4" />
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
        {event4Paragraph}
      </p>
    </div>
  </>
))}
</div>
    </aside>
        </section>

        <section id="temple" className="vanamamalai-temple-section">
          <h1>Vanamamalai Temple</h1>
          <div className="banner">
            <img src={bannerImage} alt="Vanamamalai Temple Banner" />
          </div>
          <div className="vanamamalai-temple-content">
            {Array(1).fill().map((_, index) => (
              <>
              <div className="temple-item" key={index}>
                <img src={templeImage} alt="Vanamamalai Temple" />
                <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>The Vanamamalai Perumal Temple, also known as Arulmigu Sree Vanamamalai Totatri Perumal Temple</p>
              </div>
              <div className="temple-item2" key={index}>
                <img src={templeImage2} alt="Vanamamalai Temple" />
                <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>The details about the presiding deity finds mention in Brahmananda Purana, Skanda Purana and Narasimha Purana.</p>
              </div>
              <div className="temple-item3" key={index}>
                <img src={templeImage3} alt="Vanamamalai Temple" />
                <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>The temple has a large five-tiered gopuram and a large temple compound having two prakarams</p>
              </div>
              <div className="temple-item4" key={index}>
                <img src={templeImage4} alt="Vanamamalai Temple" />
                <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>There are three precincts in the temple, with the shrine of Thayar located in the second precinct.</p>
              </div>
              <div className="temple-item5" key={index}>
                <img src={templeImage5} alt="Vanamamalai Temple" />
                <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>The temple priests perform the pooja (rituals) during festivals and on a daily basis based on Vaiksana Agama. </p>
              </div>
              <div className="temple-item6" key={index}>
                <img src={templeImage6} alt="Vanamamalai Temple" />
                <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>The temple is believed to have been built by the Pandyas, with later contributions from Vijayanagara kings and Madurai Nayaks</p>
              </div>
              </>
            ))}
          </div>
          <div className='event-map'>
          <div className="event-info">
            <h2>Sri Vanamamalai Dhivya Desam</h2>
            <p>On 24/05/2024 Vaikasi Friday - Sri Varamangai Nachiyar samedha Sri Deivanayaga Perumal Purappadu at Sri Vanamamalai Dhivya Desam.</p>
          </div>
          <div className="gallery-column map-column">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.791417738784!2d77.6551793152793!3d8.491923906342249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b046f33b0fb1281%3A0x393fcbb515073f46!2sDivyadesam79%20Sree%20Vanamamalai%20Thothatrinathan%20Perumal%20Temple%2C%20Thirucheer%20varamangai!5e0!3m2!1sen!2sus!4v1693642647175!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          </div>
         </div>
        </section>
        <section id="patashala" className="patashala-section">
          <header className="header">
            <h1>Patashala</h1>
            <nav>
              <ul>
                <li>Who we are</li>
                <li>Admissions</li>
                <li>Contact us</li>
              </ul>
            </nav>
          </header>
          <div className="about-enquiry-container">
            <section className="about">
              <h2>About</h2>
              <img src={patashalaimage} alt="About Image" />
              <p>vAnamAmalai mutt is an ancient SrIVaishNava Mutt which was established by PonnadikkAl Jeeyar under the orders of maNavALa mAmunigaL. PonnadikkAl Jeeyar was the first and foremost disciple and this mutt is one of the most important Mutts of SrIVaishNava Sath SampradhAyam.</p>
            </section>
            <section className="enquiry">
              <h2>Enquiry</h2>
              <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Query"></textarea>
                <button type="submit">Submit</button>
              </form>
            </section>
          </div>
          <div className="content">
            <section className="course">
              <h2>Course</h2>
              <img src={courseImage} alt="CourseImage" />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
            </section>
            <section className="admission">
              <h2>Admission</h2>
              <img src={courseImage1} alt="AdmissionImage" />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
            </section>
            <section className="event">
              <h2>Events</h2>
              <img src={courseImage2} alt="EventImage" />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
            </section>
          </div>
          <div className="patashalaevents-map">
                <div className="gallery-column">
                  {Array(1).fill().map((_, index) => (
                    <>
                    <div className="gallery-item1" key={index}>
                      <img src={newsImage1} alt="Gallery Item1" />
                      <p>Lorem ipsum dolor sit amet amet</p>
                      <a href="#">Learn more</a>
                    </div>
                    <div className="gallery-item2" key={index}>
                      <img src={newsImage2} alt="Gallery Item2" />
                      <p>Lorem ipsum dolor sit amet amet</p>
                      <a href="#">Learn more</a>
                    </div>
                    <div className="gallery-item3" key={index}>
                      <img src={newsImage3} alt="Gallery Item3" />
                      <p>Lorem ipsum dolor sit amet amet</p>
                      <a href="#">Learn more</a>
                    </div>
                    <div className="gallery-item4" key={index}>
                      <img src={newsImage4} alt="Gallery Item4" />
                      <p>Lorem ipsum dolor sit amet amet</p>
                      <a href="#">Learn more</a>
                    </div>
                    </>
                  ))}
                </div>
               
                </div>
              
        </section>
        <section id="gallery" className="gallerysection">
          <h2 className="galleryheading">Gallery</h2>
          <div className="gallery">
            {Array(1).fill().map((_, index) => (
              <>
              <div className="gallery-photos1" key={index}>
                <img src={galleryphoto1} alt="Gallery photo" />
                <p>Lorem ipsum dolor sit amet amet</p>
                <a href="#">Learn more </a>
              </div>
              <div className="gallery-photos2" key={index}>
                <img src={galleryphoto2} alt="Gallery photo" />
                <p>Lorem ipsum dolor sit amet amet</p>
                <a href="#">Learn more </a>
              </div>
              <div className="gallery-photos3" key={index}>
                <img src={galleryphoto3} alt="Gallery photo" />
                <p>Lorem ipsum dolor sit amet amet</p>
                <a href="#">Learn more </a>
              </div>
              <div className="gallery-photos4" key={index}>
                <img src={galleryphoto4} alt="Gallery photo" />
                <p>Lorem ipsum dolor sit amet amet</p>
                <a href="#">Learn more </a>
              </div>
              <div className="gallery-photos5" key={index}>
                <img src={galleryphoto5} alt="Gallery photo" />
                <p>Lorem ipsum dolor sit amet amet</p>
                <a href="#">Learn more </a>
              </div>
                <div className="gallery-photos6" key={index}>
                <img src={galleryphoto6} alt="Gallery photo" />
                <p>Lorem ipsum dolor sit amet amet</p>
                <a href="#">Learn more </a>
              </div>
              <div className="gallery-photos7" key={index}>
                <img src={galleryphoto7} alt="Gallery photo" />
                <p>Lorem ipsum dolor sit amet amet</p>
                <a href="#">Learn more </a>
              </div>
              <div className="gallery-photos8" key={index}>
                <img src={galleryphoto8} alt="Gallery photo" />
                <p>Lorem ipsum dolor sit amet amet</p>
                <a href="#">Learn more </a>
              </div>
              </>
            ))}
          </div>
        </section>
      </main>
    </div>

  );
}


export default App;
