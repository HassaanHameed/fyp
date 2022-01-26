import React from "react";
import AssistantSetup from "./components/assistantSetup/AssistantSetup";
import BlogPosts from "./components/blogPosts/BlogPosts";
import Category from "./components/category/Category";
import Dashboard from "./components/dashboard/Dashboard";
import Entrepreneurs from "./components/entrepreneurs/Entrepreneurs";
import Featured from "./components/featured/Featured";
import Followers from "./components/followers/Followers";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import PricingPlan from "./components/pricingPlan/PricingPlan";
import TopFreelancers from "./components/topFreelancers/TopFreelancers";

const App = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <Category />
      <Featured />
      <AssistantSetup />
      <Entrepreneurs />
      <TopFreelancers />
      <PricingPlan />
      <BlogPosts />
      <Followers />
      <Footer />
    </>
  );
};

export default App;
