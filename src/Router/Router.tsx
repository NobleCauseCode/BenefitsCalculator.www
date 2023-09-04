import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { SiteTemplate } from '../Views/SiteTemplate';
import { Home } from '../Views/Home';
import { loader as homeLoader } from '../Api/Employees.Api';

const siteRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SiteTemplate />}>
      <Route index loader={homeLoader} element={<Home />} />
    </Route>
  )
);

export default siteRouter;
