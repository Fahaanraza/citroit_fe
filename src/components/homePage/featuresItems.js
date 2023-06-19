import React from "react";

import Card from './layouts/card'

import { FaBriefcase,FaChartBar, FaDiagnoses} from "react-icons/fa";
import { MdSecurity} from "react-icons/md";
import { BsFillBinocularsFill} from "react-icons/bs";

import { GoChecklist } from "react-icons/go";
import Roll from 'react-reveal/Roll';

const featuresData = [

    {
  
      id: 1,
  
      icon: <FaBriefcase />,
  
      title: "Instant Alerts",
  
      des: "Effortlessly gain complete control over your machines. Experience enhanced peace of mind as anomaly alerts go beyond the dashboard display, keeping you informed in real-time.",
  
    },
  
    {
  
      id: 2,
  
      icon: <GoChecklist />,
  
      title: "Real-Time Monitoring",
  
      des: "Harness real-time machine monitoring with reduced data traffic using our sensor node embedded with WI-FI microprocessors, enabling efficient preprocessing of raw data.",
  
    },
  
    {
  
      id: 3,
  
      icon: <FaChartBar />,
  
      title: "Advanced Analytics",
  
      des: "Detects slightest deviations with the high-frequency bands of Fire-Connect solution, which promptly identifies abnormal vibrations as the initial symptoms of machine malfunction.",
  
    },

    {
  
      id: 4,
  
      icon: <BsFillBinocularsFill />,
  
      title: "Increase Equipment Reliability",
  
      des: "Fire-Connect: AI-driven innovation for effortless downtime prevention and machine efficiency measurement.",
  
    },

    {
  
      id: 5,
  
      icon: <MdSecurity />,
  
      title: "Scalability And Data Security",
  
      des: "Seamless calibration, secure data control: Our ML algorithms leverage a database of similar machine errors for reliable solutions.",
  
    },

    {
  
      id: 6,
  
      icon: <FaDiagnoses />,
  
      title: "Machine Diagnostics Made Simple",
  
      des: "3-minute installation for Fire-Connect sensor guarantees enhanced uptime and optimal machine/plant performance.",
  
    },
  
  ];

const FeaturesItems = () => {

  return (

    <section

      id="features"

      className="w-full py-20"

    >
      <div className="lgl:mx-40 xs:mx-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">

        {featuresData.map((item) => (

<Roll left>

  <Card item={item} key={item.id} />
</Roll>

        ))}

      </div>

    </section>

  );

};




export default FeaturesItems;