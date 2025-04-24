import React, { useEffect } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Footer from "./Component/Footer";
import { useApistore } from "./Zustand";
import Application from "./Component/Application";
import Findjob from "./Component/Findjob";


function Home() {
  const { output, fetchData } = useApistore();

  useEffect(() => {
    fetchData(); // Only runs once on mount
  }, []);

  console.log("Output:", output);

  return (
    <div>
      <Navbar />
      <Hero />
      <Findjob />
      <Footer />
      <Application />

      {/* {
        Array.isArray(output) && output.map((item, index) => (
          <Jobs
            key={item.id || index}
            create={item.date_created}
            country={item.countries_derived}
            post={item.date_posted}
            validthrough={item.date_validthrough}
          />
        ))
      } */}
    </div>
  );
}

export default Home;
