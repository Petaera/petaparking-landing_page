import React, { useState, useEffect } from 'react';

const PetaParkingTermsAndServices: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'ml'>('en'); // Default language to English

  useEffect(() => {
    // Set the current year for the "Effective Date" and copyright
    const year = new Date().getFullYear();
    document.querySelectorAll('#current-year, #copyright-year').forEach(el => {
      if (el) el.textContent = year.toString();
    });
  }, []);

  const switchLanguage = (lang: 'en' | 'ml') => {
    setLanguage(lang);
  };

  const commonStyles: React.CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
    margin: 0,
    padding: '20px',
    backgroundColor: '#f4f4f4',
    color: '#333',
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: '800px',
    margin: '30px auto',
    background: '#fff',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  };

  const headingStyles: React.CSSProperties = {
    color: '#0056b3',
  };

  const mainHeadingStyles: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#0056b3',
  };

  const sectionStyles: React.CSSProperties = {
    marginBottom: '20px',
  };

  const sectionTitleStyles: React.CSSProperties = {
    fontSize: '1.2em',
    marginBottom: '10px',
    borderBottom: '2px solid #0056b3',
    paddingBottom: '5px',
    color: '#0056b3',
  };

  const paragraphStyles: React.CSSProperties = {
    margin: '10px 0',
  };

  const ulStyles: React.CSSProperties = {
    margin: '10px 0 10px 20px',
    padding: 0,
  };

  const anchorStyles: React.CSSProperties = {
    color: '#0056b3',
    textDecoration: 'none',
  };

  const langSwitchStyles: React.CSSProperties = {
    textAlign: 'right',
    marginBottom: '10px',
  };

  const langSwitchButtonStyles: React.CSSProperties = {
    padding: '5px 10px',
    marginLeft: '5px',
    cursor: 'pointer',
    backgroundColor: '#0056b3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  };

  const centerTextStyles: React.CSSProperties = {
    textAlign: 'center',
  };

  return (
    <div style={commonStyles}>
      <div style={langSwitchStyles}>
        <button
          onClick={() => switchLanguage('en')}
          style={langSwitchButtonStyles}
        >
          English
        </button>
        <button
          onClick={() => switchLanguage('ml')}
          style={langSwitchButtonStyles}
        >
          മലയാളം
        </button>
      </div>

      {language === 'en' && (
        <div style={containerStyles} id="content-en">
          <h1 style={mainHeadingStyles}>Terms and Services - PetaParking</h1>
          <p style={paragraphStyles}>
            <strong>Effective Date:</strong> April 16, <span id="current-year"></span>
          </p>

          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>1. Overview</h2>
            <p style={paragraphStyles}>
              For the purposes of these Terms and Conditions, the following <strong>definitions</strong> apply:
            </p>
            <ul style={ulStyles}>
              <li>
                <strong>Client:</strong> Refers to the parking owner or authorized management entity that subscribes to
                and operates the PetaParking service.
              </li>
              <li>
                <strong>User:</strong> Refers to any individual interacting with the PetaParking system, including
                parking staff, operators, and vehicle owners.
              </li>
              <li>
                <strong>PetaEra</strong> or <strong>PetaEra Technologies:</strong> Denotes the company providing the
                PetaParking platform, including its hardware, software, and support services.
              </li>
              <li>
                <strong>System:</strong> Means the complete solution offered by PetaEra Technologies under the
                PetaParking brand, comprising hardware (e.g., Raspberry Pi), software (including AI modules), and
                associated web interfaces or mobile applications.
              </li>
              <li>
                <strong>Service:</strong> Refers to the functionality and features enabled through the PetaParking
                system for vehicle entry/exit detection, billing, slip generation, and real-time parking management.
              </li>
              <li>
                <strong>Parking Owner:</strong> Is synonymous with "Client" and refers to the entity/person
                responsible for the physical parking facility utilizing the PetaParking service.
              </li>
            </ul>
            <p style={paragraphStyles}>
              PetaParking is a smart parking management system that uses AI, IP cameras, and web-based tools to
              automate vehicle entry, exit, and billing operations. These terms apply to all digital interfaces and
              hardware services provided by PetaParking.
            </p>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>2. User Responsibilities</h2>
            <ul style={ulStyles}>
              <li>Users must provide accurate vehicle and contact details during parking slip generation.</li>
              <li>Parking staff and owners are responsible for ensuring all data entered into the system is correct.</li>
              <li>
                Unauthorized access, tampering, or misuse of any system component (hardware or software) is strictly
                prohibited.
              </li>
            </ul>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>3. Data Collection &amp; Usage</h2>
            <ul style={ulStyles}>
              <li>
                We collect vehicle numbers, timestamps, images, parking durations, and user interactions for the sole
                purpose of managing parking operations.
              </li>
              <li>No biometric or sensitive personal data is collected.</li>
              <li>
                Data is securely stored and may be used for improving service quality or for legal compliance purposes.
              </li>
            </ul>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>4. Image Capture</h2>
            <ul style={ulStyles}>
              <li>PetaParking uses IP cameras(AI-powered) to detect vehicle entry/exit and capture number plates.</li>
              <li>
                Captured images are used for slip generation and stored temporarily unless legally required for audit
                trails.
              </li>
            </ul>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>5. System Availability</h2>
            <ul style={ulStyles}>
              <li>While we strive for 24/7 availability, scheduled maintenance or network disruptions may occur.</li>
              <li>
                PetaParking is not liable for missed detections or delayed access caused by hardware failure, power
                loss, or network issues.
              </li>
            </ul>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>6. Payment &amp; Billing</h2>
            <ul style={ulStyles}>
              <li>
                Parking charges are determined by the parking owner/management based on configured slabs and parking
                duration.
              </li>
              <li>
                Additional charges for extended stays beyond the paid duration will be calculated as per the defined
                slabs or at the discretion of the parking management.
              </li>
              <li>
                PetaParking calculates parking charges based on the slabs configured by the management. Any changes to
                the generated values, whether automated or manual, are the sole responsibility of the parking
                owner/management. As a software provider, PetaParking holds no liability for the final charge amounts.
              </li>
            </ul>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>7. Limitation of Liability</h2>
            <p style={paragraphStyles}>
              PetaParking is not responsible for loss, damage, or theft of vehicles or belongings. Our system assists
              in parking management but does not guarantee vehicle security.
            </p>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>8. Modification of Terms</h2>
            <p style={paragraphStyles}>
              We reserve the right to update or change these Terms at any time. Continued use of our system after
              changes indicates acceptance.
            </p>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>9. Contact Information</h2>
            <p style={paragraphStyles}>
              For support or questions, contact us at:{' '}
              <a
                href="mailto:info@petaera.com?subject=I%20am%20interested%20in%20PetaParking,%20let%20me%20know%20more%20about%20it!"
                style={anchorStyles}
              >
                info@petaera.com
              </a>
            </p>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>10. Government Compliance &amp; Pricing Responsibility</h2>
            <p style={paragraphStyles}>
              PetaParking provides the software and system infrastructure for parking operations and does not assume
              any responsibility for local, municipal, or government-imposed compliance, including parking rate
              regulations or penalties. Parking owners are solely responsible for:
            </p>
            <ul style={ulStyles}>
              <li>
                Adhering to official government orders or circulars regarding parking fee structures or service
                regulations.
              </li>
              <li>
                ensuring that all parking fee structures within the PetaParking system are kept up to date. This
                includes making timely updates to the payment slabs in accordance with any revised charges,
                notifications, or circulars issued by local municipal bodies or other government authorities.
                PetaParking, as a software provider, does not monitor or enforce such changes and cannot be held
                liable for outdated or incorrect pricing within the system.
              </li>
              <li>Handling legal or financial disputes arising from non-compliance with government policies.</li>
            </ul>
            <p style={paragraphStyles}>
              Petaera Technologies, as a software/solution provider, shall not be held liable for any consequences,
              disputes, or regulatory actions taken against parking owners or staff in such matters.
            </p>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>11. Subscription &amp; Maintenance Policy</h2>
            <p style={paragraphStyles}>
              PetaParking operates on a monthly subscription model that is agreed upon with each parking owner. The
              terms include:
            </p>
            <ul style={ulStyles}>
              <li>
                The required hardware for the PetaParking system is available as a one-time purchase and remains the
                full property of the client. The software and parking management platform provided by PetaParking does
                not incur any upfront charges
              </li>
              <li>
                As part of the subscription and maintenance policy, please note that the printed parking slips generated
                by the system may
                <strong>include or exclude PetaEra Technologies branding elements</strong> such as the domain name or
                website address (e.g., Petaparking.com). The inclusion of such details is based on system
                configuration, deployment preferences, and the level of customization chosen by the client. These
                options can be adjusted during initial setup or modified later as part of the ongoing maintenance
                support included in the subscription.
              </li>
              <li>
                The software platform operates on a subscription basis, ensuring continuous access to features,
                updates, and support.
              </li>
              <li>
                Subscription is calculated on a <strong>per-parking-space/lot</strong> basis.
              </li>
              <li>
                Billing occurs monthly, with rates defined and agreed upon during the onboarding process.
              </li>
              <li>
                Payments are due at the end of each month and must be settled by the
                <strong>5th day of the following month</strong>. Failure to do so will result in
                <strong>temporary suspension</strong> of services.
              </li>
              <li>
                If non-payment continues for an additional full month, the subscription will be
                <strong>automatically cancelled</strong>.
              </li>
              <li>
                To resume services after cancellation, the client must pay a minimum of
                <strong>one month’s subscription fee in advance</strong>.
              </li>
              <li>
                We offer <strong>free maintenance for 6 months</strong> starting from the date of installation.
              </li>
              <li>
                After the free period, maintenance services may be offered at an additional cost or incorporated into
                revised agreements.
              </li>
            </ul>
          </div>
          <h2 style={sectionTitleStyles}>12. Termination of Services</h2>
          <p style={paragraphStyles}>
            PetaEra Technologies reserves the right to suspend or terminate access to the PetaParking system under the
            following conditions:
          </p>

          <h3 style={headingStyles}>(i)Early Termination Within One Month of Installation</h3>
          <ul style={ulStyles}>
            <li>
              If the client chooses to discontinue the service within <strong>30 days from the installation date</strong>{' '}
              and before the first subscription payment cycle begins, PetaEra Technologies offers a limited refund
              option.
            </li>
            <li>
              Only the hardware items listed in the official <strong>invoice issued by PetaEra Technologies</strong> are
              eligible for return and refund, subject to successful inspection and recovery.
            </li>
            <li>These typically include (but are not limited to):</li>
            <ul style={ulStyles}>
              <li>Raspberry Pi unit</li>
              <li>Power adapter supplied with the Pi</li>
              <li>Memory card preloaded with the PetaParking system</li>
              <li>Cooling case</li>
            </ul>
            <li>
              Components such as <strong>IP cameras, internet modems, mounts, cabling, or installation/fixing costs</strong>{' '}
              are typically managed by third-party vendors or local technicians and are <strong>not eligible for refund</strong>
              .
            </li>
            <li>
              Any software modules or AI-powered features provided as part of the system are strictly proprietary,
              non-transferable, and will be deactivated upon termination. Specific licensing details are confidential
              and not disclosed to clients.
            </li>
            <li>
              After 30 days from installation, <strong>no refund requests or hardware returns</strong> will be accepted
              under any circumstances.
            </li>
            <li>
              PetaEra reserves the right to deduct reasonable costs for missing, damaged, or altered equipment from the
              refund amount.
            </li>
          </ul>
          <h3 style={headingStyles}>(ii)Return of Hardware After One Month (Depreciated Value)</h3>
          <ul style={ulStyles}>
            <li>
              If the client wishes to return the hardware after the 30-day return window, PetaEra Technologies will
              accept the hardware at a <strong>depreciated cost</strong> as determined by PetaEra Technologies.
            </li>
            <li>
              The depreciation will be calculated based on the elapsed time since installation, the wear and tear of
              components, and the remaining useful life of the hardware.
            </li>
            <li>
              The depreciated amount will be deducted from the total refund, and a final payout will be issued to the
              client for the hardware return.
            </li>
            <li>
              Components such as <strong>IP cameras, internet modems, mounts, cabling, or installation/fixing costs</strong>{' '}
              will not be accepted for return or refund.
            </li>
          </ul>
          <h3 style={headingStyles}>(iii)Misuse or Policy Violations</h3>
          <ul style={ulStyles}>
            <li>
              PetaEra Technologies may suspend or permanently revoke access without refund in the event of:
            </li>
            <ul style={ulStyles}>
              <li>System misuse, fraud, or unauthorized modifications</li>
              <li>Attempted access to protected configurations or software modules</li>
              <li>Violation of any clauses within these Terms or relevant legal regulations</li>
            </ul>
          </ul>

          <h3 style={headingStyles}>(iv)Refund and Hardware Ownership</h3>
          <ul style={ulStyles}>
            <li>
              Until the first subscription payment is successfully completed, the hardware remains the{' '}
              <strong>property of PetaEra Technologies</strong>.
            </li>
            <li>
              After the first billing cycle is completed and full payment is received, ownership of the invoiced
              hardware is transferred to the client. However, all software and system modules remain proprietary and
              non-transferable.
            </li>
            <li>
              No refunds are offered for service discontinuation or hardware returns initiated after the one-month
              window from the date of installation.
            </li>
          </ul>
          <h2 style={sectionTitleStyles}>13. Governing Law &amp; Jurisdiction</h2>
          <ul style={ulStyles}>
            <li>
              These Terms and Conditions shall be governed by and interpreted in accordance with the laws of the{' '}
              <strong>Republic of India</strong>, specifically the laws applicable in the <strong>State of Kerala</strong>
              .
            </li>
            <li>
              Any disputes, claims, or controversies arising out of or relating to these Terms, including those
              related to validity, interpretation, breach, or termination, shall be subject to the
              <strong>exclusive jurisdiction of the civil courts in Palakkad, Kerala</strong>.
            </li>
            <li>
              The Client agrees not to raise any objection regarding the jurisdiction or venue of the courts in
              Palakkad, including objections based on the principle of <em>forum non conveniens</em>.
            </li>
            <li>
              Before initiating formal legal proceedings, both <strong>PetaEra Technologies</strong> and the Client
              agree to attempt resolution through mutual discussion, negotiation, or third-party mediation, where
              applicable.
            </li>
            <li>
              This clause applies to all services, obligations, and interactions covered under these Terms and
              Conditions, including system usage, subscriptions, returns, and support services.
            </li>
          </ul>

          <hr />
          <p style={centerTextStyles}>
            © <span id="copyright-year"></span> PetaEra Technologies.All rights reserved.
          </p>
        </div>
      )}

      {language === 'ml' && (
        <div style={containerStyles} id="content-ml">
          <h1 style={mainHeadingStyles}>വ്യവസ്ഥകളും സേവനങ്ങളും - PetaParking</h1>
          <p style={paragraphStyles}>
            <strong>പ്രാബല്യത്തിലുള്ള തീയതി: </strong>ഏപ്രിൽ 16,2025<span id="current-year"></span>
          </p>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>1. അവലോകനം</h2>
            <p style={paragraphStyles}>
              ഈ നിബന്ധനകളുടെയും വ്യവസ്ഥകളുടെയും ഉദ്ദേശ്യങ്ങൾക്കായി, ഇനിപ്പറയുന്ന <strong>നിർവചനങ്ങൾ</strong> ബാധകമാണ്:
            </p>
            <ul style={ulStyles}>
              <li>
                <strong>ക്ലയന്റ്:</strong> PetaParking സേവനത്തിൽ സബ്‌സ്‌ക്രൈബ് ചെയ്‌ത് പ്രവർത്തിപ്പിക്കുന്ന പാർക്കിംഗ്
                ഉടമയെയോ അംഗീകൃത മാനേജ്‌മെന്റ് സ്ഥാപനത്തെയോ സൂചിപ്പിക്കുന്നു.
              </li>
              <li>
                <strong>ഉപയോക്താവ്:</strong> പാർക്കിംഗ് ജീവനക്കാർ, ഓപ്പറേറ്റർമാർ, വാഹന ഉടമകൾ എന്നിവരുൾപ്പെടെ
                പെറ്റപാർക്കിംഗ് സിസ്റ്റവുമായി ഇടപഴകുന്ന ഏതൊരു വ്യക്തിയെയും സൂചിപ്പിക്കുന്നു.
              </li>
              <li>
                <strong>PetaEra</strong> അല്ലെങ്കിൽ <strong>PetaEra Technologies:</strong> ഹാർഡ്‌വെയർ, സോഫ്റ്റ്‌വെയർ,
                പിന്തുണാ സേവനങ്ങൾ എന്നിവയുൾപ്പെടെ പെറ്റപാർക്കിംഗ് പ്ലാറ്റ്‌ഫോം നൽകുന്ന കമ്പനിയെ സൂചിപ്പിക്കുന്നു.
              </li>
              <li>
                <strong>സിസ്റ്റം:</strong> PetaParking ബ്രാൻഡിന് കീഴിൽ Petaera Technologies വാഗ്ദാനം ചെയ്യുന്ന സമ്പൂർണ്ണ
                പരിഹാരമാണ് സിസ്റ്റം. ഹാർഡ്‌വെയർ (ഉദാ. റാസ്‌ബെറി പൈ), സോഫ്റ്റ്‌വെയർ (AI മൊഡ്യൂളുകൾ ഉൾപ്പെടെ), അനുബന്ധ
                വെബ് ഇന്റർഫേസുകൾ അല്ലെങ്കിൽ മൊബൈൽ ആപ്ലിക്കേഷനുകൾ എന്നിവ ഇതിൽ ഉൾപ്പെടുന്നു.
              </li>
              <li>
                <strong>സേവനം:</strong> വാഹന എൻട്രി/എക്സിറ്റ് ഡിറ്റക്ഷൻ, ബില്ലിംഗ്, സ്ലിപ്പ് ജനറേഷൻ, തത്സമയ പാർക്കിംഗ്
                മാനേജ്മെന്റ് എന്നിവയ്ക്കായി പെറ്റപാർക്കിംഗ് സിസ്റ്റം വഴി പ്രാപ്തമാക്കിയ പ്രവർത്തനക്ഷമതയെയും സവിശേഷതകളെയും
                ഇത് സൂചിപ്പിക്കുന്നു.
              </li>
              <li>
                <strong>പാർക്കിംഗ് ഉടമ:</strong> "ക്ലയന്റ്" എന്നതിന്റെ പര്യായപദമാണ് ഇത്, പെറ്റപാർക്കിംഗ് സേവനം
                ഉപയോഗപ്പെടുത്തി ഭൗതിക പാർക്കിംഗ് സൗകര്യത്തിന് ഉത്തരവാദിയായ സ്ഥാപനത്തെ/വ്യക്തിയെ സൂചിപ്പിക്കുന്നു.
              </li>
            </ul>
            <p style={paragraphStyles}>
              വാഹന എൻട്രി, എക്സിറ്റ്, ബില്ലിംഗ് പ്രവർത്തനങ്ങൾ ഓട്ടോമേറ്റ് ചെയ്യുന്നതിന് AI, IP ക്യാമറകൾ, വെബ് അധിഷ്ഠിത
              ഉപകരണങ്ങൾ എന്നിവ ഉപയോഗിക്കുന്ന ഒരു സ്മാർട്ട് പാർക്കിംഗ് മാനേജ്മെന്റ് സിസ്റ്റമാണ് PetaParking. PetaParking
              നൽകുന്ന എല്ലാ ഡിജിറ്റൽ ഇന്റർഫേസുകൾക്കും ഹാർഡ്‌വെയർ സേവനങ്ങൾക്കും ഈ നിബന്ധനകൾ ബാധകമാണ്.
            </p>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>2. ഉപയോക്തൃ ഉത്തരവാദിത്തങ്ങൾ</h2>
            <ul style={ulStyles}>
              <li>പാർക്കിംഗ് സ്ലിപ്പ് ജനറേഷൻ സമയത്ത് ഉപയോക്താക്കൾ കൃത്യമായ വാഹന വിവരങ്ങളും ബന്ധപ്പെടാനുള്ള വിവരങ്ങളും നൽകണം.</li>
              <li>സിസ്റ്റത്തിൽ നൽകുന്ന എല്ലാ ഡാറ്റയും ശരിയാണെന്ന് ഉറപ്പാക്കാൻ പാർക്കിംഗ് ജീവനക്കാരും ഉടമകളും ഉത്തരവാദികളാണ്.</li>
              <li>
                ഏതെങ്കിലും സിസ്റ്റം ഘടകങ്ങളിലേക്ക് (ഹാർഡ്‌വെയർ അല്ലെങ്കിൽ സോഫ്റ്റ്‌വെയർ) അനധികൃതമായി പ്രവേശിക്കുന്നത്,
                കൃത്രിമം കാണിക്കുന്നത് അല്ലെങ്കിൽ ദുരുപയോഗം ചെയ്യുന്നത് കർശനമായി നിരോധിച്ചിരിക്കുന്നു.
              </li>
            </ul>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>3. ഡാറ്റ ശേഖരണവും ഉപയോഗവും</h2>
            <ul style={ulStyles}>
              <li>
                പാർക്കിംഗ് പ്രവർത്തനങ്ങൾ കൈകാര്യം ചെയ്യുക എന്ന ഏക ഉദ്ദേശ്യത്തോടെ ഞങ്ങൾ വാഹന നമ്പറുകൾ, ടൈംസ്റ്റാമ്പുകൾ,
                ചിത്രങ്ങൾ, പാർക്കിംഗ് ദൈർഘ്യം, ഉപയോക്തൃ ഇടപെടലുകൾ എന്നിവ ശേഖരിക്കുന്നു.
              </li>
              <li>ബയോമെട്രിക് അല്ലെങ്കിൽ സെൻസിറ്റീവ് വ്യക്തിഗത ഡാറ്റ ഒന്നും ശേഖരിക്കുന്നില്ല.</li>
              <li>
                ഡാറ്റ സുരക്ഷിതമായി സൂക്ഷിക്കുകയും സേവന നിലവാരം മെച്ചപ്പെടുത്തുന്നതിനോ നിയമാനുസൃത ആവശ്യങ്ങൾക്കായോ ഉപയോഗിക്കുകയും
                ചെയ്യുന്നു.
              </li>
            </ul>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>4. ചിത്രങ്ങൾ പകര്‍ത്തല്‍</h2>
            <ul style={ulStyles}>
              <li>വാഹനങ്ങളുടെ പ്രവേശനം/പുറത്തുകടക്കൽ കണ്ടെത്തുന്നതിനും നമ്പർ പ്ലേറ്റുകൾ പിടിച്ചെടുക്കുന്നതിനും PetaParking
                ഐപി ക്യാമറ (AI- പവർഡ്) ഉപയോഗിക്കുന്നു.</li>
              <li>
                പകർത്തിയ ചിത്രങ്ങൾ സ്ലിപ്പ് ജനറേഷനായി ഉപയോഗിക്കുകയും ഓഡിറ്റ് ട്രെയിലുകൾക്ക് നിയമപരമായി ആവശ്യമില്ലെങ്കിൽ
                താൽക്കാലികമായി സൂക്ഷിക്കുകയും ചെയ്യുന്നു.
              </li>
            </ul>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>5. സിസ്റ്റം ലഭ്യത</h2>
            <ul style={ulStyles}>
              <li>24/7 ലഭ്യതയ്ക്കായി ഞങ്ങൾ പരിശ്രമിക്കുമ്പോൾ, ഷെഡ്യൂൾ ചെയ്ത അറ്റകുറ്റപ്പണികളോ നെറ്റ്‌വർക്ക് തടസ്സങ്ങളോ
                ഉണ്ടായേക്കാം.</li>
              <li>
                ഹാർഡ്‌വെയർ തകരാർ, വൈദ്യുതി നഷ്ടം, നെറ്റ്‌വർക്ക് പ്രശ്‌നങ്ങൾ എന്നിവ മൂലമുണ്ടാകുന്ന കണ്ടെത്തലുകൾ
                നഷ്‌ടമായതിനോ ആക്‌സസ് വൈകിയതിനോ പെറ്റാപാർക്കിംഗ് ബാധ്യസ്ഥനല്ല.
              </li>
            </ul>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>6. പേയ്മെന്റും ബില്ലിങ്ങും</h2>
            <ul style={ulStyles}>
              <li>
                ക്രമീകരിച്ച സ്ലാബുകളും പാർക്കിംഗ് ദൈർഘ്യവും അടിസ്ഥാനമാക്കി പാർക്കിംഗ് ഉടമയോ/മാനേജ്മെന്റോ ആണ്
                പാർക്കിംഗ് നിരക്കുകൾ നിർണ്ണയിക്കുന്നത്.
              </li>
              <li>
                അടച്ച സമയത്തിനപ്പുറം ദീർഘിപ്പിച്ച പാർക്കിംഗിനുള്ള അധിക നിരക്കുകൾ നിർവചിക്കപ്പെട്ട സ്ലാബുകൾ അനുസരിച്ചോ
                പാർക്കിംഗ് മാനേജ്‌മെന്റിന്റെ വിവേചനാധികാരത്തിലോ കണക്കാക്കും.
              </li>
              <li>
                മാനേജ്മെന്റ് കോൺഫിഗർ ചെയ്ത സ്ലാബുകളെ അടിസ്ഥാനമാക്കിയാണ് PetaParking പാർക്കിംഗ് നിരക്കുകൾ കണക്കാക്കുന്നത്.
                ജനറേറ്റ് ചെയ്ത മൂല്യങ്ങളിൽ വരുത്തുന്ന ഏതൊരു മാറ്റവും, അത് ഓട്ടോമേറ്റഡ് ആയാലും മാനുവൽ ആയാലും, പാർക്കിംഗ്
                ഉടമയുടെയോ മാനേജ്മെന്റിന്റെയോ പൂർണ്ണ ഉത്തരവാദിത്തമായിരിക്കും. ഒരു സോഫ്റ്റ്‌വെയർ ദാതാവ് എന്ന നിലയിൽ, അന്തിമ
                ചാർജ് തുകകൾക്ക് Petaparking ന് യാതൊരു ബാധ്യതയുമില്ല.
              </li>
            </ul>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>7. ഉത്തരവാദിത്വത്തിന്റെ പരിധി</h2>
            <p style={paragraphStyles}>
              വാഹനങ്ങളുടെയോ വസ്തുക്കളുടെയോ നഷ്ടം, കേടുപാടുകൾ, മോഷണം എന്നിവയ്ക്ക് PetaParking ഉത്തരവാദിയല്ല. പാർക്കിംഗ്
              മാനേജ്‌മെന്റിൽ ഞങ്ങളുടെ സിസ്റ്റം സഹായിക്കുന്നു, പക്ഷേ വാഹന സുരക്ഷ ഉറപ്പ് നൽകുന്നില്ല.
            </p>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>8. വ്യവസ്ഥകളിലെ മാറ്റങ്ങൾ</h2>
            <p style={paragraphStyles}>
              ഈ വ്യവസ്ഥകൾ ഏത് സമയത്തും അപ്‌ഡേറ്റുചെയ്യുന്നതിനും മാറ്റുന്നതിനും ഞങ്ങൾക്ക് അവകാശമുണ്ട്. മാറ്റങ്ങൾക്കുശേഷം
              ഞങ്ങളുടെ സിസ്റ്റം തുടർന്നും ഉപയോഗിക്കുന്നത് അംഗീകരിക്കുന്നതായാണ് കരുതുന്നത്.
            </p>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>9. ബന്ധപ്പെടുന്നതിനുള്ള വിവരങ്ങൾ</h2>
            <p style={paragraphStyles}>
              പിന്തുണയ്ക്കോ ചോദ്യങ്ങൾക്കോ, ഞങ്ങളെ ബന്ധപ്പെടുക:
              <a
                href="mailto:info@petaera.com?subject=Need%20help%20on%20PetaParking!"
                style={anchorStyles}
              >
                info@petaera.com
              </a>
            </p>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>10. സർക്കാർ അനുസരണവും വിലനിർണ്ണയ ഉത്തരവാദിത്തവും</h2>
            <p style={paragraphStyles}>
              പാർക്കിംഗ് പ്രവർത്തനങ്ങൾക്കുള്ള സോഫ്റ്റ്‌വെയറും സിസ്റ്റം ഇൻഫ്രാസ്ട്രക്ചറും PetaParking നൽകുന്നു, പാർക്കിംഗ്
              നിരക്ക് നിയന്ത്രണങ്ങളോ പിഴകളോ ഉൾപ്പെടെ പ്രാദേശിക, മുനിസിപ്പൽ അല്ലെങ്കിൽ സർക്കാർ ഏർപ്പെടുത്തിയ നിയന്ത്രണങ്ങൾക്ക്
              ഞങ്ങൾ ഒരു ഉത്തരവാദിത്തവും ഏറ്റെടുക്കുന്നില്ല. ഇനിപ്പറയുന്നവയ്ക്ക് പാർക്കിംഗ് ഉടമകൾ മാത്രമാണ് ഉത്തരവാദികൾ:
            </p>
            <ul style={ulStyles}>
              <li>
                Adhering to official government orders or circulars regarding parking fee structures or service
                regulations.
              </li>
              <li>
                പെറ്റപാർക്കിംഗ് സിസ്റ്റത്തിനുള്ളിലെ എല്ലാ പാർക്കിംഗ് ഫീസ് ഘടനകളും കാലികമായി നിലനിർത്തുന്നുണ്ടെന്ന്
                ഉറപ്പാക്കുന്നു. തദ്ദേശ സ്വയംഭരണ സ്ഥാപനങ്ങളോ മറ്റ് സർക്കാർ അധികാരികളോ പുറപ്പെടുവിച്ച ഏതെങ്കിലും പുതുക്കിയ
                നിരക്കുകൾ, അറിയിപ്പുകൾ അല്ലെങ്കിൽ സർക്കുലറുകൾക്ക് അനുസൃതമായി പേയ്‌മെന്റ് സ്ലാബുകളിൽ സമയബന്ധിതമായ
                അപ്‌ഡേറ്റുകൾ നടത്തുന്നത് ഇതിൽ ഉൾപ്പെടുന്നു. ഒരു സോഫ്റ്റ്‌വെയർ ദാതാവ് എന്ന നിലയിൽ PetaParking അത്തരം മാറ്റങ്ങൾ
                നിരീക്ഷിക്കുകയോ നടപ്പിലാക്കുകയോ ചെയ്യുന്നില്ല, കൂടാതെ സിസ്റ്റത്തിനുള്ളിലെ കാലഹരണപ്പെട്ടതോ തെറ്റായതോ ആയ
                വിലനിർണ്ണയത്തിന് ഞങ്ങൾ ബാധ്യസ്ഥരല്ല.
              </li>
              <li>സർക്കാർ നയങ്ങൾ പാലിക്കാത്തതിൽ നിന്ന് ഉണ്ടാകുന്ന നിയമപരമോ സാമ്പത്തികമോ ആയ തർക്കങ്ങൾ കൈകാര്യം ചെയ്യൽ.</li>
            </ul>
            <p style={paragraphStyles}>
              ഒരു സോഫ്റ്റ്‌വെയർ/സൊല്യൂഷൻ ദാതാവ് എന്ന നിലയിൽ, പാർക്കിംഗ് ഉടമകൾക്കോ ​​ജീവനക്കാർക്കോ എതിരെ അത്തരം കാര്യങ്ങളിൽ
              സ്വീകരിക്കുന്ന ഏതെങ്കിലും അനന്തരഫലങ്ങൾ, തർക്കങ്ങൾ അല്ലെങ്കിൽ നിയന്ത്രണ നടപടികൾക്ക് Petaera Technologies
              ബാധ്യസ്ഥനായിരിക്കില്ല.
            </p>
          </div>
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>11. സബ്സ്ക്രിപ്ഷനും പരിപാലന നയവും</h2>
            <p style={paragraphStyles}>
              ഓരോ പാർക്കിംഗ് ഉടമയുമായും യോജിച്ച പ്രതിമാസ സബ്‌സ്‌ക്രിപ്‌ഷൻ മോഡലിലാണ് Petaparking പ്രവർത്തിക്കുന്നത്.
              നിബന്ധനകളിൽ ഇവ ഉൾപ്പെടുന്നു:
            </p>
            <ul style={ulStyles}>
              <li>
                PetaParking സിസ്റ്റത്തിന് ആവശ്യമായ ഹാർഡ്‌വെയർ ഒറ്റത്തവണ വാങ്ങലായി ലഭ്യമാണ്, ഉടമസ്ഥാവകാശം ക്ലയന്റിനായിരിക്കും.
                Petaparking നൽകുന്ന സോഫ്റ്റ്‌വെയർ, പാർക്കിംഗ് മാനേജ്‌മെന്റ് പ്ലാറ്റ്‌ഫോമിന് മുൻകൂർ നിരക്കുകളൊന്നും ഈടാക്കില്ല.
              </li>
              <li>
                സബ്‌സ്‌ക്രിപ്‌ഷൻ, മെയിന്റനൻസ് നയത്തിന്റെ ഭാഗമായി, സിസ്റ്റം സൃഷ്ടിക്കുന്ന പ്രിന്റ് ചെയ്‌ത പാർക്കിംഗ് സ്ലിപ്പുകളിൽ
                ഡൊമെയ്ൻ നാമം അല്ലെങ്കിൽ വെബ്‌സൈറ്റ് വിലാസം (ഉദാ. Petaparking.com) പോലുള്ള
                <strong>PetaEra Technologies ബ്രാൻഡിംഗ് ഘടകങ്ങൾ ഉൾപ്പെടുകയോ ഒഴിവാക്കുകയോ ചെയ്‌തേക്കാം</strong> എന്നത് ദയവായി
                ശ്രദ്ധിക്കുക. അത്തരം വിശദാംശങ്ങൾ ഉൾപ്പെടുത്തുന്നത് സിസ്റ്റം കോൺഫിഗറേഷൻ, വിന്യാസ മുൻഗണനകൾ, ക്ലയന്റ് തിരഞ്ഞെടുത്ത
                ഇഷ്‌ടാനുസൃതമാക്കലിന്റെ നിലവാരം എന്നിവയെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്. പ്രാരംഭ സജ്ജീകരണ സമയത്ത് ഈ ഓപ്ഷനുകൾ ക്രമീകരിക്കാം
                അല്ലെങ്കിൽ സബ്‌സ്‌ക്രിപ്‌ഷനിൽ ഉൾപ്പെടുത്തിയിരിക്കുന്ന നിലവിലുള്ള അറ്റകുറ്റപ്പണി പിന്തുണയുടെ ഭാഗമായി പിന്നീട്
                പരിഷ്‌ക്കരിക്കാം.
              </li>
              <li>
                സോഫ്റ്റ്‌വെയർ പ്ലാറ്റ്‌ഫോം ഒരു സബ്‌സ്‌ക്രിപ്‌ഷൻ അടിസ്ഥാനത്തിലാണ് പ്രവർത്തിക്കുന്നത്, ഇത് അപ്‌ഡേറ്റുകൾ,
                പിന്തുണ എന്നിവയിലേക്കുള്ള തുടർച്ചയായ ആക്‌സസ് ഉറപ്പാക്കുന്നു.
              </li>
              <li>
                ഒരു <strong>പാർക്കിംഗ് സ്‌പേസ്</strong> അല്ലെങ്കിൽ<strong> ലോട്ടിന്</strong> അടിസ്ഥാനമാക്കിയാണ് സബ്സ്ക്രിപ്ഷൻ
                കണക്കാക്കുന്നത്.
              </li>
              <li>
                ഇൻസ്റ്റലേഷൻ പ്രക്രിയയിൽ നിരക്കുകൾ നിർവചിക്കുകയും സമ്മതിക്കുകയും ചെയ്‌തുകൊണ്ട്, പ്രതിമാസം ബില്ലിംഗ് നടക്കുന്നു.
              </li>
              <li>
                ഓരോ മാസത്തിന്റെയും അവസാനം പേയ്‌മെന്റുകൾ അടയ്ക്കേണ്ടതാണ്,<strong>അടുത്ത മാസം അഞ്ചാം തിയ്യതിക്കുള്ളിൽ
                പണമിടപാട് തീർക്കേണ്ടതാണ്.</strong><strong>പരാജയപ്പെടുന്നത് സേവനങ്ങൾ താൽക്കാലികമായി നിർത്തിവയ്ക്കുന്നതിലേക്ക്
                നയിക്കും.</strong>
              </li>
              <li>
                ഒരു മാസം കൂടി പണമടയ്ക്കാത്തത് തുടർന്നാൽ, സബ്‌സ്‌ക്രിപ്‌ഷൻ <strong>സ്വയമേവ റദ്ദാക്കപ്പെടും.</strong>
              </li>
              <li>
                സേവനങ്ങൾ പുനരാരംഭിക്കാൻ, <strong>കുറഞ്ഞത് ഒരു മാസത്തെ സബ്‌സ്‌ക്രിപ്‌ഷൻ ഫീസ് മുൻകൂറായി അടയ്ക്കണം.</strong>
              </li>
              <li>
                ഇൻസ്റ്റാളേഷൻ തീയതി മുതൽ <strong>6 മാസം സൗജന്യ അറ്റകുറ്റപ്പണികൾ</strong> ലഭ്യമാണ്.
              </li>
              <li>
                സൗജന്യ കാലയളവിനുശേഷം, അധിക ചിലവിൽ അറ്റകുറ്റപ്പണി സേവനങ്ങൾ വാഗ്ദാനം ചെയ്യാവുന്നതാണ് അല്ലെങ്കിൽ പുതുക്കിയ
                കരാറുകളിൽ ഉൾപ്പെടുത്താവുന്നതാണ്.
              </li>
            </ul>
          </div>
          <h2 style={sectionTitleStyles}>12. സേവനങ്ങൾ അവസാനിപ്പിക്കൽ</h2>
          <p style={paragraphStyles}>
            താഴെ പറയുന്ന വ്യവസ്ഥകൾക്ക് വിധേയമായി PetaParking സിസ്റ്റത്തിലേക്കുള്ള ആക്‌സസ് താൽക്കാലികമായി നിർത്താനോ അവസാനിപ്പിക്കാനോ
            ഉള്ള അവകാശം Petaera Technologies ൽ നിക്ഷിപ്തമാണ്:
          </p>

          <h3 style={headingStyles}>(i)ഇൻസ്റ്റാളേഷൻ കഴിഞ്ഞ് ഒരു മാസത്തിനുള്ളിൽ നേരത്തെ അവസാനിപ്പിക്കൽ</h3>
          <ul style={ulStyles}>
            <li>
              If the client chooses to discontinue the service within <strong>30 days from the installation date</strong>{' '}
              and before the first subscription payment cycle begins, PetaEra Technologies offers a limited refund
              option.
            </li>
            <li>
              Only the hardware items listed in the official <strong>invoice issued by PetaEra Technologies</strong> are
              eligible for return and refund, subject to successful inspection and recovery.
            </li>
            <li>These typically include (but are not limited to):</li>
            <ul style={ulStyles}>
              <li>Raspberry Pi unit</li>
              <li>Power adapter supplied with the Pi</li>
              <li>Memory card preloaded with the PetaParking system</li>
              <li>Cooling case</li>
            </ul>
            <li>
              Components such as <strong>IP cameras, internet modems, mounts, cabling, or installation/fixing costs</strong>{' '}
              are typically managed by third-party vendors or local technicians and are <strong>not eligible for refund</strong>
              .
            </li>
            <li>
              Any software modules or AI-powered features provided as part of the system are strictly proprietary,
              non-transferable, and will be deactivated upon termination. Specific licensing details are confidential
              and not disclosed to clients.
            </li>
            <li>
              After 30 days from installation, <strong>no refund requests or hardware returns</strong> will be accepted
              under any circumstances.
            </li>
            <li>
              PetaEra reserves the right to deduct reasonable costs for missing, damaged, or altered equipment from the
              refund amount.
            </li>
          </ul>
          <h3 style={headingStyles}>(ii)ഒരു മാസത്തിനുശേഷം ഹാർഡ്‌വെയർ തിരികെ നൽകൽ (മൂല്യം കുറവ്)</h3>
          <ul style={ulStyles}>
            <li>
              30 ദിവസത്തെ റിട്ടേൺ വിൻഡോയ്ക്ക് ശേഷം ക്ലയന്റ് ഹാർഡ്‌വെയർ തിരികെ നൽകാൻ ആഗ്രഹിക്കുന്നുവെങ്കിൽ, Petaera
              Technologies നിർണ്ണയിക്കുന്ന <strong>കുറഞ്ഞ വിലയ്ക്ക്</strong> Petaera Technologies ഹാർഡ്‌വെയർ സ്വീകരിക്കും.
            </li>
            <li>
              ഇൻസ്റ്റാളേഷൻ കഴിഞ്ഞ സമയം, ഘടകങ്ങളുടെ തേയ്മാനം, ഹാർഡ്‌വെയറിന്റെ ശേഷിക്കുന്ന ഉപയോഗപ്രദമായ ആയുസ്സ് എന്നിവയെ
              അടിസ്ഥാനമാക്കിയാണ് മൂല്യത്തകർച്ച കണക്കാക്കുന്നത്.
            </li>
            <li>
              മൂല്യത്തകർച്ച സംഭവിച്ച തുക മൊത്തം റീഫണ്ടിൽ നിന്ന് കുറയ്ക്കുകയും ഹാർഡ്‌വെയർ റിട്ടേണിനായി ക്ലയന്റിന് അന്തിമ
              തുക നൽകുകയും ചെയ്യും.
            </li>
            <li>
              <strong>ഐപി ക്യാമറകൾ, ഇന്റർനെറ്റ് മോഡമുകൾ, മൗണ്ടുകൾ, കേബിളിംഗ്, അല്ലെങ്കിൽ ഇൻസ്റ്റാളേഷൻ/ഫിക്സിംഗ് ചെലവുകൾ</strong>{' '}
              പോലുള്ള ഘടകങ്ങൾ റിട്ടേണിനോ റീഫണ്ടിനോ വേണ്ടി സ്വീകരിക്കില്ല.
            </li>
          </ul>
          <h3 style={headingStyles}>(iii)ദുരുപയോഗം അല്ലെങ്കിൽ നയ ലംഘനങ്ങൾ</h3>
          <ul style={ulStyles}>
            <li>
              Petaera Technologies ഇനിപ്പറയുന്ന സാഹചര്യങ്ങളിൽ റീഫണ്ട് കൂടാതെ ആക്‌സസ് താൽക്കാലികമായി നിർത്തിവയ്ക്കുകയോ
              ശാശ്വതമായി റദ്ദാക്കുകയോ ചെയ്‌തേക്കാം:
            </li>
            <ul style={ulStyles}>
              <li>സിസ്റ്റം ദുരുപയോഗം, വഞ്ചന, അല്ലെങ്കിൽ അനധികൃത പരിഷ്കാരങ്ങൾ</li>
              <li>പരിരക്ഷിത കോൺഫിഗറേഷനുകളിലേക്കോ സോഫ്റ്റ്‌വെയർ മൊഡ്യൂളുകളിലേക്കോ ആക്‌സസ് ചെയ്യാൻ ശ്രമിക്കുക.</li>
              <li>ഈ നിബന്ധനകളിലെയോ പ്രസക്തമായ നിയമ ചട്ടങ്ങളിലെയോ ഏതെങ്കിലും വ്യവസ്ഥകളുടെ ലംഘനം</li>
            </ul>
          </ul>

          <h3 style={headingStyles}>(iv)റീഫണ്ടും ഹാർഡ്‌വെയർ ഉടമസ്ഥതയും</h3>
          <ul style={ulStyles}>
            <li>
              ആദ്യ സബ്‌സ്‌ക്രിപ്‌ഷൻ പേയ്‌മെന്റ് വിജയകരമായി പൂർത്തിയാകുന്നതുവരെ, നൽകുന്ന ഹാർഡ്‌വെയർ{' '}
              <strong>PetaEra Technologies-ന്റെ സ്വത്തായി</strong> തുടരും.
            </li>
            <li>
              ആദ്യ ബില്ലിംഗ് സൈക്കിൾ പൂർത്തിയാക്കി മുഴുവൻ പേയ്‌മെന്റും ലഭിച്ചുകഴിഞ്ഞാൽ, ഇൻവോയ്‌സ് ചെയ്‌ത ഹാർഡ്‌വെയറിന്റെ
              ഉടമസ്ഥാവകാശം ക്ലയന്റിന് കൈമാറും. എന്നിരുന്നാലും, എല്ലാ സോഫ്റ്റ്‌വെയറുകളും സിസ്റ്റം മൊഡ്യൂളുകളും
              ഉടമസ്ഥാവകാശമുള്ളതും കൈമാറ്റം ചെയ്യാൻ കഴിയാത്തതുമായി തുടരുന്നു.
            </li>
            <li>
              ഇൻസ്റ്റാളേഷൻ തീയതി മുതൽ ഒരു മാസത്തെ വിൻഡോയ്ക്ക് ശേഷം സേവനം നിർത്തലാക്കുന്നതിനോ ഹാർഡ്‌വെയർ റിട്ടേണുകൾ
              ആരംഭിക്കുന്നതിനോ റീഫണ്ട് വാഗ്ദാനം ചെയ്യുന്നില്ല.
            </li>
          </ul>
          <h2 style={sectionTitleStyles}>13. ഭരണ നിയമവും അധികാരപരിധിയും</h2>
          <ul style={ulStyles}>
            <li>
              ഈ നിബന്ധനകളും വ്യവസ്ഥകളും <strong>റിപ്പബ്ലിക് ഓഫ് ഇന്ത്യ</strong>യിലെ നിയമങ്ങൾക്കനുസൃതമായി, പ്രത്യേകിച്ച്
              <strong>കേരള സംസ്ഥാനത്ത്</strong> ബാധകമായ നിയമങ്ങൾക്കനുസൃതമായി നിയന്ത്രിക്കപ്പെടുകയും വ്യാഖ്യാനിക്കപ്പെടുകയും
              ചെയ്യും.
            </li>
            <li>
              ഈ നിബന്ധനകളുമായി ബന്ധപ്പെട്ടതോ അതിൽ നിന്നുണ്ടാകുന്നതോ ആയ ഏതൊരു തർക്കങ്ങളും, അവകാശവാദങ്ങളും, അല്ലെങ്കിൽ
              വിവാദങ്ങളും, സാധുത, വ്യാഖ്യാനം, ലംഘനം അല്ലെങ്കിൽ അവസാനിപ്പിക്കൽ എന്നിവയുമായി ബന്ധപ്പെട്ടവ ഉൾപ്പെടെ,
              <strong>കേരളത്തിലെ പാലക്കാട്ടെ സിവിൽ കോടതികളുടെ എക്സ്ക്ലൂസീവ് അധികാരപരിധിക്ക്</strong> വിധേയമായിരിക്കും.
            </li>
            <li>
              The Client agrees not to raise any objection regarding the jurisdiction or venue of the courts in
              Palakkad, including objections based on the principle of <em>forum non conveniens</em>.
            </li>
            <li>
              Before initiating formal legal proceedings, both <strong>PetaEra Technologies</strong> and the Client
              agree to attempt resolution through mutual discussion, negotiation, or third-party mediation, where
              applicable.
            </li>
            <li>
              This clause applies to all services, obligations, and interactions covered under these Terms and
              Conditions, including system usage, subscriptions, returns, and support services.
            </li>
          </ul>

          <hr />
          <p style={centerTextStyles}>
            © <span id="copyright-year"></span> PetaEra Technologies.All rights reserved.
          </p>
        </div>
      )}
    </div>
  );
};

export default PetaParkingTermsAndServices;