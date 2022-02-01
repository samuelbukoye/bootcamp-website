import Boxes from '../components/Boxes';
import LearnSections from '../components/LearnSections';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Showcase from '../components/Showcase';
import QuestionAccordion from '../components/QuestionAccordion';
import Instructors from '../components/Instructors';
import ContactEtMap from '../components/ContactEtMap';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Newsletter />
      <Boxes />
      <LearnSections />
      <QuestionAccordion />
      <Instructors />
      {/* <ContactEtMap /> */}
      <Footer />
      <Modal />
    </div>
  );
}

export default LandingPage;
