import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Tempo Pilates</title>
        <meta name="description" content="Privacy Policy for Tempo Pilates - how we collect, use, and protect your personal information." />
      </Helmet>
      
      <Layout>
        <div className="min-h-screen">
          {/* Header Section */}
          <section className="py-16" style={{ backgroundColor: '#FAF3DD' }}>
            <div className="container">
              <h1 className="text-4xl font-bold mb-4" style={{ color: '#615055' }}>
                Privacy Policy
              </h1>
              <p className="text-lg" style={{ color: '#615055' }}>
                Effective: September 22, 2025
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16">
            <div className="container max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-8" style={{ color: '#615055' }}>
                  This Privacy and Data Protection Policy ("Policy") applies to <strong>tempo-pilates.com</strong> and related services offered by Tempo Pilates under <strong>GuardedGrace LLC</strong>.
                </p>
                
                <p className="mb-8" style={{ color: '#615055' }}>
                  By visiting our site, booking classes, or using our services, you consent to the practices described here.
                </p>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  INFORMATION WE COLLECT
                </h2>
                <ul className="mb-8 space-y-2" style={{ color: '#615055' }}>
                  <li>Personal information (name, email, contact details, date of birth, payment details).</li>
                  <li>Health and participation information provided for safe class instruction.</li>
                  <li>Usage information such as bookings, attendance, and communications.</li>
                  <li>Optional: profile photo for identification purposes.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  HOW WE USE YOUR INFORMATION
                </h2>
                <ul className="mb-8 space-y-2" style={{ color: '#615055' }}>
                  <li>Manage bookings, memberships, and accounts.</li>
                  <li>Process payments and prevent fraud.</li>
                  <li>Communicate updates, promotions, or surveys (opt-in only).</li>
                  <li>Improve services and maintain safety.</li>
                  <li>Legal compliance where required.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  THIRD-PARTY PROVIDERS
                </h2>
                <p className="mb-8" style={{ color: '#615055' }}>
                  We may use third-party booking or payment platforms to manage memberships securely. These providers process your personal data on our behalf.
                </p>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  PHOTO + VIDEO CONSENT
                </h2>
                <p className="mb-8" style={{ color: '#615055' }}>
                  From time to time, we may capture photos or videos in class for community and marketing purposes. Consent is requested at booking and always optional.
                </p>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  DATA SHARING
                </h2>
                <p className="mb-8" style={{ color: '#615055' }}>
                  We do not sell or share your personal data with third parties for marketing. Data is shared only with trusted service providers or if required by law.
                </p>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  DATA RETENTION + SECURITY
                </h2>
                <p className="mb-8" style={{ color: '#615055' }}>
                  We keep personal data only as long as necessary to provide services and meet legal obligations. We take reasonable steps to protect your information against unauthorized access or misuse.
                </p>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  YOUR RIGHTS
                </h2>
                <ul className="mb-8 space-y-2" style={{ color: '#615055' }}>
                  <li>You may request to access, update, or delete your data by contacting us.</li>
                  <li>You may opt out of marketing communications at any time.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  CHANGES TO THIS POLICY
                </h2>
                <p className="mb-8" style={{ color: '#615055' }}>
                  We may update this Policy periodically. Continued use of our services after changes indicates acceptance.
                </p>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  CONTACT
                </h2>
                <p style={{ color: '#615055' }}>
                  Tempo Pilates | contact@tempo-pilates.com
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Privacy;