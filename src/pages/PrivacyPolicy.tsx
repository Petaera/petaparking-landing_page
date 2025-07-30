import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Privacy Policy and Terms & Conditions – PetaParking Mobile App
      </h1>
      <p><strong>Effective Date:</strong> 05-04-2025</p>

      <Section title="Introduction">
        <p>
          This Privacy Policy describes how <strong>PetaParking</strong> ("we", "our", or "us")
          collects, uses, and shares information about you through our mobile application ("App"),
          designed specifically for parking lot management.
        </p>
        <p>
          By downloading, accessing, or using the App, you agree to this Privacy Policy and Terms &
          Conditions. If you disagree with any part of these terms, you must not use the App.
        </p>
      </Section>

      <Section title="Information We Collect">
        <h3>Personal Information</h3>
        <p>
          When you register or use our App, we may collect your email address, name, phone number,
          vehicle details, and other contact or identification information you voluntarily provide.
        </p>

        <h3>Usage Data</h3>
        <p>
          We automatically collect data such as device type, IP address, browser type, and details
          about your interaction with the App.
        </p>

        <h3>Parking Data</h3>
        <p>
          The App collects data relating to vehicle entries, exits, parking duration, and related
          financial transactions.
        </p>

        <h3>Cookies & Tracking Technologies</h3>
        <p>
          The embedded web application within our App may use cookies or similar tracking
          technologies to enhance user experience.
        </p>
      </Section>

      <Section title="Data Ownership">
        <p>
          All collected data is exclusively owned by the respective parking lot owner. Each parking
          lot owner is provided with a separate server instance, and all information collected is
          maintained independently for each owner.
        </p>
      </Section>

      <Section title="How We Use Your Information">
        <ul style={styles.list}>
          <li>To manage parking lot entries and exits effectively.</li>
          <li>To process transactions and calculate parking fees.</li>
          <li>To provide, maintain, and improve our App and parking management services.</li>
          <li>To communicate important updates, support messages, and promotional materials.</li>
          <li>To ensure security and compliance with parking lot rules.</li>
          <li>To comply with legal obligations and enforce our Terms & Conditions.</li>
        </ul>
      </Section>

      <Section title="Sharing of Your Information">
        <p>We do not sell or rent personal information. We may share your data with:</p>
        <ul style={styles.list}>
          <li>Parking lot owners or authorized employees for management purposes.</li>
          <li>Trusted third-party service providers necessary for the App's functionality.</li>
          <li>Authorities, when required by law or to protect our rights and security.</li>
        </ul>
      </Section>

      <Section title="Security">
        <p>
          We implement reasonable measures to protect your personal data, but no method of
          transmission or electronic storage is 100% secure. While we strive to protect your
          information, absolute security cannot be guaranteed.
        </p>
      </Section>

      <Section title="Third-Party Links">
        <p>
          Our App may contain links to third-party websites or services. We are not responsible for
          the privacy practices or content of those external websites.
        </p>
      </Section>

      <Section title="Children’s Privacy">
        <p>
          Our App is not intended for use by individuals under the age of 13. We do not knowingly
          collect data from children under 13. If we become aware of such data collection, we will
          promptly delete it.
        </p>
      </Section>

      <Section title="Changes to this Policy">
        <p>
          We reserve the right to update this Privacy Policy. Any changes will be reflected here,
          with the "Effective Date" updated accordingly. Continued use of the App constitutes
          acceptance of these changes.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>If you have questions about this Privacy Policy or Terms & Conditions, please contact us at:</p>
        <p><a href="mailto:info@petaera.com">info@petaera.com</a></p>
      </Section>

      <Section title="Acceptance">
        <p>
          By using the App, you signify your acceptance of this Privacy Policy and Terms &
          Conditions. If you do not agree, please do not use our App.
        </p>
      </Section>
    </div>
  );
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div style={styles.section}>
    <h2 style={styles.sectionTitle}>{title}</h2>
    {children}
  </div>
);

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: '800px',
    margin: '30px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: 1.6,
    backgroundColor: '#f4f4f4',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#0056b3',
    marginBottom: '20px',
    fontSize: '1.8rem',
  },
  section: {
    marginBottom: '25px',
  },
  sectionTitle: {
    fontSize: '1.3rem',
    marginBottom: '10px',
    borderBottom: '2px solid #0056b3',
    paddingBottom: '5px',
    color: '#0056b3',
  },
  list: {
    paddingLeft: '20px',
    marginTop: '10px',
    listStyleType: 'disc',
  },
};

export default PrivacyPolicy;
