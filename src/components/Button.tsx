type Props = React.ComponentProps<"button"> & {
    isLoading?: boolean
}

export const Button = ({ children, isLoading, type = "button", ...rest }: Props) => {
    return (
        <button
            className="flex items-center 
            justify-center bg-green-100 rounded-lg text-white cursor-pointer 
            hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-progress h-12"
            disabled={isLoading}
            type={type}
            {...rest}
        >
            
            {children}
        </button>
    );
}