export default function Input(props) {
    return (
        <div className="w-full mb-5">
            <label className="block text-sm text-white/50 mb-2" htmlFor={props.id}>{props.label}</label>
            <input type={props.type ? props.type : "text"} id={props.id} className={props.className + ` w-full h-10 bg-white/10 outline-none px-2 rounded text-white/75`} value={props.value} onChange={props.onChange} maxLength={props.maxLength} />
        </div>
    )
}