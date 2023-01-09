import Input from "../components/Input";
import Textarea from "../components/Textarea";

function Sidebar(props) {
    return (
        <div className="bg-slate-700 lg:w-96 flex flex-col p-5 md:p-10 items-start">
            <h1 className="text-white font-bold text-xl relative text-center w-full">Tweet Generator</h1>

            <form className="mt-10 w-full flex-1 flex flex-col justify-center" onSubmit={props.handleSubmit}>
                <Input className="p-2" type="file" id="avatar" label="Avatar" onChange={props.handleAvatar} />
                <Input id="fullname" label="Full Name" value={props.fullname} onChange={(e) => props.setFullname(e.target.value)} maxLength="40" />
                <Input id="username" label="Username" value={props.username} onChange={(e) => props.setUsername(e.target.value)} maxLength="20" />
                <Textarea id="tweet" label="Tweet" value={props.tweet} onChange={(e) => props.setTweet(e.target.value)} />
                <Input id="like" label="Like" value={props.like} onChange={(e) => props.setLike(e.target.value)} maxLength="3" />
                <button className="block text-center leading-10 bg-yellow-300 hover:bg-yellow-400 text-black/50 w-full h-10 rounded text-sm font-semibold transition-all" onClick={props.downloadTweet}>Download as Image</button>
            </form>
        </div>
    )
}

export default Sidebar