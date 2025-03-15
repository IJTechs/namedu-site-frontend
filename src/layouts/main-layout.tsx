import Content from '@/components/layouts/Content';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import Partners from '@/components/pages/home/PartnersSection';
import Contact from '@/components/shared/contact-form/Contact';
import ScrollToTopButton from '@/components/shared/ScrollTopButton';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Content />
      <div className="container">
        <Partners />
        <Contact />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;
