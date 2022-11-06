import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaReddit } from 'react-icons/fa';
import {
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";

export default function SharePopup(props) {
	const { toggleShare } = props; 
	const url = window.location.href;
	const copyUrl = () => {
		navigator.clipboard.writeText(url);
	}
	return (
		<div className="sharepopup">
			<div className="cover"></div>
			<div className="inner">
				<div className="popup_header">
					<h2>Share Video</h2>
					<button onClick={toggleShare}>
						<AiOutlineClose size={25}/>
					</button>
				</div>
				<div className="popup_body">
					<div className="social">
						<div className="buttons">
							<FacebookShareButton url={url} className="facebook">
								<FaFacebookF size={20} />
							</FacebookShareButton>
							<RedditShareButton url={url} className="reddit">
								<FaReddit size={20} />
							</RedditShareButton>
							<TelegramShareButton url={url} className="telegram">
								<FaTelegramPlane size={20} />
							</TelegramShareButton>
							<TwitterShareButton url={url} className="twitter">
								<FaTwitter size={20} />
							</TwitterShareButton>
						</div>
					</div>
					<div className="link">
						<input spellCheck="false" type="url" value={url} />
						<label>Link</label>
					</div>
					<button className="copy" onClick={copyUrl}>
						Copy
					</button>
				</div>
			</div>
		</div>
	)
}