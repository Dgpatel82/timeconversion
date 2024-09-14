import React from 'react';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <Container>
      <Header>About Me</Header>
      <Introduction>
        This website is developed by Darshan Vasani, a dedicated web developer with a passion for creating innovative solutions and applications.
      </Introduction>
      
      <Section>
        <SectionTitle>Darshan Vasani</SectionTitle>
        <Subtitle>Web Developer</Subtitle>
        <ContactInfo>
          +91 8141625502 &middot; Bhavnagar, Gujarat<br />
          Email &middot; <Link href="mailto:darshanvasani13@gmail.com">darshanvasani13@gmail.com</Link> &middot;
          <Link href="www.linkedin.com/in/darshan-vasani-164a4623a" target="_blank" rel="noopener noreferrer">LinkedIn</Link> &middot;
          <Link href="https://github.com/Dgpatel82?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</Link>
        </ContactInfo>
      </Section>

      <Section>
        <SectionTitle>Education</SectionTitle>
        <List>
          <ListItem>Bachelor of Engineering (IT), G.H. Patel College of Engineering and Technology (2021 - 2025)</ListItem>
          <ListItem>Minor Degree in IoT, G.H. Patel College of Engineering and Technology (2022 - 2024)</ListItem>
          <ListItem>Class 12, Sardar Patel Educational Institute (P. Tage: 88.30%)</ListItem>
          <ListItem>Class 10, Sardar Patel Educational Institute (P. Tage: 89.50%)</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Skills</SectionTitle>
        <List>
          <ListItem><strong>Programming Skills:</strong> C++, Python, JavaScript, DSA, C#</ListItem>
          <ListItem><strong>Technology / Database:</strong> React JS, Node.js, .NET, PHP, MySQL, MongoDB, PostgreSQL, IoT</ListItem>
          <ListItem><strong>Tools:</strong> VS Code, Docker, Git, GitHub, Postman, MySQL Workbench, MongoDB Compass, PyCharm, IntelliJ IDEA, ZEP, Anaconda, PgAdmin, Visual Studio 2022, Arduino</ListItem>
          <ListItem><strong>Soft Skills:</strong> Deadline-driven, Strategic Planning, Visionary, Collaborative, Change Agent</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Experience</SectionTitle>
        <List>
          <ListItem>
            <strong>New India Vibrant Hackathon (GitHub) 2023, SSIP Gujarat:</strong>
            <p>Led a team to develop a centralized portal for primary school student registrations, using HTML, CSS, JS, PHP, MongoDB, Tailwind CSS, and Bootstrap. Designed a robust database structure and presented the project for government analysis and policy-making.</p>
          </ListItem>
          <ListItem>
            <strong>Web Development Intern, TatvaSoft Gujarat (May 2024):</strong>
            <p>Created a web application using Angular.js, PostgreSQL, and .NET. Implemented a secure authentication system with JWT tokens and deployed the application on AWS Cloud.</p>
          </ListItem>
          <ListItem>
            <strong>Web Development Intern, CodSoft Gujarat (Jan 2024):</strong>
            <p>Developed a Dance Class Website and Portfolio Website using HTML, CSS, JS, React.js, Node.js, and Pug.js.</p>
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Certificates</SectionTitle>
        <List>
          <ListItem>Completed "Python for Data Science" course from NPTEL, IIT Madras (69%)</ListItem>
          <ListItem>Completed Code-Unnati Course Powered by SAP</ListItem>
          <ListItem>Completed "Introduction to Structured Query Language (SQL)" course from Coursera, University of Michigan</ListItem>
          <ListItem>Completed "Networking in Google Cloud: Defining and Implementing Networks" course from Google Cloud</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Projects</SectionTitle>
        <List>
          <ListItem>
            <strong>Dance Academy Website:</strong>
            <p>Developed using Pug.js Framework. Features include program details and event information, with user-friendly contact and enrollment options.</p>
          </ListItem>
          <ListItem>
            <strong>Emofy - Emotion Based Music Player:</strong>
            <p>Designed a music player that uses facial emotion recognition to create personalized playlists. Integrated with Python-based machine learning models for real-time emotion detection.</p>
          </ListItem>
          <ListItem>
            <strong>Machine Learning Model for Leaf Disease Prediction:</strong>
            <p>Created a model with 80% accuracy for predicting diseases in over 40 types of leaves, aimed at agricultural sustainability.</p>
          </ListItem>
          <ListItem>
            <strong>IoT-Based Smart Fence System for Crop Protection:</strong>
            <p>Developed an IoT-based system using ESP32 CAM, PIR sensors, and sprinklers to prevent crop damage from animals.</p>
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Extra-Curricular Activities</SectionTitle>
        <List>
          <ListItem>Worked with Mittra Rehabilitation Trust to develop an IoT-based solution for autistic children.</ListItem>
          <ListItem>Served as Training and Placement Cell Coordinator, managing coordination for training and placement activities.</ListItem>
          <ListItem>Coordinated IMAZE’23 Techfest, contributing to the success of the event as the branch representative for IT and IoT.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Leadership</SectionTitle>
        <List>
          <ListItem>Training and Placement Cell Coordinator at G.H. Patel College of Engineering</ListItem>
          <ListItem>Coordinator of Multidisciplinary Technical Event at IMAZE’23 Techfest</ListItem>
          <ListItem>Branch Representative of IT and IoT at IMAZE’23 Techfest</ListItem>
          <ListItem>Coordinator of SSIP Cell at GCET</ListItem>
        </List>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.h1`
  font-size: 36px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const Introduction = styled.p`
  font-size: 18px;
  color: #555;
  text-align: center;
  margin-bottom: 40px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: #333;
  border-bottom: 2px solid #61dafb;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
  text-align: center;
`;

const ContactInfo = styled.p`
  font-size: 16px;
  color: #555;
  text-align: center;
  margin-bottom: 20px;

  a {
    color: black;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 16px;
  color: #444;
  margin-bottom: 10px;

  p {
    margin: 0;
  }
`;

const Link = styled.a`
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default AboutUs;
