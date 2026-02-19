import SectionHeading from './SectionHeading';
import ContactForm from './ContactForm'
import Container from './Container'
function Contact() {
  return (
    <div id='contact' className="py-8">
      <SectionHeading heading="Contact Me" paragraph="Have a project in mind? Let's collaborate and bring your ideas to life"/>
    <Container>
      <ContactForm />
    </Container>
    </div>
  )
}

export default Contact