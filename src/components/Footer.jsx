import LogoGitHub from './LogoGitHub.jsx';
import LogoLinkedIn from './LogoLinkedIn.jsx';

function Footer() {
    return (
        <footer className='flex justify-around sticky top-[100vh] m-2 p-4 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-md shadow-2xl border-2 border-gray-800'>
            <p className='text-center inline-block'>Desarrollado por <strong> Angel Martin Alcaraz</strong></p>

            <a className='m-auto w-8 h-8' href='https://github.com/MartinAlcaraz'>
                <LogoGitHub />
            </a>
            <a className='m-auto w-8 ' href=''>
                <LogoLinkedIn />
            </a>


        </footer>
    )
}
export default Footer;