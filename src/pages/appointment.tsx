import { useState } from "react";
import { CalendarCheck, CheckCircle } from "lucide-react";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import emailjs from "@emailjs/browser";

const products = [
  // Products
  "Not Applicable",
  "AQUATRACT CT Series",
  "AQUATRACT CT-4000/4210",
  "AQUATRACT BT-2100",
  "CSM Membranes & ANOW Filters",
  "LUPROMAX Series",
  "VAPPRO Products",
  "Lenntech Systems",
  "Italmatch Chemicals",
  "BWA Water Additives",
  "Castrol Magna SW Series",
  "Castrol Industrial Lubricants",
  "Others / Not Sure Yet",
];

const services = [
  // Services
  "Not Applicable",
  "Water Treatment (Cooling Tower / Boiler / RO)",
  "Wastewater Treatment System",
  "Plant Preventive Maintenance",
  "Air Conditioning Installation & Servicing",
  "Oil, Grease & Lubricant Supply",
  "Oil Spill Response",
  "Others / Not Sure Yet",
];

const initialForm = {
  firstName: "",
  lastName: "",
  mi: "",
  company: "",
  email: "",
  phone: "",
  landline: "",
  services: [""], // Array of services
  products: [""], // Array of products
  date: "",
  time: "",
  description: "",
  // Honeypot — never filled by real users
  sub_billing_id: "",
};

type FormData = typeof initialForm;
type FormErrors = Partial<Record<keyof FormData, string>>;

const phoneRegex = /^09\d{2}-\d{3}-\d{4}$/;
const landlineRegex = /^0\d-\d{4}-\d{4}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  notifyTemplateId: import.meta.env.VITE_EMAILJS_NOTIFY_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
const companyEmail = import.meta.env.VITE_IONIC_NOTIFICATION_EMAIL ?? "riananadura1@gmail.com";

function isMissingEmailConfig(value?: string): boolean {
  return !value || value.startsWith("your_");
}

function getEmailErrorMessage(error: unknown): string {
  if (typeof error === "object" && error !== null) {
    const emailError = error as { status?: number; text?: string; message?: string };
    if (emailError.text) return emailError.text;
    if (emailError.message) return emailError.message;
  }

  return "Failed to send appointment request. Please try again.";
}

