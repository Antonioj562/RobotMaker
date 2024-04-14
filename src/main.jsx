import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Layout from './routes/Layout.jsx'
import CreateBot from './routes/CreateBot.jsx'
import AllBots from './routes/AllBots.jsx'
import UpdateBot from './routes/UpdateBot.jsx'
import ViewBot from './routes/ViewBot.jsx'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index={true} element={<App />}/>
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
        <Route index={false} path="/CreateBot/" element={<CreateBot />}/>
        <Route index={false} path="/AllBots" element={<AllBots />}/>
        <Route index={false} path="/ViewBot/:BotId" element={<ViewBot />}/>
          <Route index={false} path="/UpdateBot/:BotId" element={<UpdateBot />}/>
        </Route>

      
        

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
