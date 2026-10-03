import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="policy-page fade-in">
      {/* Header */}
      <div className="policy-header">
        <span className="policy-header-ornament" aria-hidden="true">✦ ✦ ✦</span>
        <h1 className="policy-title">Terms and Conditions</h1>
        <p className="policy-date">Last Updated: 10/02/2026</p>
      </div>

      {/* Body */}
      <div className="policy-body">
        <p className="policy-text">
          Welcome to the official application and website of Sri Madhava Teertha Matha. By accessing or using our application/website, you agree to comply with and be bound by the following Terms and Conditions. Please read these terms carefully before using our services.
        </p>

        <section className="policy-section">
          <h2 className="policy-section-title">1. Acceptance of Terms</h2>
          <p className="policy-text">
            By downloading, accessing, or using the Sri Madhava Teertha Matha app/website, you agree to these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">2. Services Overview</h2>
          <p className="policy-text">Our platform allows devotees to:</p>
          <ul className="policy-list">
            <li>View Matha history, parampara, and updates.</li>
            <li>Book Sevas online.</li>
            <li>Make voluntary donations (Kanike).</li>
            <li>Access stotras, spiritual content, and event information.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">3. Seva Bookings and Donations</h2>
          <ul className="policy-list">
            <li>
              <strong>Accuracy of Information:</strong> When booking a Seva, you must provide accurate details (Name, Gotra, Nakshatra, etc.). The Matha is not responsible for errors made by the devotee during the booking process.
            </li>
            <li>
              <strong>Payments:</strong> All online payments for Sevas and donations are processed through secure third-party payment gateways . You agree to abide by the terms of the payment gateway provider.
            </li>
            <li>
              <strong>Modifications:</strong> The Matha reserves the right to change Seva timings, dates, or prices without prior notice due to administrative or religious reasons.
            </li>
            <li>
              <strong>Tax Exemptions:</strong> If applicable, tax exemption certificates for donations will be issued as per the prevailing laws of the Government of India.
            </li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">4. Refund and Cancellation Policy</h2>
          <ul className="policy-list">
            <li>
              <strong>Non-Refundable:</strong> As a general policy, all contributions made towards Sevas and Donations are final and strictly non-refundable.
            </li>
            <li>
              <strong>Failed Transactions:</strong> In the event of a failed transaction where money is deducted from your account but the Seva is not booked, the amount will automatically be refunded to the original payment method by the bank/payment gateway within 5-7 business days.
            </li>
            <li>
              <strong>Cancellations by Matha:</strong> If a specific Seva cannot be performed on the requested date due to unavoidable circumstances at the Matha, the administration will either reschedule the Seva to a mutually agreeable date or perform it in the devotee's name in absentia.
            </li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">5. Intellectual Property</h2>
          <p className="policy-text">
            All content on this application/website, including but not limited to text, images, audio (stotras), logos, and graphics, is the exclusive property of Sri Madhava Teertha Matha. Unauthorized copying, reproduction, distribution, or commercial use of this material is strictly prohibited.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">6. User Conduct</h2>
          <p className="policy-text">By using this platform, you agree NOT to:</p>
          <ul className="policy-list">
            <li>Use the platform for any unlawful or unauthorized purpose.</li>
            <li>Submit false, misleading, or inappropriate information.</li>
            <li>Attempt to hack, disrupt, or compromise the security of the application or website.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">7. Privacy</h2>
          <p className="policy-text">
            Your privacy is important to us. The collection and use of your personal information (such as name, contact details, and Gotra/Nakshatra) are encrypted and strictly used for Matha-related communications and performing the requested Sevas. We do not sell or share your personal data with unauthorized third parties.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">8. Limitation of Liability</h2>
          <p className="policy-text">
            The administration of Sri Madhava Teertha Matha will not be held liable for any direct, indirect, incidental, or consequential damages arising out of your use of this application/website, including but not limited to payment gateway failures or internet disruptions.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">9. Changes to Terms</h2>
          <p className="policy-text">
            We reserve the right to modify these Terms and Conditions at any time. Any changes will be updated on this page. Your continued use of the platform after changes are posted constitutes your acceptance of the revised terms.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">10. Contact Us</h2>
          <p className="policy-text">
            For any questions, concerns, or grievances regarding these Terms and Conditions, or for support related to Seva bookings, please contact the Matha administration:
          </p>
          <ul className="policy-list" style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li><strong>Email:</strong> srimanmadhavateertharamatha@gmail.com</li>
            <li><strong>Phone:</strong> +91 91418 26180, +91 70194 29651</li>
            <li><strong>Address:</strong> Sri Madhava Teertha Matha, Tambihalli, Kolar, Karnataka - 563101</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
