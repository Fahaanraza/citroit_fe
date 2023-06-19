import { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Breadcrumb } from 'antd';
// import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';


const AdminLogin = () => {
// const history = useHistory(); // Create a history object from react-router-dom
	const navigate = useNavigate();


	
	const moveToHome = () => {
		navigate('/home');
	};




	const handleRegister = () => {
			navigate("/register");
	};


	const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };




return (
	<div className=" min-h-screen place-items-start p-8 wow  ">
		<Breadcrumb className='text-lg'
			items={[
			{
				title: <a onClick={moveToHome}>Home</a>,
			},
			{
				title: 'Admin Login',
			},
			]}
			/>
			<div className='grid grid-cols-1  place-items-center  lg:grid-cols-2 lg:mx-72'>
		<div className='h-40 w-40 py-8 lg:h-auto lg:w-auto lg:py-20'>
			<img src='/logo.png' alt='Citriot'/>
		</div>
		<div className="py-6 flex flex-col justify-center sm:py-12">
			<div className="relative py-3 sm:max-w-xl sm:mx-auto">
			<div className="absolute inset-0 bg-[#fff] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
				<div className="relative px-4 py-10 bg-[#20BDFF] shadow-lg sm:rounded-3xl sm:p-20">
					<div className="max-w-md mx-auto">
						<div>
						<h1 className="text-2xl font-semibold font-Ubuntu tracking-wider">Admin Login</h1>
						</div>
						<div className="divide-y divide-gray-200">
						<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
							<div className="relative">
										<Form
											name="normal_login"
											className="login-form"
											initialValues={{
												remember: true,
											}}
											onFinish={onFinish}
										>
											<Form.Item
												name="username"
												rules={[
													{
														required: true,
														message: 'Please input your Username!',
													},
												]}
											>
												<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
											</Form.Item>
											<Form.Item
												name="password"
												rules={[
													{
														required: true,
														message: 'Please input your Password!',
													},
												]}
											>
												<Input
													prefix={<LockOutlined className="site-form-item-icon" />}
													type="password"
													placeholder="Password"
												/>
											</Form.Item>
											<Form.Item>
												<Form.Item name="remember" valuePropName="checked" noStyle>
													<Checkbox>Remember me</Checkbox>
												</Form.Item>
											</Form.Item>

											<Form.Item>
												<Button  type="login" block>
													Login
												</Button>
											</Form.Item>
										</Form>
										</div>
							
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
	</div>
);
};




export default AdminLogin;
