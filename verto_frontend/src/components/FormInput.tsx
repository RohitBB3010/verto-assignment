export default function FormInput({
    register,
    placeHolder,
    fieldName,
    type = "text",
    rules,
    error
} : any){
    return(
        <div className="form-input flex flex-col items-start w-[85%] my-2">
            <input type={type} {...register(fieldName, rules)} placeholder={placeHolder} className="w-full bg-gray-200 h-8 py-2 px-2 rounded-sm border-none focus:outline-none focus:ring-1 focus:ring-blue-500"></input>
            {error && <div className="text-sm text-red-600"> {error.message} </div>}
        </div>
    );
}