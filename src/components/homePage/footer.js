import React from "react";
import { MailOutlined} from '@ant-design/icons';
// import { MdArrowRight} from "react-icons/md";
import { Button, Form, Input } from 'antd';


const Footer = () => {
  const [form] = Form.useForm();

  // To disable submit button at the beginning.
 
  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  return (
    <div class="grid bg-black py-20 justify-around">

    <div className="lgl:mx-40 xs:mx-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-20">
      <div class="flex-auto w-64 ">
        
      <h3 className="text-white text-2xl my-2 ">CITRIOT SOLUTIONS PRIVATE LTD.</h3>
              <p className="text-[#b4aca8] text-sm">
                #801 ,Prestige meridian1<br/>
                MG Road Bangalore-560001<br/>
                India <br/>
                <br/>
                <strong>Phone:</strong>+91 9632109317<br/>
                <strong>Email:</strong> info@citriot.com<br/>
              </p>

      </div>

      <div class="flex-auto w-64 ">
      <h4 className="text-white text-2xl my-2 ">Useful Links</h4>
            <ul>
              <li className=" my-2"> 
                <a class="group text-[#b4aca8] transition-all duration-300 ease-in-out hover:text-white" href="#">
                  <span className="text-designColor font-extrabold"> &#8827;</span>
                  <span class="ml-2 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Home
                  </span>
                </a>
              </li>
              <li className=" my-2"> 
                <a class="group text-[#b4aca8] transition-all duration-300 ease-in-out hover:text-white" href="#">
                  <span className="text-designColor font-extrabold"> &#8827;</span>
                  <span class="ml-2 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    About Us
                  </span>
                </a>
              </li>
              <li className=" my-2"> 
                <a class="group text-[#b4aca8] transition-all duration-300 ease-in-out hover:text-white" href="#">
                  <span className="text-designColor font-extrabold"> &#8827;</span>
                  <span class="ml-2 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Services
                  </span>
                </a>
              </li>
              <li className=" my-2"> 
                <a class="group text-[#b4aca8] transition-all duration-300 ease-in-out hover:text-white" href="#">
                  <span className="text-designColor font-extrabold"> &#8827;</span>
                  <span class="ml-2 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Terms of Services
                  </span>
                </a>
              </li>
              <li className=" my-2"> 
                <a class="group text-[#b4aca8] transition-all duration-300 ease-in-out hover:text-white" href="#">
                  <span className="text-designColor font-extrabold"> &#8827;</span>
                  <span class="ml-2 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Privacy Policy
                  </span>
                </a>
              </li>
            </ul>
      </div>

      <div class="flex-auto w-64 ">
      <h4 className="text-white text-2xl my-2">Our Services</h4>
            <ul>
            <li className=" my-2"> 
                <a class="group text-[#b4aca8] transition-all duration-300 ease-in-out hover:text-white" href="https://citriot.com">
                  <span className="text-designColor font-extrabold"> &#8827;</span>
                  <span class="ml-2 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Fire-Connect
                  </span>
                </a>
              </li>
              <li className=" my-2"> 
                <a class="group text-[#b4aca8] transition-all duration-300 ease-in-out hover:text-white" href="https://citriot.com">
                  <span className="text-designColor font-extrabold"> &#8827;</span>
                  <span class="ml-2 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Intellisense
                  </span>
                </a>
              </li>
              <li className=" my-2"> 
                <a class="group text-[#b4aca8] transition-all duration-300 ease-in-out hover:text-white" href="https://citriot.com">
                  <span className="text-designColor font-extrabold"> &#8827;</span>
                  <span class="ml-2 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Machine Vision
                  </span>
                </a>
              </li>
            </ul>
      </div>
      
      <div class="flex-auto w-64">
      <h4 className="text-white text-2xl my-2 ">Join Our Newsletter</h4>
        <Input className="my-4 " prefix={<MailOutlined />} placeholder="Email" />
        <a href="#_" class="relative inline-flex items-center justify-start inline-block px-4 py-1 overflow-hidden font-medium transition-all bg-designColor rounded-xl hover:bg-white group">
<span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-designColor">Subscribe</span>
</a>
      </div>

    </div>
  </div>

  );
};

export default Footer;