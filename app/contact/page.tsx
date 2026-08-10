import ContactFAQ from "@/components/ContactFAQ";
import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import Container from "@/components/Container";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <Container>
        <div className="grid grid-cols-2 gap-8 mb-20">
          <ContactForm />
          <div className="flex flex-col gap-8">
            <ContactInfo />
            <ContactFAQ />
          </div>
        </div>
      </Container>
    </>
  );
}
