import React, { useState, useEffect } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMusic, faCameraRetro, faPaintBrush, faTv, faCode, faChartBar, faAnchor, faAddressCard, faAddressBook, faCamera, faArchive, faBalanceScale, faAlignJustify, faCalendar, faCoffee, faSearch, faCertificate, faShoppingCart, faCheckCircle, faBook, faClock, faChevronLeft, faChevronRight, faStar, faStarHalf, faFilm, faHeart, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { RotateSpinner } from 'react-spinners-kit';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { homeRoutes, adminRoutes } from './routes';
import PageNotFound from './pages/PageNotFound'
import HomeTemplate from './templates/HomeTemplate';
import FormDangNhap from './Forms/FormDangNhap';
import FormDangKy from './Forms/FormDangKy'
import AdminTemplate from './templates/AdminTemplate';

library.add(faLock, faUser, faHeart, fab, faMusic, faCameraRetro, faPaintBrush, faTv, faCode, faChartBar, faAnchor, faAddressCard, faAddressBook, faCamera, faArchive, faBalanceScale, faCalendar, faAlignJustify, faCoffee, faSearch, faCertificate, faShoppingCart, faBook, faCheckCircle, faClock, faChevronLeft, faChevronRight, faStar, faStarHalf, faFilm);

const showHomeMenu = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return <HomeTemplate key={index} path={item.path} exact={item.exact} Component={item.component} />
    })
  }
}

const showAdminMenu = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return <AdminTemplate key={index} path={item.path} exact={item.exact} Component={item.component} />
    })
  }
}

function App() {
  const [state, setState] = useState({ isLoading: true });

  useEffect(() => {
    setTimeout(() => {
      setState({
        isLoading: false
      })
    }, 500);
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        {state.isLoading ? (<RotateSpinner
          size={100}
          color="#ec5252"
          loading={state.isLoading}
        />) : (
            <Switch>
              {showHomeMenu(homeRoutes)}
              <Route path="/sign-in" exact={true} component={FormDangNhap} />
              <Route path="/sign-up" exact={true} component={FormDangKy} />
              {showAdminMenu(adminRoutes)}
              <Route path="" component={PageNotFound} />
            </Switch>
          )}
      </div>
    </BrowserRouter>
  );
}

export default App;
