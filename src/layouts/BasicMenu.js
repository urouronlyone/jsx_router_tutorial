import { Outlet } from 'react-router-dom';

const BasicMenu = () => {
  return (
    <div>
        <header style={{ background: 'lightgray', padding: 16, fonrSize: 24 }}>
            Header
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  );
};

export default BasicMenu