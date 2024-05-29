import {useEffect, useState} from "react";

function Typewriter({
                        // eslint-disable-next-line react/prop-types
                        text,
                        // eslint-disable-next-line react/prop-types
                        typingSpeed = 100,
                        // eslint-disable-next-line react/prop-types
                        deletingSpeed = 50
                    }){
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if(!isDeleting){
                // eslint-disable-next-line react/prop-types
                if(displayedText.length < text[index].length){
                    setDisplayedText(
                        // eslint-disable-next-line react/prop-types
                        displayedText + text[index].charAt(displayedText.length)
                    )


                }
                else{
                    setIsDeleting(true);
                }

            }
            else {
                if (displayedText.length > 0) {
                    setDisplayedText(
                        displayedText.slice(0, -1)
                    )
                } else {
                    setIsDeleting(false);
                    // eslint-disable-next-line react/prop-types
                    setIndex((index + 1) % text.length);
                }
            }
        }

        const timeout = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);

    }, [displayedText, isDeleting, index, text, typingSpeed, deletingSpeed]);

    return (
        <div className="typing-effect">
            {displayedText}
            <span className="caret">|</span>
        </div>
    )
}

export default Typewriter;