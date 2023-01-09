import { useRef, useState } from "react";
import Tweet from "./components/Tweet";

import html2canvas from "html2canvas";
import Footer from "./components/Footer";

import Sidebar from "./components/Sidebar";


function App() {
	const [username, setUsername] = useState("ferdiisahin")
	const [fullname, setFullname] = useState("Ferdi Sahin")
	const [tweet, setTweet] = useState("If We Have To Fight, We Fight. If We Have To Run, We’ll Run. If We Must Die, We’ll Die. But … We’ll Stay Free. - Arthur Morgan")
	const [like, setLike] = useState(150)
	const [avatar, setAvatar] = useState()

	const tweetRef = useRef()

	const handleSubmit = e => {
		e.preventDefault()
	}

	const handleAvatar = e => {
		if (e.target.files && e.target.files.length > 0) {
			setAvatar(e.target.files[0])
		}
	}

	const downloadTweet = async () => {
		const canvas = await html2canvas(tweetRef.current)
		const image = canvas.toDataURL("image/png")

		downloadImage(image, 'tweet')
	}

	const downloadImage = (blob, fileName) => {
		const fakeLink = window.document.createElement("a")
		fakeLink.style = "display:none;"
		fakeLink.download = fileName
		fakeLink.href = blob
		document.body.appendChild(fakeLink)
		fakeLink.click()
		document.body.removeChild(fakeLink)
		fakeLink.remove()
	};


	return (
		<div className="lg:flex h-full">
			<Sidebar
				handleSubmit={handleSubmit}
				handleAvatar={handleAvatar}
				fullname={fullname}
				setFullname={setFullname}
				username={username}
				setUsername={setUsername}
				tweet={tweet}
				setTweet={setTweet}
				like={like}
				setLike={setLike}
				downloadTweet={downloadTweet}
			/>

			<div className="lg:flex-1 flex flex-col lg:h-full w-full my-5 lg:my-0 lg:mx-5">
				<div className="flex justify-center items-center flex-1 px-5 lg:px-0">
					<Tweet username={username} fullname={fullname} tweet={tweet} like={like} avatar={avatar} ref={tweetRef} />
				</div>

				<Footer />
			</div>
		</div>
	);
}

export default App;
