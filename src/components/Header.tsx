import logoSvg from '../assets/logo.svg'
import logoutSvg from '../assets/logout.svg'

export const Header = () => {
    return (
        <header className='w-full flex justify-between'>
            <img src={logoSvg} alt="Logo" className='my-8' />

            <div className='flex items-center gap-3'>
                <span className='text-sm font-semibold text-gray-200'>
                    Olá, Vinícius
                </span>
                <img
                    src={logoutSvg}
                    alt="Ícone de Sair"
                    className='my-8 cursor-pointer hover:opacity-75 transition ease-linear'
                />
            </div>
        </header>
    )
}