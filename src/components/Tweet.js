import { forwardRef } from "react"
import AvatarImg from "../avatar.jpg"

export function TwitterIcon(props) {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M28.75 3.75C27.553 4.59434 26.2276 5.24013 24.825 5.6625C24.0722 4.79688 23.0717 4.18336 21.9588 3.9049C20.8459 3.62645 19.6744 3.69649 18.6026 4.10556C17.5308 4.51464 16.6106 5.243 15.9662 6.19214C15.3219 7.14129 14.9846 8.26542 15 9.4125V10.6625C12.8033 10.7195 10.6266 10.2323 8.66376 9.2443C6.70093 8.25635 5.0129 6.79829 3.75 5C3.75 5 -1.25 16.25 10 21.25C7.42566 22.9975 4.35895 23.8737 1.25 23.75C12.5 30 26.25 23.75 26.25 9.375C26.2488 9.02681 26.2154 8.67949 26.15 8.3375C27.4258 7.07936 28.326 5.49089 28.75 3.75Z" fill="#1DA1F2" />
        </svg>
    )
}

export function LikeIcon(props) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61V4.61Z" stroke="white" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function Tweet(props, ref) {
    return (
        <div className="bg-[#243447] w-[600px] rounded-[10px] p-8 text-white select-none tweet" ref={ref}>
            <div className="flex items-center gap-5">
                <div>
                    <img src={props.avatar ? URL.createObjectURL(props.avatar) : AvatarImg} className="w-[50px] h-[50px] rounded-full object-cover" alt={props.username} />
                </div>
                <div>
                    <div className="font-bold text-lg">{props.fullname ? props.fullname : 'Full Name'}</div>
                    <div className="text-gray-500">@{props.username ? props.username : 'username'}</div>
                </div>
                <div className="ml-auto">
                    <TwitterIcon />
                </div>
            </div>

            <div className="text-white my-4 leading-8">
                {props.tweet ? props.tweet : 'Tweet is here!'}
            </div>

            <div className="flex items-center">
                <LikeIcon />
                <span className="text-white/60 ml-3">{props.like ? props.like : 29}</span>
            </div>
        </div>
    )
}

export default forwardRef(Tweet)