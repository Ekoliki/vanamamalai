import React, { useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import bannerImage from './assets/banner-image.png'; 

import patashalaimage from './assets/patashalaimage.jpg'

import EventImage from './assets/event-item.jpg';
import EventImage2 from './assets/event-item2.jpg';
import EventImage3 from './assets/event-item3.jpg';
import EventImage4 from './assets/event-item4.jpg';


import announcement1ImageDefault from './assets/announcement-image1.jpg';  // Replace with actual path
import announcement2ImageDefault from './assets/announcement-image2.jpg';  // Replace with actual path
import announcement3ImageDefault from './assets/announcement-image3.jpg';  // Replace with actual path
import announcement4ImageDefault from './assets/announcement-image4.jpg';  // Replace with actual path


import logoImage from './assets/logo-image.png';


import { FaUserCircle } from 'react-icons/fa'; // Import icon for login

import { BrowserRouter as Router, Route, Routes, Link,useNavigate } from 'react-router-dom';
import Login from './Login'; // Import the Login component
import AdminPage from './AdminPage'; // Import your AdminPage component
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
  
   const serverUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000';
  
const [highlightSectionImage, setHighlightSectionImage] = useState(''); // Initialized empty, will update from API
const [highlightSectionTitle, setHighlightSectionTitle] = useState(''); // State to store the article title
const [highlightSectionContent, setHighlightSectionContent] = useState(''); // State to store the article content

// News section state
const [news1Image, setNews1Image] = useState('');
const [news1Title, setNews1Title] = useState('');
const [news1Content, setNews1Content] = useState('');

const [news2Image, setNews2Image] = useState('');
const [news2Title, setNews2Title] = useState('');
const [news2Content, setNews2Content] = useState('');

const [news3Image, setNews3Image] = useState('');
const [news3Title, setNews3Title] = useState('');
const [news3Content, setNews3Content] = useState('');

//announcement Section

const [announcement1Image, setAnnouncement1Image] = useState('');
const [announcement1Text, setAnnouncement1Text] = useState('');

const [announcement2Image, setAnnouncement2Image] = useState('');
const [announcement2Text, setAnnouncement2Text] = useState('');

const [announcement3Image, setAnnouncement3Image] = useState('');
const [announcement3Text, setAnnouncement3Text] = useState('');

const [announcement4Image, setAnnouncement4Image] = useState('');
const [announcement4Text, setAnnouncement4Text] = useState('');

const [muttImageUrl, setMuttImageUrl] = useState('');
const [muttDescription, setMuttDescription] = useState('');
const [muttTitle, setMuttTitle] = useState('');

// jeeyars year

const [yearImage, setYearImage] = useState('');
const [yearText, setYearText] = useState('');

const [year1Image, setYear1Image] = useState('');
const [year1Text, setYear1Text] = useState('');

const [year2Image, setYear2Image] = useState('');
const [year2Text, setYear2Text] = useState('');

// jeeyars travels

const [content1Image, setContent1Image] = useState('');
const [content1Text, setContent1Text] = useState('');
const [content1Heading, setContent1Heading]= useState('');

const [content2Image, setContent2Image] = useState('');
const [content2Text, setContent2Text] = useState('');
const [content2Heading, setContent2Heading]= useState('');

const [content3Image, setContent3Image] = useState('');
const [content3Text, setContent3Text] = useState('');
const [content3Heading, setContent3Heading]= useState('');

const [content4Image, setContent4Image] = useState('');
const [content4Text, setContent4Text] = useState('');
const [content4Heading, setContent4Heading]= useState('');

// Event Section 

const [event1Image, setEvent1Image] = useState('');
const [event1Text, setEvent1Text] = useState('');

const [event2Image, setEvent2Image] = useState('');
const [event2Text, setEvent2Text] = useState('');

const [event3Image, setEvent3Image] = useState('');
const [event3Text, setEvent3Text] = useState('');

const [event4Image, setEvent4Image] = useState('');
const [event4Text, setEvent4Text] = useState('');

// Temple Section

const [templeImage1, setTempleImage1] = useState('');
const [templeImage2, setTempleImage2] = useState('');
const [templeImage3, setTempleImage3] = useState('');
const [templeImage4, setTempleImage4] = useState('');
const [templeImage5, setTempleImage5] = useState('');
const [templeImage6, setTempleImage6] = useState('');

const [templeText1, setTempleText1] = useState('');
const [templeText2, setTempleText2] = useState('');
const [templeText3, setTempleText3] = useState('');
const [templeText4, setTempleText4] = useState('');
const [templeText5, setTempleText5] = useState('');
const [templeText6, setTempleText6] = useState('');

//Patasala section 

const [courseImage, setCourseImage] = useState('');
const [courseText, setCourseText] = useState('');

const [admissionImage, setAdmissionImage] = useState('');
const [admissionText, setAdmissionText] = useState('');

const [eventsImage, setEventsImage] = useState('');
const [eventsText, setEventsText] = useState('');

//patasala Gallery

const [patasalaGallery1Image, setPatasalaGallery1Image] = useState('');
const [patasalaGallery1Text, setPatasalaGallery1Text] = useState('');

const [patasalaGallery2Image, setPatasalaGallery2Image] = useState('');
const [patasalaGallery2Text, setPatasalaGallery2Text] = useState('');

const [patasalaGallery3Image, setPatasalaGallery3Image] = useState('');
const [patasalaGallery3Text, setPatasalaGallery3Text] = useState('');

const [patasalaGallery4Image, setPatasalaGallery4Image] = useState('');
const [patasalaGallery4Text, setPatasalaGallery4Text] = useState('');

//Gallery Section 

const [Gallery1Image, setGallery1Image] = useState('');
const [Gallery1Text, setGallery1Text] = useState('');

const [Gallery2Image, setGallery2Image] = useState('');
const [Gallery2Text, setGallery2Text] = useState('');

const [Gallery3Image, setGallery3Image] = useState('');
const [Gallery3Text, setGallery3Text] = useState('');

const [Gallery4Image, setGallery4Image] = useState('');
const [Gallery4Text, setGallery4Text] = useState('');

const [Gallery5Image, setGallery5Image] = useState('');
const [Gallery5Text, setGallery5Text] = useState('');

const [Gallery6Image, setGallery6Image] = useState('');
const [Gallery6Text, setGallery6Text] = useState('');

const [Gallery7Image, setGallery7Image] = useState('');
const [Gallery7Text, setGallery7Text] = useState('');

const [Gallery8Image, setGallery8Image] = useState('');
const [Gallery8Text, setGallery8Text] = useState('');




   // Fetch Highlight Section data from the API
   useEffect(() => {
    const fetchHighlightSection = async () => {
      try {
        const response = await axios.get('https://andaal.in/gbm/api/articles/highlight_section');
        setHighlightSectionImage(response.data.preview_image);
        setHighlightSectionTitle(response.data.heading);
        setHighlightSectionContent(response.data.preview_text || response.data.article_text);
      } catch (error) {
        console.error('Error fetching highlight section:', error);
      }
    };

    const fetchNewsSection = async () => {
      try {
        // Fetch for news1
        const news1Response = await axios.get('https://andaal.in/gbm/api/articles/news1');
        console.log(news1Response)
        setNews1Image(news1Response.data.preview_image);
        setNews1Title(news1Response.data.heading);
        setNews1Content(news1Response.data.preview_text);

        // Fetch for news2
        const news2Response = await axios.get('https://andaal.in/gbm/api/articles/news2');
        setNews2Image(news2Response.data.preview_image);
        setNews2Title(news2Response.data.heading);
        setNews2Content(news2Response.data.preview_text || news2Response.data.article_text);

        // Fetch for news3
        const news3Response = await axios.get('https://andaal.in/gbm/api/articles/news3');
        setNews3Image(news3Response.data.preview_image);
        setNews3Title(news3Response.data.heading);
        setNews3Content(news3Response.data.preview_text || news3Response.data.article_text);
      } catch (error) {
        console.error('Error fetching news section:', error);
      }
    };

    const fetchAnnouncementSection = async () => {
      try {
        // Fetch for announcement1
        const announcement1Response = await axios.get('https://andaal.in/gbm/api/articles/announcement1');
        setAnnouncement1Image(announcement1Response.data.preview_image);
        setAnnouncement1Text(announcement1Response.data.preview_text);
  
        // Fetch for announcement2
        const announcement2Response = await axios.get('https://andaal.in/gbm/api/articles/announcement2');
        setAnnouncement2Image(announcement2Response.data.preview_image);
        setAnnouncement2Text(announcement2Response.data.preview_text);
  
        // Fetch for announcement3
        const announcement3Response = await axios.get('https://andaal.in/gbm/api/articles/announcement3');
        setAnnouncement3Image(announcement3Response.data.preview_image);
        setAnnouncement3Text(announcement3Response.data.preview_text);
  
        // Fetch for announcement4
        const announcement4Response = await axios.get('https://andaal.in/gbm/api/articles/announcement4');
        setAnnouncement4Image(announcement4Response.data.preview_image);
        setAnnouncement4Text(announcement4Response.data.preview_text);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    const fetchMuttSection = async () => {
      try {
        const response = await axios.get('https://andaal.in/gbm/api/articles/news4');
        setMuttImageUrl(response.data.preview_image);
        setMuttTitle(response.data.heading);
        setMuttDescription(response.data.preview_text);
      } catch (error) {
        console.error('Error fetching Mutt section:', error);
      }
    };
    
    const fetchYearContent = async () => {
      try{
        const response = await axios.get('https://andaal.in/gbm/api/articles/year')
        const response2023 = await axios.get('https://andaal.in/gbm/api/articles/2023')
        const response2022 = await axios.get('https://andaal.in/gbm/api/articles/2022')
        setYearImage(response.data.preview_image);
        setYearText(response.data.preview_text);
        setYear1Image(response2023.data.preview_image);
        setYear1Text(response2023.data.preview_text);
        setYear2Image(response2022.data.preview_image);
        setYear2Text(response2022.data.preview_text);
      }
      catch (error) {
        console.error('Error fetching year section:', error);
      }
    };

    const fetchJeeyarArticles = async () => {
      try{
      const response = await axios.get('https://andaal.in/gbm/api/articles/Jeeyar article 1')
      const response1 = await axios.get('https://andaal.in/gbm/api/articles/Jeeyar article 2')
      const response2 = await axios.get('https://andaal.in/gbm/api/articles/Jeeyar article 3')
      const response3 = await axios.get('https://andaal.in/gbm/api/articles/Jeeyar article 4')

      setContent1Image(response.data.preview_image);
      setContent1Text(response.data.preview_text);
      setContent1Heading(response.data.heading)

      setContent2Image(response1.data.preview_image);
      setContent2Text(response1.data.preview_text);
      setContent2Heading(response1.data.heading)

      setContent3Image(response2.data.preview_image);
      setContent3Text(response2.data.preview_text);
      setContent3Heading(response2.data.heading)

      setContent4Image(response3.data.preview_image);
      setContent4Text(response3.data.preview_text);
      setContent4Heading(response3.data.heading)
    }
    catch (error) {
      console.error('Error fetching article section:', error);
    }
  }

  const fetchEvents = async () => {
    try{
    const response = await axios.get('https://andaal.in/gbm/api/articles/Event 1')
    const response2 = await axios.get('https://andaal.in/gbm/api/articles/Event 2')
    const response3 = await axios.get('https://andaal.in/gbm/api/articles/Event 3')
    const response4 = await axios.get('https://andaal.in/gbm/api/articles/Event 4')

    setEvent1Image(response.data.preview_image)
    setEvent1Text(response.data.preview_text)
    
    setEvent2Image(response2.data.preview_image)
    setEvent2Text(response2.data.preview_text)

    setEvent3Image(response3.data.preview_image)
    setEvent3Text(response3.data.preview_text)

    setEvent4Image(response4.data.preview_image)
    setEvent4Text(response4.data.preview_text)
  }
  catch (error) {
    console.error('Error fetching Event section:', error);
  }
}


const fetchTemples = async () => {
  try{
    const response = await axios.get('https://andaal.in/gbm/api/articles/Temple article 1')
    const response2 = await axios.get('https://andaal.in/gbm/api/articles/Temple article 2')
    const response3 = await axios.get('https://andaal.in/gbm/api/articles/Temple article 3')
    const response4 = await axios.get('https://andaal.in/gbm/api/articles/Temple article 4')
    const response5 = await axios.get('https://andaal.in/gbm/api/articles/Temple article 5')
    const response6 = await axios.get('https://andaal.in/gbm/api/articles/Temple article 6')

    setTempleImage1(response.data.preview_image)
    setTempleImage2(response2.data.preview_image)
    setTempleImage3(response3.data.preview_image)
    setTempleImage4(response4.data.preview_image)
    setTempleImage5(response5.data.preview_image)
    setTempleImage6(response6.data.preview_image)

    setTempleText1(response.data.preview_text)
    setTempleText2(response2.data.preview_text)
    setTempleText3(response3.data.preview_text)
    setTempleText4(response4.data.preview_text)
    setTempleText5(response5.data.preview_text)
    setTempleText6(response6.data.preview_text)

  }
  catch (error) {
    console.error('Error fetching Event section:', error);
  }
}

const fetchpatasalacontent =async () => {
  try{
    const response = await axios.get('https://andaal.in/gbm/api/articles/Course')
    const response2 = await axios.get('https://andaal.in/gbm/api/articles/Admission')
    const response3 = await axios.get('https://andaal.in/gbm/api/articles/Events')

    setCourseImage(response.data.preview_image)
    setCourseText(response.data.preview_text)

    setAdmissionImage(response2.data.preview_image)
    setAdmissionText(response2.data.preview_text)

    setEventsImage(response3.data.preview_image)
    setEventsText(response3.data.preview_text)

  }
  catch (error) {
    console.error('Error fetching Patasalacontent section:', error);
  }
}

const fetchpatasalaGallery =async () => {
  try{
    const response1 = await axios.get('https://andaal.in/gbm/api/articles/Patasala Gallery1')
    const response2 = await axios.get('https://andaal.in/gbm/api/articles/Patasala Gallery2')
    const response3 = await axios.get('https://andaal.in/gbm/api/articles/Patasala Gallery3')
    const response4 = await axios.get('https://andaal.in/gbm/api/articles/Patasala Gallery4')

    setPatasalaGallery1Image(response1.data.preview_image)
    setPatasalaGallery2Image(response2.data.preview_image)
    setPatasalaGallery3Image(response3.data.preview_image)
    setPatasalaGallery4Image(response4.data.preview_image)

    setPatasalaGallery1Text(response1.data.preview_text)
    setPatasalaGallery2Text(response2.data.preview_text)
    setPatasalaGallery3Text(response3.data.preview_text)
    setPatasalaGallery4Text(response4.data.preview_text)


  }
  catch (error) {
    console.error('Error fetching patasalaGallery section:', error);
  }
}

const fetchGallery = async () => {
  try {
    const response1 = await axios.get('https://andaal.in/gbm/api/articles/Gallery1')
    const response2 = await axios.get('https://andaal.in/gbm/api/articles/Gallery2')
    const response3 = await axios.get('https://andaal.in/gbm/api/articles/Gallery3')
    const response4 = await axios.get('https://andaal.in/gbm/api/articles/Gallery4')
    const response5 = await axios.get('https://andaal.in/gbm/api/articles/Gallery5')
    const response6 = await axios.get('https://andaal.in/gbm/api/articles/Gallery6')
    const response7 = await axios.get('https://andaal.in/gbm/api/articles/Gallery7')
    const response8 = await axios.get('https://andaal.in/gbm/api/articles/Gallery8')

    setGallery1Image(response1.data.preview_image)
    setGallery1Text(response1.data.preview_text)

    setGallery2Image(response2.data.preview_image)
    setGallery2Text(response2.data.preview_text)

    setGallery3Image(response3.data.preview_image)
    setGallery3Text(response3.data.preview_text)

    setGallery4Image(response4.data.preview_image)
    setGallery4Text(response4.data.preview_text)

    setGallery5Image(response5.data.preview_image)
    setGallery5Text(response5.data.preview_text)

    setGallery6Image(response6.data.preview_image)
    setGallery6Text(response6.data.preview_text)

    setGallery7Image(response7.data.preview_image)
    setGallery7Text(response7.data.preview_text)

    setGallery8Image(response8.data.preview_image)
    setGallery8Text(response8.data.preview_text)
  }
  catch (error) {
    console.error('Error fetching patasalaGallery section:', error);
  }
}
    fetchYearContent();
    fetchHighlightSection();
    fetchNewsSection();
    fetchAnnouncementSection();
    fetchMuttSection();
    fetchJeeyarArticles ();
    fetchEvents();
    fetchTemples();
    fetchpatasalacontent();
    fetchpatasalaGallery ();
    fetchGallery();
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
            originalContent={originalContent}
            highlightSectionImage={highlightSectionImage}
            highlightSectionTitle={highlightSectionTitle}
            highlightSectionContent={highlightSectionContent}
            news1Text={news1Text}
            news2Text={news2Text}
            news3Text={news3Text}

            news1Title={news1Title}
            news2Title = {news2Title}
            news3Title = {news3Title}

            news1Content={news1Content}
            news2Content={news2Content}
            news3Content={news3Content}
            
            news1Image={news1Image}
            news2Image={news2Image}
            news3Image={news3Image}
            
            setNews1Text={setNews1Text}
            setNews2Text={setNews2Text}
            setNews3Text={setNews3Text}
           
            setNews1Image={setNews1Image}
            setNews2Image={setNews2Image}
            setNews3Image={setNews3Image}
            
            announcement4Text={announcement4Text}
            announcement3Text={announcement3Text}
            announcement2Text={announcement2Text}
            announcement1Text={announcement1Text}
            setAnnouncement4Image={setAnnouncement4Image}
            setAnnouncement3Image={setAnnouncement3Image}
            setAnnouncement2Image={setAnnouncement2Image}
            setAnnouncement1Image={setAnnouncement1Image}
            setAnnouncement4Text={setAnnouncement4Text}
            setAnnouncement3Text={setAnnouncement3Text}
            setAnnouncement2Text={setAnnouncement2Text}
            setAnnouncement1Text={setAnnouncement1Text}
            announcement4ImageDefault={announcement4ImageDefault}
            announcement3ImageDefault={announcement3ImageDefault}
            announcement2ImageDefault={announcement2ImageDefault}
            announcement1ImageDefault={announcement1ImageDefault}
          announcement1Image={announcement1Image}
          announcement2Image={announcement2Image}
          announcement3Image={announcement3Image}
          announcement4Image={announcement4Image}
          yearText={yearText}
          year1Text={year1Text}
          year2Text={year2Text}
          setYearText={setYearText}
          setYear1Text={setYear1Text}
          setYear2Text={setYear2Text}
          setYearImage={setYearImage}
          setYear1Image={setYear1Image}
          setYear2Image={setYear2Image}
          yearImage={yearImage}
          year1Image={year1Image}
          year2Image={year2Image}
          EventImage={EventImage}
          EventImage2={EventImage2}
          EventImage3={EventImage3}
          EventImage4={EventImage4}
          muttDescription={muttDescription}
          muttImageUrl={muttImageUrl}
          muttTitle={muttTitle}
          content1Image={content1Image}
          content2Image={content2Image}
          content3Image={content3Image}
          content4Image={content4Image}
          content1Text={content1Text}
          content2Text={content2Text}
          content3Text={content3Text}
          content4Text={content4Text}
          content1Heading={content1Heading}
          content2Heading={content2Heading}
          content3Heading={content3Heading}
          content4Heading={content4Heading}
          event1Image={event1Image}
          event2Image={event2Image}
          event3Image={event3Image}
          event4Image={event4Image}
          event1Text={event1Text}
          event2Text={event2Text}
          event3Text={event3Text}
          event4Text={event4Text}
          templeImage1={templeImage1}
          templeImage2={templeImage2}
          templeImage3={templeImage3}
          templeImage4={templeImage4}
          templeImage5={templeImage5}
          templeImage6={templeImage6}
          templeText1={templeText1}
          templeText2={templeText2}
          templeText3={templeText3}
          templeText4={templeText4}
          templeText5={templeText5}
          templeText6={templeText6}
          courseImage={courseImage}
          courseText={courseText}
          admissionImage={admissionImage}
          admissionText={admissionText}
          eventsImage={eventsImage}
          eventsText={eventsText}
          patasalaGallery1Text={patasalaGallery1Text}
          patasalaGallery2Text={patasalaGallery2Text}
          patasalaGallery3Text={patasalaGallery3Text}
          patasalaGallery4Text={patasalaGallery4Text}
          patasalaGallery1Image={patasalaGallery1Image}
          patasalaGallery2Image={patasalaGallery2Image}
          patasalaGallery3Image={patasalaGallery3Image}
          patasalaGallery4Image={patasalaGallery4Image}
          Gallery1Image={Gallery1Image}
          Gallery1Text={Gallery1Text}
          Gallery2Image={Gallery2Image}
          Gallery2Text={Gallery2Text}
          Gallery3Image={Gallery3Image}
          Gallery3Text={Gallery3Text}
          Gallery4Image={Gallery4Image}
          Gallery4Text={Gallery4Text}
          Gallery5Image={Gallery5Image}
          Gallery5Text={Gallery5Text}
          Gallery6Image={Gallery6Image}
          Gallery6Text={Gallery6Text}
          Gallery7Image={Gallery7Image}
          Gallery7Text={Gallery7Text}
          Gallery8Image={Gallery8Image}
          Gallery8Text={Gallery8Text}
       
          


          />
        }
      />
      <Route
  path="/admin"
  element={
    <AdminPage
    // highlightSectionContent={highlightSectionContent} // Passing dynamic header and paragraph content
    // highlightSectionImage={highlightSectionImage} // Passing image
     news1Content={news1Content}
     news1Title = {news1Title}
      news1Image={news1Image}
      news2Content={news2Content}
      news2Image={news2Image}
      news3Content={news3Content}
      news3Image={news3Image}
      news2Title = {news2Title}
      news3Title = {news3Title}
      announcement1Image={announcement1Image}
      announcement2Image={announcement2Image}
      announcement3Image={announcement3Image}
      announcement4Image={announcement4Image}
      yearImage={yearImage}
      year1Image={year1Image}
      year2Image={year2Image}
      EventImage={EventImage}
      EventImage2={EventImage2}
      EventImage3={EventImage3}
      EventImage4={EventImage4}
      muttDescription={muttDescription}
      muttImageUrl={muttImageUrl}
      muttTitle={muttTitle}
      content1Image={content1Image}
      content2Image={content2Image}
      content3Image={content3Image}
      content4Image={content4Image}
      content1Text={content1Text}
      content2Text={content2Text}
      content3Text={content3Text}
      content4Text={content4Text}
      content1Heading={content1Heading}
      content2Heading={content2Heading}
      content3Heading={content3Heading}
      content4Heading={content4Heading}
      event1Image={event1Image}
      event2Image={event2Image}
      event3Image={event3Image}
      event4Image={event4Image}
      event1Text={event1Text}
      event2Text={event2Text}
      event3Text={event3Text}
      event4Text={event4Text}
      templeImage1={templeImage1}
      templeImage2={templeImage2}
      templeImage3={templeImage3}
      templeImage4={templeImage4}
      templeImage5={templeImage5}
      templeImage6={templeImage6}
      templeText1={templeText1}
      templeText2={templeText2}
      templeText3={templeText3}
      templeText4={templeText4}
      templeText5={templeText5}
      templeText6={templeText6}
      courseImage={courseImage}
      courseText={courseText}
      admissionImage={admissionImage}
      admissionText={admissionText}
      eventsImage={eventsImage}
      eventsText={eventsText}
      patasalaGallery1Text={patasalaGallery1Text}
      patasalaGallery2Text={patasalaGallery2Text}
      patasalaGallery3Text={patasalaGallery3Text}
      patasalaGallery4Text={patasalaGallery4Text}
      patasalaGallery1Image={patasalaGallery1Image}
      patasalaGallery2Image={patasalaGallery2Image}
      patasalaGallery3Image={patasalaGallery3Image}
      patasalaGallery4Image={patasalaGallery4Image}
      Gallery1Image={Gallery1Image}
      Gallery1Text={Gallery1Text}
      Gallery2Image={Gallery2Image}
      Gallery2Text={Gallery2Text}
      Gallery3Image={Gallery3Image}
      Gallery3Text={Gallery3Text}
      Gallery4Image={Gallery4Image}
      Gallery4Text={Gallery4Text}
      Gallery5Image={Gallery5Image}
      Gallery5Text={Gallery5Text}
      Gallery6Image={Gallery6Image}
      Gallery6Text={Gallery6Text}
      Gallery7Image={Gallery7Image}
      Gallery7Text={Gallery7Text}
      Gallery8Image={Gallery8Image}
      Gallery8Text={Gallery8Text}
   

    />
  }
/>
<Route path="/" element={<>
          <HeaderNavbar /> {/* Insert header and navbar */}
          <HomePage /> {/* Your existing content */}
        </>} />
        <Route path="/article/:id" element={<ArticlePage />} />
  </Routes>
  </Router>
);
}
function HomePage({ isAdmin,year2Text,year1Text,yearText,handleSaveYear,setYear2Text,setYear1Text,setYearText,setYear2Image,setYear1Image,setYearImage,handleYearImageChange,
  year2Image,year1Image,yearImage,announcement1Content,announcement2Content,announcement3Content,announcement4Content,
  news1Image,yearContent,year1Content,year2Content,content1,content2,content3,content4,event1Paragraph,event2Paragraph,event3Paragraph,event4Paragraph,
  news2Image,EventImage,EventImage2,EventImage3,EventImage4,
  news3Image,
  highlightSectionImage, 
  highlightSectionTitle, 
  highlightSectionContent,news1Title,news2Title,news3Title,news1Content,news2Content,news3Content,muttDescription,muttImageUrl,muttTitle,
  content1Image,content1Heading,content1Text,content2Image,content3Image,content4Image,content2Heading,content3Heading,content4Heading,content2Text,content3Text,content4Text,
  event1Image,event2Image,event3Image,event4Image,event1Text,event2Text,event3Text,event4Text,
  templeImage1,templeImage2,templeImage3,templeImage4,templeImage5,templeImage6,
  templeText1,templeText2,templeText3,templeText4,templeText5,templeText6,
  courseImage,courseText,admissionImage,admissionText,eventsImage,eventsText,
  patasalaGallery1Image,patasalaGallery2Image,patasalaGallery3Image,patasalaGallery4Image,
  patasalaGallery1Text,patasalaGallery2Text,patasalaGallery3Text,patasalaGallery4Text,
  Gallery1Image,Gallery1Text,Gallery2Image,Gallery2Text,Gallery3Image,Gallery3Text,Gallery4Image, Gallery4Text,Gallery5Image,Gallery5Text,
  Gallery6Image,Gallery6Text,Gallery7Image,Gallery7Text,Gallery8Image,Gallery8Text,

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
      <div className="container">
      <div id="highlight-section" className="highlight-container" onClick={() => navigate('/article/highlight_section')}>
      <img src={highlightSectionImage} alt="Highlight Section" style={{ width: '100%', height: 'auto', maxWidth: '500px', display: 'block', margin: '0 auto' }} />
      <div className="highlight-content" style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* <a href="/article" className="highlight-link"> */}
      <h2>{highlightSectionTitle || 'Default Title'}</h2>
    {/* </a> */}
    <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
    {(highlightSectionContent ? 
              highlightSectionContent.split(' ').slice(0, 40).join(' ') + '...' : 
              'Default content text')}
    </p>
  </div>
</div>
    </div>

  <div id ="new1"  className="news-section">
  <div id="news1" className="news-item" onClick={() => navigate('/article/news1')}>
  <img src={news1Image} alt="News1" className="news-image-left" />
  <div className="news-text-content">
  <h2>{news1Title || 'Default Title'}</h2>
  <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{(news1Content ? 
              news1Content.split(' ').slice(0, 20).join(' ') + '...' : 
              'Default content text')}</p>
  </div>
</div>


  <div id="news2" className="news-item"onClick={() => navigate('/article/news2')}>
    <img src={news2Image} alt="News2" className="news-image-left" />
    <div className="news-text-content">
    <h2>{news2Title || 'Default Title'}</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{(news2Content ? 
              news2Content.split(' ').slice(0, 20).join(' ') + '...' : 
              'Default content text')}</p>
    </div>
  </div>

  <div id="news3" className="news-item"onClick={() => navigate('/article/news3')}>
    <img src={news3Image} alt="News3" className="news-image-left" />
    <div className="news-text-content">
    <h2>{news3Title || 'Default Title'}</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{(news3Content ? 
              news3Content.split(' ').slice(0, 20).join(' ') + '...' : 
              'Default content text')}</p>
    </div>
  </div>
</div>


 <section className='right-column'onClick={() => navigate('/article/news4')}>
  
  <section id="news4" className="image-container">
  <h2>{muttTitle}</h2> {/* Add a heading */}

    <img 
      src={muttImageUrl}  
      alt="Description of the image" 
      width="80%" 
      height="160px" 
    /> {/* Add the image */}
    <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{(muttDescription ? 
              muttDescription.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p> {/* Add the image description */}
  </section>

  <section className='ann'>
            <div className="announcements">
              <h3>Announcements</h3>
            
              <div className="announcement-scroller">
              {Array(1).fill().map((_, index) => (
              <>
      {/* Announcement 1 */}
          <div id="announcement1" className="announcement1-item" key="announcement1"onClick={() => navigate('/article/announcement1')}>
            <img src={announcement1Image} alt="announcement1" />
            <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{(announcement1Text ? 
              announcement1Text.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
          </div>

          {/* Announcement 2 */}
          <div id="announcement2" className="announcement2-item" key="announcement2"onClick={() => navigate('/article/announcement2')}>
            <img src={announcement2Image} alt="announcement2" />
            <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{(announcement2Text ? 
              announcement2Text.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
          </div>

          {/* Announcement 3 */}
          <div id="announcement3" className="announcement3-item" key="announcement3"onClick={() => navigate('/article/announcement3')}>
            <img src={announcement3Image} alt="announcement3" />
            <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{(announcement3Text ? 
              announcement3Text.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
          </div>

          {/* Announcement 4 */}
          <div id="announcement4" className="announcement4-item" key="announcement4"onClick={() => navigate('/article/announcement4')}>
            <img src={announcement4Image} alt="announcement4" />
            <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{(announcement4Text ? 
              announcement4Text.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
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
    <div id="year" className="year-section"onClick={() => navigate('/article/year')}>
      <h3>Upcoming itinerary</h3>
      <img style={{ width: '100%' }} src={yearImage} alt="Year Image" />
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{(yearText ? 
              yearText.split(' ').slice(0, 5).join(' ') + '...' : 
              'Default content text')}</p>
    </div>

    <div id="2023" className="year1-section"onClick={() => navigate('/article/2023')}>
      <h3>2023</h3>
      <img style={{ width: '100%' }} src={year1Image} alt="Year1 Image" />
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{(year1Text ? 
              year1Text.split(' ').slice(0, 5).join(' ') + '...' : 
              'Default content text')}</p>
    </div>

    <div id="2022" className="year2-section"onClick={() => navigate('/article/2022')}>
      <h3>2022</h3>
      <img style={{ width: '100%' }} src={year2Image} alt="Year2 Image" />
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{(year2Text ? 
              year2Text.split(' ').slice(0, 5).join(' ') + '...' : 
              'Default content text')}</p>
    </div>
  </>
))}
{/* jeeyar artical */}
       </div>
       <div  className="videos">
  <div className="containers">
    <section id="Jeeyar article 1" className="image-container"onClick={() => navigate('/article/jeeyar article 1')}>
      <div className="content-wrapper">
        <img 
          src={content1Image} 
          alt="Sri Vanamamalai Mutt" 
          className="image-left" 
        />
        <div className="text-content">
          <h2>{content1Heading}</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
          {(content1Text ? 
              content1Text.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
        </div>
      </div>
    </section>

    <section id="Jeeyar article 2" className="image-container"onClick={() => navigate('/article/jeeyar article 2')}>
      <div className="content-wrapper">
        <img 
          src={content2Image}  
          alt="Divya Desam Temples" 
          className="image-left" 
        />
        <div className="text-content">
          <h2>{content2Heading}</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
          {(content2Text ? 
              content2Text.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
        </div>
      </div>
    </section>

    <section id="Jeeyar article 3" className="image-container"onClick={() => navigate('/article/jeeyar article 3')}>
      <div className="content-wrapper">
        <img 
          src={content3Image}  
          alt="Spiritual Leader" 
          className="image-left" 
        />
        <div className="text-content">
          <h2>{content3Heading}</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
          {(content3Text ? 
              content3Text.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
        </div>
      </div>
    </section>

    <section id="Jeeyar article 4" className="image-container"onClick={() => navigate('/article/jeeyar article 4')}>
      <div className="content-wrapper">
        <img 
          src={content4Image}  
          alt="Rich History" 
          className="image-left" 
        />
        <div className="text-content">
          <h2>{content4Heading}</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
          {(content4Text ? 
              content4Text.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
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
    <div id="Event 1" className="event-item" key={`event1-${index}`}onClick={() => navigate('/article/Event 1')}>
      <img src={event1Image} alt="Event 1" />
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
      {(event1Text ? 
              event1Text.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
    </div>

    <div id="Event 2" className="event-item2" key={`event2-${index}`}onClick={() => navigate('/article/Event 2')}>
      <img src={event2Image} alt="Event 2" />
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
      {(event2Text ? 
              event2Text.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
    </div>

    <div id="Event 3" className="event-item3" key={`event3-${index}`}onClick={() => navigate('/article/Event 3')}>
      <img src={event3Image} alt="Event 3" />
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
      {(event3Text ? 
              event3Text.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}
      </p>
    </div>

    <div id="Event 4" className="event-item4" key={`event4-${index}`}onClick={() => navigate('/article/Event 4')}>
      <img src={event4Image} alt="Event 4" />
      <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>
      {(event4Text ? 
              event3Text.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}
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
              <div id="Temple article 1"  className="temple-item" key={index}onClick={() => navigate('/article/Temple article 1')}>
                <img src={templeImage1} alt="Vanamamalai Temple" />
                <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{(templeText1 ? 
              templeText1.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
              </div>
              <div id="Temple article 2" className="temple-item2" key={index}onClick={() => navigate('/article/Temple article 2')}>
                <img src={templeImage2} alt="Vanamamalai Temple" />
                <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{(templeText2 ? 
              templeText2.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
              </div>
              <div id="Temple article 3" className="temple-item3" key={index}onClick={() => navigate('/article/Temple article 3')}>
                <img src={templeImage3} alt="Vanamamalai Temple" />
                <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{(templeText3 ? 
              templeText3.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
              </div>
              <div id="Temple article 4" className="temple-item4" key={index}onClick={() => navigate('/article/Temple article 4')}>
                <img src={templeImage4} alt="Vanamamalai Temple" />
                <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{(templeText4 ? 
              templeText4.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
              </div>
              <div id="Temple article 5" className="temple-item5" key={index}onClick={() => navigate('/article/Temple article 5')}>
                <img src={templeImage5} alt="Vanamamalai Temple" />
                <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{(templeText5 ? 
              templeText5.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
              </div>
              <div id="Temple article 6" className="temple-item6" key={index}onClick={() => navigate('/article/Temple article 6')}>
                <img src={templeImage6} alt="Vanamamalai Temple" />
                <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>{(templeText6 ? 
              templeText6.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
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
            <section id="Course" className="course"onClick={() => navigate('/article/Course')}>
              <h2>Course</h2>
              <img src={courseImage} alt="CourseImage" />
              <p>{(courseText ? 
              courseText.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
            </section>
            <section id="Admission" className="admission"onClick={() => navigate('/article/Admission')}>
              <h2>Admission</h2>
              <img src={admissionImage} alt="AdmissionImage" />
              <p>{(admissionText ? 
              admissionText.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
            </section>
            <section id="Events" className="event"onClick={() => navigate('/article/Events')}>
              <h2>Events</h2>
              <img src={eventsImage} alt="EventImage" />
              <p>{(eventsText ? 
              eventsText.split(' ').slice(0, 10).join(' ') + '...' : 
              'Default content text')}</p>
            </section>
          </div>
          <div className="patashalaevents-map">
                <div className="gallery-column">
                  {Array(1).fill().map((_, index) => (
                    <>
                    <div id="Patasala Gallery1" className="gallery-item1" key={index}onClick={() => navigate('/article/Patasala Gallery1')}>
                      <img src={patasalaGallery1Image} alt="Gallery Item1" />
                     <p> {(patasalaGallery1Text ? 
              patasalaGallery1Text.split(' ').slice(0, 5).join(' ') + '...' : 
              'Default content text')}</p>
                      <a href="#">Learn more</a>
                    </div>
                    <div id="Patasala Gallery2" className="gallery-item2" key={index}onClick={() => navigate('/article/Patasala Gallery2')}>
                      <img src={patasalaGallery2Image} alt="Gallery Item2" />
                      <p>{(patasalaGallery2Text? 
              patasalaGallery2Text.split(' ').slice(0, 5).join(' ') + '...' : 
              'Default content text')}</p>
                      <a href="#">Learn more</a>
                    </div>
                    <div id="Patasala Gallery3" className="gallery-item3" key={index}onClick={() => navigate('/article/Patasala Gallery3')}>
                      <img src={patasalaGallery3Image} alt="Gallery Item3" />
                      <p>{(patasalaGallery3Text ? 
              patasalaGallery3Text.split(' ').slice(0, 5).join(' ') + '...' : 
              'Default content text')}</p>
                      <a href="#">Learn more</a>
                    </div>
                    <div id="Patasala Gallery4" className="gallery-item4" key={index}onClick={() => navigate('/article/Patasala Gallery4')}>
                      <img src={patasalaGallery4Image} alt="Gallery Item4" />
                      <p>{(patasalaGallery4Text ? 
              patasalaGallery4Text.split(' ').slice(0,5).join(' ') + '...' : 
              'Default content text')}</p>
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
              <div className="gallery-photos1" key={index}onClick={() => navigate('/article/Gallery1')}>
                <img src={Gallery1Image} alt="Gallery photo" />
                <p>{(Gallery1Text ? 
              Gallery1Text.split(' ').slice(0,5).join(' ') + '...' : 
              'Default content text')}</p>
                <a href="#">Learn more </a>
              </div>
              <div className="gallery-photos2" key={index}onClick={() => navigate('/article/Gallery2')}>
                <img src={Gallery2Image} alt="Gallery photo" />
                <p>{(Gallery2Text ? 
              Gallery2Text.split(' ').slice(0,5).join(' ') + '...' : 
              'Default content text')}</p>
                <a href="#">Learn more </a>
              </div>
              <div className="gallery-photos3" key={index}onClick={() => navigate('/article/Gallery3')}>
                <img src={Gallery3Image} alt="Gallery photo" />
                <p>{(Gallery3Text ? 
              Gallery3Text.split(' ').slice(0,5).join(' ') + '...' : 
              'Default content text')}</p>
                <a href="#">Learn more </a>
              </div>
              <div className="gallery-photos4" key={index}onClick={() => navigate('/article/Gallery4')}>
                <img src={Gallery4Image} alt="Gallery photo" />
                <p>{(Gallery4Text ? 
              Gallery4Text.split(' ').slice(0,5).join(' ') + '...' : 
              'Default content text')}</p>
                <a href="#">Learn more </a>
              </div>
              <div className="gallery-photos5" key={index}onClick={() => navigate('/article/Gallery5')}>
                <img src={Gallery5Image} alt="Gallery photo" />
                <p>{(Gallery5Text ? 
              Gallery5Text.split(' ').slice(0,5).join(' ') + '...' : 
              'Default content text')}</p>
                <a href="#">Learn more </a>
              </div>
                <div className="gallery-photos6" key={index}onClick={() => navigate('/article/Gallery6')}>
                <img src={Gallery6Image} alt="Gallery photo" />
                <p>{(Gallery6Text ? 
              Gallery6Text.split(' ').slice(0,5).join(' ') + '...' : 
              'Default content text')}</p>
                <a href="#">Learn more </a>
              </div>
              <div className="gallery-photos7" key={index}onClick={() => navigate('/article/Gallery7')}>
                <img src={Gallery7Image} alt="Gallery photo" />
                <p>{(Gallery7Text ? 
              Gallery7Text.split(' ').slice(0,5).join(' ') + '...' : 
              'Default content text')}</p>
                <a href="#">Learn more </a>
              </div>
              <div className="gallery-photos8" key={index}onClick={() => navigate('/article/Gallery8')}>
                <img src={Gallery8Image} alt="Gallery photo" />
                <p>{(Gallery8Text ? 
              Gallery8Text.split(' ').slice(0,5).join(' ') + '...' : 
              'Default content text')}</p>
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