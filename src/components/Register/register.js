import { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Breadcrumb, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined, MailOutlined, ApartmentOutlined } from '@ant-design/icons';
import { register } from '../../utils/auth';
import CSRFToken from '../csrfToken/CSRFToken';
import { useAuthStore } from '../../store/auth'


const Register = () => {
	const navigate = useNavigate();
	// const [firstName, setFirstName] = useState('');
	// const [lastName, setLastName] = useState('');
	// const [userName, setUserName] = useState('');
	// const [email, setEmail] = useState('');
	// const [organisation, setOrganisation] = useState('');
	// const [password, setPassword] = useState('');
	// const [confirmPassword, setConfirmPassword] = useState('');
	const [loading, setLoading] = useState(false);
	// const isLoggedIn = useAuthStore((state) => state.isLoggedIn);



	const moveToLogin = () => {
		navigate('/login');
	};

	const moveToHome = () => {
		navigate('/home');
	};

	function ValidateEmail(mail) 
	{
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
		{
			return (true)
		} else {
			return (false)
		}
	}

	// useEffect(() => {
    //     if (isLoggedIn()) {
    //         navigate('/');
    //     }
    // }, []);


	const handleRegister = async(formData) => {
		setLoading(true);
		// if (firstName==='' || lastName==="" || userName==="" || email==="" || password==="" || confirmPassword==="" || organisation==="") {
		// 	message.error("Please fill all the Fields");
		// 	setLoading(false);
		// 	return
		// }
		// if (!ValidateEmail(email)) {
		// 	message.error("Please Enter valid Email id");
		// 	setLoading(false);
		// 	return
		// }
		if (formData.password !== formData.cnfPassword) {
			message.error("Password and confirm password should be same");
			setLoading(false);
			return
		}
		try {
			const res = await register(formData);
			message.success("User added Successfully");
			setLoading(false);
			navigate('/login');
		  } catch (err) {
			setLoading(false);
			if (err.response && err.response.data && err.response.data.msg) {
			  message.warning(err.response.data.msg);
			} else if (err.response && err.response.data && err.response.data.userName) {
				message.warning(err.response.data.userName[0]);
			  } else if (err.response && err.response.status === 401) {
			  message.error('User not authorised');
			} else {
			  message.error('Something went wrong');
			}
		  }
	};

	const formItemLayout = {
		input: {
		  xs: {
			span: 24,
		  },
		  sm: {
			span: 8,
		  },
		},
	  };

return (
	<div className=" min-h-screen place-items-start p-8 wow ">
	
		<Breadcrumb className='text-lg'
			items={[
			{
				title: <a onClick={moveToHome}>Home</a>,
			},
			{
				title: 'Register',
			},
			]}
		/>
		<div className='grid grid-cols-1  place-items-center  lg:grid-cols-2 lg:mx-72'>
		<div className='h-40 w-40 py-8 lg:h-auto lg:w-auto lg:pr-20'>
			<img src='/logo.png' alt='Citriot'/>
		</div>
		<div className="py-6 flex flex-col justify-center sm:py-12">
			<div className="relative py-3 sm:max-w-3xl sm:mx-auto">
				<div className="absolute inset-0 bg-[#1FA2FF] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
					<div className="relative px-16 py-10 bg-[#f3e8e8] shadow-lg sm:rounded-3xl text-center">
						<div className="max-w-md mx-auto">
							<div>
							<img src='/logo3.png' alt='Citriot' className='h-12 w-12 m-auto'/>
							<h3 className=" font-Ubuntu font-semibold tracking-wider mt-2">Welcome to Citriot</h3>
								{/* <h1 className="text-2xl font-semibold font-Ubuntu tracking-wider mt-4">Register</h1> */}
							</div>
							<div className="divide-y divide-gray-200">
									<div className="py-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
										<div className="relative">
										{/* <Input className='my-2 w-72' value={firstName} onBlur={e=>{setFirstName(e.target.value.trim())}} onChange={e=>{setFirstName(e.target.value.trim())}} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
										<Input className='my-2 w-72' value={lastName}  onBlur={e=>{setLastName(e.target.value.trim())}} onChange={e=>{setLastName(e.target.value.trim())}} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last Name" />
										<Input className='my-2 w-72' value={userName}  onBlur={e=>{setUserName(e.target.value.trim())}} onChange={e=>{setUserName(e.target.value.trim())}} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
										<Input className='my-2 w-72' value={organisation}  onBlur={e=>{setOrganisation(e.target.value.trim())}} onChange={e=>{setOrganisation(e.target.value.trim())}} prefix={<ApartmentOutlined className="site-form-item-icon" />} placeholder="Organisation" />
										<Input className='my-2 w-72' value={email}  onBlur={e=>{setEmail(e.target.value.trim())}} onChange={e=>{setEmail(e.target.value.trim())}} prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
										<Input
													prefix={<LockOutlined className="site-form-item-icon" />}
													type="password"
													value={password}
													onBlur={e=>{setPassword(e.target.value.trim())}}
													onChange={e=>{setPassword(e.target.value.trim())}}
													className='my-2 w-72'
													placeholder="Password"
												/>
										<Input
													prefix={<LockOutlined className="site-form-item-icon" />}
													type="password"
													value={confirmPassword}
													onBlur={e=>{setConfirmPassword(e.target.value.trim())}}
													onChange={e=>{setConfirmPassword(e.target.value.trim())}}
													className='my-2 w-72'
													placeholder="Confirm Password"
												/> */}

												<Form
													name="normal_login"
													{...formItemLayout}
													className="login-form"
													initialValues={{
														remember: true,
													}}
													onFinish={handleRegister}
													>
													<CSRFToken />

													<Form.Item
														name="firstName"
														rules={[
														{
															required: true,
															message: 'Please input your First Name!',
														},
														]}
													>
														<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
													</Form.Item>

													<Form.Item
														name="lastName"
														rules={[
														{
															required: true,
															message: 'Please input your Last Name!',
														},
														]}
													>
														<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last Name" />
													</Form.Item>

													<Form.Item
														name="userName"
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
														name="organisation"
														rules={[
														{
															required: true,
															message: 'Please input your organisation!',
														},
														]}
													>
														<Input prefix={<ApartmentOutlined className="site-form-item-icon" />} placeholder="organisation" />
													</Form.Item>

													<Form.Item
														name="email"
														rules={[
														{
															type: 'email',
															message: 'The input is not valid E-mail!',
														},
														{
															required: true,
															message: 'Please input your Email!',
														},
														]}
													>
														<Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
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
													
													<Form.Item
														name="cnfPassword"
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
														placeholder="Confirm Password"
														/>
													</Form.Item>

													<Form.Item>
														<Form.Item name="remember" valuePropName="checked" noStyle>
														<Checkbox>Remember me</Checkbox>
														</Form.Item>
													</Form.Item>

													<Form.Item>
													<Button loading={loading} type="register" className='my-2 w-64' htmlType='submit'>
														Register
													</Button>
													</Form.Item>
													</Form>
										{/* <Checkbox className='my-2 w-72'>Remember me</Checkbox> */}
										{/* <Button loading={loading} type="register" className='my-2 w-72' onClick={handleRegister}>
											Register
										</Button> */}
										</div>
										
										<div className="relative">
										<p className='text-sm text-center text-black'>Already have an account?
										{/* <Button type="link" styles={{}} className="text-blue-800 font-bold hover:text-orange-600" onClick={moveToLogin} >
										Sign In
										</Button> */}
										 <a onClick={moveToLogin} className="text-[#1FA2FF] font-bold ml-2 hover:underline">Sign In</a>
										 </p>
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


export default Register;





