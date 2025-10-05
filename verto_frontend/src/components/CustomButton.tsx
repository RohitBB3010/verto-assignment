export default function CustomButton({buttonText, containerClass, onClick} : {
    buttonText : string, containerClass? : string, onClick : () => void
}){
    return(
        <button className={`custom-button bg-[var(--color-primary)] py-2 px-2 rounded-sm text-white cursor-pointer ${containerClass}`} onClick={onClick}>
            {buttonText}
        </button>
    );
}