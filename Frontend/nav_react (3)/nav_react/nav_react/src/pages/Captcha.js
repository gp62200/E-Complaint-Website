import ReactCaptcha from 'modern-react-captcha';

import reloadIcon from './images/icons8-refresh.svg';

function Captcha () {
    const handleSuccess = () => alert('Captcha matched!');
	const handleFailure = () => alert('Captcha does not match');

	return (
		<div>
			<ReactCaptcha
				charset='ulns'
				length={6}
				color='white'
				bgColor='black'
				reload={true}
				reloadText='Reload Captcha'
				reloadIcon={reloadIcon}
				handleSuccess={handleSuccess}
				handleFailure={handleFailure} />
		</div>
	);
}
export default Captcha;