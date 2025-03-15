import Documents from '@/components/pages/home/DocumentsSection';
import Executives from '@/components/pages/home/ExecutivesSection';
import Sections from '@/components/pages/home/SectionsSection';
import TasksAndFunctions from '@/components/pages/home/TasksFunctionsSection';

const AboutDepartmentPage = () => {
  return (
    <>
      <Executives />
      <TasksAndFunctions />
      <Sections />
      <Documents />
    </>
  );
};

export default AboutDepartmentPage;
