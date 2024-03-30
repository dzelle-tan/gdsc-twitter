export default function ApplicationLogo(className = '', props) {
    return (
        <img src='/images/logo.webp' alt='logo'
        className={'w-14 h-5' + className}
        />
    );
}
