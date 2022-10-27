import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import MenuFootball from "./components/MenuFootball";
import Home from "./components/Home";
import Bets from "./components/Bets";
import CreateBet from "./components/CreateBet";
import Teams from "./components/Teams";
import Players from "./components/Players";
import DetailsPlayer from "./components/DetailsPlayer";

export default class Router extends Component {
  render() {
    function GetTeams() {
      var { num } = useParams();
      return <Teams number={num} />;
    }
    function GetPlayers() {
      var { num } = useParams();
      return <Players number={num} />;
    }
    function GetDetailsPlayer() {
      var { num } = useParams();
      return <DetailsPlayer number={num} />;
    }
    // function DetailsDeptElement() {
    //   var {num, name, loc} = useParams();
    //   return <DetailsDept number={num} name={name} location={loc}/>
    // }
    // function DeleteDeptElement() {
    //   var {num} = useParams();
    //   return <DeleteDept number={num}/>
    // }
    // function UpdateDeptElement() {
    //   var {num} = useParams();
    //   return <UpdateDept number={num}/>
    // }
    // function EmployersElement() {
    //   var {num} = useParams();
    //   return <Employers number={num}/>
    // }
    // function DetailsEmployElement() {
    //   var {num} = useParams();
    //   return <DetailsEmployers number={num}/>
    // }
    return (
      <BrowserRouter>
        <MenuFootball />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bets" element={<Bets />} />
          <Route path="/bets/create" element={<CreateBet />} />
          <Route path="/teams/:num" element={<GetTeams />} />
          <Route path="/teams/players/:num" element={<GetPlayers />} />
          <Route path="/teams/players/details/:num" element={<GetDetailsPlayer />} />
          {/* <Route path="/create" element={<CreateDepts/>}/>
          <Route path="/details/:num/:name/:loc" element={<DetailsDeptElement/>}/>
          <Route path="/delete/:num" element={<DeleteDeptElement/>}/>
          <Route path="/update/:num" element={<UpdateDeptElement/>}/>
          <Route path="/employers/:num" element={<EmployersElement/>}/>
          <Route path="/employers/details/:num" element={<DetailsEmployElement/>}/> */}
        </Routes>
      </BrowserRouter>
    );
  }
}
