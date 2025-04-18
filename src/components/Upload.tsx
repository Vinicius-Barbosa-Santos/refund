import uploadSvg from '../assets/upload.svg';

type Props = React.ComponentProps<"input"> & {
    filename?: string | null;
};

export const Upload = ({ filename = null, ...rest }: Props) => {
    return (
        <div>
            <legend className='uppercase text-xxs text-gray-200 mb-2'>Comprovante</legend>

            <div className='w-full h-12 flex items-center rounded-lg border border-gray-300 text-sm text-gray-100 bg-transparent outline-none'>
                <input type="file" id="upload" className='hidden' {...rest} />

                <span className='text-xs text-gray-100 flex-1 pl-4'>
                    {filename ?? "Selecione o aquivo"}
                </span>

                <label htmlFor="upload" className='flex h-12 px-4 items-center bg-green-100 rounded-lg text-white 
                    disabled::opacity-50 cursor-pointer hover:bg-green-200 transition ease-linear'>
                    <img src={uploadSvg} alt="ìcone de upload" className='w-6 h-6'/>
                </label>
            </div>
        </div>
    );
}
