import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Tempo Pilates</title>
        <meta name="description" content="Terms of Service for Tempo Pilates - membership policies, cancellation policies, and studio guidelines." />
      </Helmet>
      
      <Layout>
        <div className="min-h-screen">
          {/* Header Section */}
          <section className="py-16" style={{ backgroundColor: '#FAF3DD' }}>
            <div className="container">
              <h1 className="text-4xl font-bold mb-4" style={{ color: '#615055' }}>
                Terms of Service
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
                  By booking or participating in any class or activity at <strong>Tempo Pilates</strong>, you acknowledge and agree that you have read and will abide by these terms and conditions.
                </p>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  MEMBER SERVICES AND POLICIES
                </h2>
                <ul className="mb-8 space-y-2" style={{ color: '#615055' }}>
                  <li><strong>Cancellation Policy</strong>: You must cancel class at least 12 hours in advance, or the class credit will be deducted. Members will be charged a $15 late cancellation fee. Switching time slots within 12 hours counts as a late cancellation.</li>
                  <li><strong>No Show Fee</strong>: Members who do not show up for a class will be charged a $25 fee.</li>
                  <li><strong>Reservation Policy</strong>: You must be present and checked in 5 minutes before class begins, or your spot may be given to someone on the waitlist.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  PERSONAL PROPERTY
                </h2>
                <p className="mb-8" style={{ color: '#615055' }}>
                  Tempo Pilates is not responsible for theft, loss, or damage to personal property while in the studio. You assume all risks of loss.
                </p>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  STUDIO RULES + REGULATIONS
                </h2>
                <ul className="mb-8 space-y-2" style={{ color: '#615055' }}>
                  <li>Arrive early and check in 5 minutes prior to class.</li>
                  <li>Respect others and the shared space.</li>
                  <li>Notify instructors of injuries or health conditions before class.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  HEALTH + SAFETY DISCLAIMER
                </h2>
                <p className="mb-8" style={{ color: '#615055' }}>
                  Before participating, consult your physician to ensure you are healthy enough for exercise. Always follow safety instructions and use equipment properly. Stop immediately if you feel pain, dizziness, or discomfort. By participating, you accept all risks of injury.
                </p>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  REFUND POLICY
                </h2>
                <ul className="mb-8 space-y-2" style={{ color: '#615055' }}>
                  <li>Classes and memberships are non-refundable.</li>
                  <li>Retail items: unused merchandise may be exchanged or credited within 14 days; store credit only within 30 days with a receipt.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  TERMINATION
                </h2>
                <p className="mb-8" style={{ color: '#615055' }}>
                  We may terminate your membership or access without notice if you breach these terms. Certain provisions (e.g., liability, indemnity) survive termination.
                </p>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  THIRD-PARTY SITES
                </h2>
                <p className="mb-8" style={{ color: '#615055' }}>
                  Our site may contain links to third-party sites we do not control. Tempo Pilates and GuardedGrace LLC are not responsible for their content or practices.
                </p>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  GOVERNING LAW
                </h2>
                <p className="mb-8" style={{ color: '#615055' }}>
                  These Terms are governed by Texas law.
                </p>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  CHANGES
                </h2>
                <p className="mb-8" style={{ color: '#615055' }}>
                  We may update these Terms at any time by posting changes. Continued use of the site or services means you accept the updates.
                </p>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  ELIGIBILITY
                </h2>
                <p className="mb-8" style={{ color: '#615055' }}>
                  You must be 16 years or older to use our services. Minors (16–18) may join only with parent/guardian involvement.
                </p>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  RELEASE AND INDEMNITY
                </h2>
                <p className="mb-8" style={{ color: '#615055' }}>
                  By participating, you release and agree to indemnify <strong>GuardedGrace LLC</strong>, its members, managers, employees, and agents against any claims, damages, or costs arising from use of our studio or programs.
                </p>

                <h2 className="text-2xl font-bold mb-4" style={{ color: '#62A87C' }}>
                  FEES + PAYMENT
                </h2>
                <p className="mb-8" style={{ color: '#615055' }}>
                  Tempo Pilates charges fees for its services and reserves the right to adjust them. Memberships are billed monthly in advance; class packages are paid in full at purchase. If payment fails, access will be suspended until resolved.
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

export default Terms;