import Content from '@/components/layouts/content';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import ScrollToTopButton from '@/components/shared/scroll-top-button';

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
