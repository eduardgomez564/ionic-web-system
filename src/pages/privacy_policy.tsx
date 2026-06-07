import { useEffect } from "react";
import { ShieldCheck, Eye, Lock, FileText, Globe, RefreshCw } from "lucide-react";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StickyHeader />
      <main className="min-h-screen bg-background pt-28 pb-20 px-4 md:px-8">
        <div className="container-narrow mx-auto max-w-4xl space-y-10">
          {/* Header Section */}
          <div className="text-left space-y-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              Privacy <span className="text-gradient-blue">Policy</span>
            </h1>
            <p className="text-muted-foreground text-lg text-justify">
              At Impact One Nation Industrial Corporation (IONIC), we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you visit our website or request our services.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted w-fit px-3.5 py-1.5 rounded-full border border-border">
              <RefreshCw size={14} className="text-ionic-blue" />
              <span>Last updated: June 7, 2026</span>
            </div>
          </div>

          {/* Privacy Content Card */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card space-y-8">
            {/* Section 1: Introduction */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-foreground">1. Introduction</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-12 text-sm md:text-base text-justify">
                Impact One Nation Industrial Corporation ("we", "our", or "IONIC") respects your privacy and is dedicated to protecting the personal data of our customers, website visitors, and partners. This Privacy Policy describes how we collect, utilize, process, and protect your information when you interact with our website, request quotes, schedule appointments, or communicate with us.
              </p>
            </div>

            <div className="border-t border-border" />

            {/* Section 2: Information We Collect */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-foreground">2. Information We Collect</h2>
              </div>
              <div className="text-muted-foreground leading-relaxed pl-12 space-y-3 text-sm md:text-base text-justify">
                <p>
                  We collect information that you voluntarily provide to us when you fill out forms on our website (such as our Contact Us or Appointment Request forms). This information may include:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Personal details:</strong> First name, last name, and middle initial (M.I.).</li>
                  <li><strong>Professional information:</strong> Company name and industry affiliation.</li>
                  <li><strong>Contact details:</strong> Email address, mobile phone number, and landline number.</li>
                  <li><strong>Request specifications:</strong> Selected products, services needed, preferred appointment date/time, and any details or descriptions of your facility and concerns.</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border" />

            {/* Section 3: How We Use Your Information */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-foreground">3. How We Use Your Information</h2>
              </div>
              <div className="text-muted-foreground leading-relaxed pl-12 space-y-3 text-sm md:text-base">
                <p>
                  We process your personal data for legitimate business purposes, including:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-justify">
                  <li><strong>Scheduling & Coordination:</strong> Processing your appointment requests and coordinating consultations for industrial water treatment or preventive maintenance.</li>
                  <li><strong>Customer Support:</strong> Responding to your inquiries, complaints, and service requests submitted via the Contact Us page.</li>
                  <li><strong>Notifications:</strong> Sending confirmation emails and status updates regarding your requested services or bookings.</li>
                  <li><strong>Service Improvements:</strong> Understanding your facility needs to provide custom engineering and water treatment solutions.</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border" />

            {/* Section 4: Data Security */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-foreground">4. Data Security & Storage</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-12 text-sm md:text-base text-justify">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, loss, alteration, or disclosure. When you submit requests on our site, the details are transmitted securely via EmailJS. We restrict access to your personal data to authorized employees and technical personnel who need the information to perform their duties.
              </p>
            </div>

            <div className="border-t border-border" />

            {/* Section 5: Information Sharing */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-foreground">5. Sharing of Personal Data</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-12 text-sm md:text-base text-justify">
                IONIC does not sell, rent, or lease customer databases or personal information to third parties. We do not share your information with external parties except where required by law, or when necessary to complete a service request you have explicitly authorized (such as logistics for delivery of equipment/chemicals).
              </p>
            </div>

            <div className="border-t border-border" />

            {/* Section 6: Contact Us */}
            <div className="space-y-3 bg-muted/40 rounded-xl p-5 border border-border">
              <h3 className="text-lg font-bold text-foreground">Questions or Concerns?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-justify">
                If you have questions about this Privacy Policy, wish to access or correct your personal data, or want to file a request to delete your records, please contact our Data Protection Office:
              </p>
              <div className="space-y-2 text-sm text-foreground">
                <p><strong>Email:</strong> <a href="mailto:impactonenation@gmail.com" className="text-ionic-blue hover:underline">impactonenation@gmail.com</a></p>
                <p><strong>Office:</strong> Blk 9 Lot 6, Banuyo Rd, Pilar Village, Las Piñas City</p>
                <p><strong>Landline:</strong> (632) 8806 2048 / (632) 8805 2959</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default PrivacyPolicy;
