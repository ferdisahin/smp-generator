export default function Textarea(props) {
    return (
        <div className="w-full mb-5">
            <label className="block text-sm text-white/50 mb-2" htmlFor={props.id}>{props.label}</label>
            <textarea id={props.id} className="w-full h-32 resize-none bg-white/10 outline-none p-2 rounded text-white/75" value={props.value} onChange={props.onChange} />
        </div>
    )
}