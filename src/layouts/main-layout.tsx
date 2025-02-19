import Content from '@/components/layouts/Content';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import ScrollToTopButton from '@/components/shared/Scroll-top-button';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;
