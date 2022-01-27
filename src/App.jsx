import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AssistantSetup from "./components/assistantSetup/AssistantSetup";
import BlogPage from "./components/blogPage/BlogPage";
import BlogPosts from "./components/blogPosts/BlogPosts";
import Category from "./components/category/Category";
import Chatting from "./components/chatting/Chatting";
import Dashboard from "./components/dashboard/Dashboard";
import Dispute from "./components/dispute/Dispute";
import Entrepreneurs from "./components/entrepreneurs/Entrepreneurs";
import Featured from "./components/featured/Featured";
import Followers from "./components/followers/Followers";
import Footer from "./components/footer/Footer";
import FreelancerList from "./components/freelancerList/FreelancerList";
import FreelanceDetails from "./components/freelaneDetails/FreelanceDetails";
import Header from "./components/header/Header";
import PostJobOnline from "./components/postJobOnline/PostJobOnline";
import PricingPlan from "./components/pricingPlan/PricingPlan";
import Profile from "./components/profile/Profile";
import ProjectAccept from "./components/projectAccept/ProjectAccept";
import ProjectBidding from "./components/projectBidding/ProjectBidding";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import TopFreelancers from "./components/topFreelancers/TopFreelancers";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Dashboard />
                <Category />
                <Featured />
                <AssistantSetup />
                <Entrepreneurs />
                <TopFreelancers />
                <PricingPlan />
                <BlogPosts />
              </>
            }
          />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/chatting" element={<Chatting />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/join" element={<SignUp />} />
          <Route exact path="/blogpage" element={<BlogPage />} />
          <Route
            exact
            path="/freelancedetails"
            element={<FreelanceDetails />}
          />
          <Route exact path="/projectaccept" element={<ProjectAccept />} />
          <Route exact path="/projectbidding" element={<ProjectBidding />} />
          <Route exact path="/freelancerlist" element={<FreelancerList />} />
          <Route exact path="/postjobonline" element={<PostJobOnline />} />
          <Route exact path="/dispute" element={<Dispute />} />
        </Routes>
        <Followers />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