function buildEmailPayload(form: FormData, recipientEmail: string) {
  const miPart = form.mi ? `${form.mi.trim()} ` : "";
  const requesterName = `${form.firstName} ${miPart}${form.lastName}`.trim();
  const formattedDate = formatDateReadable(form.date);
  const formattedTime = formatTimeReadable(form.time);

  const validServices = form.services.filter((service) => service.trim());
  const validProducts = form.products.filter((product) => product.trim());

  const formatListText = (items: string[]) => {
    if (items.length === 0) return "N/A";
    if (items.length === 1) return items[0];

    return items.map((item) => `- ${item}`).join("\n");
  };

  const formatListHtml = (items: string[]) => {
    if (items.length === 0) return "N/A";
    if (items.length === 1) return items[0];

    return `<ul style="margin:0;padding-left:18px;">${items
      .map((item) => `<li style="margin:0 0 4px 0;">${item}</li>`)
      .join("")}</ul>`;
  };

  const servicesText = formatListText(validServices);
  const productsText = formatListText(validProducts);
  const servicesHtml = formatListHtml(validServices);
  const productsHtml = formatListHtml(validProducts);
  const templateParams = {
    landline: form.landline?.trim() || "-",
    date: formattedDate,
    time: formattedTime,
    service: servicesText,
    product: productsText,
    serviceHtml: servicesHtml,
    productHtml: productsHtml,
  };

  const appointmentSummary = [
    `Company / Facility: ${form.company || "N/A"}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    `Landline: ${form.landline || "N/A"}`,
    `Services: ${servicesText}`,
    `Products: ${productsText}`,
    `Date: ${formattedDate}`,
    `Time: ${formattedTime}`,
    `Description: ${form.description || "N/A"}`,
  ].join("\n");

  return {
    email: recipientEmail,
    to_email: recipientEmail,
    recipient_email: recipientEmail,
    reply_to: form.email,
    from_name: requesterName,
    from_email: form.email,
    client_name: requesterName,
    company: form.company,
    firstName: form.firstName,
    lastName: form.lastName,
    mi: form.mi,
    phone: form.phone,
    landline: form.landline,
    service: servicesText,
    services: servicesText,
    serviceHtml: servicesHtml,
    services_html: servicesHtml,
    product: productsText,
    products: productsText,
    productHtml: productsHtml,
    products_html: productsHtml,
    date: formattedDate,
    time: formattedTime,
    description: form.description,
    request: appointmentSummary,
    message: appointmentSummary,
    templateParams,
    subject:
      recipientEmail === companyEmail
        ? `New appointment request from ${requesterName}`
        : `Your appointment request has been received`,
  };
}

function formatDateReadable(dateStr: string): string {
  if (!dateStr) return "N/A";
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const monthName = date.toLocaleString("en-US", { month: "long" });
  return `${monthName} ${day}., ${year}`;
}

function formatTimeReadable(timeStr: string): string {
  if (!timeStr) return "N/A";
  const [hourStr, minute] = timeStr.split(":");
  const hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${hour12}:${minute} ${ampm}`;
}

// Auto-formats digits into 09XX-XXX-XXXX (max 11 digits)
function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 4) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 4)}-${digits.slice(4)}`;
  return `${digits.slice(0, 4)}-${digits.slice(4, 7)}-${digits.slice(7)}`;
}

// Auto-formats digits into 0X-XXXX-XXXX (max 10 digits)
function formatLandline(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 2)}-${digits.slice(2)}`;
  return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6)}`;
}

function validate(form: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!form.firstName.trim())
    errors.firstName = "First name is required.";

  if (!form.lastName.trim())
    errors.lastName = "Last name is required.";

  if (form.mi && !/^[A-Za-z]\.?$/.test(form.mi.trim()))
    errors.mi = "M.I. must be a single letter.";

  if (!form.company.trim())
    errors.company = "Company / Industry is required.";

  if (!form.email.trim())
    errors.email = "Email address is required.";
  else if (!emailRegex.test(form.email))
    errors.email = "Enter a valid email address.";

  if (!form.phone.trim())
    errors.phone = "Phone number is required.";
  else if (!phoneRegex.test(form.phone))
    errors.phone = "Enter a valid PH mobile number (e.g. 09XX-XXX-XXXX).";

  if (form.landline && !landlineRegex.test(form.landline))
    errors.landline = "Enter a valid landline number (e.g. 02-8806-2048).";

  // Validate services: at least one service required
  const hasValidService = form.services.some(s => s.trim().length > 0);
  if (!hasValidService)
    errors.services = "At least one service is required.";

  // Validate products: at least one product required
  const hasValidProduct = form.products.some(p => p.trim().length > 0);
  if (!hasValidProduct)
    errors.products = "At least one product is required.";

  if (!form.description.trim())
    errors.description = "Description is required.";
  else {
    // Count words (split on whitespace, filter out empty strings)
    const wordCount = form.description.trim().split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount < 5) {
      errors.description = "Description must be at least 5 words.";
    }
  }

  return errors;
}

const Appointment = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    let sanitized = value;
    if (name === "firstName" || name === "lastName")
      sanitized = value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s'-]/g, "");
    if (name === "mi")
      sanitized = value.replace(/[^A-Za-z.]/g, "");
    if (name === "phone")
      sanitized = formatPhone(value);
    if (name === "landline")
      sanitized = formatLandline(value);

    setForm((prev: FormData) => ({ ...prev, [name]: sanitized }));
    if (errors[name as keyof FormData])
      setErrors((prev: FormErrors) => ({ ...prev, [name]: undefined }));
  };

  const blockDigits = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (/\d/.test(e.key)) e.preventDefault();
  };

  // Functions for managing services
  const addService = () => {
    setForm(prev => ({ ...prev, services: [...prev.services, ""] }));
  };

  const removeService = (index: number) => {
    if (form.services.length > 1) {
      setForm(prev => ({
        ...prev,
        services: prev.services.filter((_, i) => i !== index),
      }));
    }
  };

  const updateService = (index: number, value: string) => {
    setForm(prev => {
      const newServices = [...prev.services];
      newServices[index] = value;
      return { ...prev, services: newServices };
    });
    if (errors.services) {
      setErrors(prev => ({ ...prev, services: undefined }));
    }
  };

  // Functions for managing products
  const addProduct = () => {
    setForm(prev => ({ ...prev, products: [...prev.products, ""] }));
  };

  const removeProduct = (index: number) => {
    if (form.products.length > 1) {
      setForm(prev => ({
        ...prev,
        products: prev.products.filter((_, i) => i !== index),
      }));
    }
  };

  const updateProduct = (index: number, value: string) => {
    setForm(prev => {
      const newProducts = [...prev.products];
      newProducts[index] = value;
      return { ...prev, products: newProducts };
    });
    if (errors.products) {
      setErrors(prev => ({ ...prev, products: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    // ── Honeypot check: bots fill hidden fields, humans don't ──
    if (form.sub_billing_id) {
      // Silently simulate success so the bot thinks it worked
      setSubmitted(true);
      return;
    }

    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const missingConfig = [
      isMissingEmailConfig(emailConfig.serviceId) && "VITE_EMAILJS_SERVICE_ID",
      isMissingEmailConfig(emailConfig.templateId) && "VITE_EMAILJS_TEMPLATE_ID",
      isMissingEmailConfig(emailConfig.notifyTemplateId) && "VITE_EMAILJS_NOTIFY_TEMPLATE_ID",
      isMissingEmailConfig(emailConfig.publicKey) && "VITE_EMAILJS_PUBLIC_KEY",
    ].filter(Boolean);

    if (missingConfig.length > 0) {
      setSubmitError(`EmailJS is not configured. Check ${missingConfig.join(", ")} in .env.`);
      return;
    }

    setIsSending(true);
    try {
      // Client confirmation
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        buildEmailPayload(form, form.email),
        { publicKey: emailConfig.publicKey }
      );

      // Company notification
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.notifyTemplateId,
        buildEmailPayload(form, companyEmail),
        { publicKey: emailConfig.publicKey }
      );

      setSubmitted(true);
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitError(getEmailErrorMessage(error));
    } finally {
      setIsSending(false);
    }
  };

  const ic = (field: keyof FormErrors) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-background focus:outline-none focus:ring-2 transition ${
      errors[field] ? "border-red-500 focus:ring-red-400" : "border-border focus:ring-ionic-blue"
    }`;

  const Err = ({ field }: { field: keyof FormErrors }) =>
    errors[field] ? <p className="text-xs text-red-500 mt-1">{errors[field]}</p> : null;

  const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">{children}</p>
  );

  const req = <span className="text-ionic-orange">*</span>;

  return (
    <>
      <StickyHeader />
      <main className="min-h-screen bg-background pt-28 pb-20 px-4 md:px-8">
        <div className="container-narrow mx-auto max-w-2xl">

          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3">
              Book an <span className="text-gradient-blue">Appointment</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Fill out the form below and our team will confirm your appointment within 1 business day.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-border bg-card p-12 shadow-card flex flex-col items-center text-center gap-4">
              <CheckCircle className="text-ionic-blue" size={56} />
              <h2 className="text-2xl font-bold text-foreground">Appointment Request Sent!</h2>
              <p className="text-muted-foreground max-w-sm">
                Thank you, <strong>{form.firstName} {form.mi ? `${form.mi.trim()} ` : ""}{form.lastName}</strong>. We've received your request and will reach out to you at <strong>{form.email}</strong> shortly.
              </p>
              <button
                onClick={() => { setForm(initialForm); setErrors({}); setSubmitted(false); }}
                className="mt-4 gradient-orange text-accent-foreground px-8 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-card space-y-8">

              {/* ── Honeypot anti-spam trap (invisible to humans) ── */}
              <input
                type="text"
                name="sub_billing_id"
                value={form.sub_billing_id}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden opacity-0 pointer-events-none"
              />

              {/* ── Personal Details ── */}
              <div className="space-y-4">
                <SectionLabel>Personal Details</SectionLabel>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-[1fr_1fr_0.30fr]">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">First Name {req}</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} onKeyDown={blockDigits} placeholder="Ex: Juan" className={ic("firstName")} />
                    <Err field="firstName" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Last Name {req}</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} onKeyDown={blockDigits} placeholder="Ex: Cruz" className={ic("lastName")} />
                    <Err field="lastName" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">M.I.</label>
                    <input name="mi" value={form.mi} onChange={handleChange} onKeyDown={blockDigits} placeholder="Ex: A." maxLength={2} className={ic("mi") + " w-20"} />
                    <Err field="mi" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Company / Industry {req}</label>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Ex: ABC Corporation" className={ic("company")} />
                  <Err field="company" />
                </div>
              </div>

              <div className="border-t border-border" />

              {/* ── Contact Details ── */}
              <div className="space-y-4">
                <SectionLabel>Contact Details</SectionLabel>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Email Address {req}</label>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="Ex: juandelacruz@company.com" className={ic("email")} />
                  <Err field="email" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Phone Number {req}</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="Ex: 09XX-XXX-XXXX" maxLength={13} className={ic("phone")} />
                    <Err field="phone" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Landline (Optional)</label>
                    <input name="landline" value={form.landline} onChange={handleChange} placeholder="Ex: 0X-XXXX-XXXX" maxLength={12} className={ic("landline")} />
                    <Err field="landline" />
                  </div>
                </div>
              </div>

              <div className="border-t border-border" />

              {/* ── Appointment Details ── */}
              <SectionLabel>Appointment Details</SectionLabel>

              {/* Products */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">Product{req}</label>
                  <button
                    type="button"
                    onClick={addProduct}
                    className="text-xs font-semibold text-ionic-blue hover:text-ionic-blue/80 transition-colors flex items-center gap-1"
                  >
                    + Add Another
                  </button>
                </div>
                {form.products.map((product, index) => (
                  <div key={`product-${index}`} className="flex gap-2">
                    <select
                      required
                      value={product}
                      onChange={(e) => updateProduct(index, e.target.value)}
                      className={ic("products") + " flex-1"}
                    >
                      <option value="" disabled>Select a product...</option>
                      {products.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                    {form.products.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProduct(index)}
                        className="p-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                      </button>
                    )}
                  </div>
                ))}
                <Err field="products" />
              </div>

              {/* Services */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">Service{req}</label>
                  <button
                    type="button"
                    onClick={addService}
                    className="text-xs font-semibold text-ionic-blue hover:text-ionic-blue/80 transition-colors flex items-center gap-1"
                  >
                    + Add Another
                  </button>
                </div>
                {form.services.map((service, index) => (
                  <div key={`service-${index}`} className="flex gap-2">
                    <select
                      required
                      value={service}
                      onChange={(e) => updateService(index, e.target.value)}
                      className={ic("services") + " flex-1"}
                    >
                      <option value="" disabled>Select a service...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {form.services.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeService(index)}
                        className="p-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                      </button>
                    )}
                  </div>
                ))}
                <Err field="services" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Date {req}</label>
                    <input required type="date" name="date" value={form.date} onChange={handleChange} min={new Date().toISOString().split("T")[0]} className={ic("date")} />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Time {req}</label>
                    <input required type="time" name="time" value={form.time} onChange={handleChange} className={ic("time")} />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Description {req}</label>
                  <textarea name="description" value={form.description} onChange={handleChange} rows={4} placeholder="Describe your facility, current issues, or anything else we should know..." className={ic("description") + " resize-none"} />
                  <Err field="description" />
                </div>

              {submitError && (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full gradient-orange text-accent-foreground px-8 py-4 rounded-xl text-base font-bold hover:opacity-90 transition-opacity shadow-elevated inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <CalendarCheck size={20} />
                {isSending ? "Sending..." : "Submit Appointment Request"}
              </button>

            </form>
          )}

        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Appointment;
