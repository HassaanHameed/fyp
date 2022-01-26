import React from "react";
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
import TopFreelancers from "./components/topFreelancers/TopFreelancers";

const App = () => {
  return (
    <>
      <Header />
      {/* <Dashboard />
      <Category />
      <Featured />
      <AssistantSetup />
      <Entrepreneurs />
      <TopFreelancers />
      <PricingPlan />
      <BlogPosts /> */}
      {/* <Profile /> */}
      {/* <Chatting /> */}
      {/* <BlogPage /> */}
      {/* <FreelanceDetails /> */}
      {/* <ProjectAccept /> */}
      {/* <ProjectBidding /> */}
      {/* <FreelancerList /> */}
      {/* <PostJobOnline /> */}
      <Dispute />
      <Followers />
      <Footer />
    </>
  );
};

export default App;
