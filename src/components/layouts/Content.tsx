import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <main className="min-h-screen container">
      <Outlet />
    </main>
  );
};

export default Content;
