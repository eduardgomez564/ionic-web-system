import React from "react";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";

const contacts = {
	address: "123 Industrial Park Ave, Unit 4, Metro City",
	phone: "+63 912 345 6789",
	email: "info@ionic.example",
	hours: "Mon–Fri 8:00–17:00",
};

const people = [
	{ name: "Juan Dela Cruz", role: "Sales Manager", phone: "+63 912 345 6781", email: "juan.d@ionic.example" },
	{ name: "Maria Santos", role: "Technical Lead", phone: "+63 912 345 6782", email: "maria.s@ionic.example" },
];

const ContactUs = () => (
	<>
		<StickyHeader />
		<main className="container-narrow py-20 px-4 md:px-8">
			<div className="max-w-4xl mx-auto space-y-6">
				<h1 className="text-3xl font-extrabold mb-2">Contact Us</h1>
				<p className="text-muted-foreground">Reach out for consultations, service requests, or product inquiries.</p>

				<div className="grid md:grid-cols-2 gap-8">
					<div className="rounded-2xl border border-border bg-card p-6">
						<h2 className="text-lg font-semibold mb-3">Company Details</h2>
						<p className="text-sm text-muted-foreground mb-2"><strong>Address:</strong> {contacts.address}</p>
						<p className="text-sm text-muted-foreground mb-2"><strong>Phone:</strong> {contacts.phone}</p>
						<p className="text-sm text-muted-foreground mb-2"><strong>Email:</strong> {contacts.email}</p>
						<p className="text-sm text-muted-foreground"><strong>Business Hours:</strong> {contacts.hours}</p>
					</div>

					<div className="rounded-2xl border border-border bg-card p-6">
						<h2 className="text-lg font-semibold mb-3">Key Contacts</h2>
						<div className="space-y-4">
							{people.map((p) => (
								<div key={p.email} className="">
									<p className="text-sm font-semibold">{p.name} <span className="text-muted-foreground font-normal">— {p.role}</span></p>
									<p className="text-sm text-muted-foreground">{p.phone} • {p.email}</p>
								</div>
							))}
						</div>
					</div>
				</div>

			</div>
		</main>
		<Footer />
	</>
);

export default ContactUs;
