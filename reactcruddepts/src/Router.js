import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Depts from './components/Depts';
import CreateDepts from './components/CreateDepts';
import MenuDepts from './components/MenuDepts';
import DetailsDept from './components/DetailsDept';
import DeleteDept from './components/DeleteDept';
import UpdateDept from './components/UpdateDept';
import Employers from './components/Employers';
import DetailsEmployers from './components/DetailsEmployers';

export default class Router extends Component {
  render() {
    function DetailsDeptElement() {
      var {num, name, loc} = useParams();
      return <DetailsDept number={num} name={name} location={loc}/>
    }
    function DeleteDeptElement() {
      var {num} = useParams();
      return <DeleteDept number={num}/>
    }
    function UpdateDeptElement() {
      var {num} = useParams();
      return <UpdateDept number={num}/>
    }
    function EmployersElement() {
      var {num} = useParams();
      return <Employers number={num}/>
    }
    function DetailsEmployElement() {
      var {num} = useParams();
      return <DetailsEmployers number={num}/>
    }
    return (
      <BrowserRouter>
        <MenuDepts/>
        <Routes>
          <Route path="/" element={<Depts/>}/>
          <Route path="/create" element={<CreateDepts/>}/>
          <Route path="/details/:num/:name/:loc" element={<DetailsDeptElement/>}/>
          <Route path="/delete/:num" element={<DeleteDeptElement/>}/>
          <Route path="/update/:num" element={<UpdateDeptElement/>}/>
          <Route path="/employers/:num" element={<EmployersElement/>}/>
          <Route path="/employers/details/:num" element={<DetailsEmployElement/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
