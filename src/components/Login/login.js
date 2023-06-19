import { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Breadcrumb, message } from 'antd';
// import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useAuthStore } from '../../store/auth'
import { login } from '../../utils/auth';


const Login = () => {
// const history = useHistory(); // Create a history object from react-router-dom
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/adminHome');
        }
    }, []);


	const moveToRegister = () => {
		navigate('/register');
	};

	const moveToHome = () => {
		navigate('/home');
	};


	const onFinish = async(values) => {
		try {
			const { data, error } = await login(values.username, values.password);
			console.log("🚀 ~ file: login.js:36 ~ onFinish ~ data:", data)
			if (error) {
				return message.error(error);
		}
			message.success("Login Successfully");
			setLoading(false);
			navigate('/adminHome');
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




return (
	<div className=" min-h-screen w-100%  place-items-start p-8 wow ">
		<Breadcrumb className='text-lg'
			items={[
			{
				title: <a onClick={moveToHome}>Home</a>,
			},
			{
				title: 'Login',
			},
			]}
			/>
			<div className='grid grid-cols-1  place-items-center  lg:grid-cols-2 lg:mx-72'>
		<div className='h-40 w-40 py-8 lg:h-auto lg:w-auto lg:pr-20'>
			<img src='/logo.png' alt='Citriot'/>
		</div>
		<div className="min-h-screen min-w-full py-6 flex flex-col justify-center sm:py-12">
			<div className="relative py-3 sm:max-w-xl sm:mx-auto">
			<div className="absolute inset-0 bg-[#fff] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
				<div className="relative px-4 py-10 bg-[#20BDFF] shadow-lg sm:rounded-3xl sm:p-20">
					<div className="max-w-md mx-auto">
						<div>
						<h1 className="text-2xl font-semibold font-Ubuntu tracking-wider text-center">Login</h1>
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
												<Button  htmlType='submit' type="login" block loading={loading}>
													Login
												</Button>
											</Form.Item>
										</Form>
										</div>
							<div className="relative">
								<p className='text-sm text-center text-black'>Don't have an account?    
								<a onClick={moveToRegister} className="text-[#fff] font-bold ml-2 hover:underline">Sign Up</a></p>
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




export default Login;
