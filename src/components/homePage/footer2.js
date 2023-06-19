import React from "react";
import { MailOutlined} from '@ant-design/icons';
// import { MdArrowRight} from "react-icons/md";
import { Button, Form, Input } from 'antd';

import { FaInstagramSquare, FaLinkedin, FaTwitter, FaSkype, FaFacebookSquare } from "react-icons/fa";
import { RiTwitterFill,RiFacebookFill,RiInstagramLine } from "react-icons/ri";
import { AiFillInstagram} from "react-icons/ai";

const FooterTwo = () => {

  return (
    <div class="grid bg-[#14100f] justify-around py-8">

    <div className="lgl:mx-40 xs:mx-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
      <div class="flex-auto ">
     
      <div className="text-[#b4aca8] text-sm">
          &copy; Copyright <strong><span>Citriot Solutions Private LTD.</span></strong>. All Rights Reserved
        </div>

        <div className="text-[#b4aca8] text-sm my-2">
          Designed by  <a class="group text-designColor transition-all duration-300 ease-in-out" href="#">
  <span class="ml-2 bg-left-bottom bg-gradient-to-r from-designColor to-designColor bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
    Citriot
  </span>
</a>
        </div>
      </div>

      <div class="flex justify-center my-4">

      <a href="#"><AiFillInstagram className="text-4xl bg-[#14100f] text-designColor mx-2 hover:scale-125"/></a>
      <a href="#"><FaLinkedin  className="text-4xl text-designColor mx-2 hover:scale-125"/></a>
      <a href="#"><FaSkype  className="text-4xl bg-[#14100f] text-designColor mx-2 hover:scale-125"/></a>
      <a href="#"><RiTwitterFill  className="text-4xl bg-[#14100f] text-designColor mx-2 hover:scale-125"/></a>
      <a href="#"><RiFacebookFill  className="text-4xl text-designColor mx-2 hover:scale-125"/></a>
      
      
      
      
      </div>


    </div>
  </div>
    
  );
};

export default FooterTwo;