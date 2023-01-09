import { useRef, useState } from "react";
import Input from "./components/Input";
import Textarea from "./components/Textarea";
import Tweet from "./components/Tweet";

import html2canvas from "html2canvas";
import Footer from "./components/Footer";

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
		const canvas = await html2canvas(tweetRef.current);
		const image = canvas.toDataURL("image/png");

		downloadImage(image, 'tweet');
	}

	const downloadImage = (blob, fileName) => {
		const fakeLink = window.document.createElement("a");
		fakeLink.style = "display:none;";
		fakeLink.download = fileName;

		fakeLink.href = blob;

		document.body.appendChild(fakeLink);
		fakeLink.click();
		document.body.removeChild(fakeLink);

		fakeLink.remove();
	};


	return (
		<div className="flex h-full">
			<div className="bg-slate-900 w-96 flex flex-col p-10 items-start">
				<h1 className="text-white font-bold text-xl relative inline-block">Tweet Generator <span className="absolute -top-4 right-0 text-xs bg-red-500 text-white font-normal px-2 rounded">beta</span></h1>

				<form className="mt-10 w-full" onSubmit={handleSubmit}>
					<Input className="p-2" type="file" id="avatar" label="Avatar" onChange={handleAvatar} />
					<Input id="fullname" label="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
					<Input id="username" label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
					<Textarea id="tweet" label="Tweet" value={tweet} onChange={(e) => setTweet(e.target.value)} />
					<Input id="like" label="Like" value={like} onChange={(e) => setLike(e.target.value)} maxLength="3" />
					<button className="block text-center leading-10 bg-yellow-300 hover:bg-yellow-400 text-black/50 w-full h-10 rounded text-sm font-semibold transition-all" onClick={downloadTweet}>Download as Image</button>
				</form>
			</div>

			<div className="flex-1 flex flex-col h-full w-full">
				<div className="flex justify-center items-center flex-1">
					<Tweet username={username} fullname={fullname} tweet={tweet} like={like} avatar={avatar} ref={tweetRef} />
				</div>

				<Footer />
			</div>
		</div>
	);
}

export default App;
