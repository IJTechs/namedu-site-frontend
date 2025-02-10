import Admission from '@/components/pages/home/admission-section';
import Documents from '@/components/pages/home/documents-section';
import EduInstitutions from '@/components/pages/home/eduInstitutions-section';
import Executives from '@/components/pages/home/executives-section';
import ManagementStructure from '@/components/pages/home/management-structureSection';
import News from '@/components/pages/home/news-section';
import Partners from '@/components/pages/home/partners-section';
import RegioanalAdministaration from '@/components/pages/home/regioanal-administaration-section';
import Sections from '@/components/pages/home/sections-section';
import TasksAndFunctions from '@/components/pages/home/tasks-functions-section';
import Contact from '@/components/shared/contact-form/Contact';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <News />
      <Executives />
      <Sections />
      <TasksAndFunctions />
      <ManagementStructure />
      <Documents />
      <EduInstitutions />
      <Admission />
      <RegioanalAdministaration />
      <Partners />
      <Contact />
    </div>
  );
};

export default HomePage;
