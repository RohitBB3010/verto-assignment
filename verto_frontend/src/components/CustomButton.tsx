export default function CustomButton({buttonText, containerClass, onClick, isLoading} : {
    buttonText : string, containerClass? : string, onClick : () => void, isLoading? :boolean
}){
    return(
        <button className={`custom-button ${isLoading ? 'bg-gray-800' : 'bg-[var(--color-primary)]'} py-2 px-4 rounded-sm text-white cursor-pointer ${containerClass}`} onClick={onClick}>
            {buttonText}
        </button>
    );
}