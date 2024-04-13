import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Navbar from './routes/Navbar.jsx'
import CreateBot from './routes/CreateBot.jsx'
import AllBots from './routes/AllBots.jsx'
import UpdateBot from './routes/UpdateBot.jsx'
import ViewBot from './routes/ViewBot.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index={true} element={<App />}/>
        </Route>

        <Route path='/' element={<Navbar />}>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
                <Link className='errorPage' to="/">
                  Back to Home
                </Link>
              </main>
              }
            />
        </Route>

        <Route path='/' element={<Navbar />}>
          <Route index={false} path="/CreateBot/" element={<CreateBot />}/>
        </Route>

        <Route path='/' element={<Navbar />}>
            <Route index={false} path="/AllBots/" element={<AllBots />}/>
        </Route>

        <Route path='/' element={<Navbar />}>
          <Route index={false} path="/UpdateBot/" element={<UpdateBot />}/>
        </Route>

        <Route path='/' element={<Navbar />}>
          <Route index={false} path="/AllBots/:BotId" element={<ViewBot />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
