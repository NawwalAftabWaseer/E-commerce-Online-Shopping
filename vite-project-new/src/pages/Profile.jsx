import React from "react";
import "./Profile.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-content">
          <div className="card journey-card">
            <h2>Our Journey</h2>
            <p>
              At Khareed Ly, our journey commenced with a profound ambition to
              transform the landscape of online shopping. From our early days of
              aspiration to our current stature as a cornerstone of trust in
              e-commerce, our mission has been unwavering. We are resolutely
              committed to providing not just exceptional products but also a
              shopping experience that resonates with excellence and integrity.
              Every phase of our evolution is driven by a relentless pursuit of
              quality and an enduring promise to enrich your journey with us. As
              we forge ahead, we remain dedicated to setting new benchmarks and
              redefining the essence of customer satisfaction.
            </p>
          </div>
          <div className="card privacy-card">
            <h2>Privacy Policy</h2>
            <ul>
              <li>
                We respect your privacy and are committed to protecting your
                personal information.
              </li>
              <li>
                We collect personal data to process orders and improve our
                services.
              </li>
              <li>
                Your data will not be shared with third parties without your
                consent.
              </li>
              <li>
                We use industry-standard security measures to protect your
                information.
              </li>
              <li>
                You can update or delete your information by contacting us.
              </li>
            </ul>
          </div>
          <div className="card terms-card">
            <h2>Terms of Service</h2>
            <ul>
              <li>
                By using our website, you agree to our terms and conditions.
              </li>
              <li>
                All sales are final unless otherwise stated in our return
                policy.
              </li>
              <li>We reserve the right to modify our terms at any time.</li>
              <li>
                Our content is protected by copyright laws and cannot be used
                without permission.
              </li>
              <li>
                For any disputes, the applicable law will be that of our
                jurisdiction.
              </li>
            </ul>
          </div>
          <div className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item">
              <h3>What is your return policy?</h3>
              <p>
                We accept returns within 30 days of purchase, provided the item
                is unused and in its original packaging.
              </p>
            </div>
            <div className="faq-item">
              <h3>How can I track my order?</h3>
              <p>
                Once your order is shipped, you will receive a tracking number
                via email to monitor its progress.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer international shipping?</h3>
              <p>
                Yes, we ship internationally. Shipping costs and delivery times
                vary based on the destination.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I change my order after placing it?</h3>
              <p>
                Orders can only be modified within 1 hour of placement. Please
                contact us immediately for any changes.
              </p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>
                We accept all major credit cards, PayPal, and bank transfers.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
