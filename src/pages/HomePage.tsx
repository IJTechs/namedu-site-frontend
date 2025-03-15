import News from '@/components/pages/home/NewsSection';
import RegioanalAdministaration from '@/components/pages/home/RegioanalAdministarationSection';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <News />
      <RegioanalAdministaration />
    </div>
  );
};

export default HomePage;
