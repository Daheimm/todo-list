import  React  from 'react';
import {BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import MasterLayout from '../src/layouts/ToDoList/MasterLayout';
import Login from '../src/component/auth/login';
import Registration from '../src/component/auth/registration';
import PrivateRoute from '../src/routes/PrivateRoute';
import NotFound  from '../src/component/NotFound';

function App() {
   return ( 
   <div className="App">
     
        <Router>
                <Routes>
                    <Route exact  path="/todo-list" element={ <PrivateRoute> <MasterLayout/></PrivateRoute>}/>
                    <Route exact  path="login" element={<Login/>}/>
                    <Route exact  path="registration" element={<Registration/>}/>
                    <Route exact  path="/" element={<Navigate to="login" replace />}/>
                    <Route exact path="*" element={<NotFound/>}/>
                </Routes>
             </Router>
    </div>
   );
};

export default App;
