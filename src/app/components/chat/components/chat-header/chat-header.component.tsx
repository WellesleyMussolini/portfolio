import { FaCircleUser } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io"

export const ChatHeader = ({handleCloseChatBot}: {handleCloseChatBot: () => void}) => {
 return <div className="flex items-center justify-between px-5 w-full h-20 bg-secondary sm:rounded-t-md"> 
        <div className="flex gap-3 items-center flex-row">
            <FaCircleUser className="text-white text-4xl" />
            <div className="flex flex-col text-white break-words">
                <p className="font-bold text-sm sm:text-base">{"Wellesley's Bot"}</p>
                <p className="text-xs sm:text-sm font-semibold">Ask me a question</p>
            </div>
        </div>
        <IoMdClose className="text-white text-xl sm:text-2xl cursor-pointer" onClick={handleCloseChatBot} />
    </div>
};